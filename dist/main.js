function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
function asyncGeneratorStep(n, t, e, r, o, a, c) {
  try {
    var i = n[a](c),
      u = i.value;
  } catch (n) {
    return void e(n);
  }
  i.done ? t(u) : Promise.resolve(u).then(r, o);
}
function _asyncToGenerator(n) {
  return function () {
    var t = this,
      e = arguments;
    return new Promise(function (r, o) {
      var a = n.apply(t, e);
      function _next(n) {
        asyncGeneratorStep(a, r, o, _next, _throw, "next", n);
      }
      function _throw(n) {
        asyncGeneratorStep(a, r, o, _next, _throw, "throw", n);
      }
      _next(void 0);
    });
  };
}
function _createForOfIteratorHelper(r, e) {
  var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (!t) {
    if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e) {
      t && (r = t);
      var n = 0,
        F = function () {};
      return {
        s: F,
        n: function () {
          return n >= r.length ? {
            done: true
          } : {
            done: false,
            value: r[n++]
          };
        },
        e: function (r) {
          throw r;
        },
        f: F
      };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var o,
    a = true,
    u = false;
  return {
    s: function () {
      t = t.call(r);
    },
    n: function () {
      var r = t.next();
      return a = r.done, r;
    },
    e: function (r) {
      u = true, o = r;
    },
    f: function () {
      try {
        a || null == t.return || t.return();
      } finally {
        if (u) throw o;
      }
    }
  };
}
function _regenerator() {
  /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */
  var e,
    t,
    r = "function" == typeof Symbol ? Symbol : {},
    n = r.iterator || "@@iterator",
    o = r.toStringTag || "@@toStringTag";
  function i(r, n, o, i) {
    var c = n && n.prototype instanceof Generator ? n : Generator,
      u = Object.create(c.prototype);
    return _regeneratorDefine(u, "_invoke", function (r, n, o) {
      var i,
        c,
        u,
        f = 0,
        p = o || [],
        y = false,
        G = {
          p: 0,
          n: 0,
          v: e,
          a: d,
          f: d.bind(e, 4),
          d: function (t, r) {
            return i = t, c = 0, u = e, G.n = r, a;
          }
        };
      function d(r, n) {
        for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) {
          var o,
            i = p[t],
            d = G.p,
            l = i[2];
          r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0));
        }
        if (o || r > 1) return a;
        throw y = true, n;
      }
      return function (o, p, l) {
        if (f > 1) throw TypeError("Generator is already running");
        for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) {
          i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u);
          try {
            if (f = 2, i) {
              if (c || (o = "next"), t = i[o]) {
                if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object");
                if (!t.done) return t;
                u = t.value, c < 2 && (c = 0);
              } else 1 === c && (t = i.return) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1);
              i = e;
            } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break;
          } catch (t) {
            i = e, c = 1, u = t;
          } finally {
            f = 1;
          }
        }
        return {
          value: t,
          done: y
        };
      };
    }(r, o, i), true), u;
  }
  var a = {};
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}
  t = Object.getPrototypeOf;
  var c = [][n] ? t(t([][n]())) : (_regeneratorDefine(t = {}, n, function () {
      return this;
    }), t),
    u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c);
  function f(e) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e;
  }
  return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine(u), _regeneratorDefine(u, o, "Generator"), _regeneratorDefine(u, n, function () {
    return this;
  }), _regeneratorDefine(u, "toString", function () {
    return "[object Generator]";
  }), (_regenerator = function () {
    return {
      w: i,
      m: f
    };
  })();
}
function _regeneratorDefine(e, r, n, t) {
  var i = Object.defineProperty;
  try {
    i({}, "", {});
  } catch (e) {
    i = 0;
  }
  _regeneratorDefine = function (e, r, n, t) {
    if (r) i ? i(e, r, {
      value: n,
      enumerable: !t,
      configurable: !t,
      writable: !t
    }) : e[r] = n;else {
      function o(r, n) {
        _regeneratorDefine(e, r, function (e) {
          return this._invoke(r, n, e);
        });
      }
      o("next", 0), o("throw", 1), o("return", 2);
    }
  }, _regeneratorDefine(e, r, n, t);
}
function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
  }
}

function _useMessage(payload) {
  return "%c".concat(payload);
}
function _useLog(message, style) {
  var color = '';
  switch (style) {
    case 'success':
      color = 'green';
      break;
    case 'fail':
      color = 'red';
      break;
    case 'info':
      color = 'blue';
      break;
  }
  var styleString = "background: ".concat(color, "; border-radius: 8px; padding: 4px; font-style: bold;");
  console.log(message, styleString);
}
function logProgression(success) {
  var index = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var result = '수강 처리 완료' ;
  var message = _useMessage("".concat(index, " ").concat(result));
  {
    _useLog(message, 'success');
  }
}
function logFinish() {
  var message = _useMessage('안전교육 학습이 종료됐어요 😎');
  _useLog(message, 'info');
}

function getVideos() {
  var table = document.querySelector('#divProgressInfList > table > tbody');
  var videos = [];
  var _iterator = _createForOfIteratorHelper(table.children),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var row = _step.value;
      if (row.className === 'edufireTableTop') continue;
      var td = row.lastElementChild;
      var input = td.lastElementChild;
      var functionString = input.getAttribute('onclick');
      var match = functionString.match(/OpenContentViewPop\((\d+)\)/);
      var videoId = Number(match[1]);
      videos.push(videoId);
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  return videos;
}
function processSingleVideo(video) {
  return new Promise(function (resolve) {
    var child = window.open("/ushm/edu/contentsViewPop.do?scheduleMemberProgressNo=".concat(video));
    var isScriptInjected = false;
    var checkLoad = setInterval(function () {
      if (child.closed) {
        clearInterval(checkLoad);
        resolve();
        return;
      }
      if (!isScriptInjected && child.document.readyState === 'complete') {
        var script = child.document.createElement('script');
        script.type = 'module';
        script.src = 'https://cdn.jsdelivr.net/gh/junepil/lab-safety@batch-resolver/dist/video_resolver.js';
        child.document.head.appendChild(script);
        isScriptInjected = true;
      }
    }, 500);
  });
}
function processVideos(_x) {
  return _processVideos.apply(this, arguments);
}
function _processVideos() {
  _processVideos = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(videos) {
    var _iterator2, _step2, video, _t;
    return _regenerator().w(function (_context) {
      while (1) switch (_context.n) {
        case 0:
          _iterator2 = _createForOfIteratorHelper(videos);
          _context.p = 1;
          _iterator2.s();
        case 2:
          if ((_step2 = _iterator2.n()).done) {
            _context.n = 5;
            break;
          }
          video = _step2.value;
          _context.n = 3;
          return processSingleVideo(video);
        case 3:
          logProgression(true, video);
        case 4:
          _context.n = 2;
          break;
        case 5:
          _context.n = 7;
          break;
        case 6:
          _context.p = 6;
          _t = _context.v;
          _iterator2.e(_t);
        case 7:
          _context.p = 7;
          _iterator2.f();
          return _context.f(7);
        case 8:
          logFinish();
        case 9:
          return _context.a(2);
      }
    }, _callee, null, [[1, 6, 7, 8]]);
  }));
  return _processVideos.apply(this, arguments);
}

var videos = getVideos();
await processVideos(videos);
