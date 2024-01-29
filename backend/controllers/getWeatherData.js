var dotenv = require('dotenv');
dotenv.config();

async function getWeatherData(req, res) {
  const myApi = process.env.NODE_API_KEY;
  const url = process.env.NODE_API_URL;
  const city = req.query.city;

  const response = await fetch(
    `${url}/weather?q=${city}&appid=${myApi}&units=metric`
  );
  const data = await response.json();
  res.send(data);
}

module.exports = getWeatherData;
