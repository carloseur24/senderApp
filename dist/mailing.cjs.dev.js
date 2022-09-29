'use strict';

var fsExtra = require('fs-extra');
require('dotenv/config');
var yargs = require('yargs/yargs');
var prompts = require('prompts');
var chalk = require('chalk');
var path = require('path');
var lodash = require('lodash');
var prettier = require('prettier');
var crypto = require('crypto');
var tree = require('tree-node-cli');
var nodemailer = require('nodemailer');
var mailingCore = require('mailing-core');
require('react');
var mjmlReact = require('mjml-react');
require('react/jsx-runtime');
var posthogNode = require('posthog-node');
var http = require('http');
var open = require('open');
var next = require('next');
var url = require('url');
var child_process = require('child_process');
var esbuild = require('esbuild');
var process$1 = require('process');
var chokidar = require('chokidar');

function _interopDefault (e) { return e && e.__esModule ? e : { 'default': e }; }

function _interopNamespace(e) {
  if (e && e.__esModule) return e;
  var n = Object.create(null);
  if (e) {
    Object.keys(e).forEach(function (k) {
      if (k !== 'default') {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function () { return e[k]; }
        });
      }
    });
  }
  n["default"] = e;
  return Object.freeze(n);
}

var yargs__default = /*#__PURE__*/_interopDefault(yargs);
var prompts__default = /*#__PURE__*/_interopDefault(prompts);
var chalk__default = /*#__PURE__*/_interopDefault(chalk);
var prettier__namespace = /*#__PURE__*/_interopNamespace(prettier);
var tree__default = /*#__PURE__*/_interopDefault(tree);
var nodemailer__default = /*#__PURE__*/_interopDefault(nodemailer);
var http__default = /*#__PURE__*/_interopDefault(http);
var open__default = /*#__PURE__*/_interopDefault(open);
var next__default = /*#__PURE__*/_interopDefault(next);

function _regeneratorRuntime() {
  /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */

  _regeneratorRuntime = function () {
    return exports;
  };

  var exports = {},
      Op = Object.prototype,
      hasOwn = Op.hasOwnProperty,
      $Symbol = "function" == typeof Symbol ? Symbol : {},
      iteratorSymbol = $Symbol.iterator || "@@iterator",
      asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator",
      toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    return Object.defineProperty(obj, key, {
      value: value,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }), obj[key];
  }

  try {
    define({}, "");
  } catch (err) {
    define = function (obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator,
        generator = Object.create(protoGenerator.prototype),
        context = new Context(tryLocsList || []);
    return generator._invoke = function (innerFn, self, context) {
      var state = "suspendedStart";
      return function (method, arg) {
        if ("executing" === state) throw new Error("Generator is already running");

        if ("completed" === state) {
          if ("throw" === method) throw arg;
          return doneResult();
        }

        for (context.method = method, context.arg = arg;;) {
          var delegate = context.delegate;

          if (delegate) {
            var delegateResult = maybeInvokeDelegate(delegate, context);

            if (delegateResult) {
              if (delegateResult === ContinueSentinel) continue;
              return delegateResult;
            }
          }

          if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) {
            if ("suspendedStart" === state) throw state = "completed", context.arg;
            context.dispatchException(context.arg);
          } else "return" === context.method && context.abrupt("return", context.arg);
          state = "executing";
          var record = tryCatch(innerFn, self, context);

          if ("normal" === record.type) {
            if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue;
            return {
              value: record.arg,
              done: context.done
            };
          }

          "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg);
        }
      };
    }(innerFn, self, context), generator;
  }

  function tryCatch(fn, obj, arg) {
    try {
      return {
        type: "normal",
        arg: fn.call(obj, arg)
      };
    } catch (err) {
      return {
        type: "throw",
        arg: err
      };
    }
  }

  exports.wrap = wrap;
  var ContinueSentinel = {};

  function Generator() {}

  function GeneratorFunction() {}

  function GeneratorFunctionPrototype() {}

  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });
  var getProto = Object.getPrototypeOf,
      NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype);
  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);

  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function (method) {
      define(prototype, method, function (arg) {
        return this._invoke(method, arg);
      });
    });
  }

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);

      if ("throw" !== record.type) {
        var result = record.arg,
            value = result.value;
        return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) {
          invoke("next", value, resolve, reject);
        }, function (err) {
          invoke("throw", err, resolve, reject);
        }) : PromiseImpl.resolve(value).then(function (unwrapped) {
          result.value = unwrapped, resolve(result);
        }, function (error) {
          return invoke("throw", error, resolve, reject);
        });
      }

      reject(record.arg);
    }

    var previousPromise;

    this._invoke = function (method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function (resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
    };
  }

  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];

    if (undefined === method) {
      if (context.delegate = null, "throw" === context.method) {
        if (delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel;
        context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);
    if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel;
    var info = record.arg;
    return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel);
  }

  function pushTryEntry(locs) {
    var entry = {
      tryLoc: locs[0]
    };
    1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal", delete record.arg, entry.completion = record;
  }

  function Context(tryLocsList) {
    this.tryEntries = [{
      tryLoc: "root"
    }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0);
  }

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) return iteratorMethod.call(iterable);
      if ("function" == typeof iterable.next) return iterable;

      if (!isNaN(iterable.length)) {
        var i = -1,
            next = function next() {
          for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next;

          return next.value = undefined, next.done = !0, next;
        };

        return next.next = next;
      }
    }

    return {
      next: doneResult
    };
  }

  function doneResult() {
    return {
      value: undefined,
      done: !0
    };
  }

  return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) {
    var ctor = "function" == typeof genFun && genFun.constructor;
    return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name));
  }, exports.mark = function (genFun) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun;
  }, exports.awrap = function (arg) {
    return {
      __await: arg
    };
  }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    void 0 === PromiseImpl && (PromiseImpl = Promise);
    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
    return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) {
      return result.done ? result.value : iter.next();
    });
  }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () {
    return this;
  }), define(Gp, "toString", function () {
    return "[object Generator]";
  }), exports.keys = function (object) {
    var keys = [];

    for (var key in object) keys.push(key);

    return keys.reverse(), function next() {
      for (; keys.length;) {
        var key = keys.pop();
        if (key in object) return next.value = key, next.done = !1, next;
      }

      return next.done = !0, next;
    };
  }, exports.values = values, Context.prototype = {
    constructor: Context,
    reset: function (skipTempReset) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined);
    },
    stop: function () {
      this.done = !0;
      var rootRecord = this.tryEntries[0].completion;
      if ("throw" === rootRecord.type) throw rootRecord.arg;
      return this.rval;
    },
    dispatchException: function (exception) {
      if (this.done) throw exception;
      var context = this;

      function handle(loc, caught) {
        return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i],
            record = entry.completion;
        if ("root" === entry.tryLoc) return handle("end");

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc"),
              hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
          } else {
            if (!hasFinally) throw new Error("try statement without catch or finally");
            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
          }
        }
      }
    },
    abrupt: function (type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];

        if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null);
      var record = finallyEntry ? finallyEntry.completion : {};
      return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record);
    },
    complete: function (record, afterLoc) {
      if ("throw" === record.type) throw record.arg;
      return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel;
    },
    finish: function (finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel;
      }
    },
    catch: function (tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];

        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;

          if ("throw" === record.type) {
            var thrown = record.arg;
            resetTryEntry(entry);
          }

          return thrown;
        }
      }

      throw new Error("illegal catch attempt");
    },
    delegateYield: function (iterable, resultName, nextLoc) {
      return this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      }, "next" === this.method && (this.arg = undefined), ContinueSentinel;
    }
  }, exports;
}

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }

  return target;
}

// otherwise, return null

function getPreviewsDirectory(emailsDir) {
  var previewsDirectory = path.resolve(emailsDir, "previews");
  return fsExtra.existsSync(previewsDirectory) ? previewsDirectory : null;
}
function readPackageJSON() {
  return readJSONverbose("./package.json");
}
function readJSONverbose(filename) {
  try {
    return fsExtra.readJSONSync(filename);
  } catch (err) {
    error("expected ".concat(filename, " to exist and be valid JSON"));
    throw err;
  }
}
function getMailingAPIBaseURL() {
  if (process.env.MM_DEV) {
    return "http://localhost:3000";
  } else {
    return "https://www.mailing.run";
  }
}

/*
  Functions for generating an anonymousId and get/set to a singleton
  this is necessary to report analytics the first time you run init,
  when you had no config and so argv has no anonymousId set
*/

var generatedAnonymousId; // only call getOrSetGeneratedAnonymousId when an anonymousId is missing and *should be set*
// because otherwise setting generatedAnonymousId will create side effects.  The only time we do this
// is when we're generating an anonymousId for the first time

function getOrSetGeneratedAnonymousId() {
  if (generatedAnonymousId) return generatedAnonymousId;
  var id = crypto.randomUUID();
  generatedAnonymousId = id;
  return id;
}
function getGeneratedAnonymousId() {
  return generatedAnonymousId;
}

var MAILING_CONFIG_FILE = "./mailing.config.json";
var DEFAULTS; // defaults for all options

function defaults() {
  if (DEFAULTS === undefined) DEFAULTS = {
    typescript: looksLikeTypescriptProject(),
    emailsDir: fsExtra.existsSync("./src/emails") ? "./src/emails" : "./emails",
    outDir: "./previews_html",
    port: 3883,
    quiet: false
  };
  return DEFAULTS;
} // options to include in the default config file

var DEFAULT_KEYS_FOR_CONFIG_FILE = ["typescript", "emailsDir", "outDir", "anonymousId"]; // an object to JSON stringify and write to the default config file

function defaultsForConfigFile() {
  // set anonymousId here and not in DEFAULTS so that it getOrSetGeneratedAnonymousId is only called
  // when an anonymousId needs to be generated
  var defaultsToWriteToConfig = _objectSpread2(_objectSpread2({}, defaults()), {}, {
    anonymousId: getOrSetGeneratedAnonymousId()
  });

  return lodash.pick(defaultsToWriteToConfig, DEFAULT_KEYS_FOR_CONFIG_FILE);
}

function looksLikeTypescriptProject() {
  var _pkg$devDependencies, _pkg$dependencies;

  if (fsExtra.existsSync("./tsconfig.json")) {
    return true;
  }

  var pkg = readPackageJSON();
  return !!((_pkg$devDependencies = pkg.devDependencies) !== null && _pkg$devDependencies !== void 0 && _pkg$devDependencies.typescript || (_pkg$dependencies = pkg.dependencies) !== null && _pkg$dependencies !== void 0 && _pkg$dependencies.typescript);
} // write the default mailing.config.json file to get you started

function writeDefaultConfigFile() {
  if (fsExtra.existsSync(MAILING_CONFIG_FILE)) {
    // read the JSON file
    var json = readJSONverbose(MAILING_CONFIG_FILE); // check if anonymousId in JSON object

    if ("anonymousId" in json) return; // if not, add it

    json.anonymousId = getOrSetGeneratedAnonymousId(); // ... and overwrite the JSON file

    debug("patching mailing.config.json to include anonymousId ".concat(getGeneratedAnonymousId()));
    var configJsonString = prettier__namespace.format(JSON.stringify(json), {
      parser: "json",
      printWidth: 0
    });
    fsExtra.writeFileSync(MAILING_CONFIG_FILE, configJsonString);
    log("updated mailing.config.json in your project with the following contents:\n  ".concat(configJsonString));
  } else {
    var _configJsonString = prettier__namespace.format(JSON.stringify(defaultsForConfigFile()), {
      parser: "json",
      printWidth: 0
    });

    fsExtra.writeFileSync(MAILING_CONFIG_FILE, _configJsonString);
    logPlain("\n    \u2588\u2588\u2588\u2557   \u2588\u2588\u2588\u2557 \u2588\u2588\u2588\u2588\u2588\u2557 \u2588\u2588\u2557\u2588\u2588\u2557     \u2588\u2588\u2557\u2588\u2588\u2588\u2557   \u2588\u2588\u2557 \u2588\u2588\u2588\u2588\u2588\u2588\u2557 \n    \u2588\u2588\u2588\u2588\u2557 \u2588\u2588\u2588\u2588\u2551\u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2557\u2588\u2588\u2551\u2588\u2588\u2551     \u2588\u2588\u2551\u2588\u2588\u2588\u2588\u2557  \u2588\u2588\u2551\u2588\u2588\u2554\u2550\u2550\u2550\u2550\u255D \n    \u2588\u2588\u2554\u2588\u2588\u2588\u2588\u2554\u2588\u2588\u2551\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2551\u2588\u2588\u2551\u2588\u2588\u2551     \u2588\u2588\u2551\u2588\u2588\u2554\u2588\u2588\u2557 \u2588\u2588\u2551\u2588\u2588\u2551  \u2588\u2588\u2588\u2557\n    \u2588\u2588\u2551\u255A\u2588\u2588\u2554\u255D\u2588\u2588\u2551\u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2551\u2588\u2588\u2551\u2588\u2588\u2551     \u2588\u2588\u2551\u2588\u2588\u2551\u255A\u2588\u2588\u2557\u2588\u2588\u2551\u2588\u2588\u2551   \u2588\u2588\u2551\n    \u2588\u2588\u2551 \u255A\u2550\u255D \u2588\u2588\u2551\u2588\u2588\u2551  \u2588\u2588\u2551\u2588\u2588\u2551\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557\u2588\u2588\u2551\u2588\u2588\u2551 \u255A\u2588\u2588\u2588\u2588\u2551\u255A\u2588\u2588\u2588\u2588\u2588\u2588\u2554\u255D\n    \u255A\u2550\u255D     \u255A\u2550\u255D\u255A\u2550\u255D  \u255A\u2550\u255D\u255A\u2550\u255D\u255A\u2550\u2550\u2550\u2550\u2550\u2550\u255D\u255A\u2550\u255D\u255A\u2550\u255D  \u255A\u2550\u2550\u2550\u255D \u255A\u2550\u2550\u2550\u2550\u2550\u255D \n    \n        ");
    log("added mailing.config.json in your project with the following contents:\n".concat(_configJsonString));
  }

  log("mailing collects anonymous telemetry data about usage");
}
/* Preview server config singleton */

var config$2;
function setConfig(newConfig) {
  config$2 = newConfig;
}
function getConfig$1() {
  if (undefined === config$2) {
    throw new Error("config is undefined");
  }

  return config$2;
}

var DEBUG = process.env.DEBUG;
var PREFIX = "mailing";
function log(message) {
  var _console;

  if (getConfig$1().quiet && !debug) return;

  for (var _len = arguments.length, optionalParams = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    optionalParams[_key - 1] = arguments[_key];
  }

  (_console = console).log.apply(_console, [chalk__default["default"].white(PREFIX), message].concat(optionalParams));
}
function error(message) {
  var _console2;

  for (var _len2 = arguments.length, optionalParams = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    optionalParams[_key2 - 1] = arguments[_key2];
  }

  (_console2 = console).error.apply(_console2, [chalk__default["default"].red(PREFIX), message].concat(optionalParams));
}
function debug(message) {
  var _console3;

  for (var _len3 = arguments.length, optionalParams = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
    optionalParams[_key3 - 1] = arguments[_key3];
  }

  if (DEBUG) (_console3 = console).info.apply(_console3, [chalk__default["default"].yellowBright(PREFIX), message].concat(optionalParams));
}
function logPlain(message) {
  var _console4;

  if (getConfig$1().quiet && !debug) return;

  for (var _len4 = arguments.length, optionalParams = new Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
    optionalParams[_key4 - 1] = arguments[_key4];
  }

  (_console4 = console).log.apply(_console4, [message].concat(optionalParams));
}

function generateEmailsDirectory(_x) {
  return _generateEmailsDirectory.apply(this, arguments);
}

function _generateEmailsDirectory() {
  _generateEmailsDirectory = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(_ref) {
    var isTypescript, emailsDir, path$1, srcDir;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            isTypescript = _ref.isTypescript, emailsDir = _ref.emailsDir;
            // copy the emails dir template in!
            path$1 = "generator_templates/".concat(isTypescript ? "ts" : "js", "/emails");
            srcDir = process.env.MM_DEV || process.env.NODE_ENV === "test" ? __dirname + "/.." : __dirname + "/../src";
            _context.next = 5;
            return fsExtra.copy(path.resolve(srcDir, path$1), emailsDir, {
              overwrite: false
            });

          case 5:
            log("generated your emails dir at ".concat(emailsDir, ":\n").concat(tree__default["default"](emailsDir, {
              exclude: [/node_modules|\.mailing|yarn\.lock|yalc\.lock/]
            })));

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _generateEmailsDirectory.apply(this, arguments);
}

var transport = nodemailer__default["default"].createTransport({
  pool: true,
  host: "smtp.example.com",
  port: 465,
  secure: true,
  // use TLS
  auth: {
    user: "username",
    pass: "password"
  }
});
mailingCore.buildSendMail({
  transport: transport,
  defaultFrom: "replace@me.with.your.com",
  configPath: "./mailing.config.json"
});

var config$1 = {
  anonymousId: null
};

function getConfig() {
  return config$1;
}

var POSTHOG_API_KEY = "phc_7ZFYSlHCG9Fo6a7do1BC4tUDx1DzuceaymIxZAfPUVg";
var client;
function postHogClient() {
  if (process.env.MM_E2E || "test" === process.env.NODE_ENV) return;

  if (undefined === POSTHOG_API_KEY) {
    debug("POSTHOG_API_KEY is undefined");
    return;
  }

  if (undefined === client) {
    client = new posthogNode.PostHog(POSTHOG_API_KEY, {
      host: "https://app.posthog.com"
    });
  }

  return client;
} // readonly version of postHogClient

function getPostHogClient() {
  return client;
}

function capture(options) {
  var _postHogClient;

  var config = getConfig();
  debug("options.distinctId was ".concat(options.distinctId, " and config.anonymousId was ").concat(config.anonymousId, " and getGeneratedAnonymousId() returned ").concat(getGeneratedAnonymousId()));
  var distinctId = options.distinctId || config.anonymousId || getGeneratedAnonymousId();

  if (!distinctId) {
    debug("capture is returning early because distinctId was ".concat(distinctId));
    return;
  }

  var captureOpts = _objectSpread2(_objectSpread2({}, options), {}, {
    distinctId: distinctId
  });

  debug("calling capture with ".concat(JSON.stringify(captureOpts)));

  if (process.env.MM_DEV) {
    debug("returning early from capture because MM_DEV is set");
    return;
  }

  return (_postHogClient = postHogClient()) === null || _postHogClient === void 0 ? void 0 : _postHogClient.capture(captureOpts);
}

function shutdown() {
  return _shutdown.apply(this, arguments);
}

function _shutdown() {
  _shutdown = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    var client;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            client = getPostHogClient();

            if (!client) {
              _context.next = 7;
              break;
            }

            debug("calling postHog shutdown");
            _context.next = 5;
            return client.shutdownAsync();

          case 5:
            _context.next = 8;
            break;

          case 7:
            debug("skipping postHog client shutdown because it was never instantiated");

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _shutdown.apply(this, arguments);
}

function buildHandler(handler, options) {
  return /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(argv) {
      var captureOpts;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;

              if (fsExtra.existsSync("./package.json")) {
                _context.next = 4;
                break;
              }

              log("No package.json found. Please run from the project root.");
              return _context.abrupt("return");

            case 4:
              if (argv.emailsDir) {
                _context.next = 6;
                break;
              }

              throw new Error("emailsDir option is not set");

            case 6:
              setConfig({
                emailsDir: argv.emailsDir,
                port: argv.port,
                quiet: argv.quiet
              });
              writeDefaultConfigFile();

              if (options.captureOptions) {
                captureOpts = _objectSpread2({
                  distinctId: argv.anonymousId
                }, options.captureOptions(argv));
                if (!captureOpts.properties) captureOpts.properties = {};
                captureOpts.properties.nodeEnv = process.env.NODE_ENV;
                capture(captureOpts);
              }

              _context.next = 11;
              return handler(argv);

            case 11:
              _context.prev = 11;
              shutdown();
              return _context.finish(11);

            case 14:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0,, 11, 14]]);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }();
}

function renderNotFound(res) {
  res.writeHead(404);
  res.end("Not found");
}

var cache = {};
function createIntercept(req, res) {
  var body = "";
  req.on("data", function onData(data) {
    body += data;
    if (body.length > 1e8) req.destroy();
  });
  req.on("end", function onEnd() {
    var id = Date.now();
    cache[id] = JSON.parse(body);
    res.writeHead(201);
    res.end(JSON.stringify({
      id: id
    }));
    log("Cached intercept preview at /previews/".concat(id));
  });
}
function showIntercept(req, res) {
  var _req$url;

  var parts = (_req$url = req.url) === null || _req$url === void 0 ? void 0 : _req$url.split("/");
  var id = parts ? parts[parts.length - 1].split(".")[0] : "";
  var data = cache[id];

  if (data) {
    res.setHeader("Content-Type", "application/json");
    res.writeHead(200);
    res.end(JSON.stringify(data));
  } else {
    renderNotFound(res);
  }
}

function registerRequireHooks() {
  if (process.env.MM_DEV) return;

  require("@swc/register")({
    jsc: {
      parser: {
        syntax: "typescript",
        tsx: true,
        decorators: true
      },
      transform: {
        react: {
          runtime: "automatic"
        }
      }
    },
    module: {
      type: "commonjs"
    }
  });
}

function getNodeModulesDirsFrom(startPath) {
  var nodeModulesDirs = [];
  var pathDepth = path.resolve(startPath).split(path.sep).length;
  var i = pathDepth;

  do {
    nodeModulesDirs.push(path.resolve(path.join(startPath, "..".concat(path.sep).repeat(i - 1), "node_modules", "*")));
  } while (--i);

  return nodeModulesDirs;
}

var COMPONENT_FILE_REGEXP = /^[^\s-]+\.[tj]sx$/; // no spaces, .jsx or .tsx

function linkEmailsDirectory(_x) {
  return _linkEmailsDirectory.apply(this, arguments);
}

function _linkEmailsDirectory() {
  _linkEmailsDirectory = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(emailsDir) {
    var dotMailingSrcPath, dynManifestPath, dynFeManifestPath, previewsPath, previewCollections, uniquePreviewCollections, previewImports, previewConsts, relativePathToEmailsDir, indexFound, emailsDirContents, templates, uniqueTemplates, templateImports, templateModuleNames, moduleManifestTemplate, moduleManifestContents, feManifestContents;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            dotMailingSrcPath = ".mailing/src";
            dynManifestPath = dotMailingSrcPath + "/moduleManifest.ts";
            dynFeManifestPath = dotMailingSrcPath + "/feManifest.ts";
            previewsPath = emailsDir + "/previews";
            _context.next = 6;
            return fsExtra.readdir(previewsPath);

          case 6:
            previewCollections = _context.sent.filter(function (path) {
              return COMPONENT_FILE_REGEXP.test(path);
            });
            debug("scanning for previews at", previewsPath, previewCollections);
            uniquePreviewCollections = Array.from(new Set(previewCollections));
            previewImports = [];
            previewConsts = []; // calculate the relative path the user's emailsDir
            // so we can import templates and previews from there
            // when in the context of the build output

            relativePathToEmailsDir = path.posix.relative(dotMailingSrcPath, emailsDir);
            uniquePreviewCollections.forEach(function (p) {
              var moduleName = p.replace(/\.[jt]sx/g, "");
              previewImports.push("import * as ".concat(moduleName, "Preview from \"").concat(relativePathToEmailsDir + "/previews/" + moduleName, "\";"));
              previewConsts.push("".concat(moduleName, ": ").concat(moduleName, "Preview"));
            });
            indexFound = false;
            _context.next = 16;
            return fsExtra.readdir(emailsDir);

          case 16:
            emailsDirContents = _context.sent;
            templates = emailsDirContents.filter(function (path) {
              if (/^index\.[jt]sx?$/.test(path)) {
                indexFound = true; // index.ts, index.js

                return false;
              }

              return COMPONENT_FILE_REGEXP.test(path);
            });

            if (indexFound) {
              _context.next = 20;
              break;
            }

            throw new Error("index.ts or index.js not found in emails directory");

          case 20:
            uniqueTemplates = Array.from(new Set(templates));
            templateImports = [];
            templateModuleNames = [];
            uniqueTemplates.forEach(function (p) {
              var moduleName = p.replace(/\.[jt]sx/g, "");
              templateModuleNames.push(moduleName);
              templateImports.push("import ".concat(moduleName, " from \"").concat(relativePathToEmailsDir + "/" + moduleName, "\";"));
            });
            _context.t0 = lodash.template;
            _context.next = 27;
            return fsExtra.readFile(".mailing/src/commands/preview/server/templates/moduleManifest.template.ejs");

          case 27:
            _context.t1 = _context.sent.toString();
            moduleManifestTemplate = (0, _context.t0)(_context.t1);
            moduleManifestContents = moduleManifestTemplate({
              relativePathToEmailsDir: relativePathToEmailsDir,
              templateImports: templateImports,
              previewImports: previewImports,
              previewConsts: previewConsts,
              templateModuleNames: templateModuleNames
            });
            _context.next = 32;
            return fsExtra.writeFile(dynManifestPath, moduleManifestContents);

          case 32:
            _context.next = 34;
            return fsExtra.readFile(".mailing/src/commands/preview/server/templates/feModuleManifest.template.ejs");

          case 34:
            feManifestContents = _context.sent.toString();
            _context.next = 37;
            return fsExtra.writeFile(dynFeManifestPath, feManifestContents);

          case 37:
            debug("writing module manifest to", dynManifestPath); // build the module manifests

            _context.next = 40;
            return buildManifest("node", dynManifestPath);

          case 40:
            _context.next = 42;
            return buildManifest("browser", dynFeManifestPath);

          case 42:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _linkEmailsDirectory.apply(this, arguments);
}

function packageJsonVersionsMatch() {
  return _packageJsonVersionsMatch.apply(this, arguments);
}

function _packageJsonVersionsMatch() {
  _packageJsonVersionsMatch = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
    var mailingPackageJsonPath, mailingPackageJsonVersion, pkgJSON, cliPackageJsonVersion;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            mailingPackageJsonPath = "./.mailing/package.json";
            _context2.prev = 1;
            pkgJSON = fsExtra.readJSONSync(mailingPackageJsonPath);
            mailingPackageJsonVersion = pkgJSON.version;
            debug(".mailing version:\t", mailingPackageJsonVersion);
            _context2.next = 14;
            break;

          case 7:
            _context2.prev = 7;
            _context2.t0 = _context2["catch"](1);

            if (!("ENOENT" === (_context2.t0 === null || _context2.t0 === void 0 ? void 0 : _context2.t0.code))) {
              _context2.next = 13;
              break;
            }

            return _context2.abrupt("return", false);

          case 13:
            throw _context2.t0;

          case 14:
            cliPackageJsonVersion = child_process.execSync("npx mailing --version").toString().trim();
            debug("cli version:\t\t", cliPackageJsonVersion); // compare versions and return early if the same

            return _context2.abrupt("return", cliPackageJsonVersion === mailingPackageJsonVersion);

          case 17:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[1, 7]]);
  }));
  return _packageJsonVersionsMatch.apply(this, arguments);
}

function bootstrapMailingDir() {
  return _bootstrapMailingDir.apply(this, arguments);
}

function _bootstrapMailingDir() {
  _bootstrapMailingDir = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
    var mailingPath, nodeMailingPath, ignored;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            mailingPath = "./.mailing"; // return early if .mailing exists and version matches packages.json

            _context3.next = 3;
            return packageJsonVersionsMatch();

          case 3:
            if (!_context3.sent) {
              _context3.next = 6;
              break;
            }

            debug("versions match, returning");
            return _context3.abrupt("return");

          case 6:
            // copy node_modules mailing into .mailing
            nodeMailingPath = path.resolve(process.env.MM_DEV ? __dirname + "/../../../.." : __dirname + "/..");
            debug("versions do not match, copying .mailing from", nodeMailingPath);
            _context3.next = 10;
            return fsExtra.rm(mailingPath, {
              recursive: true,
              force: true
            });

          case 10:
            _context3.next = 12;
            return fsExtra.mkdir(mailingPath, {
              recursive: true
            });

          case 12:
            _context3.next = 14;
            return fsExtra.copy(nodeMailingPath, mailingPath, {
              recursive: true,
              dereference: true,
              overwrite: true,
              filter: function filter(path) {
                return !/__test__|generator_templates|src\/index\.ts$|src\/dev\.js$|\.mailing$|\.next$|node_modules$|\/cypress$/.test(path);
              }
            });

          case 14:
            _context3.next = 16;
            return fsExtra.rm(mailingPath + "/src/emails", {
              recursive: true,
              force: true
            });

          case 16:
            _context3.prev = 16;
            _context3.next = 19;
            return fsExtra.readFile(".gitignore");

          case 19:
            ignored = _context3.sent.toString().split("\n");

            if (!ignored.includes(".mailing")) {
              _context3.next = 22;
              break;
            }

            return _context3.abrupt("return");

          case 22:
            log("adding .mailing to .gitignore");
            _context3.next = 25;
            return fsExtra.appendFile(".gitignore", "\n.mailing\n");

          case 25:
            _context3.next = 36;
            break;

          case 27:
            _context3.prev = 27;
            _context3.t0 = _context3["catch"](16);

            if (!("ENOENT" === (_context3.t0 === null || _context3.t0 === void 0 ? void 0 : _context3.t0.code))) {
              _context3.next = 35;
              break;
            }

            log("adding .gitignore");
            _context3.next = 33;
            return fsExtra.writeFile(".gitignore", ".mailing\nnode_modules\n", {
              flag: "wx"
            });

          case 33:
            _context3.next = 36;
            break;

          case 35:
            throw _context3.t0;

          case 36:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[16, 27]]);
  }));
  return _bootstrapMailingDir.apply(this, arguments);
}

function buildManifest(_x2, _x3) {
  return _buildManifest.apply(this, arguments);
}

function _buildManifest() {
  _buildManifest = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(buildType, manifestPath) {
    var buildOutdir, buildOpts;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            buildOutdir = ".mailing/src";
            buildOpts = {
              entryPoints: [manifestPath],
              outdir: buildOutdir,
              write: true,
              bundle: true,
              format: "esm",
              jsx: "preserve",
              external: getNodeModulesDirsFrom(".")
            };

            if ("node" === buildType) {
              buildOpts.platform = "node";
              buildOpts.target = "node12";
            } else {
              buildOpts.platform = "browser";
              buildOpts.target = "esnext";
            }

            debug("invoking esbuild with buildOpts: ", JSON.stringify(buildOpts)); // build the manifest

            debug("bundling ".concat(buildType, " manifest for ").concat(manifestPath, "..."));
            _context4.next = 7;
            return esbuild.build(buildOpts);

          case 7:
            _context4.next = 9;
            return fsExtra.remove(manifestPath);

          case 9:
            delete require.cache[manifestPath];
            debug("bundled ".concat(buildType, " manifest for ").concat(manifestPath, " to ").concat(buildOutdir));

          case 11:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
  return _buildManifest.apply(this, arguments);
}

// This file is for livereload stuff used on both client and server.
var LONG_POLLING_INTERVAL = 20000;
var SHORT_POLLING_INTERVAL = 50;

var WATCH_IGNORE = /^\.|node_modules/;
var vectorClock = Date.now();

function renderClock(res) {
  debug("livereload render clock", vectorClock);
  res.writeHead(200);
  res.end(JSON.stringify({
    vectorClock: vectorClock
  }));
}

function requireParam(param, req, res) {
  try {
    var url$1 = new url.URL(req.url, "http://".concat(req.headers.host));
    return JSON.parse(url$1.searchParams.get(param));
  } catch (e) {
    var err = "error parsing ".concat(param, " from url");
    error(err, e);
    res.writeHead(403);
    res.end(JSON.stringify({
      err: err
    }));
    return null;
  }
}

function pollShouldReload(req, res) {
  res.setHeader("Content-Type", "application/json");
  var clientVectorClock = requireParam("vectorClock", req, res);
  if (403 === res.statusCode) return;
  var poller = setInterval(function () {
    if (clientVectorClock >= vectorClock) return;
    clearInterval(poller);
    clearTimeout(timeout);
    renderClock(res);
  }, SHORT_POLLING_INTERVAL);
  var timeout = setTimeout(function () {
    // timed out long poll, close connection
    clearInterval(poller);
    renderClock(res);
  }, LONG_POLLING_INTERVAL);
}
function startChangeWatcher(emailsDir) {
  try {
    // simple live reload implementation
    var changeWatchPath = emailsDir;

    if (!changeWatchPath) {
      log("error finding emails dir in . or ./src");
      return;
    }

    var reload = lodash.debounce( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              debug("reload from change");
              _context.next = 3;
              return linkEmailsDirectory(emailsDir);

            case 3:
              vectorClock++;

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    })), 100, {
      leading: true
    });
    chokidar.watch(changeWatchPath, {
      ignoreInitial: true
    }).on("all", function (eventType, filename) {
      if (WATCH_IGNORE.test(filename)) return;
      log("detected ".concat(eventType, " on ").concat(filename, ", reloading"));
      delete require.cache[path.resolve(changeWatchPath, filename)];
      reload();
    });
    log("watching for changes to ".concat(path.relative(process$1.cwd(), changeWatchPath)));
  } catch (e) {
    error("error starting livereload change watcher", e);
  }
}

function startPreviewServer() {
  return _startPreviewServer.apply(this, arguments);
}

function _startPreviewServer() {
  _startPreviewServer = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
    var _getConfig, emailsDir, port, quiet, emailsDirExists, previewsPath, loadLag, hostname, app, nextHandle, host, currentUrl, server;

    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _getConfig = getConfig$1(), emailsDir = _getConfig.emailsDir, port = _getConfig.port, quiet = _getConfig.quiet;
            _context4.next = 3;
            return fsExtra.pathExists(emailsDir);

          case 3:
            emailsDirExists = _context4.sent;

            if (emailsDirExists) {
              _context4.next = 6;
              break;
            }

            throw new Error("emailsDir does not exist in ".concat(path.resolve(emailsDir)));

          case 6:
            previewsPath = getPreviewsDirectory(emailsDir);

            if (previewsPath) {
              _context4.next = 9;
              break;
            }

            throw new Error("previews directory does not exist in ".concat(path.resolve(emailsDir)));

          case 9:
            // delaying this makes the load feel faster
            loadLag = setTimeout(function () {
              log("starting preview server");
            }, 500);
            registerRequireHooks();
            _context4.next = 13;
            return bootstrapMailingDir();

          case 13:
            _context4.next = 15;
            return linkEmailsDirectory(emailsDir);

          case 15:
            hostname = "localhost";
            app = next__default["default"]({
              dev: true,
              // true will use the app from source, not built .next bundle
              hostname: hostname,
              port: port,
              dir: path.resolve("./.mailing")
            });
            nextHandle = app.getRequestHandler();
            _context4.next = 20;
            return app.prepare();

          case 20:
            debug("prepared next server");

            if (previewsPath) {
              _context4.next = 24;
              break;
            }

            error("could not find emails directory\nhave you initialized the project with `mailing init`?");
            return _context4.abrupt("return");

          case 24:
            host = "http://".concat(hostname, ":").concat(port);
            currentUrl = "".concat(host, "/");
            server = http__default["default"].createServer( /*#__PURE__*/function () {
              var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(req, res) {
                var startTime, noLog, parsedUrl, pathname, query, emailsPath, path$1;
                return _regeneratorRuntime().wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        startTime = Date.now();
                        noLog = false;

                        if (req.url) {
                          _context.next = 5;
                          break;
                        }

                        res.end(404);
                        return _context.abrupt("return");

                      case 5:
                        parsedUrl = url.parse(req.url, true);
                        pathname = parsedUrl.pathname, query = parsedUrl.query; // Never cache anything

                        res.setHeader("Cache-Control", "no-cache, max-age=0, must-revalidate, no-store");
                        res.setHeader("Pragma", "no-cache");
                        res.setHeader("Expires", "-1");
                        emailsPath = path.resolve(previewsPath, "..");

                        for (path$1 in require.cache) {
                          if (path$1.startsWith(emailsPath)) {
                            delete require.cache[path$1];
                          }
                        }

                        currentUrl = "".concat(host).concat(req.url);
                        res.once("close", function () {
                          if (!noLog || process.env.MM_VERBOSE) log("".concat(res.statusCode, " ").concat(req.url, " ").concat(Date.now() - startTime, "ms"));
                        });
                        _context.prev = 14;

                        if (!/^\/should_reload\.json/.test(req.url)) {
                          _context.next = 20;
                          break;
                        }

                        noLog = true;
                        pollShouldReload(req, res);
                        _context.next = 36;
                        break;

                      case 20:
                        if (!(req.url === "/intercepts" && req.method === "POST")) {
                          _context.next = 24;
                          break;
                        }

                        createIntercept(req, res);
                        _context.next = 36;
                        break;

                      case 24:
                        if (!/^\/intercepts\/[a-zA-Z0-9]+\.json/.test(req.url)) {
                          _context.next = 28;
                          break;
                        }

                        showIntercept(req, res);
                        _context.next = 36;
                        break;

                      case 28:
                        if (!/^\/_+next/.test(req.url)) {
                          _context.next = 34;
                          break;
                        }

                        noLog = true;
                        _context.next = 32;
                        return app.render(req, res, "".concat(pathname), query);

                      case 32:
                        _context.next = 36;
                        break;

                      case 34:
                        _context.next = 36;
                        return nextHandle(req, res, parsedUrl);

                      case 36:
                        _context.next = 44;
                        break;

                      case 38:
                        _context.prev = 38;
                        _context.t0 = _context["catch"](14);
                        error("caught error", _context.t0);
                        res.writeHead(500);
                        res.end(JSON.stringify(_context.t0));
                        return _context.abrupt("return");

                      case 44:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee, null, [[14, 38]]);
              }));

              return function (_x, _x2) {
                return _ref.apply(this, arguments);
              };
            }()).listen(port, /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
              return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      clearTimeout(loadLag);
                      log("running preview at ".concat(currentUrl));

                      if (quiet) {
                        _context2.next = 5;
                        break;
                      }

                      _context2.next = 5;
                      return open__default["default"](currentUrl);

                    case 5:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2);
            }))).on("error", /*#__PURE__*/function () {
              var _onServerError = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(e) {
                return _regeneratorRuntime().wrap(function _callee3$(_context3) {
                  while (1) {
                    switch (_context3.prev = _context3.next) {
                      case 0:
                        if (!(e.code === "EADDRINUSE")) {
                          _context3.next = 7;
                          break;
                        }

                        error("port ".concat(port, " is taken, is mailing already running?"));
                        _context3.next = 4;
                        return shutdown();

                      case 4:
                        process.exit(1);
                        _context3.next = 8;
                        break;

                      case 7:
                        error("preview server error:", JSON.stringify(e));

                      case 8:
                      case "end":
                        return _context3.stop();
                    }
                  }
                }, _callee3);
              }));

              function onServerError(_x3) {
                return _onServerError.apply(this, arguments);
              }

              return onServerError;
            }());
            startChangeWatcher(emailsDir);
            return _context4.abrupt("return", server);

          case 29:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
  return _startPreviewServer.apply(this, arguments);
}

var command$3 = "preview";
var describe$3 = "start the email preview server";
var builder$3 = {
  port: {
    "default": defaults().port,
    description: "what port to start the preview server on"
  },
  quiet: {
    "default": defaults().quiet,
    description: "quiet mode (don't open browser after starting)",
    "boolean": true
  },
  "emails-dir": {
    "default": defaults().emailsDir,
    description: "the directory of your email templates"
  }
};
var handler$3 = buildHandler( /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(argv) {
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!(undefined === argv.port)) {
              _context.next = 2;
              break;
            }

            throw new Error("port option is not set");

          case 2:
            if (!(undefined === argv.quiet)) {
              _context.next = 4;
              break;
            }

            throw new Error("quiet option is not set");

          case 4:
            _context.next = 6;
            return startPreviewServer();

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}(), {
  captureOptions: function captureOptions() {
    return {
      event: "preview invoked"
    };
  }
});

var preview = /*#__PURE__*/Object.freeze({
  __proto__: null,
  command: command$3,
  describe: describe$3,
  builder: builder$3,
  handler: handler$3
});

var command$2 = ["$0", "init"];
var describe$2 = "initialize mailing in your app";
var builder$2 = {
  typescript: {
    "default": defaults().typescript,
    description: "use Typescript",
    demandOption: true,
    "boolean": true
  },
  "emails-dir": {
    "default": defaults().emailsDir,
    demandOption: true,
    description: "the directory to put your email templates in"
  },
  port: {
    "default": defaults().port,
    demandOption: true,
    description: "what port to start the preview server on"
  },
  quiet: {
    "default": defaults().quiet,
    demandOption: true,
    description: "quiet mode (don't prompt or open browser after starting)",
    "boolean": true
  }
};
var handler$2 = buildHandler( /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(argv) {
    var options, emailResponse, email, previewHandlerArgv;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!(typeof argv.port !== "number")) {
              _context.next = 2;
              break;
            }

            throw new Error("port option is not set");

          case 2:
            if (!(typeof argv.typescript !== "boolean")) {
              _context.next = 4;
              break;
            }

            throw new Error("typescript option not set");

          case 4:
            if (fsExtra.existsSync(path.resolve(argv.emailsDir, "previews"))) {
              _context.next = 14;
              break;
            }

            options = {
              isTypescript: argv.typescript,
              emailsDir: argv.emailsDir
            };
            _context.next = 8;
            return generateEmailsDirectory(options);

          case 8:
            if (argv.quiet) {
              _context.next = 14;
              break;
            }

            _context.next = 11;
            return prompts__default["default"]({
              type: "text",
              name: "email",
              message: "enter your email for occasional updates about mailing (optional)"
            });

          case 11:
            emailResponse = _context.sent;
            email = emailResponse.email;

            if ((email === null || email === void 0 ? void 0 : email.length) > 0) {
              log("great, talk soon");

              try {
                fetch("".concat(getMailingAPIBaseURL(), "/api/users"), {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json"
                  },
                  body: JSON.stringify({
                    email: email
                  })
                });
              } catch (e) {
                error(e);
              }
            } else {
              log("ok, no problem");
            }

          case 14:
            previewHandlerArgv = {
              port: argv.port,
              quiet: argv.quiet,
              emailsDir: argv.emailsDir,
              anonymousId: argv.anonymousId,
              $0: argv.$0,
              _: argv._
            };
            handler$3(previewHandlerArgv);

          case 16:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}(), {
  captureOptions: function captureOptions() {
    return {
      event: "init invoked"
    };
  }
});

var init = /*#__PURE__*/Object.freeze({
  __proto__: null,
  command: command$2,
  describe: describe$2,
  builder: builder$2,
  handler: handler$2
});

function render(component) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var mjmlOptions = _objectSpread2({
    validationLevel: "soft"
  }, options);

  return mjmlReact.render(component, mjmlOptions);
}

var command$1 = "export-previews";
var builder$1 = {
  "emails-dir": {
    "default": defaults().emailsDir,
    description: "the directory of your email templates"
  },
  "out-dir": {
    "default": defaults().outDir,
    description: "directory in which we output the html"
  },
  minify: {
    "default": false,
    "boolean": true,
    description: "minify the html"
  },
  quiet: {
    "default": defaults().quiet,
    descriptioin: "less output",
    "boolean": true
  }
};
var describe$1 = "export previews as html";

function camelToSnakeCase(str) {
  return str.replace(/[A-Z]/g, function (letter) {
    return "_".concat(letter.toLowerCase());
  }).replace(/^_/, "");
}

function previewFilename(moduleName, functionName) {
  return camelToSnakeCase("".concat(moduleName.replace(/\.[j|t]sx/, ""), "_").concat(functionName, ".html"));
}
var handler$1 = buildHandler( /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(argv) {
    var outDir, previewsPath, previewText, count, mjmlOptions;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            if (argv.outDir) {
              _context2.next = 2;
              break;
            }

            throw new Error("outDir option is not set");

          case 2:
            outDir = argv.outDir;

            if (!(typeof outDir !== "string")) {
              _context2.next = 6;
              break;
            }

            error("please specify an outDir like --outDir ./html");
            return _context2.abrupt("return");

          case 6:
            previewsPath = getPreviewsDirectory(argv.emailsDir);

            if (previewsPath) {
              _context2.next = 10;
              break;
            }

            error("Could not find emails directory. Have you initialized the project with `mailing init`?");
            return _context2.abrupt("return");

          case 10:
            registerRequireHooks();
            previewText = argv.minify ? "minified preview html" : "preview html";
            log("Exporting ".concat(previewText, " to"));
            log(outDir);
            count = 0;
            mjmlOptions = {
              minify: argv.minify
            };
            fsExtra.readdirSync(previewsPath).filter(function (path) {
              return !/^\./.test(path);
            }).forEach( /*#__PURE__*/function () {
              var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(p) {
                var previewPath, previewModule;
                return _regeneratorRuntime().wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        previewPath = path.resolve(previewsPath, p);
                        previewModule = require(previewPath);
                        _context.next = 4;
                        return Promise.all(Object.keys(require(previewPath)).map(function (previewFunction) {
                          var filename = previewFilename(p, previewFunction);
                          log("  |-- ".concat(filename));
                          count++;

                          var _render = render(previewModule[previewFunction](), mjmlOptions),
                              html = _render.html,
                              errors = _render.errors;

                          if (errors.length) {
                            error("MJML errors rendering ".concat(filename, ":"), errors);
                          }

                          return fsExtra.outputFile(path.resolve(outDir, filename), html);
                        }));

                      case 4:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee);
              }));

              return function (_x2) {
                return _ref2.apply(this, arguments);
              };
            }());
            log("\u2705 Processed ".concat(count, " previews"));

          case 18:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}(), {
  captureOptions: function captureOptions() {
    return {
      event: "export-previews invoked"
    };
  }
});

var exportPreviews = /*#__PURE__*/Object.freeze({
  __proto__: null,
  command: command$1,
  builder: builder$1,
  describe: describe$1,
  previewFilename: previewFilename,
  handler: handler$1
});

var command = ["server [subcommand]"];
var describe = "build and start the mailing server";
var builder = {
  subcommand: {
    describe: "'build' or 'start', blank does both"
  },
  "emails-dir": {
    "default": defaults().emailsDir,
    description: "the directory to look for your email templates in"
  },
  port: {
    "default": defaults().port,
    description: "what port to start the preview server on"
  },
  quiet: {
    "default": defaults().quiet,
    descriptioin: "quiet mode (don't prompt or open browser after starting)",
    "boolean": true
  }
};
var handler = buildHandler( /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(argv) {
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!(undefined === argv.port)) {
              _context.next = 2;
              break;
            }

            throw new Error("port option is not set");

          case 2:
            if (!(undefined === argv.quiet)) {
              _context.next = 4;
              break;
            }

            throw new Error("quiet option is not set");

          case 4:
            _context.next = 6;
            return bootstrapMailingDir();

          case 6:
            _context.next = 8;
            return linkEmailsDirectory(argv.emailsDir);

          case 8:
            if (argv.subcommand !== "start") {
              log("building .mailing...");
              child_process.execSync("npx next build .mailing", {
                stdio: "inherit"
              });
            }

            if (argv.subcommand !== "build") {
              log("starting .mailing...");
              child_process.execSync("npx next start .mailing", {
                stdio: "inherit"
              });
            }

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}(), {
  captureOptions: function captureOptions(argv) {
    return {
      event: "server invoked",
      properties: {
        subcommand: argv.subcommand
      }
    };
  }
});

var server = /*#__PURE__*/Object.freeze({
  __proto__: null,
  command: command,
  describe: describe,
  builder: builder,
  handler: handler
});

var config = fsExtra.existsSync(MAILING_CONFIG_FILE) ? readJSONverbose(MAILING_CONFIG_FILE) : {}; // prettier-ignore

yargs__default["default"](process.argv.slice(2)).config(config).command(init).command(preview).command(exportPreviews).command(server).help().argv;
