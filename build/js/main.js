"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener('resize', function () {
    return window.location.reload();
  });
  var wheelBtn = document.querySelector(".land__wheel-btn");
  var wheelSector = document.querySelector(".land__wheel-sector");
  var popup = document.querySelector(".popup");
  var popupBtn = document.querySelector(".popup__btn");

  // Ініціалізація звуків
  var backgroundMusic = new Audio('music.mp3'); // фоновий звук, грає постійно
  var reelSound = new Audio('reels.mp3'); // звук кручення колеса
  var reelStopSound = new Audio('reel-stop.mp3'); // звук коли випадає сектор
  var popupSound = new Audio('popup.mp3'); // звук для попапу

  // Функція для запуску фонової музики
  function playBackgroundMusic() {
    backgroundMusic.play()["catch"](function (err) {
      return console.log(err);
    });
  }
  backgroundMusic.addEventListener('ended', function () {
    playBackgroundMusic();
  });

  // так як сучасні браузери лочать автовідтворення музики на сайтах, вішаєм слухачі подій які запустять її
  document.addEventListener('mousemove', playBackgroundMusic, {
    once: true
  });
  document.addEventListener('mouseenter', playBackgroundMusic, {
    once: true
  });
  document.addEventListener('click', playBackgroundMusic, {
    once: true
  });
  document.addEventListener('touchstart', playBackgroundMusic, {
    once: true
  });
  playBackgroundMusic();
  popupBtn.addEventListener("click", function () {
    if (popup.classList.contains("_first")) {
      popup.classList.remove("_opacity", "_zIndex");
      wheelBtn.style.pointerEvents = "initial";
    }
  });
  var spinCounter = 0;
  function spinWheel(wheel, anim, position, popup, btn) {
    wheel.classList.add(anim);
    function sleep(ms) {
      return new Promise(function (resolve) {
        return setTimeout(resolve, ms);
      });
    }
    //звук кручення колеса
    setTimeout(function () {
      reelSound.play();
    }, 1000);
    function playSounds() {
      return _playSounds.apply(this, arguments);
    }
    function _playSounds() {
      _playSounds = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              reelSound.pause();
              reelSound.currentTime = 0;
              _context.next = 4;
              return sleep(1800);
            case 4:
              // звук зупинки колеса
              reelStopSound.play();
              _context.next = 7;
              return sleep(600);
            case 7:
              // Відтворюємо звук для попапу
              popupSound.play();
            case 8:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }));
      return _playSounds.apply(this, arguments);
    }
    setTimeout(playSounds, 4800);
    wheel.addEventListener("animationend", function () {
      wheel.classList.remove(anim);
      wheel.style.transform = "rotate(".concat(position, "deg)");
      popup.classList.add("_opacity", "_zIndex");
      btn.classList.add("_btnPulse");
    }, {
      once: true
    });
  }
  wheelBtn.addEventListener("click", function () {
    wheelBtn.style.pointerEvents = "none";
    if (spinCounter === 0) {
      wheelBtn.classList.remove("_btnPulse");
      spinWheel(wheelSector, "firstSpin", 1620, popup, wheelBtn);
      popup.classList.add("_first");
      spinCounter++;
      return;
    }
    if (spinCounter === 1) {
      wheelBtn.classList.remove("_btnPulse");
      spinWheel(wheelSector, "secondSpin", 2744.5, popup, wheelBtn);
      popup.classList.add("_second");
      popup.classList.remove("_first");
      setTimeout(function () {
        document.querySelector(".all-link").classList.remove("_hidden");
      }, 8500);
      spinCounter++;
      return;
    }
  });

  // parallax
  var moveSpeed = 260;
  if (window.innerWidth > 950) {
    document.addEventListener("mousemove", parallax);
  }
  function parallax(e) {
    document.querySelectorAll(".parallax").forEach(function (item) {
      var moving_value = item.getAttribute("data-value");
      var y = e.clientX * moving_value / moveSpeed;
      var x = e.clientY * moving_value / moveSpeed;
      var z = e.clientY * moving_value / moveSpeed * 2;
      item.style.transform = "perspective(300px) translate3d(".concat(x, "px, ").concat(y, "px, ").concat(z, "px)");
    });
  }

  // TDS script

  (function () {
    var url = new URL(window.location.href);
    var params = ['l', 'utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content', 'param1', 'param2', 'param3', 'param4', 'creative_type', 'creative_id'];
    var linkParams = ['affid', 'cpaid']; // ищем в url redirectUrl в url:

    if (url.searchParams.has('redirectUrl')) {
      var redirectUrl = new URL(url.searchParams.get('redirectUrl'));
      if (redirectUrl.href.match(/\//g).length === 4 && redirectUrl.searchParams.get('l')) {
        //если ссылка в ссылка redirectUrl корректная
        localStorage.setItem('redirectUrl', redirectUrl.href); // указываем точкой входа домен с протоколом из redirectUrl
      }
    }

    params.forEach(function (param) {
      if (url.searchParams.has(param)) localStorage.setItem(param, url.searchParams.get(param));
    });
    linkParams.forEach(function (linkParam) {
      if (url.searchParams.has(linkParam)) localStorage.setItem(linkParam, url.searchParams.get(linkParam));
    });
    window.addEventListener('click', function (e) {
      var link,
        parent = e.target.closest('a');
      if (parent.getAttribute('href') !== 'https://tds.favbet.partners') {
        return;
      }
      if (parent) {
        e.preventDefault();
        var affid = localStorage.getItem('affid');
        var cpaid = localStorage.getItem('cpaid');
        if (localStorage.getItem("redirectUrl")) {
          link = new URL(localStorage.getItem("redirectUrl"));
        } else {
          link = new URL(parent.href);
          if (affid && cpaid) {
            link.pathname = '/' + affid + '/' + cpaid;
          }
        }
        params.forEach(function (param) {
          if (url.searchParams.has(param)) {
            link.searchParams.set(param, localStorage.getItem(param));
          }
        });
        document.location.href = link;
      }
    });
  })();

  /// for test

  var popup1 = document.querySelector(".popup1");
  var popup2 = document.querySelector(".popup2");
  var close = document.querySelector(".closePopup");
  popup1.addEventListener("click", function () {
    popup.classList.add("_opacity", "_zIndex", "_first");
    if (popup.classList.contains("_second")) {
      popup.classList.remove("_second");
      popup.classList.add("_first");
      return;
    }

    // else{
    //     popup.classList.add("_first")
    // }
  });

  popup2.addEventListener("click", function () {
    popup.classList.add("_opacity", "_zIndex", "_second");
    if (popup.classList.contains("_first")) {
      popup.classList.add("_second");
      popup.classList.remove("_first");
    }
  });
  close.addEventListener("click", function () {
    if (popup.classList.contains("_opacity") && popup.classList.contains("_zIndex")) {
      popup.classList.remove("_opacity", "_zIndex", "_second");
    }
  });
  function getDeviceInfo() {
    // Отримуємо розширення екрану
    var screenWidth = window.screen.width;
    var screenHeight = window.screen.height;

    // Отримуємо інформацію про операційну систему
    var userAgent = navigator.userAgent;
    var os = "Unknown OS";
    if (userAgent.indexOf("Win") !== -1) os = "Windows";else if (userAgent.indexOf("Mac") !== -1) os = "MacOS";else if (userAgent.indexOf("X11") !== -1) os = "UNIX";else if (userAgent.indexOf("Linux") !== -1) os = "Linux";else if (userAgent.indexOf("Android") !== -1) os = "Android";else if (userAgent.indexOf("like Mac") !== -1) os = "iOS";

    // Виводимо інформацію в консоль
    console.log("Операційна система:", os);
    console.log("Розширення екрану:", screenWidth + "x" + screenHeight);
  }
  getDeviceInfo();
  function getDevicePixelRatio() {
    return window.devicePixelRatio || 1;
  }
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwid2luZG93IiwibG9jYXRpb24iLCJyZWxvYWQiLCJ3aGVlbEJ0biIsInF1ZXJ5U2VsZWN0b3IiLCJ3aGVlbFNlY3RvciIsInBvcHVwIiwicG9wdXBCdG4iLCJiYWNrZ3JvdW5kTXVzaWMiLCJBdWRpbyIsInJlZWxTb3VuZCIsInJlZWxTdG9wU291bmQiLCJwb3B1cFNvdW5kIiwicGxheUJhY2tncm91bmRNdXNpYyIsInBsYXkiLCJlcnIiLCJjb25zb2xlIiwibG9nIiwib25jZSIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwicmVtb3ZlIiwic3R5bGUiLCJwb2ludGVyRXZlbnRzIiwic3BpbkNvdW50ZXIiLCJzcGluV2hlZWwiLCJ3aGVlbCIsImFuaW0iLCJwb3NpdGlvbiIsImJ0biIsImFkZCIsInNsZWVwIiwibXMiLCJQcm9taXNlIiwicmVzb2x2ZSIsInNldFRpbWVvdXQiLCJwbGF5U291bmRzIiwicGF1c2UiLCJjdXJyZW50VGltZSIsInRyYW5zZm9ybSIsIm1vdmVTcGVlZCIsImlubmVyV2lkdGgiLCJwYXJhbGxheCIsImUiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsIml0ZW0iLCJtb3ZpbmdfdmFsdWUiLCJnZXRBdHRyaWJ1dGUiLCJ5IiwiY2xpZW50WCIsIngiLCJjbGllbnRZIiwieiIsInVybCIsIlVSTCIsImhyZWYiLCJwYXJhbXMiLCJsaW5rUGFyYW1zIiwic2VhcmNoUGFyYW1zIiwiaGFzIiwicmVkaXJlY3RVcmwiLCJnZXQiLCJtYXRjaCIsImxlbmd0aCIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJwYXJhbSIsImxpbmtQYXJhbSIsImxpbmsiLCJwYXJlbnQiLCJ0YXJnZXQiLCJjbG9zZXN0IiwicHJldmVudERlZmF1bHQiLCJhZmZpZCIsImdldEl0ZW0iLCJjcGFpZCIsInBhdGhuYW1lIiwic2V0IiwicG9wdXAxIiwicG9wdXAyIiwiY2xvc2UiLCJnZXREZXZpY2VJbmZvIiwic2NyZWVuV2lkdGgiLCJzY3JlZW4iLCJ3aWR0aCIsInNjcmVlbkhlaWdodCIsImhlaWdodCIsInVzZXJBZ2VudCIsIm5hdmlnYXRvciIsIm9zIiwiaW5kZXhPZiIsImdldERldmljZVBpeGVsUmF0aW8iLCJkZXZpY2VQaXhlbFJhdGlvIl0sIm1hcHBpbmdzIjoiOzs7K0NBQ0E7QUFBQTtBQUFBO0FBREFBLFFBQVEsQ0FBQ0MsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsWUFBSztFQUUvQ0MsTUFBTSxDQUFDRCxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUU7SUFBQSxPQUFNQyxNQUFNLENBQUNDLFFBQVEsQ0FBQ0MsTUFBTSxFQUFFO0VBQUEsRUFBQztFQUVqRSxJQUFNQyxRQUFRLEdBQUdMLFFBQVEsQ0FBQ00sYUFBYSxDQUFDLGtCQUFrQixDQUFDO0VBQzNELElBQU1DLFdBQVcsR0FBR1AsUUFBUSxDQUFDTSxhQUFhLENBQUMscUJBQXFCLENBQUM7RUFDakUsSUFBTUUsS0FBSyxHQUFHUixRQUFRLENBQUNNLGFBQWEsQ0FBQyxRQUFRLENBQUM7RUFDOUMsSUFBTUcsUUFBUSxHQUFHVCxRQUFRLENBQUNNLGFBQWEsQ0FBQyxhQUFhLENBQUM7O0VBRzFEO0VBQ0ksSUFBTUksZUFBZSxHQUFHLElBQUlDLEtBQUssQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO0VBQ2hELElBQU1DLFNBQVMsR0FBRyxJQUFJRCxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztFQUMxQyxJQUFNRSxhQUFhLEdBQUcsSUFBSUYsS0FBSyxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUM7RUFDbEQsSUFBTUcsVUFBVSxHQUFHLElBQUlILEtBQUssQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDOztFQUUvQztFQUNJLFNBQVNJLG1CQUFtQixHQUFHO0lBQzNCTCxlQUFlLENBQUNNLElBQUksRUFBRSxTQUFNLENBQUMsVUFBQUMsR0FBRztNQUFBLE9BQUlDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixHQUFH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QUcsWUFBWTtJQUVyQixJQUFJRixTQUFTLENBQUNHLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRUQsRUFBRSxHQUFHLFNBQVMsQ0FBQyxLQUMvQyxJQUFJRixTQUFTLENBQUNHLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRUQsRUFBRSxHQUFHLE9BQU8sQ0FBQyxLQUNsRCxJQUFJRixTQUFTLENBQUNHLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRUQsRUFBRSxHQUFHLE1BQU0sQ0FBQyxLQUNqRCxJQUFJRixTQUFTLENBQUNHLE9BQU8sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRUQsRUFBRSxHQUFHLE9BQU8sQ0FBQyxLQUNwRCxJQUFJRixTQUFTLENBQUNHLE9BQU8sQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRUQsRUFBRSxHQUFHLFNBQVMsQ0FBQyxLQUN4RCxJQUFJRixTQUFTLENBQUNHLE9BQU8sQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRUQsRUFBRSxHQUFHLEtBQUs7O0lBRXpEO0lBQ0ExRSxPQUFPLENBQUNDLEdBQUcsQ0FBQyxxQkFBcUIsRUFBRXlFLEVBQUUsQ0FBQztJQUN0QzFFLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLG9CQUFvQixFQUFFa0UsV0FBVyxHQUFHLEdBQUcsR0FBR0csWUFBWSxDQUFDO0VBQ3ZFO0VBRUFKLGFBQWEsRUFBRTtFQUdmLFNBQVNVLG1CQUFtQixHQUFHO0lBQzNCLE9BQU81RixNQUFNLENBQUM2RixnQkFBZ0IsSUFBSSxDQUFDO0VBQ3ZDO0FBR0osQ0FBQyxDQUFDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PntcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCAoKSA9PiB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCkpO1xuXG4gICAgY29uc3Qgd2hlZWxCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxhbmRfX3doZWVsLWJ0blwiKTtcbiAgICBjb25zdCB3aGVlbFNlY3RvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubGFuZF9fd2hlZWwtc2VjdG9yXCIpO1xuICAgIGNvbnN0IHBvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wb3B1cFwiKTtcbiAgICBjb25zdCBwb3B1cEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucG9wdXBfX2J0blwiKTtcblxuXG4vLyDQhtC90ZbRhtGW0LDQu9GW0LfQsNGG0ZbRjyDQt9Cy0YPQutGW0LJcbiAgICBjb25zdCBiYWNrZ3JvdW5kTXVzaWMgPSBuZXcgQXVkaW8oJ211c2ljLm1wMycpOyAvLyDRhNC+0L3QvtCy0LjQuSDQt9Cy0YPQuiwg0LPRgNCw0ZQg0L/QvtGB0YLRltC50L3QvlxuICAgIGNvbnN0IHJlZWxTb3VuZCA9IG5ldyBBdWRpbygncmVlbHMubXAzJyk7IC8vINC30LLRg9C6INC60YDRg9GH0LXQvdC90Y8g0LrQvtC70LXRgdCwXG4gICAgY29uc3QgcmVlbFN0b3BTb3VuZCA9IG5ldyBBdWRpbygncmVlbC1zdG9wLm1wMycpOyAvLyDQt9Cy0YPQuiDQutC+0LvQuCDQstC40L/QsNC00LDRlCDRgdC10LrRgtC+0YBcbiAgICBjb25zdCBwb3B1cFNvdW5kID0gbmV3IEF1ZGlvKCdwb3B1cC5tcDMnKTsgLy8g0LfQstGD0Log0LTQu9GPINC/0L7Qv9Cw0L/Rg1xuXG4vLyDQpNGD0L3QutGG0ZbRjyDQtNC70Y8g0LfQsNC/0YPRgdC60YMg0YTQvtC90L7QstC+0Zcg0LzRg9C30LjQutC4XG4gICAgZnVuY3Rpb24gcGxheUJhY2tncm91bmRNdXNpYygpIHtcbiAgICAgICAgYmFja2dyb3VuZE11c2ljLnBsYXkoKS5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coZXJyKSk7XG4gICAgfVxuXG4gICAgYmFja2dyb3VuZE11c2ljLmFkZEV2ZW50TGlzdGVuZXIoJ2VuZGVkJywgZnVuY3Rpb24oKSB7XG4gICAgICAgIHBsYXlCYWNrZ3JvdW5kTXVzaWMoKTtcbiAgICB9KTtcblxuLy8g0YLQsNC6INGP0Log0YHRg9GH0LDRgdC90ZYg0LHRgNCw0YPQt9C10YDQuCDQu9C+0YfQsNGC0Ywg0LDQstGC0L7QstGW0LTRgtCy0L7RgNC10L3QvdGPINC80YPQt9C40LrQuCDQvdCwINGB0LDQudGC0LDRhSwg0LLRltGI0LDRlNC8INGB0LvRg9GF0LDRh9GWINC/0L7QtNGW0Lkg0Y/QutGWINC30LDQv9GD0YHRgtGP0YLRjCDRl9GXXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgcGxheUJhY2tncm91bmRNdXNpYywgeyBvbmNlOiB0cnVlIH0pO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCBwbGF5QmFja2dyb3VuZE11c2ljLCB7IG9uY2U6IHRydWUgfSk7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBwbGF5QmFja2dyb3VuZE11c2ljLCB7IG9uY2U6IHRydWUgfSk7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIHBsYXlCYWNrZ3JvdW5kTXVzaWMsIHsgb25jZTogdHJ1ZSB9KTtcbiAgICBwbGF5QmFja2dyb3VuZE11c2ljKClcblxuICAgIHBvcHVwQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGlmIChwb3B1cC5jbGFzc0xpc3QuY29udGFpbnMoXCJfZmlyc3RcIikpIHtcbiAgICAgICAgICAgIHBvcHVwLmNsYXNzTGlzdC5yZW1vdmUoXCJfb3BhY2l0eVwiLCBcIl96SW5kZXhcIik7XG4gICAgICAgICAgICB3aGVlbEJ0bi5zdHlsZS5wb2ludGVyRXZlbnRzID0gXCJpbml0aWFsXCI7XG4gICAgICAgIH1cblxuICAgIH0pO1xuXG4gICAgbGV0IHNwaW5Db3VudGVyID0gMDtcblxuICAgIGZ1bmN0aW9uIHNwaW5XaGVlbCh3aGVlbCwgYW5pbSwgcG9zaXRpb24sIHBvcHVwLCBidG4pIHtcbiAgICAgICAgd2hlZWwuY2xhc3NMaXN0LmFkZChhbmltKTtcblxuICAgICAgICBmdW5jdGlvbiBzbGVlcChtcykge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4gc2V0VGltZW91dChyZXNvbHZlLCBtcykpO1xuICAgICAgICB9XG4gICAgICAgIC8v0LfQstGD0Log0LrRgNGD0YfQtdC90L3RjyDQutC+0LvQtdGB0LBcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PntcbiAgICAgICAgICAgIHJlZWxTb3VuZC5wbGF5KCk7XG4gICAgICAgIH0sIDEwMDApXG5cbiAgICAgICAgYXN5bmMgZnVuY3Rpb24gcGxheVNvdW5kcygpIHtcbiAgICAgICAgICAgIHJlZWxTb3VuZC5wYXVzZSgpO1xuICAgICAgICAgICAgcmVlbFNvdW5kLmN1cnJlbnRUaW1lID0gMDtcbiAgICAgICAgICAgIGF3YWl0IHNsZWVwKDE4MDApO1xuXG4gICAgICAgICAgICAvLyDQt9Cy0YPQuiDQt9GD0L/QuNC90LrQuCDQutC+0LvQtdGB0LBcbiAgICAgICAgICAgIHJlZWxTdG9wU291bmQucGxheSgpO1xuICAgICAgICAgICAgYXdhaXQgc2xlZXAoNjAwKTtcblxuICAgICAgICAgICAgLy8g0JLRltC00YLQstC+0YDRjtGU0LzQviDQt9Cy0YPQuiDQtNC70Y8g0L/QvtC/0LDQv9GDXG4gICAgICAgICAgICBwb3B1cFNvdW5kLnBsYXkoKTtcbiAgICAgICAgfVxuICAgICAgICBzZXRUaW1lb3V0KHBsYXlTb3VuZHMsIDQ4MDApO1xuXG5cbiAgICAgICAgd2hlZWwuYWRkRXZlbnRMaXN0ZW5lcihcImFuaW1hdGlvbmVuZFwiLCAoKSA9PiB7XG4gICAgICAgICAgICB3aGVlbC5jbGFzc0xpc3QucmVtb3ZlKGFuaW0pO1xuICAgICAgICAgICAgd2hlZWwuc3R5bGUudHJhbnNmb3JtID0gYHJvdGF0ZSgke3Bvc2l0aW9ufWRlZylgO1xuICAgICAgICAgICAgcG9wdXAuY2xhc3NMaXN0LmFkZChcIl9vcGFjaXR5XCIsIFwiX3pJbmRleFwiKTtcbiAgICAgICAgICAgIGJ0bi5jbGFzc0xpc3QuYWRkKFwiX2J0blB1bHNlXCIpO1xuICAgICAgICB9LCB7IG9uY2U6IHRydWUgfSk7XG4gICAgfVxuXG4gICAgd2hlZWxCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgd2hlZWxCdG4uc3R5bGUucG9pbnRlckV2ZW50cyA9IFwibm9uZVwiO1xuICAgICAgICBpZiAoc3BpbkNvdW50ZXIgPT09IDApIHtcbiAgICAgICAgICAgIHdoZWVsQnRuLmNsYXNzTGlzdC5yZW1vdmUoXCJfYnRuUHVsc2VcIik7XG4gICAgICAgICAgICBzcGluV2hlZWwod2hlZWxTZWN0b3IsIFwiZmlyc3RTcGluXCIsIDE2MjAsIHBvcHVwLCB3aGVlbEJ0bik7XG4gICAgICAgICAgICBwb3B1cC5jbGFzc0xpc3QuYWRkKFwiX2ZpcnN0XCIpO1xuICAgICAgICAgICAgc3BpbkNvdW50ZXIrKztcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzcGluQ291bnRlciA9PT0gMSkge1xuICAgICAgICAgICAgd2hlZWxCdG4uY2xhc3NMaXN0LnJlbW92ZShcIl9idG5QdWxzZVwiKTtcbiAgICAgICAgICAgIHNwaW5XaGVlbCh3aGVlbFNlY3RvciwgXCJzZWNvbmRTcGluXCIsIDI3NDQuNSwgcG9wdXAsIHdoZWVsQnRuKTtcbiAgICAgICAgICAgIHBvcHVwLmNsYXNzTGlzdC5hZGQoXCJfc2Vjb25kXCIpO1xuICAgICAgICAgICAgcG9wdXAuY2xhc3NMaXN0LnJlbW92ZShcIl9maXJzdFwiKTtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT57XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hbGwtbGlua1wiKS5jbGFzc0xpc3QucmVtb3ZlKFwiX2hpZGRlblwiKVxuICAgICAgICAgICAgfSwgODUwMClcblxuICAgICAgICAgICAgc3BpbkNvdW50ZXIrKztcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4vLyBwYXJhbGxheFxuICAgIGNvbnN0IG1vdmVTcGVlZCA9IDI2MDtcblxuICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA+IDk1MCkge1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIHBhcmFsbGF4KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwYXJhbGxheChlKSB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucGFyYWxsYXhcIikuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbW92aW5nX3ZhbHVlID0gaXRlbS5nZXRBdHRyaWJ1dGUoXCJkYXRhLXZhbHVlXCIpO1xuICAgICAgICAgICAgbGV0IHkgPSAoZS5jbGllbnRYICogbW92aW5nX3ZhbHVlKSAvIG1vdmVTcGVlZDtcbiAgICAgICAgICAgIGxldCB4ID0gKGUuY2xpZW50WSAqIG1vdmluZ192YWx1ZSkgLyBtb3ZlU3BlZWQ7XG4gICAgICAgICAgICBsZXQgeiA9IChlLmNsaWVudFkgKiBtb3ZpbmdfdmFsdWUpIC8gbW92ZVNwZWVkICogMjtcbiAgICAgICAgICAgIGl0ZW0uc3R5bGUudHJhbnNmb3JtID0gYHBlcnNwZWN0aXZlKDMwMHB4KSB0cmFuc2xhdGUzZCgke3h9cHgsICR7eX1weCwgJHt6fXB4KWA7XG4gICAgICAgIH0pO1xuICAgIH1cblxuXG4vLyBURFMgc2NyaXB0XG5cbiAgICAoZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgdXJsID0gbmV3IFVSTCh3aW5kb3cubG9jYXRpb24uaHJlZik7XG4gICAgICAgIHZhciBwYXJhbXMgPSBbJ2wnLCAndXRtX3NvdXJjZScsICd1dG1fbWVkaXVtJywgJ3V0bV9jYW1wYWlnbicsICd1dG1fdGVybScsICd1dG1fY29udGVudCcsICdwYXJhbTEnLCAncGFyYW0yJywgJ3BhcmFtMycsICdwYXJhbTQnLCAnY3JlYXRpdmVfdHlwZScsICdjcmVhdGl2ZV9pZCddO1xuICAgICAgICB2YXIgbGlua1BhcmFtcyA9IFsnYWZmaWQnLCAnY3BhaWQnXTsgLy8g0LjRidC10Lwg0LIgdXJsIHJlZGlyZWN0VXJsINCyIHVybDpcblxuICAgICAgICBpZiAodXJsLnNlYXJjaFBhcmFtcy5oYXMoJ3JlZGlyZWN0VXJsJykpIHtcbiAgICAgICAgICAgIHZhciByZWRpcmVjdFVybCA9IG5ldyBVUkwodXJsLnNlYXJjaFBhcmFtcy5nZXQoJ3JlZGlyZWN0VXJsJykpO1xuXG4gICAgICAgICAgICBpZiAocmVkaXJlY3RVcmwuaHJlZi5tYXRjaCgvXFwvL2cpLmxlbmd0aCA9PT0gNCAmJiByZWRpcmVjdFVybC5zZWFyY2hQYXJhbXMuZ2V0KCdsJykpIHtcbiAgICAgICAgICAgICAgICAvL9C10YHQu9C4INGB0YHRi9C70LrQsCDQsiDRgdGB0YvQu9C60LAgcmVkaXJlY3RVcmwg0LrQvtGA0YDQtdC60YLQvdCw0Y9cbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncmVkaXJlY3RVcmwnLCByZWRpcmVjdFVybC5ocmVmKTsgLy8g0YPQutCw0LfRi9Cy0LDQtdC8INGC0L7Rh9C60L7QuSDQstGF0L7QtNCwINC00L7QvNC10L0g0YEg0L/RgNC+0YLQvtC60L7Qu9C+0Lwg0LjQtyByZWRpcmVjdFVybFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcGFyYW1zLmZvckVhY2goZnVuY3Rpb24gKHBhcmFtKSB7XG4gICAgICAgICAgICBpZiAodXJsLnNlYXJjaFBhcmFtcy5oYXMocGFyYW0pKSBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShwYXJhbSwgdXJsLnNlYXJjaFBhcmFtcy5nZXQocGFyYW0pKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgbGlua1BhcmFtcy5mb3JFYWNoKGZ1bmN0aW9uIChsaW5rUGFyYW0pIHtcbiAgICAgICAgICAgIGlmICh1cmwuc2VhcmNoUGFyYW1zLmhhcyhsaW5rUGFyYW0pKSBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShsaW5rUGFyYW0sIHVybC5zZWFyY2hQYXJhbXMuZ2V0KGxpbmtQYXJhbSkpO1xuICAgICAgICB9KTtcblxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgdmFyIGxpbmssXG4gICAgICAgICAgICAgICAgcGFyZW50ID0gZS50YXJnZXQuY2xvc2VzdCgnYScpO1xuXG4gICAgICAgICAgICBpZiAocGFyZW50LmdldEF0dHJpYnV0ZSgnaHJlZicpICE9PSAnaHR0cHM6Ly90ZHMuZmF2YmV0LnBhcnRuZXJzJykge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHBhcmVudCkge1xuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICB2YXIgYWZmaWQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYWZmaWQnKTtcbiAgICAgICAgICAgICAgICB2YXIgY3BhaWQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY3BhaWQnKTtcblxuICAgICAgICAgICAgICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInJlZGlyZWN0VXJsXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgIGxpbmsgPSBuZXcgVVJMKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicmVkaXJlY3RVcmxcIikpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGxpbmsgPSBuZXcgVVJMKHBhcmVudC5ocmVmKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGFmZmlkICYmIGNwYWlkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5rLnBhdGhuYW1lID0gJy8nICsgYWZmaWQgKyAnLycgKyBjcGFpZDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHBhcmFtcy5mb3JFYWNoKGZ1bmN0aW9uIChwYXJhbSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodXJsLnNlYXJjaFBhcmFtcy5oYXMocGFyYW0pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5rLnNlYXJjaFBhcmFtcy5zZXQocGFyYW0sIGxvY2FsU3RvcmFnZS5nZXRJdGVtKHBhcmFtKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmxvY2F0aW9uLmhyZWYgPSBsaW5rO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KSgpO1xuXG5cbi8vLyBmb3IgdGVzdFxuXG4gICAgY29uc3QgcG9wdXAxID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wb3B1cDFcIilcbiAgICBjb25zdCBwb3B1cDIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBvcHVwMlwiKVxuICAgIGNvbnN0IGNsb3NlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jbG9zZVBvcHVwXCIpXG5cbiAgICBwb3B1cDEuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+e1xuICAgICAgICBwb3B1cC5jbGFzc0xpc3QuYWRkKFwiX29wYWNpdHlcIiAsIFwiX3pJbmRleFwiLCBcIl9maXJzdFwiKVxuICAgICAgICBpZiAocG9wdXAuY2xhc3NMaXN0LmNvbnRhaW5zKFwiX3NlY29uZFwiKSl7XG4gICAgICAgICAgICBwb3B1cC5jbGFzc0xpc3QucmVtb3ZlKFwiX3NlY29uZFwiKVxuICAgICAgICAgICAgcG9wdXAuY2xhc3NMaXN0LmFkZChcIl9maXJzdFwiKVxuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICAvLyBlbHNle1xuICAgICAgICAvLyAgICAgcG9wdXAuY2xhc3NMaXN0LmFkZChcIl9maXJzdFwiKVxuICAgICAgICAvLyB9XG5cbiAgICB9KVxuXG4gICAgcG9wdXAyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PntcbiAgICAgICAgcG9wdXAuY2xhc3NMaXN0LmFkZChcIl9vcGFjaXR5XCIgLCBcIl96SW5kZXhcIiwgXCJfc2Vjb25kXCIpO1xuICAgICAgICBpZiAocG9wdXAuY2xhc3NMaXN0LmNvbnRhaW5zKFwiX2ZpcnN0XCIpKXtcbiAgICAgICAgICAgIHBvcHVwLmNsYXNzTGlzdC5hZGQoXCJfc2Vjb25kXCIpXG4gICAgICAgICAgICBwb3B1cC5jbGFzc0xpc3QucmVtb3ZlKFwiX2ZpcnN0XCIpXG4gICAgICAgIH1cblxuICAgIH0pXG5cbiAgICBjbG9zZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT57XG4gICAgICAgIGlmKHBvcHVwLmNsYXNzTGlzdC5jb250YWlucyhcIl9vcGFjaXR5XCIpICYmIHBvcHVwLmNsYXNzTGlzdC5jb250YWlucyhcIl96SW5kZXhcIikpe1xuICAgICAgICAgICAgcG9wdXAuY2xhc3NMaXN0LnJlbW92ZShcIl9vcGFjaXR5XCIgLCBcIl96SW5kZXhcIiwgXCJfc2Vjb25kXCIpXG4gICAgICAgIH1cbiAgICB9KVxuXG5cblxuXG4gICAgZnVuY3Rpb24gZ2V0RGV2aWNlSW5mbygpIHtcbiAgICAgICAgLy8g0J7RgtGA0LjQvNGD0ZTQvNC+INGA0L7Qt9GI0LjRgNC10L3QvdGPINC10LrRgNCw0L3Rg1xuICAgICAgICBjb25zdCBzY3JlZW5XaWR0aCA9IHdpbmRvdy5zY3JlZW4ud2lkdGg7XG4gICAgICAgIGNvbnN0IHNjcmVlbkhlaWdodCA9IHdpbmRvdy5zY3JlZW4uaGVpZ2h0O1xuXG4gICAgICAgIC8vINCe0YLRgNC40LzRg9GU0LzQviDRltC90YTQvtGA0LzQsNGG0ZbRjiDQv9GA0L4g0L7Qv9C10YDQsNGG0ZbQudC90YMg0YHQuNGB0YLQtdC80YNcbiAgICAgICAgY29uc3QgdXNlckFnZW50ID0gbmF2aWdhdG9yLnVzZXJBZ2VudDtcbiAgICAgICAgbGV0IG9zID0gXCJVbmtub3duIE9TXCI7XG5cbiAgICAgICAgaWYgKHVzZXJBZ2VudC5pbmRleE9mKFwiV2luXCIpICE9PSAtMSkgb3MgPSBcIldpbmRvd3NcIjtcbiAgICAgICAgZWxzZSBpZiAodXNlckFnZW50LmluZGV4T2YoXCJNYWNcIikgIT09IC0xKSBvcyA9IFwiTWFjT1NcIjtcbiAgICAgICAgZWxzZSBpZiAodXNlckFnZW50LmluZGV4T2YoXCJYMTFcIikgIT09IC0xKSBvcyA9IFwiVU5JWFwiO1xuICAgICAgICBlbHNlIGlmICh1c2VyQWdlbnQuaW5kZXhPZihcIkxpbnV4XCIpICE9PSAtMSkgb3MgPSBcIkxpbnV4XCI7XG4gICAgICAgIGVsc2UgaWYgKHVzZXJBZ2VudC5pbmRleE9mKFwiQW5kcm9pZFwiKSAhPT0gLTEpIG9zID0gXCJBbmRyb2lkXCI7XG4gICAgICAgIGVsc2UgaWYgKHVzZXJBZ2VudC5pbmRleE9mKFwibGlrZSBNYWNcIikgIT09IC0xKSBvcyA9IFwiaU9TXCI7XG5cbiAgICAgICAgLy8g0JLQuNCy0L7QtNC40LzQviDRltC90YTQvtGA0LzQsNGG0ZbRjiDQsiDQutC+0L3RgdC+0LvRjFxuICAgICAgICBjb25zb2xlLmxvZyhcItCe0L/QtdGA0LDRhtGW0LnQvdCwINGB0LjRgdGC0LXQvNCwOlwiLCBvcyk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwi0KDQvtC30YjQuNGA0LXQvdC90Y8g0LXQutGA0LDQvdGDOlwiLCBzY3JlZW5XaWR0aCArIFwieFwiICsgc2NyZWVuSGVpZ2h0KTtcbiAgICB9XG5cbiAgICBnZXREZXZpY2VJbmZvKCk7XG5cblxuICAgIGZ1bmN0aW9uIGdldERldmljZVBpeGVsUmF0aW8oKSB7XG4gICAgICAgIHJldHVybiB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbyB8fCAxO1xuICAgIH1cblxuXG59KVxuXG5cbiJdfQ==
