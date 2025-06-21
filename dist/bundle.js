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

function createLog(success) {
  var index = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var message = "%c";
  if (index) {
    message += "".concat(index, "\uBC88\uC9F8 \uC601\uC0C1 ");
  }
  if (success) {
    console.log(message + "수강 처리 완료", "background: green; border-radius: 8px; padding: 4px; font-style: bold;");
  } else {
    console.log(message + "수강 처리 실패", "background: green; border-radius: 8px; padding: 4px; font-style: bold;");
  }
}

function lab_1() {
  return _lab_$1.apply(this, arguments);
}
function _lab_$1() {
  _lab_$1 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
    var params, scheduleMemberProgressNo, response;
    return _regenerator().w(function (_context) {
      while (1) switch (_context.n) {
        case 0:
          params = new URLSearchParams(window.location.search);
          scheduleMemberProgressNo = params.get("scheduleMemberProgressNo");
          _context.n = 1;
          return fetch("https://safety.konkuk.ac.kr/ushm/edu/contentsViewAviProcessCheckSub", {
            method: "POST",
            body: new URLSearchParams({
              scheduleMemberProgressNo: scheduleMemberProgressNo,
              currentTime: "23",
              isEnd: "true",
              isMobile: "false"
            })
          });
        case 1:
          response = _context.v;
          createLog(response.ok);
        case 2:
          return _context.a(2);
      }
    }, _callee);
  }));
  return _lab_$1.apply(this, arguments);
}

function lab_2() {
  return _lab_.apply(this, arguments);
}
function _lab_() {
  _lab_ = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
    var _params, scheduleMemberProgressNo, totalPageElement, totalPage, i, response;
    return _regenerator().w(function (_context) {
      while (1) switch (_context.n) {
        case 0:
          _params = new URLSearchParams(window.location.search);
          scheduleMemberProgressNo = _params.get("smProgressNo");
          totalPageElement = document.querySelector(".total_page, .tPageNum");
          totalPage = +(totalPageElement === null || totalPageElement === void 0 ? void 0 : totalPageElement.innerHTML);
          i = 1;
        case 1:
          if (!(i <= totalPage)) {
            _context.n = 4;
            break;
          }
          _context.n = 2;
          return fetch("https://safety.konkuk.ac.kr/ushm/edu/SetImgtechContents2019AfterVersionProcessUpdate", {
            method: "POST",
            body: new URLSearchParams({
              scheduleMemberProgressNo: scheduleMemberProgressNo,
              watchedpage: i,
              gapTime: 3600
            })
          });
        case 2:
          response = _context.v;
          createLog(response.ok, i);
        case 3:
          ++i;
          _context.n = 1;
          break;
        case 4:
          return _context.a(2);
      }
    }, _callee);
  }));
  return _lab_.apply(this, arguments);
}

var _params = new URLSearchParams(window.location.search);
if (_params.get("scheduleMemberProgressNo")) {
  await lab_1();
} else {
  await lab_2();
}
