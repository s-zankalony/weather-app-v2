const assert = require('node:assert/strict');
const http = require('node:http');
const { once } = require('node:events');
const { test } = require('node:test');
const proxyaddr = require('proxy-addr');

// GHSA-jqcg-44mw-7w3h: IPv4 clients must not match an unrelated IPv6 subnet.
test('proxy trust rejects IPv4 subnet confusion and preserves legitimate trust', () => {
  for (const subnet of ['::ffff:10.0.0.0/8', '::/1']) {
    assert.equal(proxyaddr.compile(subnet)('203.0.113.8'), false);
  }
  assert.equal(proxyaddr.compile('10.0.0.0/8')('10.1.2.3'), true);
  assert.equal(proxyaddr.compile('::ffff:10.0.0.0/104')('10.1.2.3'), true);
});

test('weather endpoint preserves success and upstream error handling', async (t) => {
  const upstream = http.createServer((req, res) => {
    const url = new URL(req.url, 'http://localhost');
    assert.equal(url.pathname, '/weather');
    assert.equal(url.searchParams.get('appid'), 'test-only');
    assert.equal(url.searchParams.get('units'), 'metric');
    const city = url.searchParams.get('q');
    res.setHeader('Content-Type', 'application/json');
    res.statusCode = city === 'missing' ? 404 : city === 'broken' ? 503 : 200;
    res.end(JSON.stringify(city === 'missing' ? { message: 'city not found' } : { name: city, main: { temp: 22 } }));
  }).listen(0, '127.0.0.1');
  await once(upstream, 'listening');
  t.after(() => upstream.close());
  process.env.NODE_API_URL = `http://127.0.0.1:${upstream.address().port}`;
  process.env.NODE_API_KEY = 'test-only';
  process.env.NO_PROXY = '127.0.0.1';
  const app = require('../app');
  assert.equal(app.get('trust proxy'), false);
  const server = app.listen(0, '127.0.0.1');
  await once(server, 'listening');
  t.after(() => server.close());
  const base = `http://127.0.0.1:${server.address().port}/api/v1/weather`;
  let response = await fetch(`${base}?city=Alexandria`);
  assert.equal(response.status, 200);
  assert.equal((await response.json()).name, 'Alexandria');
  response = await fetch(`${base}?city=missing`);
  assert.equal(response.status, 404);
  assert.deepEqual(await response.json(), { message: 'city not found' });
  response = await fetch(`${base}?city=broken`);
  assert.equal(response.status, 500);
  assert.equal(await response.text(), 'Internal server error');
});
