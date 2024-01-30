(function () {
  const n = document.createElement('link').relList;
  if (n && n.supports && n.supports('modulepreload')) return;
  for (const l of document.querySelectorAll('link[rel="modulepreload"]')) r(l);
  new MutationObserver((l) => {
    for (const i of l)
      if (i.type === 'childList')
        for (const o of i.addedNodes)
          o.tagName === 'LINK' && o.rel === 'modulepreload' && r(o);
  }).observe(document, { childList: !0, subtree: !0 });
  function t(l) {
    const i = {};
    return (
      l.integrity && (i.integrity = l.integrity),
      l.referrerPolicy && (i.referrerPolicy = l.referrerPolicy),
      l.crossOrigin === 'use-credentials'
        ? (i.credentials = 'include')
        : l.crossOrigin === 'anonymous'
        ? (i.credentials = 'omit')
        : (i.credentials = 'same-origin'),
      i
    );
  }
  function r(l) {
    if (l.ep) return;
    l.ep = !0;
    const i = t(l);
    fetch(l.href, i);
  }
})();
function dc(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, 'default')
    ? e.default
    : e;
}
var Gu = { exports: {} },
  rl = {},
  Zu = { exports: {} },
  L = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Gt = Symbol.for('react.element'),
  pc = Symbol.for('react.portal'),
  mc = Symbol.for('react.fragment'),
  hc = Symbol.for('react.strict_mode'),
  vc = Symbol.for('react.profiler'),
  yc = Symbol.for('react.provider'),
  gc = Symbol.for('react.context'),
  wc = Symbol.for('react.forward_ref'),
  Sc = Symbol.for('react.suspense'),
  kc = Symbol.for('react.memo'),
  Ec = Symbol.for('react.lazy'),
  Fo = Symbol.iterator;
function _c(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (Fo && e[Fo]) || e['@@iterator']),
      typeof e == 'function' ? e : null);
}
var Ju = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  qu = Object.assign,
  bu = {};
function it(e, n, t) {
  (this.props = e),
    (this.context = n),
    (this.refs = bu),
    (this.updater = t || Ju);
}
it.prototype.isReactComponent = {};
it.prototype.setState = function (e, n) {
  if (typeof e != 'object' && typeof e != 'function' && e != null)
    throw Error(
      'setState(...): takes an object of state variables to update or a function which returns an object of state variables.'
    );
  this.updater.enqueueSetState(this, e, n, 'setState');
};
it.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, 'forceUpdate');
};
function es() {}
es.prototype = it.prototype;
function Ai(e, n, t) {
  (this.props = e),
    (this.context = n),
    (this.refs = bu),
    (this.updater = t || Ju);
}
var Wi = (Ai.prototype = new es());
Wi.constructor = Ai;
qu(Wi, it.prototype);
Wi.isPureReactComponent = !0;
var Uo = Array.isArray,
  ns = Object.prototype.hasOwnProperty,
  Bi = { current: null },
  ts = { key: !0, ref: !0, __self: !0, __source: !0 };
function rs(e, n, t) {
  var r,
    l = {},
    i = null,
    o = null;
  if (n != null)
    for (r in (n.ref !== void 0 && (o = n.ref),
    n.key !== void 0 && (i = '' + n.key),
    n))
      ns.call(n, r) && !ts.hasOwnProperty(r) && (l[r] = n[r]);
  var u = arguments.length - 2;
  if (u === 1) l.children = t;
  else if (1 < u) {
    for (var s = Array(u), c = 0; c < u; c++) s[c] = arguments[c + 2];
    l.children = s;
  }
  if (e && e.defaultProps)
    for (r in ((u = e.defaultProps), u)) l[r] === void 0 && (l[r] = u[r]);
  return {
    $$typeof: Gt,
    type: e,
    key: i,
    ref: o,
    props: l,
    _owner: Bi.current,
  };
}
function xc(e, n) {
  return {
    $$typeof: Gt,
    type: e.type,
    key: n,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Hi(e) {
  return typeof e == 'object' && e !== null && e.$$typeof === Gt;
}
function Cc(e) {
  var n = { '=': '=0', ':': '=2' };
  return (
    '$' +
    e.replace(/[=:]/g, function (t) {
      return n[t];
    })
  );
}
var $o = /\/+/g;
function El(e, n) {
  return typeof e == 'object' && e !== null && e.key != null
    ? Cc('' + e.key)
    : n.toString(36);
}
function wr(e, n, t, r, l) {
  var i = typeof e;
  (i === 'undefined' || i === 'boolean') && (e = null);
  var o = !1;
  if (e === null) o = !0;
  else
    switch (i) {
      case 'string':
      case 'number':
        o = !0;
        break;
      case 'object':
        switch (e.$$typeof) {
          case Gt:
          case pc:
            o = !0;
        }
    }
  if (o)
    return (
      (o = e),
      (l = l(o)),
      (e = r === '' ? '.' + El(o, 0) : r),
      Uo(l)
        ? ((t = ''),
          e != null && (t = e.replace($o, '$&/') + '/'),
          wr(l, n, t, '', function (c) {
            return c;
          }))
        : l != null &&
          (Hi(l) &&
            (l = xc(
              l,
              t +
                (!l.key || (o && o.key === l.key)
                  ? ''
                  : ('' + l.key).replace($o, '$&/') + '/') +
                e
            )),
          n.push(l)),
      1
    );
  if (((o = 0), (r = r === '' ? '.' : r + ':'), Uo(e)))
    for (var u = 0; u < e.length; u++) {
      i = e[u];
      var s = r + El(i, u);
      o += wr(i, n, t, s, l);
    }
  else if (((s = _c(e)), typeof s == 'function'))
    for (e = s.call(e), u = 0; !(i = e.next()).done; )
      (i = i.value), (s = r + El(i, u++)), (o += wr(i, n, t, s, l));
  else if (i === 'object')
    throw (
      ((n = String(e)),
      Error(
        'Objects are not valid as a React child (found: ' +
          (n === '[object Object]'
            ? 'object with keys {' + Object.keys(e).join(', ') + '}'
            : n) +
          '). If you meant to render a collection of children, use an array instead.'
      ))
    );
  return o;
}
function tr(e, n, t) {
  if (e == null) return e;
  var r = [],
    l = 0;
  return (
    wr(e, r, '', '', function (i) {
      return n.call(t, i, l++);
    }),
    r
  );
}
function Pc(e) {
  if (e._status === -1) {
    var n = e._result;
    (n = n()),
      n.then(
        function (t) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = t));
        },
        function (t) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = t));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = n));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var ue = { current: null },
  Sr = { transition: null },
  Nc = {
    ReactCurrentDispatcher: ue,
    ReactCurrentBatchConfig: Sr,
    ReactCurrentOwner: Bi,
  };
L.Children = {
  map: tr,
  forEach: function (e, n, t) {
    tr(
      e,
      function () {
        n.apply(this, arguments);
      },
      t
    );
  },
  count: function (e) {
    var n = 0;
    return (
      tr(e, function () {
        n++;
      }),
      n
    );
  },
  toArray: function (e) {
    return (
      tr(e, function (n) {
        return n;
      }) || []
    );
  },
  only: function (e) {
    if (!Hi(e))
      throw Error(
        'React.Children.only expected to receive a single React element child.'
      );
    return e;
  },
};
L.Component = it;
L.Fragment = mc;
L.Profiler = vc;
L.PureComponent = Ai;
L.StrictMode = hc;
L.Suspense = Sc;
L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Nc;
L.cloneElement = function (e, n, t) {
  if (e == null)
    throw Error(
      'React.cloneElement(...): The argument must be a React element, but you passed ' +
        e +
        '.'
    );
  var r = qu({}, e.props),
    l = e.key,
    i = e.ref,
    o = e._owner;
  if (n != null) {
    if (
      (n.ref !== void 0 && ((i = n.ref), (o = Bi.current)),
      n.key !== void 0 && (l = '' + n.key),
      e.type && e.type.defaultProps)
    )
      var u = e.type.defaultProps;
    for (s in n)
      ns.call(n, s) &&
        !ts.hasOwnProperty(s) &&
        (r[s] = n[s] === void 0 && u !== void 0 ? u[s] : n[s]);
  }
  var s = arguments.length - 2;
  if (s === 1) r.children = t;
  else if (1 < s) {
    u = Array(s);
    for (var c = 0; c < s; c++) u[c] = arguments[c + 2];
    r.children = u;
  }
  return { $$typeof: Gt, type: e.type, key: l, ref: i, props: r, _owner: o };
};
L.createContext = function (e) {
  return (
    (e = {
      $$typeof: gc,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: yc, _context: e }),
    (e.Consumer = e)
  );
};
L.createElement = rs;
L.createFactory = function (e) {
  var n = rs.bind(null, e);
  return (n.type = e), n;
};
L.createRef = function () {
  return { current: null };
};
L.forwardRef = function (e) {
  return { $$typeof: wc, render: e };
};
L.isValidElement = Hi;
L.lazy = function (e) {
  return { $$typeof: Ec, _payload: { _status: -1, _result: e }, _init: Pc };
};
L.memo = function (e, n) {
  return { $$typeof: kc, type: e, compare: n === void 0 ? null : n };
};
L.startTransition = function (e) {
  var n = Sr.transition;
  Sr.transition = {};
  try {
    e();
  } finally {
    Sr.transition = n;
  }
};
L.unstable_act = function () {
  throw Error('act(...) is not supported in production builds of React.');
};
L.useCallback = function (e, n) {
  return ue.current.useCallback(e, n);
};
L.useContext = function (e) {
  return ue.current.useContext(e);
};
L.useDebugValue = function () {};
L.useDeferredValue = function (e) {
  return ue.current.useDeferredValue(e);
};
L.useEffect = function (e, n) {
  return ue.current.useEffect(e, n);
};
L.useId = function () {
  return ue.current.useId();
};
L.useImperativeHandle = function (e, n, t) {
  return ue.current.useImperativeHandle(e, n, t);
};
L.useInsertionEffect = function (e, n) {
  return ue.current.useInsertionEffect(e, n);
};
L.useLayoutEffect = function (e, n) {
  return ue.current.useLayoutEffect(e, n);
};
L.useMemo = function (e, n) {
  return ue.current.useMemo(e, n);
};
L.useReducer = function (e, n, t) {
  return ue.current.useReducer(e, n, t);
};
L.useRef = function (e) {
  return ue.current.useRef(e);
};
L.useState = function (e) {
  return ue.current.useState(e);
};
L.useSyncExternalStore = function (e, n, t) {
  return ue.current.useSyncExternalStore(e, n, t);
};
L.useTransition = function () {
  return ue.current.useTransition();
};
L.version = '18.2.0';
Zu.exports = L;
var Ot = Zu.exports;
const _n = dc(Ot);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var zc = Ot,
  Lc = Symbol.for('react.element'),
  Tc = Symbol.for('react.fragment'),
  Oc = Object.prototype.hasOwnProperty,
  jc = zc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Rc = { key: !0, ref: !0, __self: !0, __source: !0 };
function ls(e, n, t) {
  var r,
    l = {},
    i = null,
    o = null;
  t !== void 0 && (i = '' + t),
    n.key !== void 0 && (i = '' + n.key),
    n.ref !== void 0 && (o = n.ref);
  for (r in n) Oc.call(n, r) && !Rc.hasOwnProperty(r) && (l[r] = n[r]);
  if (e && e.defaultProps)
    for (r in ((n = e.defaultProps), n)) l[r] === void 0 && (l[r] = n[r]);
  return {
    $$typeof: Lc,
    type: e,
    key: i,
    ref: o,
    props: l,
    _owner: jc.current,
  };
}
rl.Fragment = Tc;
rl.jsx = ls;
rl.jsxs = ls;
Gu.exports = rl;
var O = Gu.exports,
  Xl = {},
  is = { exports: {} },
  ge = {},
  os = { exports: {} },
  us = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function n(_, N) {
    var z = _.length;
    _.push(N);
    e: for (; 0 < z; ) {
      var H = (z - 1) >>> 1,
        G = _[H];
      if (0 < l(G, N)) (_[H] = N), (_[z] = G), (z = H);
      else break e;
    }
  }
  function t(_) {
    return _.length === 0 ? null : _[0];
  }
  function r(_) {
    if (_.length === 0) return null;
    var N = _[0],
      z = _.pop();
    if (z !== N) {
      _[0] = z;
      e: for (var H = 0, G = _.length, er = G >>> 1; H < er; ) {
        var vn = 2 * (H + 1) - 1,
          kl = _[vn],
          yn = vn + 1,
          nr = _[yn];
        if (0 > l(kl, z))
          yn < G && 0 > l(nr, kl)
            ? ((_[H] = nr), (_[yn] = z), (H = yn))
            : ((_[H] = kl), (_[vn] = z), (H = vn));
        else if (yn < G && 0 > l(nr, z)) (_[H] = nr), (_[yn] = z), (H = yn);
        else break e;
      }
    }
    return N;
  }
  function l(_, N) {
    var z = _.sortIndex - N.sortIndex;
    return z !== 0 ? z : _.id - N.id;
  }
  if (typeof performance == 'object' && typeof performance.now == 'function') {
    var i = performance;
    e.unstable_now = function () {
      return i.now();
    };
  } else {
    var o = Date,
      u = o.now();
    e.unstable_now = function () {
      return o.now() - u;
    };
  }
  var s = [],
    c = [],
    h = 1,
    m = null,
    p = 3,
    g = !1,
    w = !1,
    S = !1,
    F = typeof setTimeout == 'function' ? setTimeout : null,
    f = typeof clearTimeout == 'function' ? clearTimeout : null,
    a = typeof setImmediate < 'u' ? setImmediate : null;
  typeof navigator < 'u' &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function d(_) {
    for (var N = t(c); N !== null; ) {
      if (N.callback === null) r(c);
      else if (N.startTime <= _)
        r(c), (N.sortIndex = N.expirationTime), n(s, N);
      else break;
      N = t(c);
    }
  }
  function v(_) {
    if (((S = !1), d(_), !w))
      if (t(s) !== null) (w = !0), wl(E);
      else {
        var N = t(c);
        N !== null && Sl(v, N.startTime - _);
      }
  }
  function E(_, N) {
    (w = !1), S && ((S = !1), f(P), (P = -1)), (g = !0);
    var z = p;
    try {
      for (
        d(N), m = t(s);
        m !== null && (!(m.expirationTime > N) || (_ && !Pe()));

      ) {
        var H = m.callback;
        if (typeof H == 'function') {
          (m.callback = null), (p = m.priorityLevel);
          var G = H(m.expirationTime <= N);
          (N = e.unstable_now()),
            typeof G == 'function' ? (m.callback = G) : m === t(s) && r(s),
            d(N);
        } else r(s);
        m = t(s);
      }
      if (m !== null) var er = !0;
      else {
        var vn = t(c);
        vn !== null && Sl(v, vn.startTime - N), (er = !1);
      }
      return er;
    } finally {
      (m = null), (p = z), (g = !1);
    }
  }
  var x = !1,
    C = null,
    P = -1,
    B = 5,
    T = -1;
  function Pe() {
    return !(e.unstable_now() - T < B);
  }
  function st() {
    if (C !== null) {
      var _ = e.unstable_now();
      T = _;
      var N = !0;
      try {
        N = C(!0, _);
      } finally {
        N ? at() : ((x = !1), (C = null));
      }
    } else x = !1;
  }
  var at;
  if (typeof a == 'function')
    at = function () {
      a(st);
    };
  else if (typeof MessageChannel < 'u') {
    var Mo = new MessageChannel(),
      fc = Mo.port2;
    (Mo.port1.onmessage = st),
      (at = function () {
        fc.postMessage(null);
      });
  } else
    at = function () {
      F(st, 0);
    };
  function wl(_) {
    (C = _), x || ((x = !0), at());
  }
  function Sl(_, N) {
    P = F(function () {
      _(e.unstable_now());
    }, N);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (_) {
      _.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      w || g || ((w = !0), wl(E));
    }),
    (e.unstable_forceFrameRate = function (_) {
      0 > _ || 125 < _
        ? console.error(
            'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported'
          )
        : (B = 0 < _ ? Math.floor(1e3 / _) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return p;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return t(s);
    }),
    (e.unstable_next = function (_) {
      switch (p) {
        case 1:
        case 2:
        case 3:
          var N = 3;
          break;
        default:
          N = p;
      }
      var z = p;
      p = N;
      try {
        return _();
      } finally {
        p = z;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (_, N) {
      switch (_) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          _ = 3;
      }
      var z = p;
      p = _;
      try {
        return N();
      } finally {
        p = z;
      }
    }),
    (e.unstable_scheduleCallback = function (_, N, z) {
      var H = e.unstable_now();
      switch (
        (typeof z == 'object' && z !== null
          ? ((z = z.delay), (z = typeof z == 'number' && 0 < z ? H + z : H))
          : (z = H),
        _)
      ) {
        case 1:
          var G = -1;
          break;
        case 2:
          G = 250;
          break;
        case 5:
          G = 1073741823;
          break;
        case 4:
          G = 1e4;
          break;
        default:
          G = 5e3;
      }
      return (
        (G = z + G),
        (_ = {
          id: h++,
          callback: N,
          priorityLevel: _,
          startTime: z,
          expirationTime: G,
          sortIndex: -1,
        }),
        z > H
          ? ((_.sortIndex = z),
            n(c, _),
            t(s) === null &&
              _ === t(c) &&
              (S ? (f(P), (P = -1)) : (S = !0), Sl(v, z - H)))
          : ((_.sortIndex = G), n(s, _), w || g || ((w = !0), wl(E))),
        _
      );
    }),
    (e.unstable_shouldYield = Pe),
    (e.unstable_wrapCallback = function (_) {
      var N = p;
      return function () {
        var z = p;
        p = N;
        try {
          return _.apply(this, arguments);
        } finally {
          p = z;
        }
      };
    });
})(us);
os.exports = us;
var Dc = os.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ss = Ot,
  ye = Dc;
function y(e) {
  for (
    var n = 'https://reactjs.org/docs/error-decoder.html?invariant=' + e, t = 1;
    t < arguments.length;
    t++
  )
    n += '&args[]=' + encodeURIComponent(arguments[t]);
  return (
    'Minified React error #' +
    e +
    '; visit ' +
    n +
    ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
  );
}
var as = new Set(),
  jt = {};
function On(e, n) {
  qn(e, n), qn(e + 'Capture', n);
}
function qn(e, n) {
  for (jt[e] = n, e = 0; e < n.length; e++) as.add(n[e]);
}
var He = !(
    typeof window > 'u' ||
    typeof window.document > 'u' ||
    typeof window.document.createElement > 'u'
  ),
  Gl = Object.prototype.hasOwnProperty,
  Ic =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Vo = {},
  Ao = {};
function Mc(e) {
  return Gl.call(Ao, e)
    ? !0
    : Gl.call(Vo, e)
    ? !1
    : Ic.test(e)
    ? (Ao[e] = !0)
    : ((Vo[e] = !0), !1);
}
function Fc(e, n, t, r) {
  if (t !== null && t.type === 0) return !1;
  switch (typeof n) {
    case 'function':
    case 'symbol':
      return !0;
    case 'boolean':
      return r
        ? !1
        : t !== null
        ? !t.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== 'data-' && e !== 'aria-');
    default:
      return !1;
  }
}
function Uc(e, n, t, r) {
  if (n === null || typeof n > 'u' || Fc(e, n, t, r)) return !0;
  if (r) return !1;
  if (t !== null)
    switch (t.type) {
      case 3:
        return !n;
      case 4:
        return n === !1;
      case 5:
        return isNaN(n);
      case 6:
        return isNaN(n) || 1 > n;
    }
  return !1;
}
function se(e, n, t, r, l, i, o) {
  (this.acceptsBooleans = n === 2 || n === 3 || n === 4),
    (this.attributeName = r),
    (this.attributeNamespace = l),
    (this.mustUseProperty = t),
    (this.propertyName = e),
    (this.type = n),
    (this.sanitizeURL = i),
    (this.removeEmptyString = o);
}
var ee = {};
'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
  .split(' ')
  .forEach(function (e) {
    ee[e] = new se(e, 0, !1, e, null, !1, !1);
  });
[
  ['acceptCharset', 'accept-charset'],
  ['className', 'class'],
  ['htmlFor', 'for'],
  ['httpEquiv', 'http-equiv'],
].forEach(function (e) {
  var n = e[0];
  ee[n] = new se(n, 1, !1, e[1], null, !1, !1);
});
['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (e) {
  ee[e] = new se(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  'autoReverse',
  'externalResourcesRequired',
  'focusable',
  'preserveAlpha',
].forEach(function (e) {
  ee[e] = new se(e, 2, !1, e, null, !1, !1);
});
'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
  .split(' ')
  .forEach(function (e) {
    ee[e] = new se(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
  ee[e] = new se(e, 3, !0, e, null, !1, !1);
});
['capture', 'download'].forEach(function (e) {
  ee[e] = new se(e, 4, !1, e, null, !1, !1);
});
['cols', 'rows', 'size', 'span'].forEach(function (e) {
  ee[e] = new se(e, 6, !1, e, null, !1, !1);
});
['rowSpan', 'start'].forEach(function (e) {
  ee[e] = new se(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Qi = /[\-:]([a-z])/g;
function Ki(e) {
  return e[1].toUpperCase();
}
'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
  .split(' ')
  .forEach(function (e) {
    var n = e.replace(Qi, Ki);
    ee[n] = new se(n, 1, !1, e, null, !1, !1);
  });
'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
  .split(' ')
  .forEach(function (e) {
    var n = e.replace(Qi, Ki);
    ee[n] = new se(n, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1);
  });
['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
  var n = e.replace(Qi, Ki);
  ee[n] = new se(n, 1, !1, e, 'http://www.w3.org/XML/1998/namespace', !1, !1);
});
['tabIndex', 'crossOrigin'].forEach(function (e) {
  ee[e] = new se(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ee.xlinkHref = new se(
  'xlinkHref',
  1,
  !1,
  'xlink:href',
  'http://www.w3.org/1999/xlink',
  !0,
  !1
);
['src', 'href', 'action', 'formAction'].forEach(function (e) {
  ee[e] = new se(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Yi(e, n, t, r) {
  var l = ee.hasOwnProperty(n) ? ee[n] : null;
  (l !== null
    ? l.type !== 0
    : r ||
      !(2 < n.length) ||
      (n[0] !== 'o' && n[0] !== 'O') ||
      (n[1] !== 'n' && n[1] !== 'N')) &&
    (Uc(n, t, l, r) && (t = null),
    r || l === null
      ? Mc(n) && (t === null ? e.removeAttribute(n) : e.setAttribute(n, '' + t))
      : l.mustUseProperty
      ? (e[l.propertyName] = t === null ? (l.type === 3 ? !1 : '') : t)
      : ((n = l.attributeName),
        (r = l.attributeNamespace),
        t === null
          ? e.removeAttribute(n)
          : ((l = l.type),
            (t = l === 3 || (l === 4 && t === !0) ? '' : '' + t),
            r ? e.setAttributeNS(r, n, t) : e.setAttribute(n, t))));
}
var Xe = ss.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  rr = Symbol.for('react.element'),
  Dn = Symbol.for('react.portal'),
  In = Symbol.for('react.fragment'),
  Xi = Symbol.for('react.strict_mode'),
  Zl = Symbol.for('react.profiler'),
  cs = Symbol.for('react.provider'),
  fs = Symbol.for('react.context'),
  Gi = Symbol.for('react.forward_ref'),
  Jl = Symbol.for('react.suspense'),
  ql = Symbol.for('react.suspense_list'),
  Zi = Symbol.for('react.memo'),
  Ze = Symbol.for('react.lazy'),
  ds = Symbol.for('react.offscreen'),
  Wo = Symbol.iterator;
function ct(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (Wo && e[Wo]) || e['@@iterator']),
      typeof e == 'function' ? e : null);
}
var A = Object.assign,
  _l;
function gt(e) {
  if (_l === void 0)
    try {
      throw Error();
    } catch (t) {
      var n = t.stack.trim().match(/\n( *(at )?)/);
      _l = (n && n[1]) || '';
    }
  return (
    `
` +
    _l +
    e
  );
}
var xl = !1;
function Cl(e, n) {
  if (!e || xl) return '';
  xl = !0;
  var t = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (n)
      if (
        ((n = function () {
          throw Error();
        }),
        Object.defineProperty(n.prototype, 'props', {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == 'object' && Reflect.construct)
      ) {
        try {
          Reflect.construct(n, []);
        } catch (c) {
          var r = c;
        }
        Reflect.construct(e, [], n);
      } else {
        try {
          n.call();
        } catch (c) {
          r = c;
        }
        e.call(n.prototype);
      }
    else {
      try {
        throw Error();
      } catch (c) {
        r = c;
      }
      e();
    }
  } catch (c) {
    if (c && r && typeof c.stack == 'string') {
      for (
        var l = c.stack.split(`
`),
          i = r.stack.split(`
`),
          o = l.length - 1,
          u = i.length - 1;
        1 <= o && 0 <= u && l[o] !== i[u];

      )
        u--;
      for (; 1 <= o && 0 <= u; o--, u--)
        if (l[o] !== i[u]) {
          if (o !== 1 || u !== 1)
            do
              if ((o--, u--, 0 > u || l[o] !== i[u])) {
                var s =
                  `
` + l[o].replace(' at new ', ' at ');
                return (
                  e.displayName &&
                    s.includes('<anonymous>') &&
                    (s = s.replace('<anonymous>', e.displayName)),
                  s
                );
              }
            while (1 <= o && 0 <= u);
          break;
        }
    }
  } finally {
    (xl = !1), (Error.prepareStackTrace = t);
  }
  return (e = e ? e.displayName || e.name : '') ? gt(e) : '';
}
function $c(e) {
  switch (e.tag) {
    case 5:
      return gt(e.type);
    case 16:
      return gt('Lazy');
    case 13:
      return gt('Suspense');
    case 19:
      return gt('SuspenseList');
    case 0:
    case 2:
    case 15:
      return (e = Cl(e.type, !1)), e;
    case 11:
      return (e = Cl(e.type.render, !1)), e;
    case 1:
      return (e = Cl(e.type, !0)), e;
    default:
      return '';
  }
}
function bl(e) {
  if (e == null) return null;
  if (typeof e == 'function') return e.displayName || e.name || null;
  if (typeof e == 'string') return e;
  switch (e) {
    case In:
      return 'Fragment';
    case Dn:
      return 'Portal';
    case Zl:
      return 'Profiler';
    case Xi:
      return 'StrictMode';
    case Jl:
      return 'Suspense';
    case ql:
      return 'SuspenseList';
  }
  if (typeof e == 'object')
    switch (e.$$typeof) {
      case fs:
        return (e.displayName || 'Context') + '.Consumer';
      case cs:
        return (e._context.displayName || 'Context') + '.Provider';
      case Gi:
        var n = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = n.displayName || n.name || ''),
            (e = e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')),
          e
        );
      case Zi:
        return (
          (n = e.displayName || null), n !== null ? n : bl(e.type) || 'Memo'
        );
      case Ze:
        (n = e._payload), (e = e._init);
        try {
          return bl(e(n));
        } catch {}
    }
  return null;
}
function Vc(e) {
  var n = e.type;
  switch (e.tag) {
    case 24:
      return 'Cache';
    case 9:
      return (n.displayName || 'Context') + '.Consumer';
    case 10:
      return (n._context.displayName || 'Context') + '.Provider';
    case 18:
      return 'DehydratedFragment';
    case 11:
      return (
        (e = n.render),
        (e = e.displayName || e.name || ''),
        n.displayName || (e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')
      );
    case 7:
      return 'Fragment';
    case 5:
      return n;
    case 4:
      return 'Portal';
    case 3:
      return 'Root';
    case 6:
      return 'Text';
    case 16:
      return bl(n);
    case 8:
      return n === Xi ? 'StrictMode' : 'Mode';
    case 22:
      return 'Offscreen';
    case 12:
      return 'Profiler';
    case 21:
      return 'Scope';
    case 13:
      return 'Suspense';
    case 19:
      return 'SuspenseList';
    case 25:
      return 'TracingMarker';
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof n == 'function') return n.displayName || n.name || null;
      if (typeof n == 'string') return n;
  }
  return null;
}
function fn(e) {
  switch (typeof e) {
    case 'boolean':
    case 'number':
    case 'string':
    case 'undefined':
      return e;
    case 'object':
      return e;
    default:
      return '';
  }
}
function ps(e) {
  var n = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === 'input' &&
    (n === 'checkbox' || n === 'radio')
  );
}
function Ac(e) {
  var n = ps(e) ? 'checked' : 'value',
    t = Object.getOwnPropertyDescriptor(e.constructor.prototype, n),
    r = '' + e[n];
  if (
    !e.hasOwnProperty(n) &&
    typeof t < 'u' &&
    typeof t.get == 'function' &&
    typeof t.set == 'function'
  ) {
    var l = t.get,
      i = t.set;
    return (
      Object.defineProperty(e, n, {
        configurable: !0,
        get: function () {
          return l.call(this);
        },
        set: function (o) {
          (r = '' + o), i.call(this, o);
        },
      }),
      Object.defineProperty(e, n, { enumerable: t.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (o) {
          r = '' + o;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[n];
        },
      }
    );
  }
}
function lr(e) {
  e._valueTracker || (e._valueTracker = Ac(e));
}
function ms(e) {
  if (!e) return !1;
  var n = e._valueTracker;
  if (!n) return !0;
  var t = n.getValue(),
    r = '';
  return (
    e && (r = ps(e) ? (e.checked ? 'true' : 'false') : e.value),
    (e = r),
    e !== t ? (n.setValue(e), !0) : !1
  );
}
function Or(e) {
  if (((e = e || (typeof document < 'u' ? document : void 0)), typeof e > 'u'))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function ei(e, n) {
  var t = n.checked;
  return A({}, n, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: t ?? e._wrapperState.initialChecked,
  });
}
function Bo(e, n) {
  var t = n.defaultValue == null ? '' : n.defaultValue,
    r = n.checked != null ? n.checked : n.defaultChecked;
  (t = fn(n.value != null ? n.value : t)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: t,
      controlled:
        n.type === 'checkbox' || n.type === 'radio'
          ? n.checked != null
          : n.value != null,
    });
}
function hs(e, n) {
  (n = n.checked), n != null && Yi(e, 'checked', n, !1);
}
function ni(e, n) {
  hs(e, n);
  var t = fn(n.value),
    r = n.type;
  if (t != null)
    r === 'number'
      ? ((t === 0 && e.value === '') || e.value != t) && (e.value = '' + t)
      : e.value !== '' + t && (e.value = '' + t);
  else if (r === 'submit' || r === 'reset') {
    e.removeAttribute('value');
    return;
  }
  n.hasOwnProperty('value')
    ? ti(e, n.type, t)
    : n.hasOwnProperty('defaultValue') && ti(e, n.type, fn(n.defaultValue)),
    n.checked == null &&
      n.defaultChecked != null &&
      (e.defaultChecked = !!n.defaultChecked);
}
function Ho(e, n, t) {
  if (n.hasOwnProperty('value') || n.hasOwnProperty('defaultValue')) {
    var r = n.type;
    if (
      !(
        (r !== 'submit' && r !== 'reset') ||
        (n.value !== void 0 && n.value !== null)
      )
    )
      return;
    (n = '' + e._wrapperState.initialValue),
      t || n === e.value || (e.value = n),
      (e.defaultValue = n);
  }
  (t = e.name),
    t !== '' && (e.name = ''),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    t !== '' && (e.name = t);
}
function ti(e, n, t) {
  (n !== 'number' || Or(e.ownerDocument) !== e) &&
    (t == null
      ? (e.defaultValue = '' + e._wrapperState.initialValue)
      : e.defaultValue !== '' + t && (e.defaultValue = '' + t));
}
var wt = Array.isArray;
function Kn(e, n, t, r) {
  if (((e = e.options), n)) {
    n = {};
    for (var l = 0; l < t.length; l++) n['$' + t[l]] = !0;
    for (t = 0; t < e.length; t++)
      (l = n.hasOwnProperty('$' + e[t].value)),
        e[t].selected !== l && (e[t].selected = l),
        l && r && (e[t].defaultSelected = !0);
  } else {
    for (t = '' + fn(t), n = null, l = 0; l < e.length; l++) {
      if (e[l].value === t) {
        (e[l].selected = !0), r && (e[l].defaultSelected = !0);
        return;
      }
      n !== null || e[l].disabled || (n = e[l]);
    }
    n !== null && (n.selected = !0);
  }
}
function ri(e, n) {
  if (n.dangerouslySetInnerHTML != null) throw Error(y(91));
  return A({}, n, {
    value: void 0,
    defaultValue: void 0,
    children: '' + e._wrapperState.initialValue,
  });
}
function Qo(e, n) {
  var t = n.value;
  if (t == null) {
    if (((t = n.children), (n = n.defaultValue), t != null)) {
      if (n != null) throw Error(y(92));
      if (wt(t)) {
        if (1 < t.length) throw Error(y(93));
        t = t[0];
      }
      n = t;
    }
    n == null && (n = ''), (t = n);
  }
  e._wrapperState = { initialValue: fn(t) };
}
function vs(e, n) {
  var t = fn(n.value),
    r = fn(n.defaultValue);
  t != null &&
    ((t = '' + t),
    t !== e.value && (e.value = t),
    n.defaultValue == null && e.defaultValue !== t && (e.defaultValue = t)),
    r != null && (e.defaultValue = '' + r);
}
function Ko(e) {
  var n = e.textContent;
  n === e._wrapperState.initialValue && n !== '' && n !== null && (e.value = n);
}
function ys(e) {
  switch (e) {
    case 'svg':
      return 'http://www.w3.org/2000/svg';
    case 'math':
      return 'http://www.w3.org/1998/Math/MathML';
    default:
      return 'http://www.w3.org/1999/xhtml';
  }
}
function li(e, n) {
  return e == null || e === 'http://www.w3.org/1999/xhtml'
    ? ys(n)
    : e === 'http://www.w3.org/2000/svg' && n === 'foreignObject'
    ? 'http://www.w3.org/1999/xhtml'
    : e;
}
var ir,
  gs = (function (e) {
    return typeof MSApp < 'u' && MSApp.execUnsafeLocalFunction
      ? function (n, t, r, l) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(n, t, r, l);
          });
        }
      : e;
  })(function (e, n) {
    if (e.namespaceURI !== 'http://www.w3.org/2000/svg' || 'innerHTML' in e)
      e.innerHTML = n;
    else {
      for (
        ir = ir || document.createElement('div'),
          ir.innerHTML = '<svg>' + n.valueOf().toString() + '</svg>',
          n = ir.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; n.firstChild; ) e.appendChild(n.firstChild);
    }
  });
function Rt(e, n) {
  if (n) {
    var t = e.firstChild;
    if (t && t === e.lastChild && t.nodeType === 3) {
      t.nodeValue = n;
      return;
    }
  }
  e.textContent = n;
}
var Et = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  Wc = ['Webkit', 'ms', 'Moz', 'O'];
Object.keys(Et).forEach(function (e) {
  Wc.forEach(function (n) {
    (n = n + e.charAt(0).toUpperCase() + e.substring(1)), (Et[n] = Et[e]);
  });
});
function ws(e, n, t) {
  return n == null || typeof n == 'boolean' || n === ''
    ? ''
    : t || typeof n != 'number' || n === 0 || (Et.hasOwnProperty(e) && Et[e])
    ? ('' + n).trim()
    : n + 'px';
}
function Ss(e, n) {
  e = e.style;
  for (var t in n)
    if (n.hasOwnProperty(t)) {
      var r = t.indexOf('--') === 0,
        l = ws(t, n[t], r);
      t === 'float' && (t = 'cssFloat'), r ? e.setProperty(t, l) : (e[t] = l);
    }
}
var Bc = A(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function ii(e, n) {
  if (n) {
    if (Bc[e] && (n.children != null || n.dangerouslySetInnerHTML != null))
      throw Error(y(137, e));
    if (n.dangerouslySetInnerHTML != null) {
      if (n.children != null) throw Error(y(60));
      if (
        typeof n.dangerouslySetInnerHTML != 'object' ||
        !('__html' in n.dangerouslySetInnerHTML)
      )
        throw Error(y(61));
    }
    if (n.style != null && typeof n.style != 'object') throw Error(y(62));
  }
}
function oi(e, n) {
  if (e.indexOf('-') === -1) return typeof n.is == 'string';
  switch (e) {
    case 'annotation-xml':
    case 'color-profile':
    case 'font-face':
    case 'font-face-src':
    case 'font-face-uri':
    case 'font-face-format':
    case 'font-face-name':
    case 'missing-glyph':
      return !1;
    default:
      return !0;
  }
}
var ui = null;
function Ji(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var si = null,
  Yn = null,
  Xn = null;
function Yo(e) {
  if ((e = qt(e))) {
    if (typeof si != 'function') throw Error(y(280));
    var n = e.stateNode;
    n && ((n = sl(n)), si(e.stateNode, e.type, n));
  }
}
function ks(e) {
  Yn ? (Xn ? Xn.push(e) : (Xn = [e])) : (Yn = e);
}
function Es() {
  if (Yn) {
    var e = Yn,
      n = Xn;
    if (((Xn = Yn = null), Yo(e), n)) for (e = 0; e < n.length; e++) Yo(n[e]);
  }
}
function _s(e, n) {
  return e(n);
}
function xs() {}
var Pl = !1;
function Cs(e, n, t) {
  if (Pl) return e(n, t);
  Pl = !0;
  try {
    return _s(e, n, t);
  } finally {
    (Pl = !1), (Yn !== null || Xn !== null) && (xs(), Es());
  }
}
function Dt(e, n) {
  var t = e.stateNode;
  if (t === null) return null;
  var r = sl(t);
  if (r === null) return null;
  t = r[n];
  e: switch (n) {
    case 'onClick':
    case 'onClickCapture':
    case 'onDoubleClick':
    case 'onDoubleClickCapture':
    case 'onMouseDown':
    case 'onMouseDownCapture':
    case 'onMouseMove':
    case 'onMouseMoveCapture':
    case 'onMouseUp':
    case 'onMouseUpCapture':
    case 'onMouseEnter':
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === 'button' ||
          e === 'input' ||
          e === 'select' ||
          e === 'textarea'
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (t && typeof t != 'function') throw Error(y(231, n, typeof t));
  return t;
}
var ai = !1;
if (He)
  try {
    var ft = {};
    Object.defineProperty(ft, 'passive', {
      get: function () {
        ai = !0;
      },
    }),
      window.addEventListener('test', ft, ft),
      window.removeEventListener('test', ft, ft);
  } catch {
    ai = !1;
  }
function Hc(e, n, t, r, l, i, o, u, s) {
  var c = Array.prototype.slice.call(arguments, 3);
  try {
    n.apply(t, c);
  } catch (h) {
    this.onError(h);
  }
}
var _t = !1,
  jr = null,
  Rr = !1,
  ci = null,
  Qc = {
    onError: function (e) {
      (_t = !0), (jr = e);
    },
  };
function Kc(e, n, t, r, l, i, o, u, s) {
  (_t = !1), (jr = null), Hc.apply(Qc, arguments);
}
function Yc(e, n, t, r, l, i, o, u, s) {
  if ((Kc.apply(this, arguments), _t)) {
    if (_t) {
      var c = jr;
      (_t = !1), (jr = null);
    } else throw Error(y(198));
    Rr || ((Rr = !0), (ci = c));
  }
}
function jn(e) {
  var n = e,
    t = e;
  if (e.alternate) for (; n.return; ) n = n.return;
  else {
    e = n;
    do (n = e), n.flags & 4098 && (t = n.return), (e = n.return);
    while (e);
  }
  return n.tag === 3 ? t : null;
}
function Ps(e) {
  if (e.tag === 13) {
    var n = e.memoizedState;
    if (
      (n === null && ((e = e.alternate), e !== null && (n = e.memoizedState)),
      n !== null)
    )
      return n.dehydrated;
  }
  return null;
}
function Xo(e) {
  if (jn(e) !== e) throw Error(y(188));
}
function Xc(e) {
  var n = e.alternate;
  if (!n) {
    if (((n = jn(e)), n === null)) throw Error(y(188));
    return n !== e ? null : e;
  }
  for (var t = e, r = n; ; ) {
    var l = t.return;
    if (l === null) break;
    var i = l.alternate;
    if (i === null) {
      if (((r = l.return), r !== null)) {
        t = r;
        continue;
      }
      break;
    }
    if (l.child === i.child) {
      for (i = l.child; i; ) {
        if (i === t) return Xo(l), e;
        if (i === r) return Xo(l), n;
        i = i.sibling;
      }
      throw Error(y(188));
    }
    if (t.return !== r.return) (t = l), (r = i);
    else {
      for (var o = !1, u = l.child; u; ) {
        if (u === t) {
          (o = !0), (t = l), (r = i);
          break;
        }
        if (u === r) {
          (o = !0), (r = l), (t = i);
          break;
        }
        u = u.sibling;
      }
      if (!o) {
        for (u = i.child; u; ) {
          if (u === t) {
            (o = !0), (t = i), (r = l);
            break;
          }
          if (u === r) {
            (o = !0), (r = i), (t = l);
            break;
          }
          u = u.sibling;
        }
        if (!o) throw Error(y(189));
      }
    }
    if (t.alternate !== r) throw Error(y(190));
  }
  if (t.tag !== 3) throw Error(y(188));
  return t.stateNode.current === t ? e : n;
}
function Ns(e) {
  return (e = Xc(e)), e !== null ? zs(e) : null;
}
function zs(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var n = zs(e);
    if (n !== null) return n;
    e = e.sibling;
  }
  return null;
}
var Ls = ye.unstable_scheduleCallback,
  Go = ye.unstable_cancelCallback,
  Gc = ye.unstable_shouldYield,
  Zc = ye.unstable_requestPaint,
  Q = ye.unstable_now,
  Jc = ye.unstable_getCurrentPriorityLevel,
  qi = ye.unstable_ImmediatePriority,
  Ts = ye.unstable_UserBlockingPriority,
  Dr = ye.unstable_NormalPriority,
  qc = ye.unstable_LowPriority,
  Os = ye.unstable_IdlePriority,
  ll = null,
  Fe = null;
function bc(e) {
  if (Fe && typeof Fe.onCommitFiberRoot == 'function')
    try {
      Fe.onCommitFiberRoot(ll, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Oe = Math.clz32 ? Math.clz32 : tf,
  ef = Math.log,
  nf = Math.LN2;
function tf(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((ef(e) / nf) | 0)) | 0;
}
var or = 64,
  ur = 4194304;
function St(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function Ir(e, n) {
  var t = e.pendingLanes;
  if (t === 0) return 0;
  var r = 0,
    l = e.suspendedLanes,
    i = e.pingedLanes,
    o = t & 268435455;
  if (o !== 0) {
    var u = o & ~l;
    u !== 0 ? (r = St(u)) : ((i &= o), i !== 0 && (r = St(i)));
  } else (o = t & ~l), o !== 0 ? (r = St(o)) : i !== 0 && (r = St(i));
  if (r === 0) return 0;
  if (
    n !== 0 &&
    n !== r &&
    !(n & l) &&
    ((l = r & -r), (i = n & -n), l >= i || (l === 16 && (i & 4194240) !== 0))
  )
    return n;
  if ((r & 4 && (r |= t & 16), (n = e.entangledLanes), n !== 0))
    for (e = e.entanglements, n &= r; 0 < n; )
      (t = 31 - Oe(n)), (l = 1 << t), (r |= e[t]), (n &= ~l);
  return r;
}
function rf(e, n) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return n + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return n + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function lf(e, n) {
  for (
    var t = e.suspendedLanes,
      r = e.pingedLanes,
      l = e.expirationTimes,
      i = e.pendingLanes;
    0 < i;

  ) {
    var o = 31 - Oe(i),
      u = 1 << o,
      s = l[o];
    s === -1
      ? (!(u & t) || u & r) && (l[o] = rf(u, n))
      : s <= n && (e.expiredLanes |= u),
      (i &= ~u);
  }
}
function fi(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function js() {
  var e = or;
  return (or <<= 1), !(or & 4194240) && (or = 64), e;
}
function Nl(e) {
  for (var n = [], t = 0; 31 > t; t++) n.push(e);
  return n;
}
function Zt(e, n, t) {
  (e.pendingLanes |= n),
    n !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (n = 31 - Oe(n)),
    (e[n] = t);
}
function of(e, n) {
  var t = e.pendingLanes & ~n;
  (e.pendingLanes = n),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= n),
    (e.mutableReadLanes &= n),
    (e.entangledLanes &= n),
    (n = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < t; ) {
    var l = 31 - Oe(t),
      i = 1 << l;
    (n[l] = 0), (r[l] = -1), (e[l] = -1), (t &= ~i);
  }
}
function bi(e, n) {
  var t = (e.entangledLanes |= n);
  for (e = e.entanglements; t; ) {
    var r = 31 - Oe(t),
      l = 1 << r;
    (l & n) | (e[r] & n) && (e[r] |= n), (t &= ~l);
  }
}
var R = 0;
function Rs(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Ds,
  eo,
  Is,
  Ms,
  Fs,
  di = !1,
  sr = [],
  tn = null,
  rn = null,
  ln = null,
  It = new Map(),
  Mt = new Map(),
  qe = [],
  uf =
    'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
      ' '
    );
function Zo(e, n) {
  switch (e) {
    case 'focusin':
    case 'focusout':
      tn = null;
      break;
    case 'dragenter':
    case 'dragleave':
      rn = null;
      break;
    case 'mouseover':
    case 'mouseout':
      ln = null;
      break;
    case 'pointerover':
    case 'pointerout':
      It.delete(n.pointerId);
      break;
    case 'gotpointercapture':
    case 'lostpointercapture':
      Mt.delete(n.pointerId);
  }
}
function dt(e, n, t, r, l, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = {
        blockedOn: n,
        domEventName: t,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [l],
      }),
      n !== null && ((n = qt(n)), n !== null && eo(n)),
      e)
    : ((e.eventSystemFlags |= r),
      (n = e.targetContainers),
      l !== null && n.indexOf(l) === -1 && n.push(l),
      e);
}
function sf(e, n, t, r, l) {
  switch (n) {
    case 'focusin':
      return (tn = dt(tn, e, n, t, r, l)), !0;
    case 'dragenter':
      return (rn = dt(rn, e, n, t, r, l)), !0;
    case 'mouseover':
      return (ln = dt(ln, e, n, t, r, l)), !0;
    case 'pointerover':
      var i = l.pointerId;
      return It.set(i, dt(It.get(i) || null, e, n, t, r, l)), !0;
    case 'gotpointercapture':
      return (
        (i = l.pointerId), Mt.set(i, dt(Mt.get(i) || null, e, n, t, r, l)), !0
      );
  }
  return !1;
}
function Us(e) {
  var n = Sn(e.target);
  if (n !== null) {
    var t = jn(n);
    if (t !== null) {
      if (((n = t.tag), n === 13)) {
        if (((n = Ps(t)), n !== null)) {
          (e.blockedOn = n),
            Fs(e.priority, function () {
              Is(t);
            });
          return;
        }
      } else if (n === 3 && t.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = t.tag === 3 ? t.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function kr(e) {
  if (e.blockedOn !== null) return !1;
  for (var n = e.targetContainers; 0 < n.length; ) {
    var t = pi(e.domEventName, e.eventSystemFlags, n[0], e.nativeEvent);
    if (t === null) {
      t = e.nativeEvent;
      var r = new t.constructor(t.type, t);
      (ui = r), t.target.dispatchEvent(r), (ui = null);
    } else return (n = qt(t)), n !== null && eo(n), (e.blockedOn = t), !1;
    n.shift();
  }
  return !0;
}
function Jo(e, n, t) {
  kr(e) && t.delete(n);
}
function af() {
  (di = !1),
    tn !== null && kr(tn) && (tn = null),
    rn !== null && kr(rn) && (rn = null),
    ln !== null && kr(ln) && (ln = null),
    It.forEach(Jo),
    Mt.forEach(Jo);
}
function pt(e, n) {
  e.blockedOn === n &&
    ((e.blockedOn = null),
    di ||
      ((di = !0),
      ye.unstable_scheduleCallback(ye.unstable_NormalPriority, af)));
}
function Ft(e) {
  function n(l) {
    return pt(l, e);
  }
  if (0 < sr.length) {
    pt(sr[0], e);
    for (var t = 1; t < sr.length; t++) {
      var r = sr[t];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    tn !== null && pt(tn, e),
      rn !== null && pt(rn, e),
      ln !== null && pt(ln, e),
      It.forEach(n),
      Mt.forEach(n),
      t = 0;
    t < qe.length;
    t++
  )
    (r = qe[t]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < qe.length && ((t = qe[0]), t.blockedOn === null); )
    Us(t), t.blockedOn === null && qe.shift();
}
var Gn = Xe.ReactCurrentBatchConfig,
  Mr = !0;
function cf(e, n, t, r) {
  var l = R,
    i = Gn.transition;
  Gn.transition = null;
  try {
    (R = 1), no(e, n, t, r);
  } finally {
    (R = l), (Gn.transition = i);
  }
}
function ff(e, n, t, r) {
  var l = R,
    i = Gn.transition;
  Gn.transition = null;
  try {
    (R = 4), no(e, n, t, r);
  } finally {
    (R = l), (Gn.transition = i);
  }
}
function no(e, n, t, r) {
  if (Mr) {
    var l = pi(e, n, t, r);
    if (l === null) Fl(e, n, r, Fr, t), Zo(e, r);
    else if (sf(l, e, n, t, r)) r.stopPropagation();
    else if ((Zo(e, r), n & 4 && -1 < uf.indexOf(e))) {
      for (; l !== null; ) {
        var i = qt(l);
        if (
          (i !== null && Ds(i),
          (i = pi(e, n, t, r)),
          i === null && Fl(e, n, r, Fr, t),
          i === l)
        )
          break;
        l = i;
      }
      l !== null && r.stopPropagation();
    } else Fl(e, n, r, null, t);
  }
}
var Fr = null;
function pi(e, n, t, r) {
  if (((Fr = null), (e = Ji(r)), (e = Sn(e)), e !== null))
    if (((n = jn(e)), n === null)) e = null;
    else if (((t = n.tag), t === 13)) {
      if (((e = Ps(n)), e !== null)) return e;
      e = null;
    } else if (t === 3) {
      if (n.stateNode.current.memoizedState.isDehydrated)
        return n.tag === 3 ? n.stateNode.containerInfo : null;
      e = null;
    } else n !== e && (e = null);
  return (Fr = e), null;
}
function $s(e) {
  switch (e) {
    case 'cancel':
    case 'click':
    case 'close':
    case 'contextmenu':
    case 'copy':
    case 'cut':
    case 'auxclick':
    case 'dblclick':
    case 'dragend':
    case 'dragstart':
    case 'drop':
    case 'focusin':
    case 'focusout':
    case 'input':
    case 'invalid':
    case 'keydown':
    case 'keypress':
    case 'keyup':
    case 'mousedown':
    case 'mouseup':
    case 'paste':
    case 'pause':
    case 'play':
    case 'pointercancel':
    case 'pointerdown':
    case 'pointerup':
    case 'ratechange':
    case 'reset':
    case 'resize':
    case 'seeked':
    case 'submit':
    case 'touchcancel':
    case 'touchend':
    case 'touchstart':
    case 'volumechange':
    case 'change':
    case 'selectionchange':
    case 'textInput':
    case 'compositionstart':
    case 'compositionend':
    case 'compositionupdate':
    case 'beforeblur':
    case 'afterblur':
    case 'beforeinput':
    case 'blur':
    case 'fullscreenchange':
    case 'focus':
    case 'hashchange':
    case 'popstate':
    case 'select':
    case 'selectstart':
      return 1;
    case 'drag':
    case 'dragenter':
    case 'dragexit':
    case 'dragleave':
    case 'dragover':
    case 'mousemove':
    case 'mouseout':
    case 'mouseover':
    case 'pointermove':
    case 'pointerout':
    case 'pointerover':
    case 'scroll':
    case 'toggle':
    case 'touchmove':
    case 'wheel':
    case 'mouseenter':
    case 'mouseleave':
    case 'pointerenter':
    case 'pointerleave':
      return 4;
    case 'message':
      switch (Jc()) {
        case qi:
          return 1;
        case Ts:
          return 4;
        case Dr:
        case qc:
          return 16;
        case Os:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var en = null,
  to = null,
  Er = null;
function Vs() {
  if (Er) return Er;
  var e,
    n = to,
    t = n.length,
    r,
    l = 'value' in en ? en.value : en.textContent,
    i = l.length;
  for (e = 0; e < t && n[e] === l[e]; e++);
  var o = t - e;
  for (r = 1; r <= o && n[t - r] === l[i - r]; r++);
  return (Er = l.slice(e, 1 < r ? 1 - r : void 0));
}
function _r(e) {
  var n = e.keyCode;
  return (
    'charCode' in e
      ? ((e = e.charCode), e === 0 && n === 13 && (e = 13))
      : (e = n),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function ar() {
  return !0;
}
function qo() {
  return !1;
}
function we(e) {
  function n(t, r, l, i, o) {
    (this._reactName = t),
      (this._targetInst = l),
      (this.type = r),
      (this.nativeEvent = i),
      (this.target = o),
      (this.currentTarget = null);
    for (var u in e)
      e.hasOwnProperty(u) && ((t = e[u]), (this[u] = t ? t(i) : i[u]));
    return (
      (this.isDefaultPrevented = (
        i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
      )
        ? ar
        : qo),
      (this.isPropagationStopped = qo),
      this
    );
  }
  return (
    A(n.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var t = this.nativeEvent;
        t &&
          (t.preventDefault
            ? t.preventDefault()
            : typeof t.returnValue != 'unknown' && (t.returnValue = !1),
          (this.isDefaultPrevented = ar));
      },
      stopPropagation: function () {
        var t = this.nativeEvent;
        t &&
          (t.stopPropagation
            ? t.stopPropagation()
            : typeof t.cancelBubble != 'unknown' && (t.cancelBubble = !0),
          (this.isPropagationStopped = ar));
      },
      persist: function () {},
      isPersistent: ar,
    }),
    n
  );
}
var ot = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  ro = we(ot),
  Jt = A({}, ot, { view: 0, detail: 0 }),
  df = we(Jt),
  zl,
  Ll,
  mt,
  il = A({}, Jt, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: lo,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return 'movementX' in e
        ? e.movementX
        : (e !== mt &&
            (mt && e.type === 'mousemove'
              ? ((zl = e.screenX - mt.screenX), (Ll = e.screenY - mt.screenY))
              : (Ll = zl = 0),
            (mt = e)),
          zl);
    },
    movementY: function (e) {
      return 'movementY' in e ? e.movementY : Ll;
    },
  }),
  bo = we(il),
  pf = A({}, il, { dataTransfer: 0 }),
  mf = we(pf),
  hf = A({}, Jt, { relatedTarget: 0 }),
  Tl = we(hf),
  vf = A({}, ot, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  yf = we(vf),
  gf = A({}, ot, {
    clipboardData: function (e) {
      return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
    },
  }),
  wf = we(gf),
  Sf = A({}, ot, { data: 0 }),
  eu = we(Sf),
  kf = {
    Esc: 'Escape',
    Spacebar: ' ',
    Left: 'ArrowLeft',
    Up: 'ArrowUp',
    Right: 'ArrowRight',
    Down: 'ArrowDown',
    Del: 'Delete',
    Win: 'OS',
    Menu: 'ContextMenu',
    Apps: 'ContextMenu',
    Scroll: 'ScrollLock',
    MozPrintableKey: 'Unidentified',
  },
  Ef = {
    8: 'Backspace',
    9: 'Tab',
    12: 'Clear',
    13: 'Enter',
    16: 'Shift',
    17: 'Control',
    18: 'Alt',
    19: 'Pause',
    20: 'CapsLock',
    27: 'Escape',
    32: ' ',
    33: 'PageUp',
    34: 'PageDown',
    35: 'End',
    36: 'Home',
    37: 'ArrowLeft',
    38: 'ArrowUp',
    39: 'ArrowRight',
    40: 'ArrowDown',
    45: 'Insert',
    46: 'Delete',
    112: 'F1',
    113: 'F2',
    114: 'F3',
    115: 'F4',
    116: 'F5',
    117: 'F6',
    118: 'F7',
    119: 'F8',
    120: 'F9',
    121: 'F10',
    122: 'F11',
    123: 'F12',
    144: 'NumLock',
    145: 'ScrollLock',
    224: 'Meta',
  },
  _f = {
    Alt: 'altKey',
    Control: 'ctrlKey',
    Meta: 'metaKey',
    Shift: 'shiftKey',
  };
function xf(e) {
  var n = this.nativeEvent;
  return n.getModifierState ? n.getModifierState(e) : (e = _f[e]) ? !!n[e] : !1;
}
function lo() {
  return xf;
}
var Cf = A({}, Jt, {
    key: function (e) {
      if (e.key) {
        var n = kf[e.key] || e.key;
        if (n !== 'Unidentified') return n;
      }
      return e.type === 'keypress'
        ? ((e = _r(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
        : e.type === 'keydown' || e.type === 'keyup'
        ? Ef[e.keyCode] || 'Unidentified'
        : '';
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: lo,
    charCode: function (e) {
      return e.type === 'keypress' ? _r(e) : 0;
    },
    keyCode: function (e) {
      return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === 'keypress'
        ? _r(e)
        : e.type === 'keydown' || e.type === 'keyup'
        ? e.keyCode
        : 0;
    },
  }),
  Pf = we(Cf),
  Nf = A({}, il, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  nu = we(Nf),
  zf = A({}, Jt, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: lo,
  }),
  Lf = we(zf),
  Tf = A({}, ot, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Of = we(Tf),
  jf = A({}, il, {
    deltaX: function (e) {
      return 'deltaX' in e ? e.deltaX : 'wheelDeltaX' in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return 'deltaY' in e
        ? e.deltaY
        : 'wheelDeltaY' in e
        ? -e.wheelDeltaY
        : 'wheelDelta' in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  Rf = we(jf),
  Df = [9, 13, 27, 32],
  io = He && 'CompositionEvent' in window,
  xt = null;
He && 'documentMode' in document && (xt = document.documentMode);
var If = He && 'TextEvent' in window && !xt,
  As = He && (!io || (xt && 8 < xt && 11 >= xt)),
  tu = ' ',
  ru = !1;
function Ws(e, n) {
  switch (e) {
    case 'keyup':
      return Df.indexOf(n.keyCode) !== -1;
    case 'keydown':
      return n.keyCode !== 229;
    case 'keypress':
    case 'mousedown':
    case 'focusout':
      return !0;
    default:
      return !1;
  }
}
function Bs(e) {
  return (e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null;
}
var Mn = !1;
function Mf(e, n) {
  switch (e) {
    case 'compositionend':
      return Bs(n);
    case 'keypress':
      return n.which !== 32 ? null : ((ru = !0), tu);
    case 'textInput':
      return (e = n.data), e === tu && ru ? null : e;
    default:
      return null;
  }
}
function Ff(e, n) {
  if (Mn)
    return e === 'compositionend' || (!io && Ws(e, n))
      ? ((e = Vs()), (Er = to = en = null), (Mn = !1), e)
      : null;
  switch (e) {
    case 'paste':
      return null;
    case 'keypress':
      if (!(n.ctrlKey || n.altKey || n.metaKey) || (n.ctrlKey && n.altKey)) {
        if (n.char && 1 < n.char.length) return n.char;
        if (n.which) return String.fromCharCode(n.which);
      }
      return null;
    case 'compositionend':
      return As && n.locale !== 'ko' ? null : n.data;
    default:
      return null;
  }
}
var Uf = {
  color: !0,
  date: !0,
  datetime: !0,
  'datetime-local': !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function lu(e) {
  var n = e && e.nodeName && e.nodeName.toLowerCase();
  return n === 'input' ? !!Uf[e.type] : n === 'textarea';
}
function Hs(e, n, t, r) {
  ks(r),
    (n = Ur(n, 'onChange')),
    0 < n.length &&
      ((t = new ro('onChange', 'change', null, t, r)),
      e.push({ event: t, listeners: n }));
}
var Ct = null,
  Ut = null;
function $f(e) {
  na(e, 0);
}
function ol(e) {
  var n = $n(e);
  if (ms(n)) return e;
}
function Vf(e, n) {
  if (e === 'change') return n;
}
var Qs = !1;
if (He) {
  var Ol;
  if (He) {
    var jl = 'oninput' in document;
    if (!jl) {
      var iu = document.createElement('div');
      iu.setAttribute('oninput', 'return;'),
        (jl = typeof iu.oninput == 'function');
    }
    Ol = jl;
  } else Ol = !1;
  Qs = Ol && (!document.documentMode || 9 < document.documentMode);
}
function ou() {
  Ct && (Ct.detachEvent('onpropertychange', Ks), (Ut = Ct = null));
}
function Ks(e) {
  if (e.propertyName === 'value' && ol(Ut)) {
    var n = [];
    Hs(n, Ut, e, Ji(e)), Cs($f, n);
  }
}
function Af(e, n, t) {
  e === 'focusin'
    ? (ou(), (Ct = n), (Ut = t), Ct.attachEvent('onpropertychange', Ks))
    : e === 'focusout' && ou();
}
function Wf(e) {
  if (e === 'selectionchange' || e === 'keyup' || e === 'keydown')
    return ol(Ut);
}
function Bf(e, n) {
  if (e === 'click') return ol(n);
}
function Hf(e, n) {
  if (e === 'input' || e === 'change') return ol(n);
}
function Qf(e, n) {
  return (e === n && (e !== 0 || 1 / e === 1 / n)) || (e !== e && n !== n);
}
var Re = typeof Object.is == 'function' ? Object.is : Qf;
function $t(e, n) {
  if (Re(e, n)) return !0;
  if (typeof e != 'object' || e === null || typeof n != 'object' || n === null)
    return !1;
  var t = Object.keys(e),
    r = Object.keys(n);
  if (t.length !== r.length) return !1;
  for (r = 0; r < t.length; r++) {
    var l = t[r];
    if (!Gl.call(n, l) || !Re(e[l], n[l])) return !1;
  }
  return !0;
}
function uu(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function su(e, n) {
  var t = uu(e);
  e = 0;
  for (var r; t; ) {
    if (t.nodeType === 3) {
      if (((r = e + t.textContent.length), e <= n && r >= n))
        return { node: t, offset: n - e };
      e = r;
    }
    e: {
      for (; t; ) {
        if (t.nextSibling) {
          t = t.nextSibling;
          break e;
        }
        t = t.parentNode;
      }
      t = void 0;
    }
    t = uu(t);
  }
}
function Ys(e, n) {
  return e && n
    ? e === n
      ? !0
      : e && e.nodeType === 3
      ? !1
      : n && n.nodeType === 3
      ? Ys(e, n.parentNode)
      : 'contains' in e
      ? e.contains(n)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(n) & 16)
      : !1
    : !1;
}
function Xs() {
  for (var e = window, n = Or(); n instanceof e.HTMLIFrameElement; ) {
    try {
      var t = typeof n.contentWindow.location.href == 'string';
    } catch {
      t = !1;
    }
    if (t) e = n.contentWindow;
    else break;
    n = Or(e.document);
  }
  return n;
}
function oo(e) {
  var n = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    n &&
    ((n === 'input' &&
      (e.type === 'text' ||
        e.type === 'search' ||
        e.type === 'tel' ||
        e.type === 'url' ||
        e.type === 'password')) ||
      n === 'textarea' ||
      e.contentEditable === 'true')
  );
}
function Kf(e) {
  var n = Xs(),
    t = e.focusedElem,
    r = e.selectionRange;
  if (
    n !== t &&
    t &&
    t.ownerDocument &&
    Ys(t.ownerDocument.documentElement, t)
  ) {
    if (r !== null && oo(t)) {
      if (
        ((n = r.start),
        (e = r.end),
        e === void 0 && (e = n),
        'selectionStart' in t)
      )
        (t.selectionStart = n), (t.selectionEnd = Math.min(e, t.value.length));
      else if (
        ((e = ((n = t.ownerDocument || document) && n.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var l = t.textContent.length,
          i = Math.min(r.start, l);
        (r = r.end === void 0 ? i : Math.min(r.end, l)),
          !e.extend && i > r && ((l = r), (r = i), (i = l)),
          (l = su(t, i));
        var o = su(t, r);
        l &&
          o &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== l.node ||
            e.anchorOffset !== l.offset ||
            e.focusNode !== o.node ||
            e.focusOffset !== o.offset) &&
          ((n = n.createRange()),
          n.setStart(l.node, l.offset),
          e.removeAllRanges(),
          i > r
            ? (e.addRange(n), e.extend(o.node, o.offset))
            : (n.setEnd(o.node, o.offset), e.addRange(n)));
      }
    }
    for (n = [], e = t; (e = e.parentNode); )
      e.nodeType === 1 &&
        n.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof t.focus == 'function' && t.focus(), t = 0; t < n.length; t++)
      (e = n[t]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var Yf = He && 'documentMode' in document && 11 >= document.documentMode,
  Fn = null,
  mi = null,
  Pt = null,
  hi = !1;
function au(e, n, t) {
  var r = t.window === t ? t.document : t.nodeType === 9 ? t : t.ownerDocument;
  hi ||
    Fn == null ||
    Fn !== Or(r) ||
    ((r = Fn),
    'selectionStart' in r && oo(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (Pt && $t(Pt, r)) ||
      ((Pt = r),
      (r = Ur(mi, 'onSelect')),
      0 < r.length &&
        ((n = new ro('onSelect', 'select', null, n, t)),
        e.push({ event: n, listeners: r }),
        (n.target = Fn))));
}
function cr(e, n) {
  var t = {};
  return (
    (t[e.toLowerCase()] = n.toLowerCase()),
    (t['Webkit' + e] = 'webkit' + n),
    (t['Moz' + e] = 'moz' + n),
    t
  );
}
var Un = {
    animationend: cr('Animation', 'AnimationEnd'),
    animationiteration: cr('Animation', 'AnimationIteration'),
    animationstart: cr('Animation', 'AnimationStart'),
    transitionend: cr('Transition', 'TransitionEnd'),
  },
  Rl = {},
  Gs = {};
He &&
  ((Gs = document.createElement('div').style),
  'AnimationEvent' in window ||
    (delete Un.animationend.animation,
    delete Un.animationiteration.animation,
    delete Un.animationstart.animation),
  'TransitionEvent' in window || delete Un.transitionend.transition);
function ul(e) {
  if (Rl[e]) return Rl[e];
  if (!Un[e]) return e;
  var n = Un[e],
    t;
  for (t in n) if (n.hasOwnProperty(t) && t in Gs) return (Rl[e] = n[t]);
  return e;
}
var Zs = ul('animationend'),
  Js = ul('animationiteration'),
  qs = ul('animationstart'),
  bs = ul('transitionend'),
  ea = new Map(),
  cu =
    'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
      ' '
    );
function pn(e, n) {
  ea.set(e, n), On(n, [e]);
}
for (var Dl = 0; Dl < cu.length; Dl++) {
  var Il = cu[Dl],
    Xf = Il.toLowerCase(),
    Gf = Il[0].toUpperCase() + Il.slice(1);
  pn(Xf, 'on' + Gf);
}
pn(Zs, 'onAnimationEnd');
pn(Js, 'onAnimationIteration');
pn(qs, 'onAnimationStart');
pn('dblclick', 'onDoubleClick');
pn('focusin', 'onFocus');
pn('focusout', 'onBlur');
pn(bs, 'onTransitionEnd');
qn('onMouseEnter', ['mouseout', 'mouseover']);
qn('onMouseLeave', ['mouseout', 'mouseover']);
qn('onPointerEnter', ['pointerout', 'pointerover']);
qn('onPointerLeave', ['pointerout', 'pointerover']);
On(
  'onChange',
  'change click focusin focusout input keydown keyup selectionchange'.split(' ')
);
On(
  'onSelect',
  'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
    ' '
  )
);
On('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']);
On(
  'onCompositionEnd',
  'compositionend focusout keydown keypress keyup mousedown'.split(' ')
);
On(
  'onCompositionStart',
  'compositionstart focusout keydown keypress keyup mousedown'.split(' ')
);
On(
  'onCompositionUpdate',
  'compositionupdate focusout keydown keypress keyup mousedown'.split(' ')
);
var kt =
    'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
      ' '
    ),
  Zf = new Set('cancel close invalid load scroll toggle'.split(' ').concat(kt));
function fu(e, n, t) {
  var r = e.type || 'unknown-event';
  (e.currentTarget = t), Yc(r, n, void 0, e), (e.currentTarget = null);
}
function na(e, n) {
  n = (n & 4) !== 0;
  for (var t = 0; t < e.length; t++) {
    var r = e[t],
      l = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (n)
        for (var o = r.length - 1; 0 <= o; o--) {
          var u = r[o],
            s = u.instance,
            c = u.currentTarget;
          if (((u = u.listener), s !== i && l.isPropagationStopped())) break e;
          fu(l, u, c), (i = s);
        }
      else
        for (o = 0; o < r.length; o++) {
          if (
            ((u = r[o]),
            (s = u.instance),
            (c = u.currentTarget),
            (u = u.listener),
            s !== i && l.isPropagationStopped())
          )
            break e;
          fu(l, u, c), (i = s);
        }
    }
  }
  if (Rr) throw ((e = ci), (Rr = !1), (ci = null), e);
}
function I(e, n) {
  var t = n[Si];
  t === void 0 && (t = n[Si] = new Set());
  var r = e + '__bubble';
  t.has(r) || (ta(n, e, 2, !1), t.add(r));
}
function Ml(e, n, t) {
  var r = 0;
  n && (r |= 4), ta(t, e, r, n);
}
var fr = '_reactListening' + Math.random().toString(36).slice(2);
function Vt(e) {
  if (!e[fr]) {
    (e[fr] = !0),
      as.forEach(function (t) {
        t !== 'selectionchange' && (Zf.has(t) || Ml(t, !1, e), Ml(t, !0, e));
      });
    var n = e.nodeType === 9 ? e : e.ownerDocument;
    n === null || n[fr] || ((n[fr] = !0), Ml('selectionchange', !1, n));
  }
}
function ta(e, n, t, r) {
  switch ($s(n)) {
    case 1:
      var l = cf;
      break;
    case 4:
      l = ff;
      break;
    default:
      l = no;
  }
  (t = l.bind(null, n, t, e)),
    (l = void 0),
    !ai ||
      (n !== 'touchstart' && n !== 'touchmove' && n !== 'wheel') ||
      (l = !0),
    r
      ? l !== void 0
        ? e.addEventListener(n, t, { capture: !0, passive: l })
        : e.addEventListener(n, t, !0)
      : l !== void 0
      ? e.addEventListener(n, t, { passive: l })
      : e.addEventListener(n, t, !1);
}
function Fl(e, n, t, r, l) {
  var i = r;
  if (!(n & 1) && !(n & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var o = r.tag;
      if (o === 3 || o === 4) {
        var u = r.stateNode.containerInfo;
        if (u === l || (u.nodeType === 8 && u.parentNode === l)) break;
        if (o === 4)
          for (o = r.return; o !== null; ) {
            var s = o.tag;
            if (
              (s === 3 || s === 4) &&
              ((s = o.stateNode.containerInfo),
              s === l || (s.nodeType === 8 && s.parentNode === l))
            )
              return;
            o = o.return;
          }
        for (; u !== null; ) {
          if (((o = Sn(u)), o === null)) return;
          if (((s = o.tag), s === 5 || s === 6)) {
            r = i = o;
            continue e;
          }
          u = u.parentNode;
        }
      }
      r = r.return;
    }
  Cs(function () {
    var c = i,
      h = Ji(t),
      m = [];
    e: {
      var p = ea.get(e);
      if (p !== void 0) {
        var g = ro,
          w = e;
        switch (e) {
          case 'keypress':
            if (_r(t) === 0) break e;
          case 'keydown':
          case 'keyup':
            g = Pf;
            break;
          case 'focusin':
            (w = 'focus'), (g = Tl);
            break;
          case 'focusout':
            (w = 'blur'), (g = Tl);
            break;
          case 'beforeblur':
          case 'afterblur':
            g = Tl;
            break;
          case 'click':
            if (t.button === 2) break e;
          case 'auxclick':
          case 'dblclick':
          case 'mousedown':
          case 'mousemove':
          case 'mouseup':
          case 'mouseout':
          case 'mouseover':
          case 'contextmenu':
            g = bo;
            break;
          case 'drag':
          case 'dragend':
          case 'dragenter':
          case 'dragexit':
          case 'dragleave':
          case 'dragover':
          case 'dragstart':
          case 'drop':
            g = mf;
            break;
          case 'touchcancel':
          case 'touchend':
          case 'touchmove':
          case 'touchstart':
            g = Lf;
            break;
          case Zs:
          case Js:
          case qs:
            g = yf;
            break;
          case bs:
            g = Of;
            break;
          case 'scroll':
            g = df;
            break;
          case 'wheel':
            g = Rf;
            break;
          case 'copy':
          case 'cut':
          case 'paste':
            g = wf;
            break;
          case 'gotpointercapture':
          case 'lostpointercapture':
          case 'pointercancel':
          case 'pointerdown':
          case 'pointermove':
          case 'pointerout':
          case 'pointerover':
          case 'pointerup':
            g = nu;
        }
        var S = (n & 4) !== 0,
          F = !S && e === 'scroll',
          f = S ? (p !== null ? p + 'Capture' : null) : p;
        S = [];
        for (var a = c, d; a !== null; ) {
          d = a;
          var v = d.stateNode;
          if (
            (d.tag === 5 &&
              v !== null &&
              ((d = v),
              f !== null && ((v = Dt(a, f)), v != null && S.push(At(a, v, d)))),
            F)
          )
            break;
          a = a.return;
        }
        0 < S.length &&
          ((p = new g(p, w, null, t, h)), m.push({ event: p, listeners: S }));
      }
    }
    if (!(n & 7)) {
      e: {
        if (
          ((p = e === 'mouseover' || e === 'pointerover'),
          (g = e === 'mouseout' || e === 'pointerout'),
          p &&
            t !== ui &&
            (w = t.relatedTarget || t.fromElement) &&
            (Sn(w) || w[Qe]))
        )
          break e;
        if (
          (g || p) &&
          ((p =
            h.window === h
              ? h
              : (p = h.ownerDocument)
              ? p.defaultView || p.parentWindow
              : window),
          g
            ? ((w = t.relatedTarget || t.toElement),
              (g = c),
              (w = w ? Sn(w) : null),
              w !== null &&
                ((F = jn(w)), w !== F || (w.tag !== 5 && w.tag !== 6)) &&
                (w = null))
            : ((g = null), (w = c)),
          g !== w)
        ) {
          if (
            ((S = bo),
            (v = 'onMouseLeave'),
            (f = 'onMouseEnter'),
            (a = 'mouse'),
            (e === 'pointerout' || e === 'pointerover') &&
              ((S = nu),
              (v = 'onPointerLeave'),
              (f = 'onPointerEnter'),
              (a = 'pointer')),
            (F = g == null ? p : $n(g)),
            (d = w == null ? p : $n(w)),
            (p = new S(v, a + 'leave', g, t, h)),
            (p.target = F),
            (p.relatedTarget = d),
            (v = null),
            Sn(h) === c &&
              ((S = new S(f, a + 'enter', w, t, h)),
              (S.target = d),
              (S.relatedTarget = F),
              (v = S)),
            (F = v),
            g && w)
          )
            n: {
              for (S = g, f = w, a = 0, d = S; d; d = Rn(d)) a++;
              for (d = 0, v = f; v; v = Rn(v)) d++;
              for (; 0 < a - d; ) (S = Rn(S)), a--;
              for (; 0 < d - a; ) (f = Rn(f)), d--;
              for (; a--; ) {
                if (S === f || (f !== null && S === f.alternate)) break n;
                (S = Rn(S)), (f = Rn(f));
              }
              S = null;
            }
          else S = null;
          g !== null && du(m, p, g, S, !1),
            w !== null && F !== null && du(m, F, w, S, !0);
        }
      }
      e: {
        if (
          ((p = c ? $n(c) : window),
          (g = p.nodeName && p.nodeName.toLowerCase()),
          g === 'select' || (g === 'input' && p.type === 'file'))
        )
          var E = Vf;
        else if (lu(p))
          if (Qs) E = Hf;
          else {
            E = Wf;
            var x = Af;
          }
        else
          (g = p.nodeName) &&
            g.toLowerCase() === 'input' &&
            (p.type === 'checkbox' || p.type === 'radio') &&
            (E = Bf);
        if (E && (E = E(e, c))) {
          Hs(m, E, t, h);
          break e;
        }
        x && x(e, p, c),
          e === 'focusout' &&
            (x = p._wrapperState) &&
            x.controlled &&
            p.type === 'number' &&
            ti(p, 'number', p.value);
      }
      switch (((x = c ? $n(c) : window), e)) {
        case 'focusin':
          (lu(x) || x.contentEditable === 'true') &&
            ((Fn = x), (mi = c), (Pt = null));
          break;
        case 'focusout':
          Pt = mi = Fn = null;
          break;
        case 'mousedown':
          hi = !0;
          break;
        case 'contextmenu':
        case 'mouseup':
        case 'dragend':
          (hi = !1), au(m, t, h);
          break;
        case 'selectionchange':
          if (Yf) break;
        case 'keydown':
        case 'keyup':
          au(m, t, h);
      }
      var C;
      if (io)
        e: {
          switch (e) {
            case 'compositionstart':
              var P = 'onCompositionStart';
              break e;
            case 'compositionend':
              P = 'onCompositionEnd';
              break e;
            case 'compositionupdate':
              P = 'onCompositionUpdate';
              break e;
          }
          P = void 0;
        }
      else
        Mn
          ? Ws(e, t) && (P = 'onCompositionEnd')
          : e === 'keydown' && t.keyCode === 229 && (P = 'onCompositionStart');
      P &&
        (As &&
          t.locale !== 'ko' &&
          (Mn || P !== 'onCompositionStart'
            ? P === 'onCompositionEnd' && Mn && (C = Vs())
            : ((en = h),
              (to = 'value' in en ? en.value : en.textContent),
              (Mn = !0))),
        (x = Ur(c, P)),
        0 < x.length &&
          ((P = new eu(P, e, null, t, h)),
          m.push({ event: P, listeners: x }),
          C ? (P.data = C) : ((C = Bs(t)), C !== null && (P.data = C)))),
        (C = If ? Mf(e, t) : Ff(e, t)) &&
          ((c = Ur(c, 'onBeforeInput')),
          0 < c.length &&
            ((h = new eu('onBeforeInput', 'beforeinput', null, t, h)),
            m.push({ event: h, listeners: c }),
            (h.data = C)));
    }
    na(m, n);
  });
}
function At(e, n, t) {
  return { instance: e, listener: n, currentTarget: t };
}
function Ur(e, n) {
  for (var t = n + 'Capture', r = []; e !== null; ) {
    var l = e,
      i = l.stateNode;
    l.tag === 5 &&
      i !== null &&
      ((l = i),
      (i = Dt(e, t)),
      i != null && r.unshift(At(e, i, l)),
      (i = Dt(e, n)),
      i != null && r.push(At(e, i, l))),
      (e = e.return);
  }
  return r;
}
function Rn(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function du(e, n, t, r, l) {
  for (var i = n._reactName, o = []; t !== null && t !== r; ) {
    var u = t,
      s = u.alternate,
      c = u.stateNode;
    if (s !== null && s === r) break;
    u.tag === 5 &&
      c !== null &&
      ((u = c),
      l
        ? ((s = Dt(t, i)), s != null && o.unshift(At(t, s, u)))
        : l || ((s = Dt(t, i)), s != null && o.push(At(t, s, u)))),
      (t = t.return);
  }
  o.length !== 0 && e.push({ event: n, listeners: o });
}
var Jf = /\r\n?/g,
  qf = /\u0000|\uFFFD/g;
function pu(e) {
  return (typeof e == 'string' ? e : '' + e)
    .replace(
      Jf,
      `
`
    )
    .replace(qf, '');
}
function dr(e, n, t) {
  if (((n = pu(n)), pu(e) !== n && t)) throw Error(y(425));
}
function $r() {}
var vi = null,
  yi = null;
function gi(e, n) {
  return (
    e === 'textarea' ||
    e === 'noscript' ||
    typeof n.children == 'string' ||
    typeof n.children == 'number' ||
    (typeof n.dangerouslySetInnerHTML == 'object' &&
      n.dangerouslySetInnerHTML !== null &&
      n.dangerouslySetInnerHTML.__html != null)
  );
}
var wi = typeof setTimeout == 'function' ? setTimeout : void 0,
  bf = typeof clearTimeout == 'function' ? clearTimeout : void 0,
  mu = typeof Promise == 'function' ? Promise : void 0,
  ed =
    typeof queueMicrotask == 'function'
      ? queueMicrotask
      : typeof mu < 'u'
      ? function (e) {
          return mu.resolve(null).then(e).catch(nd);
        }
      : wi;
function nd(e) {
  setTimeout(function () {
    throw e;
  });
}
function Ul(e, n) {
  var t = n,
    r = 0;
  do {
    var l = t.nextSibling;
    if ((e.removeChild(t), l && l.nodeType === 8))
      if (((t = l.data), t === '/$')) {
        if (r === 0) {
          e.removeChild(l), Ft(n);
          return;
        }
        r--;
      } else (t !== '$' && t !== '$?' && t !== '$!') || r++;
    t = l;
  } while (t);
  Ft(n);
}
function on(e) {
  for (; e != null; e = e.nextSibling) {
    var n = e.nodeType;
    if (n === 1 || n === 3) break;
    if (n === 8) {
      if (((n = e.data), n === '$' || n === '$!' || n === '$?')) break;
      if (n === '/$') return null;
    }
  }
  return e;
}
function hu(e) {
  e = e.previousSibling;
  for (var n = 0; e; ) {
    if (e.nodeType === 8) {
      var t = e.data;
      if (t === '$' || t === '$!' || t === '$?') {
        if (n === 0) return e;
        n--;
      } else t === '/$' && n++;
    }
    e = e.previousSibling;
  }
  return null;
}
var ut = Math.random().toString(36).slice(2),
  Me = '__reactFiber$' + ut,
  Wt = '__reactProps$' + ut,
  Qe = '__reactContainer$' + ut,
  Si = '__reactEvents$' + ut,
  td = '__reactListeners$' + ut,
  rd = '__reactHandles$' + ut;
function Sn(e) {
  var n = e[Me];
  if (n) return n;
  for (var t = e.parentNode; t; ) {
    if ((n = t[Qe] || t[Me])) {
      if (
        ((t = n.alternate),
        n.child !== null || (t !== null && t.child !== null))
      )
        for (e = hu(e); e !== null; ) {
          if ((t = e[Me])) return t;
          e = hu(e);
        }
      return n;
    }
    (e = t), (t = e.parentNode);
  }
  return null;
}
function qt(e) {
  return (
    (e = e[Me] || e[Qe]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function $n(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(y(33));
}
function sl(e) {
  return e[Wt] || null;
}
var ki = [],
  Vn = -1;
function mn(e) {
  return { current: e };
}
function M(e) {
  0 > Vn || ((e.current = ki[Vn]), (ki[Vn] = null), Vn--);
}
function D(e, n) {
  Vn++, (ki[Vn] = e.current), (e.current = n);
}
var dn = {},
  le = mn(dn),
  fe = mn(!1),
  Pn = dn;
function bn(e, n) {
  var t = e.type.contextTypes;
  if (!t) return dn;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === n)
    return r.__reactInternalMemoizedMaskedChildContext;
  var l = {},
    i;
  for (i in t) l[i] = n[i];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = n),
      (e.__reactInternalMemoizedMaskedChildContext = l)),
    l
  );
}
function de(e) {
  return (e = e.childContextTypes), e != null;
}
function Vr() {
  M(fe), M(le);
}
function vu(e, n, t) {
  if (le.current !== dn) throw Error(y(168));
  D(le, n), D(fe, t);
}
function ra(e, n, t) {
  var r = e.stateNode;
  if (((n = n.childContextTypes), typeof r.getChildContext != 'function'))
    return t;
  r = r.getChildContext();
  for (var l in r) if (!(l in n)) throw Error(y(108, Vc(e) || 'Unknown', l));
  return A({}, t, r);
}
function Ar(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || dn),
    (Pn = le.current),
    D(le, e),
    D(fe, fe.current),
    !0
  );
}
function yu(e, n, t) {
  var r = e.stateNode;
  if (!r) throw Error(y(169));
  t
    ? ((e = ra(e, n, Pn)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      M(fe),
      M(le),
      D(le, e))
    : M(fe),
    D(fe, t);
}
var Ve = null,
  al = !1,
  $l = !1;
function la(e) {
  Ve === null ? (Ve = [e]) : Ve.push(e);
}
function ld(e) {
  (al = !0), la(e);
}
function hn() {
  if (!$l && Ve !== null) {
    $l = !0;
    var e = 0,
      n = R;
    try {
      var t = Ve;
      for (R = 1; e < t.length; e++) {
        var r = t[e];
        do r = r(!0);
        while (r !== null);
      }
      (Ve = null), (al = !1);
    } catch (l) {
      throw (Ve !== null && (Ve = Ve.slice(e + 1)), Ls(qi, hn), l);
    } finally {
      (R = n), ($l = !1);
    }
  }
  return null;
}
var An = [],
  Wn = 0,
  Wr = null,
  Br = 0,
  Se = [],
  ke = 0,
  Nn = null,
  Ae = 1,
  We = '';
function gn(e, n) {
  (An[Wn++] = Br), (An[Wn++] = Wr), (Wr = e), (Br = n);
}
function ia(e, n, t) {
  (Se[ke++] = Ae), (Se[ke++] = We), (Se[ke++] = Nn), (Nn = e);
  var r = Ae;
  e = We;
  var l = 32 - Oe(r) - 1;
  (r &= ~(1 << l)), (t += 1);
  var i = 32 - Oe(n) + l;
  if (30 < i) {
    var o = l - (l % 5);
    (i = (r & ((1 << o) - 1)).toString(32)),
      (r >>= o),
      (l -= o),
      (Ae = (1 << (32 - Oe(n) + l)) | (t << l) | r),
      (We = i + e);
  } else (Ae = (1 << i) | (t << l) | r), (We = e);
}
function uo(e) {
  e.return !== null && (gn(e, 1), ia(e, 1, 0));
}
function so(e) {
  for (; e === Wr; )
    (Wr = An[--Wn]), (An[Wn] = null), (Br = An[--Wn]), (An[Wn] = null);
  for (; e === Nn; )
    (Nn = Se[--ke]),
      (Se[ke] = null),
      (We = Se[--ke]),
      (Se[ke] = null),
      (Ae = Se[--ke]),
      (Se[ke] = null);
}
var ve = null,
  he = null,
  U = !1,
  Te = null;
function oa(e, n) {
  var t = Ee(5, null, null, 0);
  (t.elementType = 'DELETED'),
    (t.stateNode = n),
    (t.return = e),
    (n = e.deletions),
    n === null ? ((e.deletions = [t]), (e.flags |= 16)) : n.push(t);
}
function gu(e, n) {
  switch (e.tag) {
    case 5:
      var t = e.type;
      return (
        (n =
          n.nodeType !== 1 || t.toLowerCase() !== n.nodeName.toLowerCase()
            ? null
            : n),
        n !== null
          ? ((e.stateNode = n), (ve = e), (he = on(n.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (n = e.pendingProps === '' || n.nodeType !== 3 ? null : n),
        n !== null ? ((e.stateNode = n), (ve = e), (he = null), !0) : !1
      );
    case 13:
      return (
        (n = n.nodeType !== 8 ? null : n),
        n !== null
          ? ((t = Nn !== null ? { id: Ae, overflow: We } : null),
            (e.memoizedState = {
              dehydrated: n,
              treeContext: t,
              retryLane: 1073741824,
            }),
            (t = Ee(18, null, null, 0)),
            (t.stateNode = n),
            (t.return = e),
            (e.child = t),
            (ve = e),
            (he = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Ei(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function _i(e) {
  if (U) {
    var n = he;
    if (n) {
      var t = n;
      if (!gu(e, n)) {
        if (Ei(e)) throw Error(y(418));
        n = on(t.nextSibling);
        var r = ve;
        n && gu(e, n)
          ? oa(r, t)
          : ((e.flags = (e.flags & -4097) | 2), (U = !1), (ve = e));
      }
    } else {
      if (Ei(e)) throw Error(y(418));
      (e.flags = (e.flags & -4097) | 2), (U = !1), (ve = e);
    }
  }
}
function wu(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  ve = e;
}
function pr(e) {
  if (e !== ve) return !1;
  if (!U) return wu(e), (U = !0), !1;
  var n;
  if (
    ((n = e.tag !== 3) &&
      !(n = e.tag !== 5) &&
      ((n = e.type),
      (n = n !== 'head' && n !== 'body' && !gi(e.type, e.memoizedProps))),
    n && (n = he))
  ) {
    if (Ei(e)) throw (ua(), Error(y(418)));
    for (; n; ) oa(e, n), (n = on(n.nextSibling));
  }
  if ((wu(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(y(317));
    e: {
      for (e = e.nextSibling, n = 0; e; ) {
        if (e.nodeType === 8) {
          var t = e.data;
          if (t === '/$') {
            if (n === 0) {
              he = on(e.nextSibling);
              break e;
            }
            n--;
          } else (t !== '$' && t !== '$!' && t !== '$?') || n++;
        }
        e = e.nextSibling;
      }
      he = null;
    }
  } else he = ve ? on(e.stateNode.nextSibling) : null;
  return !0;
}
function ua() {
  for (var e = he; e; ) e = on(e.nextSibling);
}
function et() {
  (he = ve = null), (U = !1);
}
function ao(e) {
  Te === null ? (Te = [e]) : Te.push(e);
}
var id = Xe.ReactCurrentBatchConfig;
function ze(e, n) {
  if (e && e.defaultProps) {
    (n = A({}, n)), (e = e.defaultProps);
    for (var t in e) n[t] === void 0 && (n[t] = e[t]);
    return n;
  }
  return n;
}
var Hr = mn(null),
  Qr = null,
  Bn = null,
  co = null;
function fo() {
  co = Bn = Qr = null;
}
function po(e) {
  var n = Hr.current;
  M(Hr), (e._currentValue = n);
}
function xi(e, n, t) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & n) !== n
        ? ((e.childLanes |= n), r !== null && (r.childLanes |= n))
        : r !== null && (r.childLanes & n) !== n && (r.childLanes |= n),
      e === t)
    )
      break;
    e = e.return;
  }
}
function Zn(e, n) {
  (Qr = e),
    (co = Bn = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & n && (ce = !0), (e.firstContext = null));
}
function xe(e) {
  var n = e._currentValue;
  if (co !== e)
    if (((e = { context: e, memoizedValue: n, next: null }), Bn === null)) {
      if (Qr === null) throw Error(y(308));
      (Bn = e), (Qr.dependencies = { lanes: 0, firstContext: e });
    } else Bn = Bn.next = e;
  return n;
}
var kn = null;
function mo(e) {
  kn === null ? (kn = [e]) : kn.push(e);
}
function sa(e, n, t, r) {
  var l = n.interleaved;
  return (
    l === null ? ((t.next = t), mo(n)) : ((t.next = l.next), (l.next = t)),
    (n.interleaved = t),
    Ke(e, r)
  );
}
function Ke(e, n) {
  e.lanes |= n;
  var t = e.alternate;
  for (t !== null && (t.lanes |= n), t = e, e = e.return; e !== null; )
    (e.childLanes |= n),
      (t = e.alternate),
      t !== null && (t.childLanes |= n),
      (t = e),
      (e = e.return);
  return t.tag === 3 ? t.stateNode : null;
}
var Je = !1;
function ho(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function aa(e, n) {
  (e = e.updateQueue),
    n.updateQueue === e &&
      (n.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function Be(e, n) {
  return {
    eventTime: e,
    lane: n,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function un(e, n, t) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), j & 2)) {
    var l = r.pending;
    return (
      l === null ? (n.next = n) : ((n.next = l.next), (l.next = n)),
      (r.pending = n),
      Ke(e, t)
    );
  }
  return (
    (l = r.interleaved),
    l === null ? ((n.next = n), mo(r)) : ((n.next = l.next), (l.next = n)),
    (r.interleaved = n),
    Ke(e, t)
  );
}
function xr(e, n, t) {
  if (
    ((n = n.updateQueue), n !== null && ((n = n.shared), (t & 4194240) !== 0))
  ) {
    var r = n.lanes;
    (r &= e.pendingLanes), (t |= r), (n.lanes = t), bi(e, t);
  }
}
function Su(e, n) {
  var t = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), t === r)) {
    var l = null,
      i = null;
    if (((t = t.firstBaseUpdate), t !== null)) {
      do {
        var o = {
          eventTime: t.eventTime,
          lane: t.lane,
          tag: t.tag,
          payload: t.payload,
          callback: t.callback,
          next: null,
        };
        i === null ? (l = i = o) : (i = i.next = o), (t = t.next);
      } while (t !== null);
      i === null ? (l = i = n) : (i = i.next = n);
    } else l = i = n;
    (t = {
      baseState: r.baseState,
      firstBaseUpdate: l,
      lastBaseUpdate: i,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = t);
    return;
  }
  (e = t.lastBaseUpdate),
    e === null ? (t.firstBaseUpdate = n) : (e.next = n),
    (t.lastBaseUpdate = n);
}
function Kr(e, n, t, r) {
  var l = e.updateQueue;
  Je = !1;
  var i = l.firstBaseUpdate,
    o = l.lastBaseUpdate,
    u = l.shared.pending;
  if (u !== null) {
    l.shared.pending = null;
    var s = u,
      c = s.next;
    (s.next = null), o === null ? (i = c) : (o.next = c), (o = s);
    var h = e.alternate;
    h !== null &&
      ((h = h.updateQueue),
      (u = h.lastBaseUpdate),
      u !== o &&
        (u === null ? (h.firstBaseUpdate = c) : (u.next = c),
        (h.lastBaseUpdate = s)));
  }
  if (i !== null) {
    var m = l.baseState;
    (o = 0), (h = c = s = null), (u = i);
    do {
      var p = u.lane,
        g = u.eventTime;
      if ((r & p) === p) {
        h !== null &&
          (h = h.next =
            {
              eventTime: g,
              lane: 0,
              tag: u.tag,
              payload: u.payload,
              callback: u.callback,
              next: null,
            });
        e: {
          var w = e,
            S = u;
          switch (((p = n), (g = t), S.tag)) {
            case 1:
              if (((w = S.payload), typeof w == 'function')) {
                m = w.call(g, m, p);
                break e;
              }
              m = w;
              break e;
            case 3:
              w.flags = (w.flags & -65537) | 128;
            case 0:
              if (
                ((w = S.payload),
                (p = typeof w == 'function' ? w.call(g, m, p) : w),
                p == null)
              )
                break e;
              m = A({}, m, p);
              break e;
            case 2:
              Je = !0;
          }
        }
        u.callback !== null &&
          u.lane !== 0 &&
          ((e.flags |= 64),
          (p = l.effects),
          p === null ? (l.effects = [u]) : p.push(u));
      } else
        (g = {
          eventTime: g,
          lane: p,
          tag: u.tag,
          payload: u.payload,
          callback: u.callback,
          next: null,
        }),
          h === null ? ((c = h = g), (s = m)) : (h = h.next = g),
          (o |= p);
      if (((u = u.next), u === null)) {
        if (((u = l.shared.pending), u === null)) break;
        (p = u),
          (u = p.next),
          (p.next = null),
          (l.lastBaseUpdate = p),
          (l.shared.pending = null);
      }
    } while (!0);
    if (
      (h === null && (s = m),
      (l.baseState = s),
      (l.firstBaseUpdate = c),
      (l.lastBaseUpdate = h),
      (n = l.shared.interleaved),
      n !== null)
    ) {
      l = n;
      do (o |= l.lane), (l = l.next);
      while (l !== n);
    } else i === null && (l.shared.lanes = 0);
    (Ln |= o), (e.lanes = o), (e.memoizedState = m);
  }
}
function ku(e, n, t) {
  if (((e = n.effects), (n.effects = null), e !== null))
    for (n = 0; n < e.length; n++) {
      var r = e[n],
        l = r.callback;
      if (l !== null) {
        if (((r.callback = null), (r = t), typeof l != 'function'))
          throw Error(y(191, l));
        l.call(r);
      }
    }
}
var ca = new ss.Component().refs;
function Ci(e, n, t, r) {
  (n = e.memoizedState),
    (t = t(r, n)),
    (t = t == null ? n : A({}, n, t)),
    (e.memoizedState = t),
    e.lanes === 0 && (e.updateQueue.baseState = t);
}
var cl = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? jn(e) === e : !1;
  },
  enqueueSetState: function (e, n, t) {
    e = e._reactInternals;
    var r = oe(),
      l = an(e),
      i = Be(r, l);
    (i.payload = n),
      t != null && (i.callback = t),
      (n = un(e, i, l)),
      n !== null && (je(n, e, l, r), xr(n, e, l));
  },
  enqueueReplaceState: function (e, n, t) {
    e = e._reactInternals;
    var r = oe(),
      l = an(e),
      i = Be(r, l);
    (i.tag = 1),
      (i.payload = n),
      t != null && (i.callback = t),
      (n = un(e, i, l)),
      n !== null && (je(n, e, l, r), xr(n, e, l));
  },
  enqueueForceUpdate: function (e, n) {
    e = e._reactInternals;
    var t = oe(),
      r = an(e),
      l = Be(t, r);
    (l.tag = 2),
      n != null && (l.callback = n),
      (n = un(e, l, r)),
      n !== null && (je(n, e, r, t), xr(n, e, r));
  },
};
function Eu(e, n, t, r, l, i, o) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == 'function'
      ? e.shouldComponentUpdate(r, i, o)
      : n.prototype && n.prototype.isPureReactComponent
      ? !$t(t, r) || !$t(l, i)
      : !0
  );
}
function fa(e, n, t) {
  var r = !1,
    l = dn,
    i = n.contextType;
  return (
    typeof i == 'object' && i !== null
      ? (i = xe(i))
      : ((l = de(n) ? Pn : le.current),
        (r = n.contextTypes),
        (i = (r = r != null) ? bn(e, l) : dn)),
    (n = new n(t, i)),
    (e.memoizedState = n.state !== null && n.state !== void 0 ? n.state : null),
    (n.updater = cl),
    (e.stateNode = n),
    (n._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = l),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    n
  );
}
function _u(e, n, t, r) {
  (e = n.state),
    typeof n.componentWillReceiveProps == 'function' &&
      n.componentWillReceiveProps(t, r),
    typeof n.UNSAFE_componentWillReceiveProps == 'function' &&
      n.UNSAFE_componentWillReceiveProps(t, r),
    n.state !== e && cl.enqueueReplaceState(n, n.state, null);
}
function Pi(e, n, t, r) {
  var l = e.stateNode;
  (l.props = t), (l.state = e.memoizedState), (l.refs = ca), ho(e);
  var i = n.contextType;
  typeof i == 'object' && i !== null
    ? (l.context = xe(i))
    : ((i = de(n) ? Pn : le.current), (l.context = bn(e, i))),
    (l.state = e.memoizedState),
    (i = n.getDerivedStateFromProps),
    typeof i == 'function' && (Ci(e, n, i, t), (l.state = e.memoizedState)),
    typeof n.getDerivedStateFromProps == 'function' ||
      typeof l.getSnapshotBeforeUpdate == 'function' ||
      (typeof l.UNSAFE_componentWillMount != 'function' &&
        typeof l.componentWillMount != 'function') ||
      ((n = l.state),
      typeof l.componentWillMount == 'function' && l.componentWillMount(),
      typeof l.UNSAFE_componentWillMount == 'function' &&
        l.UNSAFE_componentWillMount(),
      n !== l.state && cl.enqueueReplaceState(l, l.state, null),
      Kr(e, t, l, r),
      (l.state = e.memoizedState)),
    typeof l.componentDidMount == 'function' && (e.flags |= 4194308);
}
function ht(e, n, t) {
  if (
    ((e = t.ref), e !== null && typeof e != 'function' && typeof e != 'object')
  ) {
    if (t._owner) {
      if (((t = t._owner), t)) {
        if (t.tag !== 1) throw Error(y(309));
        var r = t.stateNode;
      }
      if (!r) throw Error(y(147, e));
      var l = r,
        i = '' + e;
      return n !== null &&
        n.ref !== null &&
        typeof n.ref == 'function' &&
        n.ref._stringRef === i
        ? n.ref
        : ((n = function (o) {
            var u = l.refs;
            u === ca && (u = l.refs = {}),
              o === null ? delete u[i] : (u[i] = o);
          }),
          (n._stringRef = i),
          n);
    }
    if (typeof e != 'string') throw Error(y(284));
    if (!t._owner) throw Error(y(290, e));
  }
  return e;
}
function mr(e, n) {
  throw (
    ((e = Object.prototype.toString.call(n)),
    Error(
      y(
        31,
        e === '[object Object]'
          ? 'object with keys {' + Object.keys(n).join(', ') + '}'
          : e
      )
    ))
  );
}
function xu(e) {
  var n = e._init;
  return n(e._payload);
}
function da(e) {
  function n(f, a) {
    if (e) {
      var d = f.deletions;
      d === null ? ((f.deletions = [a]), (f.flags |= 16)) : d.push(a);
    }
  }
  function t(f, a) {
    if (!e) return null;
    for (; a !== null; ) n(f, a), (a = a.sibling);
    return null;
  }
  function r(f, a) {
    for (f = new Map(); a !== null; )
      a.key !== null ? f.set(a.key, a) : f.set(a.index, a), (a = a.sibling);
    return f;
  }
  function l(f, a) {
    return (f = cn(f, a)), (f.index = 0), (f.sibling = null), f;
  }
  function i(f, a, d) {
    return (
      (f.index = d),
      e
        ? ((d = f.alternate),
          d !== null
            ? ((d = d.index), d < a ? ((f.flags |= 2), a) : d)
            : ((f.flags |= 2), a))
        : ((f.flags |= 1048576), a)
    );
  }
  function o(f) {
    return e && f.alternate === null && (f.flags |= 2), f;
  }
  function u(f, a, d, v) {
    return a === null || a.tag !== 6
      ? ((a = Kl(d, f.mode, v)), (a.return = f), a)
      : ((a = l(a, d)), (a.return = f), a);
  }
  function s(f, a, d, v) {
    var E = d.type;
    return E === In
      ? h(f, a, d.props.children, v, d.key)
      : a !== null &&
        (a.elementType === E ||
          (typeof E == 'object' &&
            E !== null &&
            E.$$typeof === Ze &&
            xu(E) === a.type))
      ? ((v = l(a, d.props)), (v.ref = ht(f, a, d)), (v.return = f), v)
      : ((v = Tr(d.type, d.key, d.props, null, f.mode, v)),
        (v.ref = ht(f, a, d)),
        (v.return = f),
        v);
  }
  function c(f, a, d, v) {
    return a === null ||
      a.tag !== 4 ||
      a.stateNode.containerInfo !== d.containerInfo ||
      a.stateNode.implementation !== d.implementation
      ? ((a = Yl(d, f.mode, v)), (a.return = f), a)
      : ((a = l(a, d.children || [])), (a.return = f), a);
  }
  function h(f, a, d, v, E) {
    return a === null || a.tag !== 7
      ? ((a = Cn(d, f.mode, v, E)), (a.return = f), a)
      : ((a = l(a, d)), (a.return = f), a);
  }
  function m(f, a, d) {
    if ((typeof a == 'string' && a !== '') || typeof a == 'number')
      return (a = Kl('' + a, f.mode, d)), (a.return = f), a;
    if (typeof a == 'object' && a !== null) {
      switch (a.$$typeof) {
        case rr:
          return (
            (d = Tr(a.type, a.key, a.props, null, f.mode, d)),
            (d.ref = ht(f, null, a)),
            (d.return = f),
            d
          );
        case Dn:
          return (a = Yl(a, f.mode, d)), (a.return = f), a;
        case Ze:
          var v = a._init;
          return m(f, v(a._payload), d);
      }
      if (wt(a) || ct(a))
        return (a = Cn(a, f.mode, d, null)), (a.return = f), a;
      mr(f, a);
    }
    return null;
  }
  function p(f, a, d, v) {
    var E = a !== null ? a.key : null;
    if ((typeof d == 'string' && d !== '') || typeof d == 'number')
      return E !== null ? null : u(f, a, '' + d, v);
    if (typeof d == 'object' && d !== null) {
      switch (d.$$typeof) {
        case rr:
          return d.key === E ? s(f, a, d, v) : null;
        case Dn:
          return d.key === E ? c(f, a, d, v) : null;
        case Ze:
          return (E = d._init), p(f, a, E(d._payload), v);
      }
      if (wt(d) || ct(d)) return E !== null ? null : h(f, a, d, v, null);
      mr(f, d);
    }
    return null;
  }
  function g(f, a, d, v, E) {
    if ((typeof v == 'string' && v !== '') || typeof v == 'number')
      return (f = f.get(d) || null), u(a, f, '' + v, E);
    if (typeof v == 'object' && v !== null) {
      switch (v.$$typeof) {
        case rr:
          return (f = f.get(v.key === null ? d : v.key) || null), s(a, f, v, E);
        case Dn:
          return (f = f.get(v.key === null ? d : v.key) || null), c(a, f, v, E);
        case Ze:
          var x = v._init;
          return g(f, a, d, x(v._payload), E);
      }
      if (wt(v) || ct(v)) return (f = f.get(d) || null), h(a, f, v, E, null);
      mr(a, v);
    }
    return null;
  }
  function w(f, a, d, v) {
    for (
      var E = null, x = null, C = a, P = (a = 0), B = null;
      C !== null && P < d.length;
      P++
    ) {
      C.index > P ? ((B = C), (C = null)) : (B = C.sibling);
      var T = p(f, C, d[P], v);
      if (T === null) {
        C === null && (C = B);
        break;
      }
      e && C && T.alternate === null && n(f, C),
        (a = i(T, a, P)),
        x === null ? (E = T) : (x.sibling = T),
        (x = T),
        (C = B);
    }
    if (P === d.length) return t(f, C), U && gn(f, P), E;
    if (C === null) {
      for (; P < d.length; P++)
        (C = m(f, d[P], v)),
          C !== null &&
            ((a = i(C, a, P)), x === null ? (E = C) : (x.sibling = C), (x = C));
      return U && gn(f, P), E;
    }
    for (C = r(f, C); P < d.length; P++)
      (B = g(C, f, P, d[P], v)),
        B !== null &&
          (e && B.alternate !== null && C.delete(B.key === null ? P : B.key),
          (a = i(B, a, P)),
          x === null ? (E = B) : (x.sibling = B),
          (x = B));
    return (
      e &&
        C.forEach(function (Pe) {
          return n(f, Pe);
        }),
      U && gn(f, P),
      E
    );
  }
  function S(f, a, d, v) {
    var E = ct(d);
    if (typeof E != 'function') throw Error(y(150));
    if (((d = E.call(d)), d == null)) throw Error(y(151));
    for (
      var x = (E = null), C = a, P = (a = 0), B = null, T = d.next();
      C !== null && !T.done;
      P++, T = d.next()
    ) {
      C.index > P ? ((B = C), (C = null)) : (B = C.sibling);
      var Pe = p(f, C, T.value, v);
      if (Pe === null) {
        C === null && (C = B);
        break;
      }
      e && C && Pe.alternate === null && n(f, C),
        (a = i(Pe, a, P)),
        x === null ? (E = Pe) : (x.sibling = Pe),
        (x = Pe),
        (C = B);
    }
    if (T.done) return t(f, C), U && gn(f, P), E;
    if (C === null) {
      for (; !T.done; P++, T = d.next())
        (T = m(f, T.value, v)),
          T !== null &&
            ((a = i(T, a, P)), x === null ? (E = T) : (x.sibling = T), (x = T));
      return U && gn(f, P), E;
    }
    for (C = r(f, C); !T.done; P++, T = d.next())
      (T = g(C, f, P, T.value, v)),
        T !== null &&
          (e && T.alternate !== null && C.delete(T.key === null ? P : T.key),
          (a = i(T, a, P)),
          x === null ? (E = T) : (x.sibling = T),
          (x = T));
    return (
      e &&
        C.forEach(function (st) {
          return n(f, st);
        }),
      U && gn(f, P),
      E
    );
  }
  function F(f, a, d, v) {
    if (
      (typeof d == 'object' &&
        d !== null &&
        d.type === In &&
        d.key === null &&
        (d = d.props.children),
      typeof d == 'object' && d !== null)
    ) {
      switch (d.$$typeof) {
        case rr:
          e: {
            for (var E = d.key, x = a; x !== null; ) {
              if (x.key === E) {
                if (((E = d.type), E === In)) {
                  if (x.tag === 7) {
                    t(f, x.sibling),
                      (a = l(x, d.props.children)),
                      (a.return = f),
                      (f = a);
                    break e;
                  }
                } else if (
                  x.elementType === E ||
                  (typeof E == 'object' &&
                    E !== null &&
                    E.$$typeof === Ze &&
                    xu(E) === x.type)
                ) {
                  t(f, x.sibling),
                    (a = l(x, d.props)),
                    (a.ref = ht(f, x, d)),
                    (a.return = f),
                    (f = a);
                  break e;
                }
                t(f, x);
                break;
              } else n(f, x);
              x = x.sibling;
            }
            d.type === In
              ? ((a = Cn(d.props.children, f.mode, v, d.key)),
                (a.return = f),
                (f = a))
              : ((v = Tr(d.type, d.key, d.props, null, f.mode, v)),
                (v.ref = ht(f, a, d)),
                (v.return = f),
                (f = v));
          }
          return o(f);
        case Dn:
          e: {
            for (x = d.key; a !== null; ) {
              if (a.key === x)
                if (
                  a.tag === 4 &&
                  a.stateNode.containerInfo === d.containerInfo &&
                  a.stateNode.implementation === d.implementation
                ) {
                  t(f, a.sibling),
                    (a = l(a, d.children || [])),
                    (a.return = f),
                    (f = a);
                  break e;
                } else {
                  t(f, a);
                  break;
                }
              else n(f, a);
              a = a.sibling;
            }
            (a = Yl(d, f.mode, v)), (a.return = f), (f = a);
          }
          return o(f);
        case Ze:
          return (x = d._init), F(f, a, x(d._payload), v);
      }
      if (wt(d)) return w(f, a, d, v);
      if (ct(d)) return S(f, a, d, v);
      mr(f, d);
    }
    return (typeof d == 'string' && d !== '') || typeof d == 'number'
      ? ((d = '' + d),
        a !== null && a.tag === 6
          ? (t(f, a.sibling), (a = l(a, d)), (a.return = f), (f = a))
          : (t(f, a), (a = Kl(d, f.mode, v)), (a.return = f), (f = a)),
        o(f))
      : t(f, a);
  }
  return F;
}
var nt = da(!0),
  pa = da(!1),
  bt = {},
  Ue = mn(bt),
  Bt = mn(bt),
  Ht = mn(bt);
function En(e) {
  if (e === bt) throw Error(y(174));
  return e;
}
function vo(e, n) {
  switch ((D(Ht, n), D(Bt, e), D(Ue, bt), (e = n.nodeType), e)) {
    case 9:
    case 11:
      n = (n = n.documentElement) ? n.namespaceURI : li(null, '');
      break;
    default:
      (e = e === 8 ? n.parentNode : n),
        (n = e.namespaceURI || null),
        (e = e.tagName),
        (n = li(n, e));
  }
  M(Ue), D(Ue, n);
}
function tt() {
  M(Ue), M(Bt), M(Ht);
}
function ma(e) {
  En(Ht.current);
  var n = En(Ue.current),
    t = li(n, e.type);
  n !== t && (D(Bt, e), D(Ue, t));
}
function yo(e) {
  Bt.current === e && (M(Ue), M(Bt));
}
var $ = mn(0);
function Yr(e) {
  for (var n = e; n !== null; ) {
    if (n.tag === 13) {
      var t = n.memoizedState;
      if (
        t !== null &&
        ((t = t.dehydrated), t === null || t.data === '$?' || t.data === '$!')
      )
        return n;
    } else if (n.tag === 19 && n.memoizedProps.revealOrder !== void 0) {
      if (n.flags & 128) return n;
    } else if (n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === e) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === e) return null;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
  return null;
}
var Vl = [];
function go() {
  for (var e = 0; e < Vl.length; e++)
    Vl[e]._workInProgressVersionPrimary = null;
  Vl.length = 0;
}
var Cr = Xe.ReactCurrentDispatcher,
  Al = Xe.ReactCurrentBatchConfig,
  zn = 0,
  V = null,
  Y = null,
  Z = null,
  Xr = !1,
  Nt = !1,
  Qt = 0,
  od = 0;
function ne() {
  throw Error(y(321));
}
function wo(e, n) {
  if (n === null) return !1;
  for (var t = 0; t < n.length && t < e.length; t++)
    if (!Re(e[t], n[t])) return !1;
  return !0;
}
function So(e, n, t, r, l, i) {
  if (
    ((zn = i),
    (V = n),
    (n.memoizedState = null),
    (n.updateQueue = null),
    (n.lanes = 0),
    (Cr.current = e === null || e.memoizedState === null ? cd : fd),
    (e = t(r, l)),
    Nt)
  ) {
    i = 0;
    do {
      if (((Nt = !1), (Qt = 0), 25 <= i)) throw Error(y(301));
      (i += 1),
        (Z = Y = null),
        (n.updateQueue = null),
        (Cr.current = dd),
        (e = t(r, l));
    } while (Nt);
  }
  if (
    ((Cr.current = Gr),
    (n = Y !== null && Y.next !== null),
    (zn = 0),
    (Z = Y = V = null),
    (Xr = !1),
    n)
  )
    throw Error(y(300));
  return e;
}
function ko() {
  var e = Qt !== 0;
  return (Qt = 0), e;
}
function Ie() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return Z === null ? (V.memoizedState = Z = e) : (Z = Z.next = e), Z;
}
function Ce() {
  if (Y === null) {
    var e = V.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = Y.next;
  var n = Z === null ? V.memoizedState : Z.next;
  if (n !== null) (Z = n), (Y = e);
  else {
    if (e === null) throw Error(y(310));
    (Y = e),
      (e = {
        memoizedState: Y.memoizedState,
        baseState: Y.baseState,
        baseQueue: Y.baseQueue,
        queue: Y.queue,
        next: null,
      }),
      Z === null ? (V.memoizedState = Z = e) : (Z = Z.next = e);
  }
  return Z;
}
function Kt(e, n) {
  return typeof n == 'function' ? n(e) : n;
}
function Wl(e) {
  var n = Ce(),
    t = n.queue;
  if (t === null) throw Error(y(311));
  t.lastRenderedReducer = e;
  var r = Y,
    l = r.baseQueue,
    i = t.pending;
  if (i !== null) {
    if (l !== null) {
      var o = l.next;
      (l.next = i.next), (i.next = o);
    }
    (r.baseQueue = l = i), (t.pending = null);
  }
  if (l !== null) {
    (i = l.next), (r = r.baseState);
    var u = (o = null),
      s = null,
      c = i;
    do {
      var h = c.lane;
      if ((zn & h) === h)
        s !== null &&
          (s = s.next =
            {
              lane: 0,
              action: c.action,
              hasEagerState: c.hasEagerState,
              eagerState: c.eagerState,
              next: null,
            }),
          (r = c.hasEagerState ? c.eagerState : e(r, c.action));
      else {
        var m = {
          lane: h,
          action: c.action,
          hasEagerState: c.hasEagerState,
          eagerState: c.eagerState,
          next: null,
        };
        s === null ? ((u = s = m), (o = r)) : (s = s.next = m),
          (V.lanes |= h),
          (Ln |= h);
      }
      c = c.next;
    } while (c !== null && c !== i);
    s === null ? (o = r) : (s.next = u),
      Re(r, n.memoizedState) || (ce = !0),
      (n.memoizedState = r),
      (n.baseState = o),
      (n.baseQueue = s),
      (t.lastRenderedState = r);
  }
  if (((e = t.interleaved), e !== null)) {
    l = e;
    do (i = l.lane), (V.lanes |= i), (Ln |= i), (l = l.next);
    while (l !== e);
  } else l === null && (t.lanes = 0);
  return [n.memoizedState, t.dispatch];
}
function Bl(e) {
  var n = Ce(),
    t = n.queue;
  if (t === null) throw Error(y(311));
  t.lastRenderedReducer = e;
  var r = t.dispatch,
    l = t.pending,
    i = n.memoizedState;
  if (l !== null) {
    t.pending = null;
    var o = (l = l.next);
    do (i = e(i, o.action)), (o = o.next);
    while (o !== l);
    Re(i, n.memoizedState) || (ce = !0),
      (n.memoizedState = i),
      n.baseQueue === null && (n.baseState = i),
      (t.lastRenderedState = i);
  }
  return [i, r];
}
function ha() {}
function va(e, n) {
  var t = V,
    r = Ce(),
    l = n(),
    i = !Re(r.memoizedState, l);
  if (
    (i && ((r.memoizedState = l), (ce = !0)),
    (r = r.queue),
    Eo(wa.bind(null, t, r, e), [e]),
    r.getSnapshot !== n || i || (Z !== null && Z.memoizedState.tag & 1))
  ) {
    if (
      ((t.flags |= 2048),
      Yt(9, ga.bind(null, t, r, l, n), void 0, null),
      J === null)
    )
      throw Error(y(349));
    zn & 30 || ya(t, n, l);
  }
  return l;
}
function ya(e, n, t) {
  (e.flags |= 16384),
    (e = { getSnapshot: n, value: t }),
    (n = V.updateQueue),
    n === null
      ? ((n = { lastEffect: null, stores: null }),
        (V.updateQueue = n),
        (n.stores = [e]))
      : ((t = n.stores), t === null ? (n.stores = [e]) : t.push(e));
}
function ga(e, n, t, r) {
  (n.value = t), (n.getSnapshot = r), Sa(n) && ka(e);
}
function wa(e, n, t) {
  return t(function () {
    Sa(n) && ka(e);
  });
}
function Sa(e) {
  var n = e.getSnapshot;
  e = e.value;
  try {
    var t = n();
    return !Re(e, t);
  } catch {
    return !0;
  }
}
function ka(e) {
  var n = Ke(e, 1);
  n !== null && je(n, e, 1, -1);
}
function Cu(e) {
  var n = Ie();
  return (
    typeof e == 'function' && (e = e()),
    (n.memoizedState = n.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Kt,
      lastRenderedState: e,
    }),
    (n.queue = e),
    (e = e.dispatch = ad.bind(null, V, e)),
    [n.memoizedState, e]
  );
}
function Yt(e, n, t, r) {
  return (
    (e = { tag: e, create: n, destroy: t, deps: r, next: null }),
    (n = V.updateQueue),
    n === null
      ? ((n = { lastEffect: null, stores: null }),
        (V.updateQueue = n),
        (n.lastEffect = e.next = e))
      : ((t = n.lastEffect),
        t === null
          ? (n.lastEffect = e.next = e)
          : ((r = t.next), (t.next = e), (e.next = r), (n.lastEffect = e))),
    e
  );
}
function Ea() {
  return Ce().memoizedState;
}
function Pr(e, n, t, r) {
  var l = Ie();
  (V.flags |= e),
    (l.memoizedState = Yt(1 | n, t, void 0, r === void 0 ? null : r));
}
function fl(e, n, t, r) {
  var l = Ce();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (Y !== null) {
    var o = Y.memoizedState;
    if (((i = o.destroy), r !== null && wo(r, o.deps))) {
      l.memoizedState = Yt(n, t, i, r);
      return;
    }
  }
  (V.flags |= e), (l.memoizedState = Yt(1 | n, t, i, r));
}
function Pu(e, n) {
  return Pr(8390656, 8, e, n);
}
function Eo(e, n) {
  return fl(2048, 8, e, n);
}
function _a(e, n) {
  return fl(4, 2, e, n);
}
function xa(e, n) {
  return fl(4, 4, e, n);
}
function Ca(e, n) {
  if (typeof n == 'function')
    return (
      (e = e()),
      n(e),
      function () {
        n(null);
      }
    );
  if (n != null)
    return (
      (e = e()),
      (n.current = e),
      function () {
        n.current = null;
      }
    );
}
function Pa(e, n, t) {
  return (
    (t = t != null ? t.concat([e]) : null), fl(4, 4, Ca.bind(null, n, e), t)
  );
}
function _o() {}
function Na(e, n) {
  var t = Ce();
  n = n === void 0 ? null : n;
  var r = t.memoizedState;
  return r !== null && n !== null && wo(n, r[1])
    ? r[0]
    : ((t.memoizedState = [e, n]), e);
}
function za(e, n) {
  var t = Ce();
  n = n === void 0 ? null : n;
  var r = t.memoizedState;
  return r !== null && n !== null && wo(n, r[1])
    ? r[0]
    : ((e = e()), (t.memoizedState = [e, n]), e);
}
function La(e, n, t) {
  return zn & 21
    ? (Re(t, n) || ((t = js()), (V.lanes |= t), (Ln |= t), (e.baseState = !0)),
      n)
    : (e.baseState && ((e.baseState = !1), (ce = !0)), (e.memoizedState = t));
}
function ud(e, n) {
  var t = R;
  (R = t !== 0 && 4 > t ? t : 4), e(!0);
  var r = Al.transition;
  Al.transition = {};
  try {
    e(!1), n();
  } finally {
    (R = t), (Al.transition = r);
  }
}
function Ta() {
  return Ce().memoizedState;
}
function sd(e, n, t) {
  var r = an(e);
  if (
    ((t = {
      lane: r,
      action: t,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Oa(e))
  )
    ja(n, t);
  else if (((t = sa(e, n, t, r)), t !== null)) {
    var l = oe();
    je(t, e, r, l), Ra(t, n, r);
  }
}
function ad(e, n, t) {
  var r = an(e),
    l = { lane: r, action: t, hasEagerState: !1, eagerState: null, next: null };
  if (Oa(e)) ja(n, l);
  else {
    var i = e.alternate;
    if (
      e.lanes === 0 &&
      (i === null || i.lanes === 0) &&
      ((i = n.lastRenderedReducer), i !== null)
    )
      try {
        var o = n.lastRenderedState,
          u = i(o, t);
        if (((l.hasEagerState = !0), (l.eagerState = u), Re(u, o))) {
          var s = n.interleaved;
          s === null
            ? ((l.next = l), mo(n))
            : ((l.next = s.next), (s.next = l)),
            (n.interleaved = l);
          return;
        }
      } catch {
      } finally {
      }
    (t = sa(e, n, l, r)),
      t !== null && ((l = oe()), je(t, e, r, l), Ra(t, n, r));
  }
}
function Oa(e) {
  var n = e.alternate;
  return e === V || (n !== null && n === V);
}
function ja(e, n) {
  Nt = Xr = !0;
  var t = e.pending;
  t === null ? (n.next = n) : ((n.next = t.next), (t.next = n)),
    (e.pending = n);
}
function Ra(e, n, t) {
  if (t & 4194240) {
    var r = n.lanes;
    (r &= e.pendingLanes), (t |= r), (n.lanes = t), bi(e, t);
  }
}
var Gr = {
    readContext: xe,
    useCallback: ne,
    useContext: ne,
    useEffect: ne,
    useImperativeHandle: ne,
    useInsertionEffect: ne,
    useLayoutEffect: ne,
    useMemo: ne,
    useReducer: ne,
    useRef: ne,
    useState: ne,
    useDebugValue: ne,
    useDeferredValue: ne,
    useTransition: ne,
    useMutableSource: ne,
    useSyncExternalStore: ne,
    useId: ne,
    unstable_isNewReconciler: !1,
  },
  cd = {
    readContext: xe,
    useCallback: function (e, n) {
      return (Ie().memoizedState = [e, n === void 0 ? null : n]), e;
    },
    useContext: xe,
    useEffect: Pu,
    useImperativeHandle: function (e, n, t) {
      return (
        (t = t != null ? t.concat([e]) : null),
        Pr(4194308, 4, Ca.bind(null, n, e), t)
      );
    },
    useLayoutEffect: function (e, n) {
      return Pr(4194308, 4, e, n);
    },
    useInsertionEffect: function (e, n) {
      return Pr(4, 2, e, n);
    },
    useMemo: function (e, n) {
      var t = Ie();
      return (
        (n = n === void 0 ? null : n), (e = e()), (t.memoizedState = [e, n]), e
      );
    },
    useReducer: function (e, n, t) {
      var r = Ie();
      return (
        (n = t !== void 0 ? t(n) : n),
        (r.memoizedState = r.baseState = n),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: n,
        }),
        (r.queue = e),
        (e = e.dispatch = sd.bind(null, V, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var n = Ie();
      return (e = { current: e }), (n.memoizedState = e);
    },
    useState: Cu,
    useDebugValue: _o,
    useDeferredValue: function (e) {
      return (Ie().memoizedState = e);
    },
    useTransition: function () {
      var e = Cu(!1),
        n = e[0];
      return (e = ud.bind(null, e[1])), (Ie().memoizedState = e), [n, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, n, t) {
      var r = V,
        l = Ie();
      if (U) {
        if (t === void 0) throw Error(y(407));
        t = t();
      } else {
        if (((t = n()), J === null)) throw Error(y(349));
        zn & 30 || ya(r, n, t);
      }
      l.memoizedState = t;
      var i = { value: t, getSnapshot: n };
      return (
        (l.queue = i),
        Pu(wa.bind(null, r, i, e), [e]),
        (r.flags |= 2048),
        Yt(9, ga.bind(null, r, i, t, n), void 0, null),
        t
      );
    },
    useId: function () {
      var e = Ie(),
        n = J.identifierPrefix;
      if (U) {
        var t = We,
          r = Ae;
        (t = (r & ~(1 << (32 - Oe(r) - 1))).toString(32) + t),
          (n = ':' + n + 'R' + t),
          (t = Qt++),
          0 < t && (n += 'H' + t.toString(32)),
          (n += ':');
      } else (t = od++), (n = ':' + n + 'r' + t.toString(32) + ':');
      return (e.memoizedState = n);
    },
    unstable_isNewReconciler: !1,
  },
  fd = {
    readContext: xe,
    useCallback: Na,
    useContext: xe,
    useEffect: Eo,
    useImperativeHandle: Pa,
    useInsertionEffect: _a,
    useLayoutEffect: xa,
    useMemo: za,
    useReducer: Wl,
    useRef: Ea,
    useState: function () {
      return Wl(Kt);
    },
    useDebugValue: _o,
    useDeferredValue: function (e) {
      var n = Ce();
      return La(n, Y.memoizedState, e);
    },
    useTransition: function () {
      var e = Wl(Kt)[0],
        n = Ce().memoizedState;
      return [e, n];
    },
    useMutableSource: ha,
    useSyncExternalStore: va,
    useId: Ta,
    unstable_isNewReconciler: !1,
  },
  dd = {
    readContext: xe,
    useCallback: Na,
    useContext: xe,
    useEffect: Eo,
    useImperativeHandle: Pa,
    useInsertionEffect: _a,
    useLayoutEffect: xa,
    useMemo: za,
    useReducer: Bl,
    useRef: Ea,
    useState: function () {
      return Bl(Kt);
    },
    useDebugValue: _o,
    useDeferredValue: function (e) {
      var n = Ce();
      return Y === null ? (n.memoizedState = e) : La(n, Y.memoizedState, e);
    },
    useTransition: function () {
      var e = Bl(Kt)[0],
        n = Ce().memoizedState;
      return [e, n];
    },
    useMutableSource: ha,
    useSyncExternalStore: va,
    useId: Ta,
    unstable_isNewReconciler: !1,
  };
function rt(e, n) {
  try {
    var t = '',
      r = n;
    do (t += $c(r)), (r = r.return);
    while (r);
    var l = t;
  } catch (i) {
    l =
      `
Error generating stack: ` +
      i.message +
      `
` +
      i.stack;
  }
  return { value: e, source: n, stack: l, digest: null };
}
function Hl(e, n, t) {
  return { value: e, source: null, stack: t ?? null, digest: n ?? null };
}
function Ni(e, n) {
  try {
    console.error(n.value);
  } catch (t) {
    setTimeout(function () {
      throw t;
    });
  }
}
var pd = typeof WeakMap == 'function' ? WeakMap : Map;
function Da(e, n, t) {
  (t = Be(-1, t)), (t.tag = 3), (t.payload = { element: null });
  var r = n.value;
  return (
    (t.callback = function () {
      Jr || ((Jr = !0), (Fi = r)), Ni(e, n);
    }),
    t
  );
}
function Ia(e, n, t) {
  (t = Be(-1, t)), (t.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == 'function') {
    var l = n.value;
    (t.payload = function () {
      return r(l);
    }),
      (t.callback = function () {
        Ni(e, n);
      });
  }
  var i = e.stateNode;
  return (
    i !== null &&
      typeof i.componentDidCatch == 'function' &&
      (t.callback = function () {
        Ni(e, n),
          typeof r != 'function' &&
            (sn === null ? (sn = new Set([this])) : sn.add(this));
        var o = n.stack;
        this.componentDidCatch(n.value, {
          componentStack: o !== null ? o : '',
        });
      }),
    t
  );
}
function Nu(e, n, t) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new pd();
    var l = new Set();
    r.set(n, l);
  } else (l = r.get(n)), l === void 0 && ((l = new Set()), r.set(n, l));
  l.has(t) || (l.add(t), (e = Nd.bind(null, e, n, t)), n.then(e, e));
}
function zu(e) {
  do {
    var n;
    if (
      ((n = e.tag === 13) &&
        ((n = e.memoizedState), (n = n !== null ? n.dehydrated !== null : !0)),
      n)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Lu(e, n, t, r, l) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = l), e)
    : (e === n
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (t.flags |= 131072),
          (t.flags &= -52805),
          t.tag === 1 &&
            (t.alternate === null
              ? (t.tag = 17)
              : ((n = Be(-1, 1)), (n.tag = 2), un(t, n, 1))),
          (t.lanes |= 1)),
      e);
}
var md = Xe.ReactCurrentOwner,
  ce = !1;
function ie(e, n, t, r) {
  n.child = e === null ? pa(n, null, t, r) : nt(n, e.child, t, r);
}
function Tu(e, n, t, r, l) {
  t = t.render;
  var i = n.ref;
  return (
    Zn(n, l),
    (r = So(e, n, t, r, i, l)),
    (t = ko()),
    e !== null && !ce
      ? ((n.updateQueue = e.updateQueue),
        (n.flags &= -2053),
        (e.lanes &= ~l),
        Ye(e, n, l))
      : (U && t && uo(n), (n.flags |= 1), ie(e, n, r, l), n.child)
  );
}
function Ou(e, n, t, r, l) {
  if (e === null) {
    var i = t.type;
    return typeof i == 'function' &&
      !Oo(i) &&
      i.defaultProps === void 0 &&
      t.compare === null &&
      t.defaultProps === void 0
      ? ((n.tag = 15), (n.type = i), Ma(e, n, i, r, l))
      : ((e = Tr(t.type, null, r, n, n.mode, l)),
        (e.ref = n.ref),
        (e.return = n),
        (n.child = e));
  }
  if (((i = e.child), !(e.lanes & l))) {
    var o = i.memoizedProps;
    if (
      ((t = t.compare), (t = t !== null ? t : $t), t(o, r) && e.ref === n.ref)
    )
      return Ye(e, n, l);
  }
  return (
    (n.flags |= 1),
    (e = cn(i, r)),
    (e.ref = n.ref),
    (e.return = n),
    (n.child = e)
  );
}
function Ma(e, n, t, r, l) {
  if (e !== null) {
    var i = e.memoizedProps;
    if ($t(i, r) && e.ref === n.ref)
      if (((ce = !1), (n.pendingProps = r = i), (e.lanes & l) !== 0))
        e.flags & 131072 && (ce = !0);
      else return (n.lanes = e.lanes), Ye(e, n, l);
  }
  return zi(e, n, t, r, l);
}
function Fa(e, n, t) {
  var r = n.pendingProps,
    l = r.children,
    i = e !== null ? e.memoizedState : null;
  if (r.mode === 'hidden')
    if (!(n.mode & 1))
      (n.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        D(Qn, me),
        (me |= t);
    else {
      if (!(t & 1073741824))
        return (
          (e = i !== null ? i.baseLanes | t : t),
          (n.lanes = n.childLanes = 1073741824),
          (n.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (n.updateQueue = null),
          D(Qn, me),
          (me |= e),
          null
        );
      (n.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = i !== null ? i.baseLanes : t),
        D(Qn, me),
        (me |= r);
    }
  else
    i !== null ? ((r = i.baseLanes | t), (n.memoizedState = null)) : (r = t),
      D(Qn, me),
      (me |= r);
  return ie(e, n, l, t), n.child;
}
function Ua(e, n) {
  var t = n.ref;
  ((e === null && t !== null) || (e !== null && e.ref !== t)) &&
    ((n.flags |= 512), (n.flags |= 2097152));
}
function zi(e, n, t, r, l) {
  var i = de(t) ? Pn : le.current;
  return (
    (i = bn(n, i)),
    Zn(n, l),
    (t = So(e, n, t, r, i, l)),
    (r = ko()),
    e !== null && !ce
      ? ((n.updateQueue = e.updateQueue),
        (n.flags &= -2053),
        (e.lanes &= ~l),
        Ye(e, n, l))
      : (U && r && uo(n), (n.flags |= 1), ie(e, n, t, l), n.child)
  );
}
function ju(e, n, t, r, l) {
  if (de(t)) {
    var i = !0;
    Ar(n);
  } else i = !1;
  if ((Zn(n, l), n.stateNode === null))
    Nr(e, n), fa(n, t, r), Pi(n, t, r, l), (r = !0);
  else if (e === null) {
    var o = n.stateNode,
      u = n.memoizedProps;
    o.props = u;
    var s = o.context,
      c = t.contextType;
    typeof c == 'object' && c !== null
      ? (c = xe(c))
      : ((c = de(t) ? Pn : le.current), (c = bn(n, c)));
    var h = t.getDerivedStateFromProps,
      m =
        typeof h == 'function' ||
        typeof o.getSnapshotBeforeUpdate == 'function';
    m ||
      (typeof o.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof o.componentWillReceiveProps != 'function') ||
      ((u !== r || s !== c) && _u(n, o, r, c)),
      (Je = !1);
    var p = n.memoizedState;
    (o.state = p),
      Kr(n, r, o, l),
      (s = n.memoizedState),
      u !== r || p !== s || fe.current || Je
        ? (typeof h == 'function' && (Ci(n, t, h, r), (s = n.memoizedState)),
          (u = Je || Eu(n, t, u, r, p, s, c))
            ? (m ||
                (typeof o.UNSAFE_componentWillMount != 'function' &&
                  typeof o.componentWillMount != 'function') ||
                (typeof o.componentWillMount == 'function' &&
                  o.componentWillMount(),
                typeof o.UNSAFE_componentWillMount == 'function' &&
                  o.UNSAFE_componentWillMount()),
              typeof o.componentDidMount == 'function' && (n.flags |= 4194308))
            : (typeof o.componentDidMount == 'function' && (n.flags |= 4194308),
              (n.memoizedProps = r),
              (n.memoizedState = s)),
          (o.props = r),
          (o.state = s),
          (o.context = c),
          (r = u))
        : (typeof o.componentDidMount == 'function' && (n.flags |= 4194308),
          (r = !1));
  } else {
    (o = n.stateNode),
      aa(e, n),
      (u = n.memoizedProps),
      (c = n.type === n.elementType ? u : ze(n.type, u)),
      (o.props = c),
      (m = n.pendingProps),
      (p = o.context),
      (s = t.contextType),
      typeof s == 'object' && s !== null
        ? (s = xe(s))
        : ((s = de(t) ? Pn : le.current), (s = bn(n, s)));
    var g = t.getDerivedStateFromProps;
    (h =
      typeof g == 'function' ||
      typeof o.getSnapshotBeforeUpdate == 'function') ||
      (typeof o.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof o.componentWillReceiveProps != 'function') ||
      ((u !== m || p !== s) && _u(n, o, r, s)),
      (Je = !1),
      (p = n.memoizedState),
      (o.state = p),
      Kr(n, r, o, l);
    var w = n.memoizedState;
    u !== m || p !== w || fe.current || Je
      ? (typeof g == 'function' && (Ci(n, t, g, r), (w = n.memoizedState)),
        (c = Je || Eu(n, t, c, r, p, w, s) || !1)
          ? (h ||
              (typeof o.UNSAFE_componentWillUpdate != 'function' &&
                typeof o.componentWillUpdate != 'function') ||
              (typeof o.componentWillUpdate == 'function' &&
                o.componentWillUpdate(r, w, s),
              typeof o.UNSAFE_componentWillUpdate == 'function' &&
                o.UNSAFE_componentWillUpdate(r, w, s)),
            typeof o.componentDidUpdate == 'function' && (n.flags |= 4),
            typeof o.getSnapshotBeforeUpdate == 'function' && (n.flags |= 1024))
          : (typeof o.componentDidUpdate != 'function' ||
              (u === e.memoizedProps && p === e.memoizedState) ||
              (n.flags |= 4),
            typeof o.getSnapshotBeforeUpdate != 'function' ||
              (u === e.memoizedProps && p === e.memoizedState) ||
              (n.flags |= 1024),
            (n.memoizedProps = r),
            (n.memoizedState = w)),
        (o.props = r),
        (o.state = w),
        (o.context = s),
        (r = c))
      : (typeof o.componentDidUpdate != 'function' ||
          (u === e.memoizedProps && p === e.memoizedState) ||
          (n.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != 'function' ||
          (u === e.memoizedProps && p === e.memoizedState) ||
          (n.flags |= 1024),
        (r = !1));
  }
  return Li(e, n, t, r, i, l);
}
function Li(e, n, t, r, l, i) {
  Ua(e, n);
  var o = (n.flags & 128) !== 0;
  if (!r && !o) return l && yu(n, t, !1), Ye(e, n, i);
  (r = n.stateNode), (md.current = n);
  var u =
    o && typeof t.getDerivedStateFromError != 'function' ? null : r.render();
  return (
    (n.flags |= 1),
    e !== null && o
      ? ((n.child = nt(n, e.child, null, i)), (n.child = nt(n, null, u, i)))
      : ie(e, n, u, i),
    (n.memoizedState = r.state),
    l && yu(n, t, !0),
    n.child
  );
}
function $a(e) {
  var n = e.stateNode;
  n.pendingContext
    ? vu(e, n.pendingContext, n.pendingContext !== n.context)
    : n.context && vu(e, n.context, !1),
    vo(e, n.containerInfo);
}
function Ru(e, n, t, r, l) {
  return et(), ao(l), (n.flags |= 256), ie(e, n, t, r), n.child;
}
var Ti = { dehydrated: null, treeContext: null, retryLane: 0 };
function Oi(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Va(e, n, t) {
  var r = n.pendingProps,
    l = $.current,
    i = !1,
    o = (n.flags & 128) !== 0,
    u;
  if (
    ((u = o) ||
      (u = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
    u
      ? ((i = !0), (n.flags &= -129))
      : (e === null || e.memoizedState !== null) && (l |= 1),
    D($, l & 1),
    e === null)
  )
    return (
      _i(n),
      (e = n.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (n.mode & 1
            ? e.data === '$!'
              ? (n.lanes = 8)
              : (n.lanes = 1073741824)
            : (n.lanes = 1),
          null)
        : ((o = r.children),
          (e = r.fallback),
          i
            ? ((r = n.mode),
              (i = n.child),
              (o = { mode: 'hidden', children: o }),
              !(r & 1) && i !== null
                ? ((i.childLanes = 0), (i.pendingProps = o))
                : (i = ml(o, r, 0, null)),
              (e = Cn(e, r, t, null)),
              (i.return = n),
              (e.return = n),
              (i.sibling = e),
              (n.child = i),
              (n.child.memoizedState = Oi(t)),
              (n.memoizedState = Ti),
              e)
            : xo(n, o))
    );
  if (((l = e.memoizedState), l !== null && ((u = l.dehydrated), u !== null)))
    return hd(e, n, o, r, u, l, t);
  if (i) {
    (i = r.fallback), (o = n.mode), (l = e.child), (u = l.sibling);
    var s = { mode: 'hidden', children: r.children };
    return (
      !(o & 1) && n.child !== l
        ? ((r = n.child),
          (r.childLanes = 0),
          (r.pendingProps = s),
          (n.deletions = null))
        : ((r = cn(l, s)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
      u !== null ? (i = cn(u, i)) : ((i = Cn(i, o, t, null)), (i.flags |= 2)),
      (i.return = n),
      (r.return = n),
      (r.sibling = i),
      (n.child = r),
      (r = i),
      (i = n.child),
      (o = e.child.memoizedState),
      (o =
        o === null
          ? Oi(t)
          : {
              baseLanes: o.baseLanes | t,
              cachePool: null,
              transitions: o.transitions,
            }),
      (i.memoizedState = o),
      (i.childLanes = e.childLanes & ~t),
      (n.memoizedState = Ti),
      r
    );
  }
  return (
    (i = e.child),
    (e = i.sibling),
    (r = cn(i, { mode: 'visible', children: r.children })),
    !(n.mode & 1) && (r.lanes = t),
    (r.return = n),
    (r.sibling = null),
    e !== null &&
      ((t = n.deletions),
      t === null ? ((n.deletions = [e]), (n.flags |= 16)) : t.push(e)),
    (n.child = r),
    (n.memoizedState = null),
    r
  );
}
function xo(e, n) {
  return (
    (n = ml({ mode: 'visible', children: n }, e.mode, 0, null)),
    (n.return = e),
    (e.child = n)
  );
}
function hr(e, n, t, r) {
  return (
    r !== null && ao(r),
    nt(n, e.child, null, t),
    (e = xo(n, n.pendingProps.children)),
    (e.flags |= 2),
    (n.memoizedState = null),
    e
  );
}
function hd(e, n, t, r, l, i, o) {
  if (t)
    return n.flags & 256
      ? ((n.flags &= -257), (r = Hl(Error(y(422)))), hr(e, n, o, r))
      : n.memoizedState !== null
      ? ((n.child = e.child), (n.flags |= 128), null)
      : ((i = r.fallback),
        (l = n.mode),
        (r = ml({ mode: 'visible', children: r.children }, l, 0, null)),
        (i = Cn(i, l, o, null)),
        (i.flags |= 2),
        (r.return = n),
        (i.return = n),
        (r.sibling = i),
        (n.child = r),
        n.mode & 1 && nt(n, e.child, null, o),
        (n.child.memoizedState = Oi(o)),
        (n.memoizedState = Ti),
        i);
  if (!(n.mode & 1)) return hr(e, n, o, null);
  if (l.data === '$!') {
    if (((r = l.nextSibling && l.nextSibling.dataset), r)) var u = r.dgst;
    return (r = u), (i = Error(y(419))), (r = Hl(i, r, void 0)), hr(e, n, o, r);
  }
  if (((u = (o & e.childLanes) !== 0), ce || u)) {
    if (((r = J), r !== null)) {
      switch (o & -o) {
        case 4:
          l = 2;
          break;
        case 16:
          l = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          l = 32;
          break;
        case 536870912:
          l = 268435456;
          break;
        default:
          l = 0;
      }
      (l = l & (r.suspendedLanes | o) ? 0 : l),
        l !== 0 &&
          l !== i.retryLane &&
          ((i.retryLane = l), Ke(e, l), je(r, e, l, -1));
    }
    return To(), (r = Hl(Error(y(421)))), hr(e, n, o, r);
  }
  return l.data === '$?'
    ? ((n.flags |= 128),
      (n.child = e.child),
      (n = zd.bind(null, e)),
      (l._reactRetry = n),
      null)
    : ((e = i.treeContext),
      (he = on(l.nextSibling)),
      (ve = n),
      (U = !0),
      (Te = null),
      e !== null &&
        ((Se[ke++] = Ae),
        (Se[ke++] = We),
        (Se[ke++] = Nn),
        (Ae = e.id),
        (We = e.overflow),
        (Nn = n)),
      (n = xo(n, r.children)),
      (n.flags |= 4096),
      n);
}
function Du(e, n, t) {
  e.lanes |= n;
  var r = e.alternate;
  r !== null && (r.lanes |= n), xi(e.return, n, t);
}
function Ql(e, n, t, r, l) {
  var i = e.memoizedState;
  i === null
    ? (e.memoizedState = {
        isBackwards: n,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: t,
        tailMode: l,
      })
    : ((i.isBackwards = n),
      (i.rendering = null),
      (i.renderingStartTime = 0),
      (i.last = r),
      (i.tail = t),
      (i.tailMode = l));
}
function Aa(e, n, t) {
  var r = n.pendingProps,
    l = r.revealOrder,
    i = r.tail;
  if ((ie(e, n, r.children, t), (r = $.current), r & 2))
    (r = (r & 1) | 2), (n.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = n.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Du(e, t, n);
        else if (e.tag === 19) Du(e, t, n);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === n) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === n) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((D($, r), !(n.mode & 1))) n.memoizedState = null;
  else
    switch (l) {
      case 'forwards':
        for (t = n.child, l = null; t !== null; )
          (e = t.alternate),
            e !== null && Yr(e) === null && (l = t),
            (t = t.sibling);
        (t = l),
          t === null
            ? ((l = n.child), (n.child = null))
            : ((l = t.sibling), (t.sibling = null)),
          Ql(n, !1, l, t, i);
        break;
      case 'backwards':
        for (t = null, l = n.child, n.child = null; l !== null; ) {
          if (((e = l.alternate), e !== null && Yr(e) === null)) {
            n.child = l;
            break;
          }
          (e = l.sibling), (l.sibling = t), (t = l), (l = e);
        }
        Ql(n, !0, t, null, i);
        break;
      case 'together':
        Ql(n, !1, null, null, void 0);
        break;
      default:
        n.memoizedState = null;
    }
  return n.child;
}
function Nr(e, n) {
  !(n.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (n.alternate = null), (n.flags |= 2));
}
function Ye(e, n, t) {
  if (
    (e !== null && (n.dependencies = e.dependencies),
    (Ln |= n.lanes),
    !(t & n.childLanes))
  )
    return null;
  if (e !== null && n.child !== e.child) throw Error(y(153));
  if (n.child !== null) {
    for (
      e = n.child, t = cn(e, e.pendingProps), n.child = t, t.return = n;
      e.sibling !== null;

    )
      (e = e.sibling), (t = t.sibling = cn(e, e.pendingProps)), (t.return = n);
    t.sibling = null;
  }
  return n.child;
}
function vd(e, n, t) {
  switch (n.tag) {
    case 3:
      $a(n), et();
      break;
    case 5:
      ma(n);
      break;
    case 1:
      de(n.type) && Ar(n);
      break;
    case 4:
      vo(n, n.stateNode.containerInfo);
      break;
    case 10:
      var r = n.type._context,
        l = n.memoizedProps.value;
      D(Hr, r._currentValue), (r._currentValue = l);
      break;
    case 13:
      if (((r = n.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (D($, $.current & 1), (n.flags |= 128), null)
          : t & n.child.childLanes
          ? Va(e, n, t)
          : (D($, $.current & 1),
            (e = Ye(e, n, t)),
            e !== null ? e.sibling : null);
      D($, $.current & 1);
      break;
    case 19:
      if (((r = (t & n.childLanes) !== 0), e.flags & 128)) {
        if (r) return Aa(e, n, t);
        n.flags |= 128;
      }
      if (
        ((l = n.memoizedState),
        l !== null &&
          ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
        D($, $.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (n.lanes = 0), Fa(e, n, t);
  }
  return Ye(e, n, t);
}
var Wa, ji, Ba, Ha;
Wa = function (e, n) {
  for (var t = n.child; t !== null; ) {
    if (t.tag === 5 || t.tag === 6) e.appendChild(t.stateNode);
    else if (t.tag !== 4 && t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === n) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === n) return;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
};
ji = function () {};
Ba = function (e, n, t, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    (e = n.stateNode), En(Ue.current);
    var i = null;
    switch (t) {
      case 'input':
        (l = ei(e, l)), (r = ei(e, r)), (i = []);
        break;
      case 'select':
        (l = A({}, l, { value: void 0 })),
          (r = A({}, r, { value: void 0 })),
          (i = []);
        break;
      case 'textarea':
        (l = ri(e, l)), (r = ri(e, r)), (i = []);
        break;
      default:
        typeof l.onClick != 'function' &&
          typeof r.onClick == 'function' &&
          (e.onclick = $r);
    }
    ii(t, r);
    var o;
    t = null;
    for (c in l)
      if (!r.hasOwnProperty(c) && l.hasOwnProperty(c) && l[c] != null)
        if (c === 'style') {
          var u = l[c];
          for (o in u) u.hasOwnProperty(o) && (t || (t = {}), (t[o] = ''));
        } else
          c !== 'dangerouslySetInnerHTML' &&
            c !== 'children' &&
            c !== 'suppressContentEditableWarning' &&
            c !== 'suppressHydrationWarning' &&
            c !== 'autoFocus' &&
            (jt.hasOwnProperty(c)
              ? i || (i = [])
              : (i = i || []).push(c, null));
    for (c in r) {
      var s = r[c];
      if (
        ((u = l != null ? l[c] : void 0),
        r.hasOwnProperty(c) && s !== u && (s != null || u != null))
      )
        if (c === 'style')
          if (u) {
            for (o in u)
              !u.hasOwnProperty(o) ||
                (s && s.hasOwnProperty(o)) ||
                (t || (t = {}), (t[o] = ''));
            for (o in s)
              s.hasOwnProperty(o) &&
                u[o] !== s[o] &&
                (t || (t = {}), (t[o] = s[o]));
          } else t || (i || (i = []), i.push(c, t)), (t = s);
        else
          c === 'dangerouslySetInnerHTML'
            ? ((s = s ? s.__html : void 0),
              (u = u ? u.__html : void 0),
              s != null && u !== s && (i = i || []).push(c, s))
            : c === 'children'
            ? (typeof s != 'string' && typeof s != 'number') ||
              (i = i || []).push(c, '' + s)
            : c !== 'suppressContentEditableWarning' &&
              c !== 'suppressHydrationWarning' &&
              (jt.hasOwnProperty(c)
                ? (s != null && c === 'onScroll' && I('scroll', e),
                  i || u === s || (i = []))
                : (i = i || []).push(c, s));
    }
    t && (i = i || []).push('style', t);
    var c = i;
    (n.updateQueue = c) && (n.flags |= 4);
  }
};
Ha = function (e, n, t, r) {
  t !== r && (n.flags |= 4);
};
function vt(e, n) {
  if (!U)
    switch (e.tailMode) {
      case 'hidden':
        n = e.tail;
        for (var t = null; n !== null; )
          n.alternate !== null && (t = n), (n = n.sibling);
        t === null ? (e.tail = null) : (t.sibling = null);
        break;
      case 'collapsed':
        t = e.tail;
        for (var r = null; t !== null; )
          t.alternate !== null && (r = t), (t = t.sibling);
        r === null
          ? n || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function te(e) {
  var n = e.alternate !== null && e.alternate.child === e.child,
    t = 0,
    r = 0;
  if (n)
    for (var l = e.child; l !== null; )
      (t |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags & 14680064),
        (r |= l.flags & 14680064),
        (l.return = e),
        (l = l.sibling);
  else
    for (l = e.child; l !== null; )
      (t |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags),
        (r |= l.flags),
        (l.return = e),
        (l = l.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = t), n;
}
function yd(e, n, t) {
  var r = n.pendingProps;
  switch ((so(n), n.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return te(n), null;
    case 1:
      return de(n.type) && Vr(), te(n), null;
    case 3:
      return (
        (r = n.stateNode),
        tt(),
        M(fe),
        M(le),
        go(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (pr(n)
            ? (n.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(n.flags & 256)) ||
              ((n.flags |= 1024), Te !== null && (Vi(Te), (Te = null)))),
        ji(e, n),
        te(n),
        null
      );
    case 5:
      yo(n);
      var l = En(Ht.current);
      if (((t = n.type), e !== null && n.stateNode != null))
        Ba(e, n, t, r, l),
          e.ref !== n.ref && ((n.flags |= 512), (n.flags |= 2097152));
      else {
        if (!r) {
          if (n.stateNode === null) throw Error(y(166));
          return te(n), null;
        }
        if (((e = En(Ue.current)), pr(n))) {
          (r = n.stateNode), (t = n.type);
          var i = n.memoizedProps;
          switch (((r[Me] = n), (r[Wt] = i), (e = (n.mode & 1) !== 0), t)) {
            case 'dialog':
              I('cancel', r), I('close', r);
              break;
            case 'iframe':
            case 'object':
            case 'embed':
              I('load', r);
              break;
            case 'video':
            case 'audio':
              for (l = 0; l < kt.length; l++) I(kt[l], r);
              break;
            case 'source':
              I('error', r);
              break;
            case 'img':
            case 'image':
            case 'link':
              I('error', r), I('load', r);
              break;
            case 'details':
              I('toggle', r);
              break;
            case 'input':
              Bo(r, i), I('invalid', r);
              break;
            case 'select':
              (r._wrapperState = { wasMultiple: !!i.multiple }),
                I('invalid', r);
              break;
            case 'textarea':
              Qo(r, i), I('invalid', r);
          }
          ii(t, i), (l = null);
          for (var o in i)
            if (i.hasOwnProperty(o)) {
              var u = i[o];
              o === 'children'
                ? typeof u == 'string'
                  ? r.textContent !== u &&
                    (i.suppressHydrationWarning !== !0 &&
                      dr(r.textContent, u, e),
                    (l = ['children', u]))
                  : typeof u == 'number' &&
                    r.textContent !== '' + u &&
                    (i.suppressHydrationWarning !== !0 &&
                      dr(r.textContent, u, e),
                    (l = ['children', '' + u]))
                : jt.hasOwnProperty(o) &&
                  u != null &&
                  o === 'onScroll' &&
                  I('scroll', r);
            }
          switch (t) {
            case 'input':
              lr(r), Ho(r, i, !0);
              break;
            case 'textarea':
              lr(r), Ko(r);
              break;
            case 'select':
            case 'option':
              break;
            default:
              typeof i.onClick == 'function' && (r.onclick = $r);
          }
          (r = l), (n.updateQueue = r), r !== null && (n.flags |= 4);
        } else {
          (o = l.nodeType === 9 ? l : l.ownerDocument),
            e === 'http://www.w3.org/1999/xhtml' && (e = ys(t)),
            e === 'http://www.w3.org/1999/xhtml'
              ? t === 'script'
                ? ((e = o.createElement('div')),
                  (e.innerHTML = '<script></script>'),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == 'string'
                ? (e = o.createElement(t, { is: r.is }))
                : ((e = o.createElement(t)),
                  t === 'select' &&
                    ((o = e),
                    r.multiple
                      ? (o.multiple = !0)
                      : r.size && (o.size = r.size)))
              : (e = o.createElementNS(e, t)),
            (e[Me] = n),
            (e[Wt] = r),
            Wa(e, n, !1, !1),
            (n.stateNode = e);
          e: {
            switch (((o = oi(t, r)), t)) {
              case 'dialog':
                I('cancel', e), I('close', e), (l = r);
                break;
              case 'iframe':
              case 'object':
              case 'embed':
                I('load', e), (l = r);
                break;
              case 'video':
              case 'audio':
                for (l = 0; l < kt.length; l++) I(kt[l], e);
                l = r;
                break;
              case 'source':
                I('error', e), (l = r);
                break;
              case 'img':
              case 'image':
              case 'link':
                I('error', e), I('load', e), (l = r);
                break;
              case 'details':
                I('toggle', e), (l = r);
                break;
              case 'input':
                Bo(e, r), (l = ei(e, r)), I('invalid', e);
                break;
              case 'option':
                l = r;
                break;
              case 'select':
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (l = A({}, r, { value: void 0 })),
                  I('invalid', e);
                break;
              case 'textarea':
                Qo(e, r), (l = ri(e, r)), I('invalid', e);
                break;
              default:
                l = r;
            }
            ii(t, l), (u = l);
            for (i in u)
              if (u.hasOwnProperty(i)) {
                var s = u[i];
                i === 'style'
                  ? Ss(e, s)
                  : i === 'dangerouslySetInnerHTML'
                  ? ((s = s ? s.__html : void 0), s != null && gs(e, s))
                  : i === 'children'
                  ? typeof s == 'string'
                    ? (t !== 'textarea' || s !== '') && Rt(e, s)
                    : typeof s == 'number' && Rt(e, '' + s)
                  : i !== 'suppressContentEditableWarning' &&
                    i !== 'suppressHydrationWarning' &&
                    i !== 'autoFocus' &&
                    (jt.hasOwnProperty(i)
                      ? s != null && i === 'onScroll' && I('scroll', e)
                      : s != null && Yi(e, i, s, o));
              }
            switch (t) {
              case 'input':
                lr(e), Ho(e, r, !1);
                break;
              case 'textarea':
                lr(e), Ko(e);
                break;
              case 'option':
                r.value != null && e.setAttribute('value', '' + fn(r.value));
                break;
              case 'select':
                (e.multiple = !!r.multiple),
                  (i = r.value),
                  i != null
                    ? Kn(e, !!r.multiple, i, !1)
                    : r.defaultValue != null &&
                      Kn(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof l.onClick == 'function' && (e.onclick = $r);
            }
            switch (t) {
              case 'button':
              case 'input':
              case 'select':
              case 'textarea':
                r = !!r.autoFocus;
                break e;
              case 'img':
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (n.flags |= 4);
        }
        n.ref !== null && ((n.flags |= 512), (n.flags |= 2097152));
      }
      return te(n), null;
    case 6:
      if (e && n.stateNode != null) Ha(e, n, e.memoizedProps, r);
      else {
        if (typeof r != 'string' && n.stateNode === null) throw Error(y(166));
        if (((t = En(Ht.current)), En(Ue.current), pr(n))) {
          if (
            ((r = n.stateNode),
            (t = n.memoizedProps),
            (r[Me] = n),
            (i = r.nodeValue !== t) && ((e = ve), e !== null))
          )
            switch (e.tag) {
              case 3:
                dr(r.nodeValue, t, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  dr(r.nodeValue, t, (e.mode & 1) !== 0);
            }
          i && (n.flags |= 4);
        } else
          (r = (t.nodeType === 9 ? t : t.ownerDocument).createTextNode(r)),
            (r[Me] = n),
            (n.stateNode = r);
      }
      return te(n), null;
    case 13:
      if (
        (M($),
        (r = n.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (U && he !== null && n.mode & 1 && !(n.flags & 128))
          ua(), et(), (n.flags |= 98560), (i = !1);
        else if (((i = pr(n)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!i) throw Error(y(318));
            if (
              ((i = n.memoizedState),
              (i = i !== null ? i.dehydrated : null),
              !i)
            )
              throw Error(y(317));
            i[Me] = n;
          } else
            et(), !(n.flags & 128) && (n.memoizedState = null), (n.flags |= 4);
          te(n), (i = !1);
        } else Te !== null && (Vi(Te), (Te = null)), (i = !0);
        if (!i) return n.flags & 65536 ? n : null;
      }
      return n.flags & 128
        ? ((n.lanes = t), n)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((n.child.flags |= 8192),
            n.mode & 1 &&
              (e === null || $.current & 1 ? X === 0 && (X = 3) : To())),
          n.updateQueue !== null && (n.flags |= 4),
          te(n),
          null);
    case 4:
      return (
        tt(), ji(e, n), e === null && Vt(n.stateNode.containerInfo), te(n), null
      );
    case 10:
      return po(n.type._context), te(n), null;
    case 17:
      return de(n.type) && Vr(), te(n), null;
    case 19:
      if ((M($), (i = n.memoizedState), i === null)) return te(n), null;
      if (((r = (n.flags & 128) !== 0), (o = i.rendering), o === null))
        if (r) vt(i, !1);
        else {
          if (X !== 0 || (e !== null && e.flags & 128))
            for (e = n.child; e !== null; ) {
              if (((o = Yr(e)), o !== null)) {
                for (
                  n.flags |= 128,
                    vt(i, !1),
                    r = o.updateQueue,
                    r !== null && ((n.updateQueue = r), (n.flags |= 4)),
                    n.subtreeFlags = 0,
                    r = t,
                    t = n.child;
                  t !== null;

                )
                  (i = t),
                    (e = r),
                    (i.flags &= 14680066),
                    (o = i.alternate),
                    o === null
                      ? ((i.childLanes = 0),
                        (i.lanes = e),
                        (i.child = null),
                        (i.subtreeFlags = 0),
                        (i.memoizedProps = null),
                        (i.memoizedState = null),
                        (i.updateQueue = null),
                        (i.dependencies = null),
                        (i.stateNode = null))
                      : ((i.childLanes = o.childLanes),
                        (i.lanes = o.lanes),
                        (i.child = o.child),
                        (i.subtreeFlags = 0),
                        (i.deletions = null),
                        (i.memoizedProps = o.memoizedProps),
                        (i.memoizedState = o.memoizedState),
                        (i.updateQueue = o.updateQueue),
                        (i.type = o.type),
                        (e = o.dependencies),
                        (i.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (t = t.sibling);
                return D($, ($.current & 1) | 2), n.child;
              }
              e = e.sibling;
            }
          i.tail !== null &&
            Q() > lt &&
            ((n.flags |= 128), (r = !0), vt(i, !1), (n.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = Yr(o)), e !== null)) {
            if (
              ((n.flags |= 128),
              (r = !0),
              (t = e.updateQueue),
              t !== null && ((n.updateQueue = t), (n.flags |= 4)),
              vt(i, !0),
              i.tail === null && i.tailMode === 'hidden' && !o.alternate && !U)
            )
              return te(n), null;
          } else
            2 * Q() - i.renderingStartTime > lt &&
              t !== 1073741824 &&
              ((n.flags |= 128), (r = !0), vt(i, !1), (n.lanes = 4194304));
        i.isBackwards
          ? ((o.sibling = n.child), (n.child = o))
          : ((t = i.last),
            t !== null ? (t.sibling = o) : (n.child = o),
            (i.last = o));
      }
      return i.tail !== null
        ? ((n = i.tail),
          (i.rendering = n),
          (i.tail = n.sibling),
          (i.renderingStartTime = Q()),
          (n.sibling = null),
          (t = $.current),
          D($, r ? (t & 1) | 2 : t & 1),
          n)
        : (te(n), null);
    case 22:
    case 23:
      return (
        Lo(),
        (r = n.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (n.flags |= 8192),
        r && n.mode & 1
          ? me & 1073741824 && (te(n), n.subtreeFlags & 6 && (n.flags |= 8192))
          : te(n),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(y(156, n.tag));
}
function gd(e, n) {
  switch ((so(n), n.tag)) {
    case 1:
      return (
        de(n.type) && Vr(),
        (e = n.flags),
        e & 65536 ? ((n.flags = (e & -65537) | 128), n) : null
      );
    case 3:
      return (
        tt(),
        M(fe),
        M(le),
        go(),
        (e = n.flags),
        e & 65536 && !(e & 128) ? ((n.flags = (e & -65537) | 128), n) : null
      );
    case 5:
      return yo(n), null;
    case 13:
      if ((M($), (e = n.memoizedState), e !== null && e.dehydrated !== null)) {
        if (n.alternate === null) throw Error(y(340));
        et();
      }
      return (
        (e = n.flags), e & 65536 ? ((n.flags = (e & -65537) | 128), n) : null
      );
    case 19:
      return M($), null;
    case 4:
      return tt(), null;
    case 10:
      return po(n.type._context), null;
    case 22:
    case 23:
      return Lo(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var vr = !1,
  re = !1,
  wd = typeof WeakSet == 'function' ? WeakSet : Set,
  k = null;
function Hn(e, n) {
  var t = e.ref;
  if (t !== null)
    if (typeof t == 'function')
      try {
        t(null);
      } catch (r) {
        W(e, n, r);
      }
    else t.current = null;
}
function Ri(e, n, t) {
  try {
    t();
  } catch (r) {
    W(e, n, r);
  }
}
var Iu = !1;
function Sd(e, n) {
  if (((vi = Mr), (e = Xs()), oo(e))) {
    if ('selectionStart' in e)
      var t = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        t = ((t = e.ownerDocument) && t.defaultView) || window;
        var r = t.getSelection && t.getSelection();
        if (r && r.rangeCount !== 0) {
          t = r.anchorNode;
          var l = r.anchorOffset,
            i = r.focusNode;
          r = r.focusOffset;
          try {
            t.nodeType, i.nodeType;
          } catch {
            t = null;
            break e;
          }
          var o = 0,
            u = -1,
            s = -1,
            c = 0,
            h = 0,
            m = e,
            p = null;
          n: for (;;) {
            for (
              var g;
              m !== t || (l !== 0 && m.nodeType !== 3) || (u = o + l),
                m !== i || (r !== 0 && m.nodeType !== 3) || (s = o + r),
                m.nodeType === 3 && (o += m.nodeValue.length),
                (g = m.firstChild) !== null;

            )
              (p = m), (m = g);
            for (;;) {
              if (m === e) break n;
              if (
                (p === t && ++c === l && (u = o),
                p === i && ++h === r && (s = o),
                (g = m.nextSibling) !== null)
              )
                break;
              (m = p), (p = m.parentNode);
            }
            m = g;
          }
          t = u === -1 || s === -1 ? null : { start: u, end: s };
        } else t = null;
      }
    t = t || { start: 0, end: 0 };
  } else t = null;
  for (yi = { focusedElem: e, selectionRange: t }, Mr = !1, k = n; k !== null; )
    if (((n = k), (e = n.child), (n.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = n), (k = e);
    else
      for (; k !== null; ) {
        n = k;
        try {
          var w = n.alternate;
          if (n.flags & 1024)
            switch (n.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (w !== null) {
                  var S = w.memoizedProps,
                    F = w.memoizedState,
                    f = n.stateNode,
                    a = f.getSnapshotBeforeUpdate(
                      n.elementType === n.type ? S : ze(n.type, S),
                      F
                    );
                  f.__reactInternalSnapshotBeforeUpdate = a;
                }
                break;
              case 3:
                var d = n.stateNode.containerInfo;
                d.nodeType === 1
                  ? (d.textContent = '')
                  : d.nodeType === 9 &&
                    d.documentElement &&
                    d.removeChild(d.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(y(163));
            }
        } catch (v) {
          W(n, n.return, v);
        }
        if (((e = n.sibling), e !== null)) {
          (e.return = n.return), (k = e);
          break;
        }
        k = n.return;
      }
  return (w = Iu), (Iu = !1), w;
}
function zt(e, n, t) {
  var r = n.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var l = (r = r.next);
    do {
      if ((l.tag & e) === e) {
        var i = l.destroy;
        (l.destroy = void 0), i !== void 0 && Ri(n, t, i);
      }
      l = l.next;
    } while (l !== r);
  }
}
function dl(e, n) {
  if (
    ((n = n.updateQueue), (n = n !== null ? n.lastEffect : null), n !== null)
  ) {
    var t = (n = n.next);
    do {
      if ((t.tag & e) === e) {
        var r = t.create;
        t.destroy = r();
      }
      t = t.next;
    } while (t !== n);
  }
}
function Di(e) {
  var n = e.ref;
  if (n !== null) {
    var t = e.stateNode;
    switch (e.tag) {
      case 5:
        e = t;
        break;
      default:
        e = t;
    }
    typeof n == 'function' ? n(e) : (n.current = e);
  }
}
function Qa(e) {
  var n = e.alternate;
  n !== null && ((e.alternate = null), Qa(n)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((n = e.stateNode),
      n !== null &&
        (delete n[Me], delete n[Wt], delete n[Si], delete n[td], delete n[rd])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function Ka(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Mu(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Ka(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Ii(e, n, t) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      n
        ? t.nodeType === 8
          ? t.parentNode.insertBefore(e, n)
          : t.insertBefore(e, n)
        : (t.nodeType === 8
            ? ((n = t.parentNode), n.insertBefore(e, t))
            : ((n = t), n.appendChild(e)),
          (t = t._reactRootContainer),
          t != null || n.onclick !== null || (n.onclick = $r));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Ii(e, n, t), e = e.sibling; e !== null; ) Ii(e, n, t), (e = e.sibling);
}
function Mi(e, n, t) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), n ? t.insertBefore(e, n) : t.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Mi(e, n, t), e = e.sibling; e !== null; ) Mi(e, n, t), (e = e.sibling);
}
var q = null,
  Le = !1;
function Ge(e, n, t) {
  for (t = t.child; t !== null; ) Ya(e, n, t), (t = t.sibling);
}
function Ya(e, n, t) {
  if (Fe && typeof Fe.onCommitFiberUnmount == 'function')
    try {
      Fe.onCommitFiberUnmount(ll, t);
    } catch {}
  switch (t.tag) {
    case 5:
      re || Hn(t, n);
    case 6:
      var r = q,
        l = Le;
      (q = null),
        Ge(e, n, t),
        (q = r),
        (Le = l),
        q !== null &&
          (Le
            ? ((e = q),
              (t = t.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(t) : e.removeChild(t))
            : q.removeChild(t.stateNode));
      break;
    case 18:
      q !== null &&
        (Le
          ? ((e = q),
            (t = t.stateNode),
            e.nodeType === 8
              ? Ul(e.parentNode, t)
              : e.nodeType === 1 && Ul(e, t),
            Ft(e))
          : Ul(q, t.stateNode));
      break;
    case 4:
      (r = q),
        (l = Le),
        (q = t.stateNode.containerInfo),
        (Le = !0),
        Ge(e, n, t),
        (q = r),
        (Le = l);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !re &&
        ((r = t.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        l = r = r.next;
        do {
          var i = l,
            o = i.destroy;
          (i = i.tag),
            o !== void 0 && (i & 2 || i & 4) && Ri(t, n, o),
            (l = l.next);
        } while (l !== r);
      }
      Ge(e, n, t);
      break;
    case 1:
      if (
        !re &&
        (Hn(t, n),
        (r = t.stateNode),
        typeof r.componentWillUnmount == 'function')
      )
        try {
          (r.props = t.memoizedProps),
            (r.state = t.memoizedState),
            r.componentWillUnmount();
        } catch (u) {
          W(t, n, u);
        }
      Ge(e, n, t);
      break;
    case 21:
      Ge(e, n, t);
      break;
    case 22:
      t.mode & 1
        ? ((re = (r = re) || t.memoizedState !== null), Ge(e, n, t), (re = r))
        : Ge(e, n, t);
      break;
    default:
      Ge(e, n, t);
  }
}
function Fu(e) {
  var n = e.updateQueue;
  if (n !== null) {
    e.updateQueue = null;
    var t = e.stateNode;
    t === null && (t = e.stateNode = new wd()),
      n.forEach(function (r) {
        var l = Ld.bind(null, e, r);
        t.has(r) || (t.add(r), r.then(l, l));
      });
  }
}
function Ne(e, n) {
  var t = n.deletions;
  if (t !== null)
    for (var r = 0; r < t.length; r++) {
      var l = t[r];
      try {
        var i = e,
          o = n,
          u = o;
        e: for (; u !== null; ) {
          switch (u.tag) {
            case 5:
              (q = u.stateNode), (Le = !1);
              break e;
            case 3:
              (q = u.stateNode.containerInfo), (Le = !0);
              break e;
            case 4:
              (q = u.stateNode.containerInfo), (Le = !0);
              break e;
          }
          u = u.return;
        }
        if (q === null) throw Error(y(160));
        Ya(i, o, l), (q = null), (Le = !1);
        var s = l.alternate;
        s !== null && (s.return = null), (l.return = null);
      } catch (c) {
        W(l, n, c);
      }
    }
  if (n.subtreeFlags & 12854)
    for (n = n.child; n !== null; ) Xa(n, e), (n = n.sibling);
}
function Xa(e, n) {
  var t = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Ne(n, e), De(e), r & 4)) {
        try {
          zt(3, e, e.return), dl(3, e);
        } catch (S) {
          W(e, e.return, S);
        }
        try {
          zt(5, e, e.return);
        } catch (S) {
          W(e, e.return, S);
        }
      }
      break;
    case 1:
      Ne(n, e), De(e), r & 512 && t !== null && Hn(t, t.return);
      break;
    case 5:
      if (
        (Ne(n, e),
        De(e),
        r & 512 && t !== null && Hn(t, t.return),
        e.flags & 32)
      ) {
        var l = e.stateNode;
        try {
          Rt(l, '');
        } catch (S) {
          W(e, e.return, S);
        }
      }
      if (r & 4 && ((l = e.stateNode), l != null)) {
        var i = e.memoizedProps,
          o = t !== null ? t.memoizedProps : i,
          u = e.type,
          s = e.updateQueue;
        if (((e.updateQueue = null), s !== null))
          try {
            u === 'input' && i.type === 'radio' && i.name != null && hs(l, i),
              oi(u, o);
            var c = oi(u, i);
            for (o = 0; o < s.length; o += 2) {
              var h = s[o],
                m = s[o + 1];
              h === 'style'
                ? Ss(l, m)
                : h === 'dangerouslySetInnerHTML'
                ? gs(l, m)
                : h === 'children'
                ? Rt(l, m)
                : Yi(l, h, m, c);
            }
            switch (u) {
              case 'input':
                ni(l, i);
                break;
              case 'textarea':
                vs(l, i);
                break;
              case 'select':
                var p = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!i.multiple;
                var g = i.value;
                g != null
                  ? Kn(l, !!i.multiple, g, !1)
                  : p !== !!i.multiple &&
                    (i.defaultValue != null
                      ? Kn(l, !!i.multiple, i.defaultValue, !0)
                      : Kn(l, !!i.multiple, i.multiple ? [] : '', !1));
            }
            l[Wt] = i;
          } catch (S) {
            W(e, e.return, S);
          }
      }
      break;
    case 6:
      if ((Ne(n, e), De(e), r & 4)) {
        if (e.stateNode === null) throw Error(y(162));
        (l = e.stateNode), (i = e.memoizedProps);
        try {
          l.nodeValue = i;
        } catch (S) {
          W(e, e.return, S);
        }
      }
      break;
    case 3:
      if (
        (Ne(n, e), De(e), r & 4 && t !== null && t.memoizedState.isDehydrated)
      )
        try {
          Ft(n.containerInfo);
        } catch (S) {
          W(e, e.return, S);
        }
      break;
    case 4:
      Ne(n, e), De(e);
      break;
    case 13:
      Ne(n, e),
        De(e),
        (l = e.child),
        l.flags & 8192 &&
          ((i = l.memoizedState !== null),
          (l.stateNode.isHidden = i),
          !i ||
            (l.alternate !== null && l.alternate.memoizedState !== null) ||
            (No = Q())),
        r & 4 && Fu(e);
      break;
    case 22:
      if (
        ((h = t !== null && t.memoizedState !== null),
        e.mode & 1 ? ((re = (c = re) || h), Ne(n, e), (re = c)) : Ne(n, e),
        De(e),
        r & 8192)
      ) {
        if (
          ((c = e.memoizedState !== null),
          (e.stateNode.isHidden = c) && !h && e.mode & 1)
        )
          for (k = e, h = e.child; h !== null; ) {
            for (m = k = h; k !== null; ) {
              switch (((p = k), (g = p.child), p.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  zt(4, p, p.return);
                  break;
                case 1:
                  Hn(p, p.return);
                  var w = p.stateNode;
                  if (typeof w.componentWillUnmount == 'function') {
                    (r = p), (t = p.return);
                    try {
                      (n = r),
                        (w.props = n.memoizedProps),
                        (w.state = n.memoizedState),
                        w.componentWillUnmount();
                    } catch (S) {
                      W(r, t, S);
                    }
                  }
                  break;
                case 5:
                  Hn(p, p.return);
                  break;
                case 22:
                  if (p.memoizedState !== null) {
                    $u(m);
                    continue;
                  }
              }
              g !== null ? ((g.return = p), (k = g)) : $u(m);
            }
            h = h.sibling;
          }
        e: for (h = null, m = e; ; ) {
          if (m.tag === 5) {
            if (h === null) {
              h = m;
              try {
                (l = m.stateNode),
                  c
                    ? ((i = l.style),
                      typeof i.setProperty == 'function'
                        ? i.setProperty('display', 'none', 'important')
                        : (i.display = 'none'))
                    : ((u = m.stateNode),
                      (s = m.memoizedProps.style),
                      (o =
                        s != null && s.hasOwnProperty('display')
                          ? s.display
                          : null),
                      (u.style.display = ws('display', o)));
              } catch (S) {
                W(e, e.return, S);
              }
            }
          } else if (m.tag === 6) {
            if (h === null)
              try {
                m.stateNode.nodeValue = c ? '' : m.memoizedProps;
              } catch (S) {
                W(e, e.return, S);
              }
          } else if (
            ((m.tag !== 22 && m.tag !== 23) ||
              m.memoizedState === null ||
              m === e) &&
            m.child !== null
          ) {
            (m.child.return = m), (m = m.child);
            continue;
          }
          if (m === e) break e;
          for (; m.sibling === null; ) {
            if (m.return === null || m.return === e) break e;
            h === m && (h = null), (m = m.return);
          }
          h === m && (h = null), (m.sibling.return = m.return), (m = m.sibling);
        }
      }
      break;
    case 19:
      Ne(n, e), De(e), r & 4 && Fu(e);
      break;
    case 21:
      break;
    default:
      Ne(n, e), De(e);
  }
}
function De(e) {
  var n = e.flags;
  if (n & 2) {
    try {
      e: {
        for (var t = e.return; t !== null; ) {
          if (Ka(t)) {
            var r = t;
            break e;
          }
          t = t.return;
        }
        throw Error(y(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && (Rt(l, ''), (r.flags &= -33));
          var i = Mu(e);
          Mi(e, i, l);
          break;
        case 3:
        case 4:
          var o = r.stateNode.containerInfo,
            u = Mu(e);
          Ii(e, u, o);
          break;
        default:
          throw Error(y(161));
      }
    } catch (s) {
      W(e, e.return, s);
    }
    e.flags &= -3;
  }
  n & 4096 && (e.flags &= -4097);
}
function kd(e, n, t) {
  (k = e), Ga(e);
}
function Ga(e, n, t) {
  for (var r = (e.mode & 1) !== 0; k !== null; ) {
    var l = k,
      i = l.child;
    if (l.tag === 22 && r) {
      var o = l.memoizedState !== null || vr;
      if (!o) {
        var u = l.alternate,
          s = (u !== null && u.memoizedState !== null) || re;
        u = vr;
        var c = re;
        if (((vr = o), (re = s) && !c))
          for (k = l; k !== null; )
            (o = k),
              (s = o.child),
              o.tag === 22 && o.memoizedState !== null
                ? Vu(l)
                : s !== null
                ? ((s.return = o), (k = s))
                : Vu(l);
        for (; i !== null; ) (k = i), Ga(i), (i = i.sibling);
        (k = l), (vr = u), (re = c);
      }
      Uu(e);
    } else
      l.subtreeFlags & 8772 && i !== null ? ((i.return = l), (k = i)) : Uu(e);
  }
}
function Uu(e) {
  for (; k !== null; ) {
    var n = k;
    if (n.flags & 8772) {
      var t = n.alternate;
      try {
        if (n.flags & 8772)
          switch (n.tag) {
            case 0:
            case 11:
            case 15:
              re || dl(5, n);
              break;
            case 1:
              var r = n.stateNode;
              if (n.flags & 4 && !re)
                if (t === null) r.componentDidMount();
                else {
                  var l =
                    n.elementType === n.type
                      ? t.memoizedProps
                      : ze(n.type, t.memoizedProps);
                  r.componentDidUpdate(
                    l,
                    t.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var i = n.updateQueue;
              i !== null && ku(n, i, r);
              break;
            case 3:
              var o = n.updateQueue;
              if (o !== null) {
                if (((t = null), n.child !== null))
                  switch (n.child.tag) {
                    case 5:
                      t = n.child.stateNode;
                      break;
                    case 1:
                      t = n.child.stateNode;
                  }
                ku(n, o, t);
              }
              break;
            case 5:
              var u = n.stateNode;
              if (t === null && n.flags & 4) {
                t = u;
                var s = n.memoizedProps;
                switch (n.type) {
                  case 'button':
                  case 'input':
                  case 'select':
                  case 'textarea':
                    s.autoFocus && t.focus();
                    break;
                  case 'img':
                    s.src && (t.src = s.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (n.memoizedState === null) {
                var c = n.alternate;
                if (c !== null) {
                  var h = c.memoizedState;
                  if (h !== null) {
                    var m = h.dehydrated;
                    m !== null && Ft(m);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(y(163));
          }
        re || (n.flags & 512 && Di(n));
      } catch (p) {
        W(n, n.return, p);
      }
    }
    if (n === e) {
      k = null;
      break;
    }
    if (((t = n.sibling), t !== null)) {
      (t.return = n.return), (k = t);
      break;
    }
    k = n.return;
  }
}
function $u(e) {
  for (; k !== null; ) {
    var n = k;
    if (n === e) {
      k = null;
      break;
    }
    var t = n.sibling;
    if (t !== null) {
      (t.return = n.return), (k = t);
      break;
    }
    k = n.return;
  }
}
function Vu(e) {
  for (; k !== null; ) {
    var n = k;
    try {
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          var t = n.return;
          try {
            dl(4, n);
          } catch (s) {
            W(n, t, s);
          }
          break;
        case 1:
          var r = n.stateNode;
          if (typeof r.componentDidMount == 'function') {
            var l = n.return;
            try {
              r.componentDidMount();
            } catch (s) {
              W(n, l, s);
            }
          }
          var i = n.return;
          try {
            Di(n);
          } catch (s) {
            W(n, i, s);
          }
          break;
        case 5:
          var o = n.return;
          try {
            Di(n);
          } catch (s) {
            W(n, o, s);
          }
      }
    } catch (s) {
      W(n, n.return, s);
    }
    if (n === e) {
      k = null;
      break;
    }
    var u = n.sibling;
    if (u !== null) {
      (u.return = n.return), (k = u);
      break;
    }
    k = n.return;
  }
}
var Ed = Math.ceil,
  Zr = Xe.ReactCurrentDispatcher,
  Co = Xe.ReactCurrentOwner,
  _e = Xe.ReactCurrentBatchConfig,
  j = 0,
  J = null,
  K = null,
  b = 0,
  me = 0,
  Qn = mn(0),
  X = 0,
  Xt = null,
  Ln = 0,
  pl = 0,
  Po = 0,
  Lt = null,
  ae = null,
  No = 0,
  lt = 1 / 0,
  $e = null,
  Jr = !1,
  Fi = null,
  sn = null,
  yr = !1,
  nn = null,
  qr = 0,
  Tt = 0,
  Ui = null,
  zr = -1,
  Lr = 0;
function oe() {
  return j & 6 ? Q() : zr !== -1 ? zr : (zr = Q());
}
function an(e) {
  return e.mode & 1
    ? j & 2 && b !== 0
      ? b & -b
      : id.transition !== null
      ? (Lr === 0 && (Lr = js()), Lr)
      : ((e = R),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : $s(e.type))),
        e)
    : 1;
}
function je(e, n, t, r) {
  if (50 < Tt) throw ((Tt = 0), (Ui = null), Error(y(185)));
  Zt(e, t, r),
    (!(j & 2) || e !== J) &&
      (e === J && (!(j & 2) && (pl |= t), X === 4 && be(e, b)),
      pe(e, r),
      t === 1 && j === 0 && !(n.mode & 1) && ((lt = Q() + 500), al && hn()));
}
function pe(e, n) {
  var t = e.callbackNode;
  lf(e, n);
  var r = Ir(e, e === J ? b : 0);
  if (r === 0)
    t !== null && Go(t), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((n = r & -r), e.callbackPriority !== n)) {
    if ((t != null && Go(t), n === 1))
      e.tag === 0 ? ld(Au.bind(null, e)) : la(Au.bind(null, e)),
        ed(function () {
          !(j & 6) && hn();
        }),
        (t = null);
    else {
      switch (Rs(r)) {
        case 1:
          t = qi;
          break;
        case 4:
          t = Ts;
          break;
        case 16:
          t = Dr;
          break;
        case 536870912:
          t = Os;
          break;
        default:
          t = Dr;
      }
      t = rc(t, Za.bind(null, e));
    }
    (e.callbackPriority = n), (e.callbackNode = t);
  }
}
function Za(e, n) {
  if (((zr = -1), (Lr = 0), j & 6)) throw Error(y(327));
  var t = e.callbackNode;
  if (Jn() && e.callbackNode !== t) return null;
  var r = Ir(e, e === J ? b : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || n) n = br(e, r);
  else {
    n = r;
    var l = j;
    j |= 2;
    var i = qa();
    (J !== e || b !== n) && (($e = null), (lt = Q() + 500), xn(e, n));
    do
      try {
        Cd();
        break;
      } catch (u) {
        Ja(e, u);
      }
    while (!0);
    fo(),
      (Zr.current = i),
      (j = l),
      K !== null ? (n = 0) : ((J = null), (b = 0), (n = X));
  }
  if (n !== 0) {
    if (
      (n === 2 && ((l = fi(e)), l !== 0 && ((r = l), (n = $i(e, l)))), n === 1)
    )
      throw ((t = Xt), xn(e, 0), be(e, r), pe(e, Q()), t);
    if (n === 6) be(e, r);
    else {
      if (
        ((l = e.current.alternate),
        !(r & 30) &&
          !_d(l) &&
          ((n = br(e, r)),
          n === 2 && ((i = fi(e)), i !== 0 && ((r = i), (n = $i(e, i)))),
          n === 1))
      )
        throw ((t = Xt), xn(e, 0), be(e, r), pe(e, Q()), t);
      switch (((e.finishedWork = l), (e.finishedLanes = r), n)) {
        case 0:
        case 1:
          throw Error(y(345));
        case 2:
          wn(e, ae, $e);
          break;
        case 3:
          if (
            (be(e, r), (r & 130023424) === r && ((n = No + 500 - Q()), 10 < n))
          ) {
            if (Ir(e, 0) !== 0) break;
            if (((l = e.suspendedLanes), (l & r) !== r)) {
              oe(), (e.pingedLanes |= e.suspendedLanes & l);
              break;
            }
            e.timeoutHandle = wi(wn.bind(null, e, ae, $e), n);
            break;
          }
          wn(e, ae, $e);
          break;
        case 4:
          if ((be(e, r), (r & 4194240) === r)) break;
          for (n = e.eventTimes, l = -1; 0 < r; ) {
            var o = 31 - Oe(r);
            (i = 1 << o), (o = n[o]), o > l && (l = o), (r &= ~i);
          }
          if (
            ((r = l),
            (r = Q() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * Ed(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = wi(wn.bind(null, e, ae, $e), r);
            break;
          }
          wn(e, ae, $e);
          break;
        case 5:
          wn(e, ae, $e);
          break;
        default:
          throw Error(y(329));
      }
    }
  }
  return pe(e, Q()), e.callbackNode === t ? Za.bind(null, e) : null;
}
function $i(e, n) {
  var t = Lt;
  return (
    e.current.memoizedState.isDehydrated && (xn(e, n).flags |= 256),
    (e = br(e, n)),
    e !== 2 && ((n = ae), (ae = t), n !== null && Vi(n)),
    e
  );
}
function Vi(e) {
  ae === null ? (ae = e) : ae.push.apply(ae, e);
}
function _d(e) {
  for (var n = e; ; ) {
    if (n.flags & 16384) {
      var t = n.updateQueue;
      if (t !== null && ((t = t.stores), t !== null))
        for (var r = 0; r < t.length; r++) {
          var l = t[r],
            i = l.getSnapshot;
          l = l.value;
          try {
            if (!Re(i(), l)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((t = n.child), n.subtreeFlags & 16384 && t !== null))
      (t.return = n), (n = t);
    else {
      if (n === e) break;
      for (; n.sibling === null; ) {
        if (n.return === null || n.return === e) return !0;
        n = n.return;
      }
      (n.sibling.return = n.return), (n = n.sibling);
    }
  }
  return !0;
}
function be(e, n) {
  for (
    n &= ~Po,
      n &= ~pl,
      e.suspendedLanes |= n,
      e.pingedLanes &= ~n,
      e = e.expirationTimes;
    0 < n;

  ) {
    var t = 31 - Oe(n),
      r = 1 << t;
    (e[t] = -1), (n &= ~r);
  }
}
function Au(e) {
  if (j & 6) throw Error(y(327));
  Jn();
  var n = Ir(e, 0);
  if (!(n & 1)) return pe(e, Q()), null;
  var t = br(e, n);
  if (e.tag !== 0 && t === 2) {
    var r = fi(e);
    r !== 0 && ((n = r), (t = $i(e, r)));
  }
  if (t === 1) throw ((t = Xt), xn(e, 0), be(e, n), pe(e, Q()), t);
  if (t === 6) throw Error(y(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = n),
    wn(e, ae, $e),
    pe(e, Q()),
    null
  );
}
function zo(e, n) {
  var t = j;
  j |= 1;
  try {
    return e(n);
  } finally {
    (j = t), j === 0 && ((lt = Q() + 500), al && hn());
  }
}
function Tn(e) {
  nn !== null && nn.tag === 0 && !(j & 6) && Jn();
  var n = j;
  j |= 1;
  var t = _e.transition,
    r = R;
  try {
    if (((_e.transition = null), (R = 1), e)) return e();
  } finally {
    (R = r), (_e.transition = t), (j = n), !(j & 6) && hn();
  }
}
function Lo() {
  (me = Qn.current), M(Qn);
}
function xn(e, n) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var t = e.timeoutHandle;
  if ((t !== -1 && ((e.timeoutHandle = -1), bf(t)), K !== null))
    for (t = K.return; t !== null; ) {
      var r = t;
      switch ((so(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && Vr();
          break;
        case 3:
          tt(), M(fe), M(le), go();
          break;
        case 5:
          yo(r);
          break;
        case 4:
          tt();
          break;
        case 13:
          M($);
          break;
        case 19:
          M($);
          break;
        case 10:
          po(r.type._context);
          break;
        case 22:
        case 23:
          Lo();
      }
      t = t.return;
    }
  if (
    ((J = e),
    (K = e = cn(e.current, null)),
    (b = me = n),
    (X = 0),
    (Xt = null),
    (Po = pl = Ln = 0),
    (ae = Lt = null),
    kn !== null)
  ) {
    for (n = 0; n < kn.length; n++)
      if (((t = kn[n]), (r = t.interleaved), r !== null)) {
        t.interleaved = null;
        var l = r.next,
          i = t.pending;
        if (i !== null) {
          var o = i.next;
          (i.next = l), (r.next = o);
        }
        t.pending = r;
      }
    kn = null;
  }
  return e;
}
function Ja(e, n) {
  do {
    var t = K;
    try {
      if ((fo(), (Cr.current = Gr), Xr)) {
        for (var r = V.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), (r = r.next);
        }
        Xr = !1;
      }
      if (
        ((zn = 0),
        (Z = Y = V = null),
        (Nt = !1),
        (Qt = 0),
        (Co.current = null),
        t === null || t.return === null)
      ) {
        (X = 1), (Xt = n), (K = null);
        break;
      }
      e: {
        var i = e,
          o = t.return,
          u = t,
          s = n;
        if (
          ((n = b),
          (u.flags |= 32768),
          s !== null && typeof s == 'object' && typeof s.then == 'function')
        ) {
          var c = s,
            h = u,
            m = h.tag;
          if (!(h.mode & 1) && (m === 0 || m === 11 || m === 15)) {
            var p = h.alternate;
            p
              ? ((h.updateQueue = p.updateQueue),
                (h.memoizedState = p.memoizedState),
                (h.lanes = p.lanes))
              : ((h.updateQueue = null), (h.memoizedState = null));
          }
          var g = zu(o);
          if (g !== null) {
            (g.flags &= -257),
              Lu(g, o, u, i, n),
              g.mode & 1 && Nu(i, c, n),
              (n = g),
              (s = c);
            var w = n.updateQueue;
            if (w === null) {
              var S = new Set();
              S.add(s), (n.updateQueue = S);
            } else w.add(s);
            break e;
          } else {
            if (!(n & 1)) {
              Nu(i, c, n), To();
              break e;
            }
            s = Error(y(426));
          }
        } else if (U && u.mode & 1) {
          var F = zu(o);
          if (F !== null) {
            !(F.flags & 65536) && (F.flags |= 256),
              Lu(F, o, u, i, n),
              ao(rt(s, u));
            break e;
          }
        }
        (i = s = rt(s, u)),
          X !== 4 && (X = 2),
          Lt === null ? (Lt = [i]) : Lt.push(i),
          (i = o);
        do {
          switch (i.tag) {
            case 3:
              (i.flags |= 65536), (n &= -n), (i.lanes |= n);
              var f = Da(i, s, n);
              Su(i, f);
              break e;
            case 1:
              u = s;
              var a = i.type,
                d = i.stateNode;
              if (
                !(i.flags & 128) &&
                (typeof a.getDerivedStateFromError == 'function' ||
                  (d !== null &&
                    typeof d.componentDidCatch == 'function' &&
                    (sn === null || !sn.has(d))))
              ) {
                (i.flags |= 65536), (n &= -n), (i.lanes |= n);
                var v = Ia(i, u, n);
                Su(i, v);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      ec(t);
    } catch (E) {
      (n = E), K === t && t !== null && (K = t = t.return);
      continue;
    }
    break;
  } while (!0);
}
function qa() {
  var e = Zr.current;
  return (Zr.current = Gr), e === null ? Gr : e;
}
function To() {
  (X === 0 || X === 3 || X === 2) && (X = 4),
    J === null || (!(Ln & 268435455) && !(pl & 268435455)) || be(J, b);
}
function br(e, n) {
  var t = j;
  j |= 2;
  var r = qa();
  (J !== e || b !== n) && (($e = null), xn(e, n));
  do
    try {
      xd();
      break;
    } catch (l) {
      Ja(e, l);
    }
  while (!0);
  if ((fo(), (j = t), (Zr.current = r), K !== null)) throw Error(y(261));
  return (J = null), (b = 0), X;
}
function xd() {
  for (; K !== null; ) ba(K);
}
function Cd() {
  for (; K !== null && !Gc(); ) ba(K);
}
function ba(e) {
  var n = tc(e.alternate, e, me);
  (e.memoizedProps = e.pendingProps),
    n === null ? ec(e) : (K = n),
    (Co.current = null);
}
function ec(e) {
  var n = e;
  do {
    var t = n.alternate;
    if (((e = n.return), n.flags & 32768)) {
      if (((t = gd(t, n)), t !== null)) {
        (t.flags &= 32767), (K = t);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (X = 6), (K = null);
        return;
      }
    } else if (((t = yd(t, n, me)), t !== null)) {
      K = t;
      return;
    }
    if (((n = n.sibling), n !== null)) {
      K = n;
      return;
    }
    K = n = e;
  } while (n !== null);
  X === 0 && (X = 5);
}
function wn(e, n, t) {
  var r = R,
    l = _e.transition;
  try {
    (_e.transition = null), (R = 1), Pd(e, n, t, r);
  } finally {
    (_e.transition = l), (R = r);
  }
  return null;
}
function Pd(e, n, t, r) {
  do Jn();
  while (nn !== null);
  if (j & 6) throw Error(y(327));
  t = e.finishedWork;
  var l = e.finishedLanes;
  if (t === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), t === e.current))
    throw Error(y(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var i = t.lanes | t.childLanes;
  if (
    (of(e, i),
    e === J && ((K = J = null), (b = 0)),
    (!(t.subtreeFlags & 2064) && !(t.flags & 2064)) ||
      yr ||
      ((yr = !0),
      rc(Dr, function () {
        return Jn(), null;
      })),
    (i = (t.flags & 15990) !== 0),
    t.subtreeFlags & 15990 || i)
  ) {
    (i = _e.transition), (_e.transition = null);
    var o = R;
    R = 1;
    var u = j;
    (j |= 4),
      (Co.current = null),
      Sd(e, t),
      Xa(t, e),
      Kf(yi),
      (Mr = !!vi),
      (yi = vi = null),
      (e.current = t),
      kd(t),
      Zc(),
      (j = u),
      (R = o),
      (_e.transition = i);
  } else e.current = t;
  if (
    (yr && ((yr = !1), (nn = e), (qr = l)),
    (i = e.pendingLanes),
    i === 0 && (sn = null),
    bc(t.stateNode),
    pe(e, Q()),
    n !== null)
  )
    for (r = e.onRecoverableError, t = 0; t < n.length; t++)
      (l = n[t]), r(l.value, { componentStack: l.stack, digest: l.digest });
  if (Jr) throw ((Jr = !1), (e = Fi), (Fi = null), e);
  return (
    qr & 1 && e.tag !== 0 && Jn(),
    (i = e.pendingLanes),
    i & 1 ? (e === Ui ? Tt++ : ((Tt = 0), (Ui = e))) : (Tt = 0),
    hn(),
    null
  );
}
function Jn() {
  if (nn !== null) {
    var e = Rs(qr),
      n = _e.transition,
      t = R;
    try {
      if (((_e.transition = null), (R = 16 > e ? 16 : e), nn === null))
        var r = !1;
      else {
        if (((e = nn), (nn = null), (qr = 0), j & 6)) throw Error(y(331));
        var l = j;
        for (j |= 4, k = e.current; k !== null; ) {
          var i = k,
            o = i.child;
          if (k.flags & 16) {
            var u = i.deletions;
            if (u !== null) {
              for (var s = 0; s < u.length; s++) {
                var c = u[s];
                for (k = c; k !== null; ) {
                  var h = k;
                  switch (h.tag) {
                    case 0:
                    case 11:
                    case 15:
                      zt(8, h, i);
                  }
                  var m = h.child;
                  if (m !== null) (m.return = h), (k = m);
                  else
                    for (; k !== null; ) {
                      h = k;
                      var p = h.sibling,
                        g = h.return;
                      if ((Qa(h), h === c)) {
                        k = null;
                        break;
                      }
                      if (p !== null) {
                        (p.return = g), (k = p);
                        break;
                      }
                      k = g;
                    }
                }
              }
              var w = i.alternate;
              if (w !== null) {
                var S = w.child;
                if (S !== null) {
                  w.child = null;
                  do {
                    var F = S.sibling;
                    (S.sibling = null), (S = F);
                  } while (S !== null);
                }
              }
              k = i;
            }
          }
          if (i.subtreeFlags & 2064 && o !== null) (o.return = i), (k = o);
          else
            e: for (; k !== null; ) {
              if (((i = k), i.flags & 2048))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    zt(9, i, i.return);
                }
              var f = i.sibling;
              if (f !== null) {
                (f.return = i.return), (k = f);
                break e;
              }
              k = i.return;
            }
        }
        var a = e.current;
        for (k = a; k !== null; ) {
          o = k;
          var d = o.child;
          if (o.subtreeFlags & 2064 && d !== null) (d.return = o), (k = d);
          else
            e: for (o = a; k !== null; ) {
              if (((u = k), u.flags & 2048))
                try {
                  switch (u.tag) {
                    case 0:
                    case 11:
                    case 15:
                      dl(9, u);
                  }
                } catch (E) {
                  W(u, u.return, E);
                }
              if (u === o) {
                k = null;
                break e;
              }
              var v = u.sibling;
              if (v !== null) {
                (v.return = u.return), (k = v);
                break e;
              }
              k = u.return;
            }
        }
        if (
          ((j = l), hn(), Fe && typeof Fe.onPostCommitFiberRoot == 'function')
        )
          try {
            Fe.onPostCommitFiberRoot(ll, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (R = t), (_e.transition = n);
    }
  }
  return !1;
}
function Wu(e, n, t) {
  (n = rt(t, n)),
    (n = Da(e, n, 1)),
    (e = un(e, n, 1)),
    (n = oe()),
    e !== null && (Zt(e, 1, n), pe(e, n));
}
function W(e, n, t) {
  if (e.tag === 3) Wu(e, e, t);
  else
    for (; n !== null; ) {
      if (n.tag === 3) {
        Wu(n, e, t);
        break;
      } else if (n.tag === 1) {
        var r = n.stateNode;
        if (
          typeof n.type.getDerivedStateFromError == 'function' ||
          (typeof r.componentDidCatch == 'function' &&
            (sn === null || !sn.has(r)))
        ) {
          (e = rt(t, e)),
            (e = Ia(n, e, 1)),
            (n = un(n, e, 1)),
            (e = oe()),
            n !== null && (Zt(n, 1, e), pe(n, e));
          break;
        }
      }
      n = n.return;
    }
}
function Nd(e, n, t) {
  var r = e.pingCache;
  r !== null && r.delete(n),
    (n = oe()),
    (e.pingedLanes |= e.suspendedLanes & t),
    J === e &&
      (b & t) === t &&
      (X === 4 || (X === 3 && (b & 130023424) === b && 500 > Q() - No)
        ? xn(e, 0)
        : (Po |= t)),
    pe(e, n);
}
function nc(e, n) {
  n === 0 &&
    (e.mode & 1
      ? ((n = ur), (ur <<= 1), !(ur & 130023424) && (ur = 4194304))
      : (n = 1));
  var t = oe();
  (e = Ke(e, n)), e !== null && (Zt(e, n, t), pe(e, t));
}
function zd(e) {
  var n = e.memoizedState,
    t = 0;
  n !== null && (t = n.retryLane), nc(e, t);
}
function Ld(e, n) {
  var t = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        l = e.memoizedState;
      l !== null && (t = l.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(y(314));
  }
  r !== null && r.delete(n), nc(e, t);
}
var tc;
tc = function (e, n, t) {
  if (e !== null)
    if (e.memoizedProps !== n.pendingProps || fe.current) ce = !0;
    else {
      if (!(e.lanes & t) && !(n.flags & 128)) return (ce = !1), vd(e, n, t);
      ce = !!(e.flags & 131072);
    }
  else (ce = !1), U && n.flags & 1048576 && ia(n, Br, n.index);
  switch (((n.lanes = 0), n.tag)) {
    case 2:
      var r = n.type;
      Nr(e, n), (e = n.pendingProps);
      var l = bn(n, le.current);
      Zn(n, t), (l = So(null, n, r, e, l, t));
      var i = ko();
      return (
        (n.flags |= 1),
        typeof l == 'object' &&
        l !== null &&
        typeof l.render == 'function' &&
        l.$$typeof === void 0
          ? ((n.tag = 1),
            (n.memoizedState = null),
            (n.updateQueue = null),
            de(r) ? ((i = !0), Ar(n)) : (i = !1),
            (n.memoizedState =
              l.state !== null && l.state !== void 0 ? l.state : null),
            ho(n),
            (l.updater = cl),
            (n.stateNode = l),
            (l._reactInternals = n),
            Pi(n, r, e, t),
            (n = Li(null, n, r, !0, i, t)))
          : ((n.tag = 0), U && i && uo(n), ie(null, n, l, t), (n = n.child)),
        n
      );
    case 16:
      r = n.elementType;
      e: {
        switch (
          (Nr(e, n),
          (e = n.pendingProps),
          (l = r._init),
          (r = l(r._payload)),
          (n.type = r),
          (l = n.tag = Od(r)),
          (e = ze(r, e)),
          l)
        ) {
          case 0:
            n = zi(null, n, r, e, t);
            break e;
          case 1:
            n = ju(null, n, r, e, t);
            break e;
          case 11:
            n = Tu(null, n, r, e, t);
            break e;
          case 14:
            n = Ou(null, n, r, ze(r.type, e), t);
            break e;
        }
        throw Error(y(306, r, ''));
      }
      return n;
    case 0:
      return (
        (r = n.type),
        (l = n.pendingProps),
        (l = n.elementType === r ? l : ze(r, l)),
        zi(e, n, r, l, t)
      );
    case 1:
      return (
        (r = n.type),
        (l = n.pendingProps),
        (l = n.elementType === r ? l : ze(r, l)),
        ju(e, n, r, l, t)
      );
    case 3:
      e: {
        if (($a(n), e === null)) throw Error(y(387));
        (r = n.pendingProps),
          (i = n.memoizedState),
          (l = i.element),
          aa(e, n),
          Kr(n, r, null, t);
        var o = n.memoizedState;
        if (((r = o.element), i.isDehydrated))
          if (
            ((i = {
              element: r,
              isDehydrated: !1,
              cache: o.cache,
              pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
              transitions: o.transitions,
            }),
            (n.updateQueue.baseState = i),
            (n.memoizedState = i),
            n.flags & 256)
          ) {
            (l = rt(Error(y(423)), n)), (n = Ru(e, n, r, t, l));
            break e;
          } else if (r !== l) {
            (l = rt(Error(y(424)), n)), (n = Ru(e, n, r, t, l));
            break e;
          } else
            for (
              he = on(n.stateNode.containerInfo.firstChild),
                ve = n,
                U = !0,
                Te = null,
                t = pa(n, null, r, t),
                n.child = t;
              t;

            )
              (t.flags = (t.flags & -3) | 4096), (t = t.sibling);
        else {
          if ((et(), r === l)) {
            n = Ye(e, n, t);
            break e;
          }
          ie(e, n, r, t);
        }
        n = n.child;
      }
      return n;
    case 5:
      return (
        ma(n),
        e === null && _i(n),
        (r = n.type),
        (l = n.pendingProps),
        (i = e !== null ? e.memoizedProps : null),
        (o = l.children),
        gi(r, l) ? (o = null) : i !== null && gi(r, i) && (n.flags |= 32),
        Ua(e, n),
        ie(e, n, o, t),
        n.child
      );
    case 6:
      return e === null && _i(n), null;
    case 13:
      return Va(e, n, t);
    case 4:
      return (
        vo(n, n.stateNode.containerInfo),
        (r = n.pendingProps),
        e === null ? (n.child = nt(n, null, r, t)) : ie(e, n, r, t),
        n.child
      );
    case 11:
      return (
        (r = n.type),
        (l = n.pendingProps),
        (l = n.elementType === r ? l : ze(r, l)),
        Tu(e, n, r, l, t)
      );
    case 7:
      return ie(e, n, n.pendingProps, t), n.child;
    case 8:
      return ie(e, n, n.pendingProps.children, t), n.child;
    case 12:
      return ie(e, n, n.pendingProps.children, t), n.child;
    case 10:
      e: {
        if (
          ((r = n.type._context),
          (l = n.pendingProps),
          (i = n.memoizedProps),
          (o = l.value),
          D(Hr, r._currentValue),
          (r._currentValue = o),
          i !== null)
        )
          if (Re(i.value, o)) {
            if (i.children === l.children && !fe.current) {
              n = Ye(e, n, t);
              break e;
            }
          } else
            for (i = n.child, i !== null && (i.return = n); i !== null; ) {
              var u = i.dependencies;
              if (u !== null) {
                o = i.child;
                for (var s = u.firstContext; s !== null; ) {
                  if (s.context === r) {
                    if (i.tag === 1) {
                      (s = Be(-1, t & -t)), (s.tag = 2);
                      var c = i.updateQueue;
                      if (c !== null) {
                        c = c.shared;
                        var h = c.pending;
                        h === null
                          ? (s.next = s)
                          : ((s.next = h.next), (h.next = s)),
                          (c.pending = s);
                      }
                    }
                    (i.lanes |= t),
                      (s = i.alternate),
                      s !== null && (s.lanes |= t),
                      xi(i.return, t, n),
                      (u.lanes |= t);
                    break;
                  }
                  s = s.next;
                }
              } else if (i.tag === 10) o = i.type === n.type ? null : i.child;
              else if (i.tag === 18) {
                if (((o = i.return), o === null)) throw Error(y(341));
                (o.lanes |= t),
                  (u = o.alternate),
                  u !== null && (u.lanes |= t),
                  xi(o, t, n),
                  (o = i.sibling);
              } else o = i.child;
              if (o !== null) o.return = i;
              else
                for (o = i; o !== null; ) {
                  if (o === n) {
                    o = null;
                    break;
                  }
                  if (((i = o.sibling), i !== null)) {
                    (i.return = o.return), (o = i);
                    break;
                  }
                  o = o.return;
                }
              i = o;
            }
        ie(e, n, l.children, t), (n = n.child);
      }
      return n;
    case 9:
      return (
        (l = n.type),
        (r = n.pendingProps.children),
        Zn(n, t),
        (l = xe(l)),
        (r = r(l)),
        (n.flags |= 1),
        ie(e, n, r, t),
        n.child
      );
    case 14:
      return (
        (r = n.type),
        (l = ze(r, n.pendingProps)),
        (l = ze(r.type, l)),
        Ou(e, n, r, l, t)
      );
    case 15:
      return Ma(e, n, n.type, n.pendingProps, t);
    case 17:
      return (
        (r = n.type),
        (l = n.pendingProps),
        (l = n.elementType === r ? l : ze(r, l)),
        Nr(e, n),
        (n.tag = 1),
        de(r) ? ((e = !0), Ar(n)) : (e = !1),
        Zn(n, t),
        fa(n, r, l),
        Pi(n, r, l, t),
        Li(null, n, r, !0, e, t)
      );
    case 19:
      return Aa(e, n, t);
    case 22:
      return Fa(e, n, t);
  }
  throw Error(y(156, n.tag));
};
function rc(e, n) {
  return Ls(e, n);
}
function Td(e, n, t, r) {
  (this.tag = e),
    (this.key = t),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = n),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function Ee(e, n, t, r) {
  return new Td(e, n, t, r);
}
function Oo(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function Od(e) {
  if (typeof e == 'function') return Oo(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Gi)) return 11;
    if (e === Zi) return 14;
  }
  return 2;
}
function cn(e, n) {
  var t = e.alternate;
  return (
    t === null
      ? ((t = Ee(e.tag, n, e.key, e.mode)),
        (t.elementType = e.elementType),
        (t.type = e.type),
        (t.stateNode = e.stateNode),
        (t.alternate = e),
        (e.alternate = t))
      : ((t.pendingProps = n),
        (t.type = e.type),
        (t.flags = 0),
        (t.subtreeFlags = 0),
        (t.deletions = null)),
    (t.flags = e.flags & 14680064),
    (t.childLanes = e.childLanes),
    (t.lanes = e.lanes),
    (t.child = e.child),
    (t.memoizedProps = e.memoizedProps),
    (t.memoizedState = e.memoizedState),
    (t.updateQueue = e.updateQueue),
    (n = e.dependencies),
    (t.dependencies =
      n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }),
    (t.sibling = e.sibling),
    (t.index = e.index),
    (t.ref = e.ref),
    t
  );
}
function Tr(e, n, t, r, l, i) {
  var o = 2;
  if (((r = e), typeof e == 'function')) Oo(e) && (o = 1);
  else if (typeof e == 'string') o = 5;
  else
    e: switch (e) {
      case In:
        return Cn(t.children, l, i, n);
      case Xi:
        (o = 8), (l |= 8);
        break;
      case Zl:
        return (
          (e = Ee(12, t, n, l | 2)), (e.elementType = Zl), (e.lanes = i), e
        );
      case Jl:
        return (e = Ee(13, t, n, l)), (e.elementType = Jl), (e.lanes = i), e;
      case ql:
        return (e = Ee(19, t, n, l)), (e.elementType = ql), (e.lanes = i), e;
      case ds:
        return ml(t, l, i, n);
      default:
        if (typeof e == 'object' && e !== null)
          switch (e.$$typeof) {
            case cs:
              o = 10;
              break e;
            case fs:
              o = 9;
              break e;
            case Gi:
              o = 11;
              break e;
            case Zi:
              o = 14;
              break e;
            case Ze:
              (o = 16), (r = null);
              break e;
          }
        throw Error(y(130, e == null ? e : typeof e, ''));
    }
  return (
    (n = Ee(o, t, n, l)), (n.elementType = e), (n.type = r), (n.lanes = i), n
  );
}
function Cn(e, n, t, r) {
  return (e = Ee(7, e, r, n)), (e.lanes = t), e;
}
function ml(e, n, t, r) {
  return (
    (e = Ee(22, e, r, n)),
    (e.elementType = ds),
    (e.lanes = t),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Kl(e, n, t) {
  return (e = Ee(6, e, null, n)), (e.lanes = t), e;
}
function Yl(e, n, t) {
  return (
    (n = Ee(4, e.children !== null ? e.children : [], e.key, n)),
    (n.lanes = t),
    (n.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    n
  );
}
function jd(e, n, t, r, l) {
  (this.tag = n),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Nl(0)),
    (this.expirationTimes = Nl(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Nl(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = l),
    (this.mutableSourceEagerHydrationData = null);
}
function jo(e, n, t, r, l, i, o, u, s) {
  return (
    (e = new jd(e, n, t, u, s)),
    n === 1 ? ((n = 1), i === !0 && (n |= 8)) : (n = 0),
    (i = Ee(3, null, null, n)),
    (e.current = i),
    (i.stateNode = e),
    (i.memoizedState = {
      element: r,
      isDehydrated: t,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    ho(i),
    e
  );
}
function Rd(e, n, t) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Dn,
    key: r == null ? null : '' + r,
    children: e,
    containerInfo: n,
    implementation: t,
  };
}
function lc(e) {
  if (!e) return dn;
  e = e._reactInternals;
  e: {
    if (jn(e) !== e || e.tag !== 1) throw Error(y(170));
    var n = e;
    do {
      switch (n.tag) {
        case 3:
          n = n.stateNode.context;
          break e;
        case 1:
          if (de(n.type)) {
            n = n.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      n = n.return;
    } while (n !== null);
    throw Error(y(171));
  }
  if (e.tag === 1) {
    var t = e.type;
    if (de(t)) return ra(e, t, n);
  }
  return n;
}
function ic(e, n, t, r, l, i, o, u, s) {
  return (
    (e = jo(t, r, !0, e, l, i, o, u, s)),
    (e.context = lc(null)),
    (t = e.current),
    (r = oe()),
    (l = an(t)),
    (i = Be(r, l)),
    (i.callback = n ?? null),
    un(t, i, l),
    (e.current.lanes = l),
    Zt(e, l, r),
    pe(e, r),
    e
  );
}
function hl(e, n, t, r) {
  var l = n.current,
    i = oe(),
    o = an(l);
  return (
    (t = lc(t)),
    n.context === null ? (n.context = t) : (n.pendingContext = t),
    (n = Be(i, o)),
    (n.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (n.callback = r),
    (e = un(l, n, o)),
    e !== null && (je(e, l, o, i), xr(e, l, o)),
    o
  );
}
function el(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Bu(e, n) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var t = e.retryLane;
    e.retryLane = t !== 0 && t < n ? t : n;
  }
}
function Ro(e, n) {
  Bu(e, n), (e = e.alternate) && Bu(e, n);
}
function Dd() {
  return null;
}
var oc =
  typeof reportError == 'function'
    ? reportError
    : function (e) {
        console.error(e);
      };
function Do(e) {
  this._internalRoot = e;
}
vl.prototype.render = Do.prototype.render = function (e) {
  var n = this._internalRoot;
  if (n === null) throw Error(y(409));
  hl(e, n, null, null);
};
vl.prototype.unmount = Do.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var n = e.containerInfo;
    Tn(function () {
      hl(null, e, null, null);
    }),
      (n[Qe] = null);
  }
};
function vl(e) {
  this._internalRoot = e;
}
vl.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var n = Ms();
    e = { blockedOn: null, target: e, priority: n };
    for (var t = 0; t < qe.length && n !== 0 && n < qe[t].priority; t++);
    qe.splice(t, 0, e), t === 0 && Us(e);
  }
};
function Io(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function yl(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== ' react-mount-point-unstable '))
  );
}
function Hu() {}
function Id(e, n, t, r, l) {
  if (l) {
    if (typeof r == 'function') {
      var i = r;
      r = function () {
        var c = el(o);
        i.call(c);
      };
    }
    var o = ic(n, r, e, 0, null, !1, !1, '', Hu);
    return (
      (e._reactRootContainer = o),
      (e[Qe] = o.current),
      Vt(e.nodeType === 8 ? e.parentNode : e),
      Tn(),
      o
    );
  }
  for (; (l = e.lastChild); ) e.removeChild(l);
  if (typeof r == 'function') {
    var u = r;
    r = function () {
      var c = el(s);
      u.call(c);
    };
  }
  var s = jo(e, 0, !1, null, null, !1, !1, '', Hu);
  return (
    (e._reactRootContainer = s),
    (e[Qe] = s.current),
    Vt(e.nodeType === 8 ? e.parentNode : e),
    Tn(function () {
      hl(n, s, t, r);
    }),
    s
  );
}
function gl(e, n, t, r, l) {
  var i = t._reactRootContainer;
  if (i) {
    var o = i;
    if (typeof l == 'function') {
      var u = l;
      l = function () {
        var s = el(o);
        u.call(s);
      };
    }
    hl(n, o, e, l);
  } else o = Id(t, n, e, l, r);
  return el(o);
}
Ds = function (e) {
  switch (e.tag) {
    case 3:
      var n = e.stateNode;
      if (n.current.memoizedState.isDehydrated) {
        var t = St(n.pendingLanes);
        t !== 0 &&
          (bi(n, t | 1), pe(n, Q()), !(j & 6) && ((lt = Q() + 500), hn()));
      }
      break;
    case 13:
      Tn(function () {
        var r = Ke(e, 1);
        if (r !== null) {
          var l = oe();
          je(r, e, 1, l);
        }
      }),
        Ro(e, 1);
  }
};
eo = function (e) {
  if (e.tag === 13) {
    var n = Ke(e, 134217728);
    if (n !== null) {
      var t = oe();
      je(n, e, 134217728, t);
    }
    Ro(e, 134217728);
  }
};
Is = function (e) {
  if (e.tag === 13) {
    var n = an(e),
      t = Ke(e, n);
    if (t !== null) {
      var r = oe();
      je(t, e, n, r);
    }
    Ro(e, n);
  }
};
Ms = function () {
  return R;
};
Fs = function (e, n) {
  var t = R;
  try {
    return (R = e), n();
  } finally {
    R = t;
  }
};
si = function (e, n, t) {
  switch (n) {
    case 'input':
      if ((ni(e, t), (n = t.name), t.type === 'radio' && n != null)) {
        for (t = e; t.parentNode; ) t = t.parentNode;
        for (
          t = t.querySelectorAll(
            'input[name=' + JSON.stringify('' + n) + '][type="radio"]'
          ),
            n = 0;
          n < t.length;
          n++
        ) {
          var r = t[n];
          if (r !== e && r.form === e.form) {
            var l = sl(r);
            if (!l) throw Error(y(90));
            ms(r), ni(r, l);
          }
        }
      }
      break;
    case 'textarea':
      vs(e, t);
      break;
    case 'select':
      (n = t.value), n != null && Kn(e, !!t.multiple, n, !1);
  }
};
_s = zo;
xs = Tn;
var Md = { usingClientEntryPoint: !1, Events: [qt, $n, sl, ks, Es, zo] },
  yt = {
    findFiberByHostInstance: Sn,
    bundleType: 0,
    version: '18.2.0',
    rendererPackageName: 'react-dom',
  },
  Fd = {
    bundleType: yt.bundleType,
    version: yt.version,
    rendererPackageName: yt.rendererPackageName,
    rendererConfig: yt.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Xe.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Ns(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: yt.findFiberByHostInstance || Dd,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: '18.2.0-next-9e3b772b8-20220608',
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
  var gr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!gr.isDisabled && gr.supportsFiber)
    try {
      (ll = gr.inject(Fd)), (Fe = gr);
    } catch {}
}
ge.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Md;
ge.createPortal = function (e, n) {
  var t = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Io(n)) throw Error(y(200));
  return Rd(e, n, null, t);
};
ge.createRoot = function (e, n) {
  if (!Io(e)) throw Error(y(299));
  var t = !1,
    r = '',
    l = oc;
  return (
    n != null &&
      (n.unstable_strictMode === !0 && (t = !0),
      n.identifierPrefix !== void 0 && (r = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (l = n.onRecoverableError)),
    (n = jo(e, 1, !1, null, null, t, !1, r, l)),
    (e[Qe] = n.current),
    Vt(e.nodeType === 8 ? e.parentNode : e),
    new Do(n)
  );
};
ge.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var n = e._reactInternals;
  if (n === void 0)
    throw typeof e.render == 'function'
      ? Error(y(188))
      : ((e = Object.keys(e).join(',')), Error(y(268, e)));
  return (e = Ns(n)), (e = e === null ? null : e.stateNode), e;
};
ge.flushSync = function (e) {
  return Tn(e);
};
ge.hydrate = function (e, n, t) {
  if (!yl(n)) throw Error(y(200));
  return gl(null, e, n, !0, t);
};
ge.hydrateRoot = function (e, n, t) {
  if (!Io(e)) throw Error(y(405));
  var r = (t != null && t.hydratedSources) || null,
    l = !1,
    i = '',
    o = oc;
  if (
    (t != null &&
      (t.unstable_strictMode === !0 && (l = !0),
      t.identifierPrefix !== void 0 && (i = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    (n = ic(n, null, e, 1, t ?? null, l, !1, i, o)),
    (e[Qe] = n.current),
    Vt(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (t = r[e]),
        (l = t._getVersion),
        (l = l(t._source)),
        n.mutableSourceEagerHydrationData == null
          ? (n.mutableSourceEagerHydrationData = [t, l])
          : n.mutableSourceEagerHydrationData.push(t, l);
  return new vl(n);
};
ge.render = function (e, n, t) {
  if (!yl(n)) throw Error(y(200));
  return gl(null, e, n, !1, t);
};
ge.unmountComponentAtNode = function (e) {
  if (!yl(e)) throw Error(y(40));
  return e._reactRootContainer
    ? (Tn(function () {
        gl(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Qe] = null);
        });
      }),
      !0)
    : !1;
};
ge.unstable_batchedUpdates = zo;
ge.unstable_renderSubtreeIntoContainer = function (e, n, t, r) {
  if (!yl(t)) throw Error(y(200));
  if (e == null || e._reactInternals === void 0) throw Error(y(38));
  return gl(e, n, t, !1, r);
};
ge.version = '18.2.0-next-9e3b772b8-20220608';
function uc() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(uc);
    } catch (e) {
      console.error(e);
    }
}
uc(), (is.exports = ge);
var Ud = is.exports,
  Qu = Ud;
(Xl.createRoot = Qu.createRoot), (Xl.hydrateRoot = Qu.hydrateRoot);
var sc = {
    color: void 0,
    size: void 0,
    className: void 0,
    style: void 0,
    attr: void 0,
  },
  Ku = _n.createContext && _n.createContext(sc),
  $d = ['attr', 'size', 'title'];
function Vd(e, n) {
  if (e == null) return {};
  var t = Ad(e, n),
    r,
    l;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (l = 0; l < i.length; l++)
      (r = i[l]),
        !(n.indexOf(r) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, r) &&
          (t[r] = e[r]);
  }
  return t;
}
function Ad(e, n) {
  if (e == null) return {};
  var t = {},
    r = Object.keys(e),
    l,
    i;
  for (i = 0; i < r.length; i++)
    (l = r[i]), !(n.indexOf(l) >= 0) && (t[l] = e[l]);
  return t;
}
function nl() {
  return (
    (nl = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var n = 1; n < arguments.length; n++) {
            var t = arguments[n];
            for (var r in t)
              Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
          }
          return e;
        }),
    nl.apply(this, arguments)
  );
}
function Yu(e, n) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    n &&
      (r = r.filter(function (l) {
        return Object.getOwnPropertyDescriptor(e, l).enumerable;
      })),
      t.push.apply(t, r);
  }
  return t;
}
function tl(e) {
  for (var n = 1; n < arguments.length; n++) {
    var t = arguments[n] != null ? arguments[n] : {};
    n % 2
      ? Yu(Object(t), !0).forEach(function (r) {
          Wd(e, r, t[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
      : Yu(Object(t)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
        });
  }
  return e;
}
function Wd(e, n, t) {
  return (
    (n = Bd(n)),
    n in e
      ? Object.defineProperty(e, n, {
          value: t,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[n] = t),
    e
  );
}
function Bd(e) {
  var n = Hd(e, 'string');
  return typeof n == 'symbol' ? n : String(n);
}
function Hd(e, n) {
  if (typeof e != 'object' || e === null) return e;
  var t = e[Symbol.toPrimitive];
  if (t !== void 0) {
    var r = t.call(e, n || 'default');
    if (typeof r != 'object') return r;
    throw new TypeError('@@toPrimitive must return a primitive value.');
  }
  return (n === 'string' ? String : Number)(e);
}
function ac(e) {
  return (
    e &&
    e.map((n, t) =>
      _n.createElement(n.tag, tl({ key: t }, n.attr), ac(n.child))
    )
  );
}
function cc(e) {
  return (n) =>
    _n.createElement(Qd, nl({ attr: tl({}, e.attr) }, n), ac(e.child));
}
function Qd(e) {
  var n = (t) => {
    var { attr: r, size: l, title: i } = e,
      o = Vd(e, $d),
      u = l || t.size || '1em',
      s;
    return (
      t.className && (s = t.className),
      e.className && (s = (s ? s + ' ' : '') + e.className),
      _n.createElement(
        'svg',
        nl(
          { stroke: 'currentColor', fill: 'currentColor', strokeWidth: '0' },
          t.attr,
          r,
          o,
          {
            className: s,
            style: tl(tl({ color: e.color || t.color }, t.style), e.style),
            height: u,
            width: u,
            xmlns: 'http://www.w3.org/2000/svg',
          }
        ),
        i && _n.createElement('title', null, i),
        e.children
      )
    );
  };
  return Ku !== void 0
    ? _n.createElement(Ku.Consumer, null, (t) => n(t))
    : n(sc);
}
function Kd(e) {
  return cc({
    tag: 'svg',
    attr: {
      version: '1.1',
      id: 'Layer_1',
      x: '0px',
      y: '0px',
      viewBox: '0 0 30 30',
      style: 'enable-background:new 0 0 30 30;',
    },
    child: [
      {
        tag: 'path',
        attr: {
          d: `M9.75,10.98c0-0.5,0.18-0.93,0.53-1.28c0.36-0.36,0.78-0.53,1.28-0.53c0.49,0,0.92,0.18,1.27,0.53
	c0.35,0.36,0.53,0.78,0.53,1.28c0,0.5-0.18,0.93-0.53,1.28c-0.35,0.36-0.78,0.53-1.27,0.53c-0.5,0-0.93-0.18-1.28-0.53
	S9.75,11.48,9.75,10.98z M10.63,10.98c0,0.26,0.09,0.48,0.27,0.67c0.19,0.19,0.41,0.28,0.67,0.28c0.26,0,0.48-0.09,0.67-0.28
	s0.28-0.41,0.28-0.67c0-0.26-0.09-0.48-0.28-0.67s-0.41-0.28-0.67-0.28c-0.26,0-0.48,0.09-0.67,0.28
	C10.72,10.49,10.63,10.72,10.63,10.98z M14.52,15.4c0,0.77,0.21,1.45,0.64,2.05c0.22,0.31,0.53,0.56,0.93,0.75
	c0.39,0.18,0.84,0.28,1.34,0.28c1.46,0,2.38-0.56,2.75-1.67c0.04-0.14,0.02-0.28-0.06-0.41c-0.08-0.13-0.19-0.2-0.33-0.23
	c-0.14-0.04-0.28-0.02-0.4,0.07c-0.12,0.08-0.2,0.19-0.23,0.34c0,0.01,0,0.02-0.01,0.05l-0.02,0.07c-0.11,0.19-0.26,0.34-0.45,0.45
	c-0.31,0.19-0.72,0.28-1.23,0.28c-0.31,0-0.59-0.05-0.83-0.16c-0.4-0.17-0.68-0.47-0.85-0.89c-0.11-0.27-0.17-0.6-0.17-0.97v-3.22
	c0-0.15,0.01-0.3,0.03-0.45c0.04-0.38,0.19-0.73,0.45-1.04c0.29-0.35,0.75-0.52,1.38-0.52c0.52,0,0.93,0.09,1.23,0.27
	c0.2,0.12,0.35,0.27,0.45,0.45c0.01,0.02,0.01,0.05,0.02,0.08c0.01,0.03,0.01,0.05,0.01,0.06c0.04,0.14,0.12,0.24,0.23,0.3
	c0.12,0.07,0.25,0.08,0.4,0.05c0.14-0.03,0.25-0.11,0.33-0.23c0.08-0.12,0.1-0.25,0.06-0.4v-0.01l-0.08-0.23
	c-0.05-0.11-0.14-0.26-0.28-0.43c-0.13-0.18-0.29-0.32-0.45-0.44c-0.21-0.15-0.48-0.27-0.82-0.38c-0.34-0.1-0.71-0.15-1.11-0.15
	c-0.51,0-0.95,0.09-1.35,0.27c-0.39,0.18-0.7,0.42-0.91,0.73c-0.43,0.59-0.65,1.28-0.65,2.07V15.4z`,
        },
        child: [],
      },
    ],
  })(e);
}
function Yd(e) {
  return cc({
    tag: 'svg',
    attr: { viewBox: '0 0 512 512' },
    child: [
      {
        tag: 'path',
        attr: {
          d: 'M505.04 442.66l-99.71-99.69c-4.5-4.5-10.6-7-17-7h-16.3c27.6-35.3 44-79.69 44-127.99C416.03 93.09 322.92 0 208.02 0S0 93.09 0 207.98s93.11 207.98 208.02 207.98c48.3 0 92.71-16.4 128.01-44v16.3c0 6.4 2.5 12.5 7 17l99.71 99.69c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.59.1-33.99zm-297.02-90.7c-79.54 0-144-64.34-144-143.98 0-79.53 64.35-143.98 144-143.98 79.54 0 144 64.34 144 143.98 0 79.53-64.35 143.98-144 143.98zm.02-239.96c-40.78 0-73.84 33.05-73.84 73.83 0 32.96 48.26 93.05 66.75 114.86a9.24 9.24 0 0 0 14.18 0c18.49-21.81 66.75-81.89 66.75-114.86 0-40.78-33.06-73.83-73.84-73.83zm0 96c-13.26 0-24-10.75-24-24 0-13.26 10.75-24 24-24s24 10.74 24 24c0 13.25-10.75 24-24 24z',
        },
        child: [],
      },
    ],
  })(e);
}
function Xu({ getData: e, handleChange: n }) {
  return O.jsx('div', {
    className: 'card search-card',
    children: O.jsxs('form', {
      onSubmit: e,
      children: [
        O.jsx('input', {
          type: 'text',
          placeholder: 'Insert city name...',
          name: 'city',
          className: 'city-input',
          onChange: n,
        }),
        O.jsx('button', {
          className: 'search-btn',
          type: 'submit',
          children: O.jsx(Yd, {}),
        }),
      ],
    }),
  });
}
const Xd = [
  {
    id: '01d',
    icon: 'frontend/dist/assets/icons/clear_sky.svg',
  },
  { id: '01n', icon: 'assets/icons/night.svg' },
  { id: '02d', icon: 'assets/icons/few_clouds_w_sun.svg' },
  { id: '02n', icon: 'assets/icons/night_cloud_2.svg' },
  { id: '03d', icon: 'assets/icons/clouds_no_sun.svg' },
  { id: '03n', icon: 'assets/icons/clouds_2.svg' },
  { id: '04d', icon: 'assets/icons/broken_clouds.svg' },
  { id: '04n', icon: 'assets/icons/night_cloud_2.svg' },
  { id: '09d', icon: 'assets/icons/clouds_with_rain.svg' },
  { id: '09n', icon: 'assets/icons/black_cloud_with_rain.svg' },
  { id: '10d', icon: 'assets/icons/rain.svg' },
  { id: '10n', icon: 'assets/icons/black_cloud_with_rain.svg' },
  { id: '11d', icon: 'assets/icons/thunder_storm_w_rain.svg' },
  { id: '11n', icon: 'assets/icons/thunder_storm_black_cloud.svg' },
  { id: '13d', icon: 'assets/icons/snowflakes.svg' },
  { id: '13n', icon: 'assets/icons/snowflakes.svg' },
  { id: '50d', icon: 'assets/icons/mist.svg' },
  { id: '50n', icon: 'assets/icons/mist.svg' },
];
function Gd({ id: e }) {
  const n = Xd.find((t) => t.id === e);
  return n
    ? O.jsx('div', { children: O.jsx('img', { src: n.icon, alt: 'icon' }) })
    : null;
}
const Zd = () => {
    const [e, n] = Ot.useState(''),
      [t, r] = Ot.useState({
        temp: null,
        condition: '',
        iconId: '',
        name: '',
        country: '',
        weatherIconSrc: '',
        hasError: !1,
        message: '',
        initial: !0,
      }),
      l = (o) => {
        n(o.target.value);
      },
      i = async (o) => {
        o.preventDefault();
        let u = new URL('http://localhost:3001');
        u.search = new URLSearchParams({ city: e });
        try {
          const c = await (await fetch(u)).json();
          c.message
            ? r({ ...t, message: c.message, hasError: !0, initial: !1 })
            : r({
                temp: Math.round(c.main.temp),
                condition: c.weather[0].description,
                iconId: c.weather[0].icon,
                name: c.name,
                country: c.sys.country,
                weatherIconSrc: `https://openweathermap.org/img/wn/${c.weather[0].icon}@2x.png`,
                hasError: !1,
                initial: !1,
              });
        } catch (s) {
          console.log(s), r({ ...t, hasError: !0, message: s });
        }
      };
    return t.initial === !0
      ? O.jsx(O.Fragment, {
          children: O.jsx(Xu, { handleChange: l, getData: i }),
        })
      : O.jsxs(O.Fragment, {
          children: [
            O.jsx(Xu, { handleChange: l, getData: i }),
            t.hasError
              ? O.jsx('div', {
                  id: 'error-card',
                  className: 'card',
                  children: O.jsx('h4', {
                    id: 'city-title',
                    children: t.message,
                  }),
                })
              : O.jsxs('div', {
                  id: 'result-card',
                  className: 'card',
                  children: [
                    O.jsxs('h4', {
                      id: 'city-title',
                      children: [t.name, ', ', t.country],
                    }),
                    O.jsx('div', {
                      className: 'weather-icon',
                      children: O.jsx(Gd, { id: t.iconId ?? t.weatherIconSrc }),
                    }),
                    O.jsxs('div', {
                      children: [
                        O.jsxs('div', {
                          className: 'temp',
                          children: [
                            O.jsx('p', { children: t.temp ?? 'Temp' }),
                            O.jsx('span', {
                              className: 'unit',
                              children: O.jsx(Kd, {}),
                            }),
                          ],
                        }),
                        O.jsx('p', {
                          className: 'condition',
                          children: t.condition ? t.condition : 'Condition',
                        }),
                      ],
                    }),
                  ],
                }),
          ],
        });
  },
  Jd = () =>
    O.jsx('small', {
      children: O.jsx('a', {
        href: 'https://www.vecteezy.com/free-vector/weather-icons',
        children: 'Weather Icons Vectors by Vecteezy',
      }),
    });
function qd() {
  return O.jsxs(O.Fragment, {
    children: [
      O.jsx('h1', { children: 'Weather App' }),
      O.jsx(Zd, {}),
      O.jsx(Jd, {}),
    ],
  });
}
Xl.createRoot(document.getElementById('root')).render(
  O.jsx(O.Fragment, { children: O.jsx(qd, {}) })
);
