
(function(r,f) {
	var a=f();
	if(typeof a!=='object')return;
	var e=[typeof module==='object'&&typeof module.exports==='object'?module.exports:null,typeof window!=='undefined'?window:null,r&&r!==window?r:null];
	for(var i in a){e[0]&&(e[0][i]=a[i]);e[1]&&i!=='__esModule'&&(e[1][i] = a[i]);e[2]&&(e[2][i]=a[i]);}
})(this,function(){
	return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./libs/bootstrap-tour/bootstrap-tour.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./blueimp-helper":
/*!********************************!*\
  !*** external "window.jQuery" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = window.jQuery;\n\n//# sourceURL=webpack:///external_%22window.jQuery%22?");

/***/ }),

/***/ "./libs/bootstrap-tour/bootstrap-tour.js":
/*!***********************************************!*\
  !*** ./libs/bootstrap-tour/bootstrap-tour.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ../../node_modules/bootstrap-tour/build/js/bootstrap-tour.js */ \"./node_modules/bootstrap-tour/build/js/bootstrap-tour.js\");\n\n\n//# sourceURL=webpack:///./libs/bootstrap-tour/bootstrap-tour.js?");

/***/ }),

/***/ "./node_modules/bootstrap-tour/build/js/bootstrap-tour.js":
/*!****************************************************************!*\
  !*** ./node_modules/bootstrap-tour/build/js/bootstrap-tour.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* ========================================================================\n * bootstrap-tour - v0.12.0\n * http://bootstraptour.com\n * ========================================================================\n * Copyright 2012-2017 Ulrich Sossou\n *\n * ========================================================================\n * Licensed under the MIT License (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *     https://opensource.org/licenses/MIT\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n * ========================================================================\n */\n\nvar bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };\n\n(function(window, factory) {\n  if (true) {\n    return !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! jquery */ \"./blueimp-helper\")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(jQuery) {\n      return window.Tour = factory(jQuery);\n    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n  } else {}\n})(window, function($) {\n  var Tour, document;\n  document = window.document;\n  Tour = (function() {\n    function Tour(options) {\n      this._showPopoverAndOverlay = bind(this._showPopoverAndOverlay, this);\n      var storage;\n      try {\n        storage = window.localStorage;\n      } catch (error) {\n        storage = false;\n      }\n      this._options = $.extend({\n        name: 'tour',\n        steps: [],\n        container: 'body',\n        autoscroll: true,\n        keyboard: true,\n        storage: storage,\n        debug: false,\n        backdrop: false,\n        backdropContainer: 'body',\n        backdropPadding: 0,\n        redirect: true,\n        orphan: false,\n        duration: false,\n        delay: false,\n        basePath: '',\n        template: '<div class=\"popover\" role=\"tooltip\"> <div class=\"arrow\"></div> <h3 class=\"popover-header\"></h3> <div class=\"popover-body\"></div> <div class=\"popover-navigation\"> <div class=\"btn-group\"> <button class=\"btn btn-sm btn-secondary\" data-role=\"prev\">&laquo; Prev</button> <button class=\"btn btn-sm btn-secondary\" data-role=\"next\">Next &raquo;</button> <button class=\"btn btn-sm btn-secondary\" data-role=\"pause-resume\" data-pause-text=\"Pause\" data-resume-text=\"Resume\">Pause</button> </div> <button class=\"btn btn-sm btn-secondary\" data-role=\"end\">End tour</button> </div> </div>',\n        afterSetState: function(key, value) {},\n        afterGetState: function(key, value) {},\n        afterRemoveState: function(key) {},\n        onStart: function(tour) {},\n        onEnd: function(tour) {},\n        onShow: function(tour) {},\n        onShown: function(tour) {},\n        onHide: function(tour) {},\n        onHidden: function(tour) {},\n        onNext: function(tour) {},\n        onPrev: function(tour) {},\n        onPause: function(tour, duration) {},\n        onResume: function(tour, duration) {},\n        onRedirectError: function(tour) {}\n      }, options);\n      this._force = false;\n      this._inited = false;\n      this._current = null;\n      this.backdrops = [];\n      this;\n    }\n\n    Tour.prototype.addSteps = function(steps) {\n      var j, len, step;\n      for (j = 0, len = steps.length; j < len; j++) {\n        step = steps[j];\n        this.addStep(step);\n      }\n      return this;\n    };\n\n    Tour.prototype.addStep = function(step) {\n      this._options.steps.push(step);\n      return this;\n    };\n\n    Tour.prototype.getStep = function(i) {\n      if (this._options.steps[i] != null) {\n        return $.extend({\n          id: \"step-\" + i,\n          path: '',\n          host: '',\n          placement: 'right',\n          title: '',\n          content: '<p></p>',\n          next: i === this._options.steps.length - 1 ? -1 : i + 1,\n          prev: i - 1,\n          animation: true,\n          container: this._options.container,\n          autoscroll: this._options.autoscroll,\n          backdrop: this._options.backdrop,\n          backdropContainer: this._options.backdropContainer,\n          backdropPadding: this._options.backdropPadding,\n          redirect: this._options.redirect,\n          reflexElement: this._options.steps[i].element,\n          backdropElement: this._options.steps[i].element,\n          orphan: this._options.orphan,\n          duration: this._options.duration,\n          delay: this._options.delay,\n          template: this._options.template,\n          onShow: this._options.onShow,\n          onShown: this._options.onShown,\n          onHide: this._options.onHide,\n          onHidden: this._options.onHidden,\n          onNext: this._options.onNext,\n          onPrev: this._options.onPrev,\n          onPause: this._options.onPause,\n          onResume: this._options.onResume,\n          onRedirectError: this._options.onRedirectError\n        }, this._options.steps[i]);\n      }\n    };\n\n    Tour.prototype.init = function(force) {\n      this._force = force;\n      if (this.ended()) {\n        this._debug('Tour ended, init prevented.');\n        return this;\n      }\n      this.setCurrentStep();\n      this._initMouseNavigation();\n      this._initKeyboardNavigation();\n      if (this._current !== null) {\n        this.showStep(this._current);\n      }\n      this._inited = true;\n      return this;\n    };\n\n    Tour.prototype.start = function(force) {\n      var promise;\n      if (force == null) {\n        force = false;\n      }\n      if (!this._inited) {\n        this.init(force);\n      }\n      if (this._current === null) {\n        promise = this._makePromise(this._options.onStart != null ? this._options.onStart(this) : void 0);\n        this._callOnPromiseDone(promise, this.showStep, 0);\n      }\n      return this;\n    };\n\n    Tour.prototype.next = function() {\n      var promise;\n      promise = this.hideStep(this._current, this._current + 1);\n      return this._callOnPromiseDone(promise, this._showNextStep);\n    };\n\n    Tour.prototype.prev = function() {\n      var promise;\n      promise = this.hideStep(this._current, this._current - 1);\n      return this._callOnPromiseDone(promise, this._showPrevStep);\n    };\n\n    Tour.prototype.goTo = function(i) {\n      var promise;\n      promise = this.hideStep(this._current, i);\n      return this._callOnPromiseDone(promise, this.showStep, i);\n    };\n\n    Tour.prototype.end = function() {\n      var endHelper, promise;\n      endHelper = (function(_this) {\n        return function(e) {\n          $(document).off(\"click.tour-\" + _this._options.name);\n          $(document).off(\"keyup.tour-\" + _this._options.name);\n          _this._setState('end', 'yes');\n          _this._inited = false;\n          _this._force = false;\n          _this._clearTimer();\n          if (_this._options.onEnd != null) {\n            return _this._options.onEnd(_this);\n          }\n        };\n      })(this);\n      promise = this.hideStep(this._current);\n      return this._callOnPromiseDone(promise, endHelper);\n    };\n\n    Tour.prototype.ended = function() {\n      return !this._force && !!this._getState('end');\n    };\n\n    Tour.prototype.restart = function() {\n      this._removeState('current_step');\n      this._removeState('end');\n      this._removeState('redirect_to');\n      return this.start();\n    };\n\n    Tour.prototype.pause = function() {\n      var step;\n      step = this.getStep(this._current);\n      if (!(step && step.duration)) {\n        return this;\n      }\n      this._paused = true;\n      this._duration -= new Date().getTime() - this._start;\n      window.clearTimeout(this._timer);\n      this._debug(\"Paused/Stopped step \" + (this._current + 1) + \" timer (\" + this._duration + \" remaining).\");\n      if (step.onPause != null) {\n        return step.onPause(this, this._duration);\n      }\n    };\n\n    Tour.prototype.resume = function() {\n      var step;\n      step = this.getStep(this._current);\n      if (!(step && step.duration)) {\n        return this;\n      }\n      this._paused = false;\n      this._start = new Date().getTime();\n      this._duration = this._duration || step.duration;\n      this._timer = window.setTimeout((function(_this) {\n        return function() {\n          if (_this._isLast()) {\n            return _this.next();\n          } else {\n            return _this.end();\n          }\n        };\n      })(this), this._duration);\n      this._debug(\"Started step \" + (this._current + 1) + \" timer with duration \" + this._duration);\n      if ((step.onResume != null) && this._duration !== step.duration) {\n        return step.onResume(this, this._duration);\n      }\n    };\n\n    Tour.prototype.hideStep = function(i, iNext) {\n      var hideDelay, hideStepHelper, promise, step;\n      step = this.getStep(i);\n      if (!step) {\n        return;\n      }\n      this._clearTimer();\n      promise = this._makePromise(step.onHide != null ? step.onHide(this, i) : void 0);\n      hideStepHelper = (function(_this) {\n        return function(e) {\n          var $element, next_step;\n          $element = $(step.element);\n          if (!$element.data('bs.popover')) {\n            $element = $('body');\n          }\n          $element.popover('dispose').removeClass(\"tour-\" + _this._options.name + \"-element tour-\" + _this._options.name + \"-\" + i + \"-element\").removeData('bs.popover');\n          if (step.reflex) {\n            $(step.reflexElement).removeClass('tour-step-element-reflex').off((_this._reflexEvent(step.reflex)) + \".tour-\" + _this._options.name);\n          }\n          if (step.backdrop) {\n            next_step = (iNext != null) && _this.getStep(iNext);\n            if (!next_step || !next_step.backdrop || next_step.backdropElement !== step.backdropElement) {\n              _this._hideOverlayElement(step);\n            }\n          }\n          if (step.onHidden != null) {\n            return step.onHidden(_this);\n          }\n        };\n      })(this);\n      hideDelay = step.delay.hide || step.delay;\n      if ({}.toString.call(hideDelay) === '[object Number]' && hideDelay > 0) {\n        this._debug(\"Wait \" + hideDelay + \" milliseconds to hide the step \" + (this._current + 1));\n        window.setTimeout((function(_this) {\n          return function() {\n            return _this._callOnPromiseDone(promise, hideStepHelper);\n          };\n        })(this), hideDelay);\n      } else {\n        this._callOnPromiseDone(promise, hideStepHelper);\n      }\n      return promise;\n    };\n\n    Tour.prototype.showStep = function(i) {\n      var path, promise, showDelay, showStepHelper, skipToPrevious, step;\n      if (this.ended()) {\n        this._debug('Tour ended, showStep prevented.');\n        return this;\n      }\n      step = this.getStep(i);\n      if (!step) {\n        return;\n      }\n      skipToPrevious = i < this._current;\n      promise = this._makePromise(step.onShow != null ? step.onShow(this, i) : void 0);\n      this.setCurrentStep(i);\n      path = (function() {\n        switch ({}.toString.call(step.path)) {\n          case '[object Function]':\n            return step.path();\n          case '[object String]':\n            return this._options.basePath + step.path;\n          default:\n            return step.path;\n        }\n      }).call(this);\n      if (step.redirect && this._isRedirect(step.host, path, document.location)) {\n        this._redirect(step, i, path);\n        if (!this._isJustPathHashDifferent(step.host, path, document.location)) {\n          return;\n        }\n      }\n      showStepHelper = (function(_this) {\n        return function(e) {\n          if (_this._isOrphan(step)) {\n            if (step.orphan === false) {\n              _this._debug(\"Skip the orphan step \" + (_this._current + 1) + \".\\nOrphan option is false and the element does not exist or is hidden.\");\n              if (skipToPrevious) {\n                _this._showPrevStep();\n              } else {\n                _this._showNextStep();\n              }\n              return;\n            }\n            _this._debug(\"Show the orphan step \" + (_this._current + 1) + \". Orphans option is true.\");\n          }\n          if (step.autoscroll) {\n            _this._scrollIntoView(i);\n          } else {\n            _this._showPopoverAndOverlay(i);\n          }\n          if (step.duration) {\n            return _this.resume();\n          }\n        };\n      })(this);\n      showDelay = step.delay.show || step.delay;\n      if ({}.toString.call(showDelay) === '[object Number]' && showDelay > 0) {\n        this._debug(\"Wait \" + showDelay + \" milliseconds to show the step \" + (this._current + 1));\n        window.setTimeout((function(_this) {\n          return function() {\n            return _this._callOnPromiseDone(promise, showStepHelper);\n          };\n        })(this), showDelay);\n      } else {\n        this._callOnPromiseDone(promise, showStepHelper);\n      }\n      return promise;\n    };\n\n    Tour.prototype.getCurrentStep = function() {\n      return this._current;\n    };\n\n    Tour.prototype.setCurrentStep = function(value) {\n      if (value != null) {\n        this._current = value;\n        this._setState('current_step', value);\n      } else {\n        this._current = this._getState('current_step');\n        this._current = this._current === null ? null : parseInt(this._current, 10);\n      }\n      return this;\n    };\n\n    Tour.prototype.redraw = function() {\n      return this._showOverlayElement(this.getStep(this.getCurrentStep()));\n    };\n\n    Tour.prototype._setState = function(key, value) {\n      var e, keyName;\n      if (this._options.storage) {\n        keyName = this._options.name + \"_\" + key;\n        try {\n          this._options.storage.setItem(keyName, value);\n        } catch (error) {\n          e = error;\n          if (e.code === DOMException.QUOTA_EXCEEDED_ERR) {\n            this._debug('LocalStorage quota exceeded. State storage failed.');\n          }\n        }\n        return this._options.afterSetState(keyName, value);\n      } else {\n        if (this._state == null) {\n          this._state = {};\n        }\n        return this._state[key] = value;\n      }\n    };\n\n    Tour.prototype._removeState = function(key) {\n      var keyName;\n      if (this._options.storage) {\n        keyName = this._options.name + \"_\" + key;\n        this._options.storage.removeItem(keyName);\n        return this._options.afterRemoveState(keyName);\n      } else {\n        if (this._state != null) {\n          return delete this._state[key];\n        }\n      }\n    };\n\n    Tour.prototype._getState = function(key) {\n      var keyName, value;\n      if (this._options.storage) {\n        keyName = this._options.name + \"_\" + key;\n        value = this._options.storage.getItem(keyName);\n      } else {\n        if (this._state != null) {\n          value = this._state[key];\n        }\n      }\n      if (value === void 0 || value === 'null') {\n        value = null;\n      }\n      this._options.afterGetState(key, value);\n      return value;\n    };\n\n    Tour.prototype._showNextStep = function() {\n      var promise, showNextStepHelper, step;\n      step = this.getStep(this._current);\n      showNextStepHelper = (function(_this) {\n        return function(e) {\n          return _this.showStep(step.next);\n        };\n      })(this);\n      promise = this._makePromise(step.onNext != null ? step.onNext(this) : void 0);\n      return this._callOnPromiseDone(promise, showNextStepHelper);\n    };\n\n    Tour.prototype._showPrevStep = function() {\n      var promise, showPrevStepHelper, step;\n      step = this.getStep(this._current);\n      showPrevStepHelper = (function(_this) {\n        return function(e) {\n          return _this.showStep(step.prev);\n        };\n      })(this);\n      promise = this._makePromise(step.onPrev != null ? step.onPrev(this) : void 0);\n      return this._callOnPromiseDone(promise, showPrevStepHelper);\n    };\n\n    Tour.prototype._debug = function(text) {\n      if (this._options.debug) {\n        return window.console.log(\"Bootstrap Tour '\" + this._options.name + \"' | \" + text);\n      }\n    };\n\n    Tour.prototype._isRedirect = function(host, path, location) {\n      var currentPath;\n      if ((host != null) && host !== '' && (({}.toString.call(host) === '[object RegExp]' && !host.test(location.origin)) || ({}.toString.call(host) === '[object String]' && this._isHostDifferent(host, location)))) {\n        return true;\n      }\n      currentPath = [location.pathname, location.search, location.hash].join('');\n      return (path != null) && path !== '' && (({}.toString.call(path) === '[object RegExp]' && !path.test(currentPath)) || ({}.toString.call(path) === '[object String]' && this._isPathDifferent(path, currentPath)));\n    };\n\n    Tour.prototype._isHostDifferent = function(host, location) {\n      switch ({}.toString.call(host)) {\n        case '[object RegExp]':\n          return !host.test(location.origin);\n        case '[object String]':\n          return this._getProtocol(host) !== this._getProtocol(location.href) || this._getHost(host) !== this._getHost(location.href);\n        default:\n          return true;\n      }\n    };\n\n    Tour.prototype._isPathDifferent = function(path, currentPath) {\n      return this._getPath(path) !== this._getPath(currentPath) || !this._equal(this._getQuery(path), this._getQuery(currentPath)) || !this._equal(this._getHash(path), this._getHash(currentPath));\n    };\n\n    Tour.prototype._isJustPathHashDifferent = function(host, path, location) {\n      var currentPath;\n      if ((host != null) && host !== '') {\n        if (this._isHostDifferent(host, location)) {\n          return false;\n        }\n      }\n      currentPath = [location.pathname, location.search, location.hash].join('');\n      if ({}.toString.call(path) === '[object String]') {\n        return this._getPath(path) === this._getPath(currentPath) && this._equal(this._getQuery(path), this._getQuery(currentPath)) && !this._equal(this._getHash(path), this._getHash(currentPath));\n      }\n      return false;\n    };\n\n    Tour.prototype._redirect = function(step, i, path) {\n      var href;\n      if ($.isFunction(step.redirect)) {\n        return step.redirect.call(this, path);\n      } else {\n        href = {}.toString.call(step.host) === '[object String]' ? \"\" + step.host + path : path;\n        this._debug(\"Redirect to \" + href);\n        if (this._getState('redirect_to') === (\"\" + i)) {\n          this._debug(\"Error redirection loop to \" + path);\n          this._removeState('redirect_to');\n          if (step.onRedirectError != null) {\n            return step.onRedirectError(this);\n          }\n        } else {\n          this._setState('redirect_to', \"\" + i);\n          return document.location.href = href;\n        }\n      }\n    };\n\n    Tour.prototype._isOrphan = function(step) {\n      return (step.element == null) || !$(step.element).length || $(step.element).is(':hidden') && ($(step.element)[0].namespaceURI !== 'http://www.w3.org/2000/svg');\n    };\n\n    Tour.prototype._isLast = function() {\n      return this._current < this._options.steps.length - 1;\n    };\n\n    Tour.prototype._showPopoverAndOverlay = function(i) {\n      var step;\n      if (this.getCurrentStep() !== i || this.ended()) {\n        return;\n      }\n      step = this.getStep(i);\n      if (step.backdrop) {\n        this._showOverlayElement(step);\n      }\n      this._showPopover(step, i);\n      if (step.onShown != null) {\n        step.onShown(this);\n      }\n      return this._debug(\"Step \" + (this._current + 1) + \" of \" + this._options.steps.length);\n    };\n\n    Tour.prototype._showPopover = function(step, i) {\n      var $element, $tip, isOrphan, options;\n      $(\".tour-\" + this._options.name).remove();\n      options = $.extend({}, this._options);\n      isOrphan = this._isOrphan(step);\n      step.template = this._template(step, i);\n      if (isOrphan) {\n        step.element = 'body';\n        step.placement = 'top';\n      }\n      $element = $(step.element);\n      $element.addClass(\"tour-\" + this._options.name + \"-element tour-\" + this._options.name + \"-\" + i + \"-element\");\n      if (step.options) {\n        $.extend(options, step.options);\n      }\n      if (step.reflex && !isOrphan) {\n        $(step.reflexElement).addClass('tour-step-element-reflex').off((this._reflexEvent(step.reflex)) + \".tour-\" + this._options.name).on((this._reflexEvent(step.reflex)) + \".tour-\" + this._options.name, (function(_this) {\n          return function() {\n            if (_this._isLast()) {\n              return _this.next();\n            } else {\n              return _this.end();\n            }\n          };\n        })(this));\n      }\n      $element.popover({\n        placement: step.placement,\n        trigger: 'manual',\n        title: step.title,\n        content: step.content,\n        html: true,\n        animation: step.animation,\n        container: step.container,\n        template: step.template,\n        selector: step.element\n      }).popover('show');\n      $tip = $($element.data('bs.popover').getTipElement());\n      return $tip.attr('id', step.id);\n    };\n\n    Tour.prototype._template = function(step, i) {\n      var $navigation, $next, $prev, $resume, $template, template;\n      template = step.template;\n      if (this._isOrphan(step) && {}.toString.call(step.orphan) !== '[object Boolean]') {\n        template = step.orphan;\n      }\n      $template = $.isFunction(template) ? $(template(i, step)) : $(template);\n      $navigation = $template.find('.popover-navigation');\n      $prev = $navigation.find('[data-role=\"prev\"]');\n      $next = $navigation.find('[data-role=\"next\"]');\n      $resume = $navigation.find('[data-role=\"pause-resume\"]');\n      if (this._isOrphan(step)) {\n        $template.addClass('orphan');\n      }\n      $template.addClass(\"tour-\" + this._options.name + \" tour-\" + this._options.name + \"-\" + i);\n      if (step.reflex) {\n        $template.addClass(\"tour-\" + this._options.name + \"-reflex\");\n      }\n      if (step.prev < 0) {\n        $prev.addClass('disabled').prop('disabled', true).prop('tabindex', -1);\n      }\n      if (step.next < 0) {\n        $next.addClass('disabled').prop('disabled', true).prop('tabindex', -1);\n      }\n      if (!step.duration) {\n        $resume.remove();\n      }\n      return $template.clone().wrap('<div>').parent().html();\n    };\n\n    Tour.prototype._reflexEvent = function(reflex) {\n      if ({}.toString.call(reflex) === '[object Boolean]') {\n        return 'click';\n      } else {\n        return reflex;\n      }\n    };\n\n    Tour.prototype._scrollIntoView = function(i) {\n      var $element, $window, counter, height, offsetTop, scrollTop, step, windowHeight;\n      step = this.getStep(i);\n      $element = $(step.element);\n      if (!$element.length) {\n        return this._showPopoverAndOverlay(i);\n      }\n      $window = $(window);\n      offsetTop = $element.offset().top;\n      height = $element.outerHeight();\n      windowHeight = $window.height();\n      scrollTop = 0;\n      switch (step.placement) {\n        case 'top':\n          scrollTop = Math.max(0, offsetTop - (windowHeight / 2));\n          break;\n        case 'left':\n        case 'right':\n          scrollTop = Math.max(0, (offsetTop + height / 2) - (windowHeight / 2));\n          break;\n        case 'bottom':\n          scrollTop = Math.max(0, (offsetTop + height) - (windowHeight / 2));\n      }\n      this._debug(\"Scroll into view. ScrollTop: \" + scrollTop + \". Element offset: \" + offsetTop + \". Window height: \" + windowHeight + \".\");\n      counter = 0;\n      return $('body, html').stop(true, true).animate({\n        scrollTop: Math.ceil(scrollTop)\n      }, (function(_this) {\n        return function() {\n          if (++counter === 2) {\n            _this._showPopoverAndOverlay(i);\n            return _this._debug(\"Scroll into view.\\nAnimation end element offset: \" + ($element.offset().top) + \".\\nWindow height: \" + ($window.height()) + \".\");\n          }\n        };\n      })(this));\n    };\n\n    Tour.prototype._initMouseNavigation = function() {\n      var _this;\n      _this = this;\n      return $(document).off(\"click.tour-\" + this._options.name, \".popover.tour-\" + this._options.name + \" *[data-role='prev']\").off(\"click.tour-\" + this._options.name, \".popover.tour-\" + this._options.name + \" *[data-role='next']\").off(\"click.tour-\" + this._options.name, \".popover.tour-\" + this._options.name + \" *[data-role='end']\").off(\"click.tour-\" + this._options.name, \".popover.tour-\" + this._options.name + \" *[data-role='pause-resume']\").on(\"click.tour-\" + this._options.name, \".popover.tour-\" + this._options.name + \" *[data-role='next']\", (function(_this) {\n        return function(e) {\n          e.preventDefault();\n          return _this.next();\n        };\n      })(this)).on(\"click.tour-\" + this._options.name, \".popover.tour-\" + this._options.name + \" *[data-role='prev']\", (function(_this) {\n        return function(e) {\n          e.preventDefault();\n          if (_this._current > 0) {\n            return _this.prev();\n          }\n        };\n      })(this)).on(\"click.tour-\" + this._options.name, \".popover.tour-\" + this._options.name + \" *[data-role='end']\", (function(_this) {\n        return function(e) {\n          e.preventDefault();\n          return _this.end();\n        };\n      })(this)).on(\"click.tour-\" + this._options.name, \".popover.tour-\" + this._options.name + \" *[data-role='pause-resume']\", function(e) {\n        var $this;\n        e.preventDefault();\n        $this = $(this);\n        $this.text(_this._paused ? $this.data('pause-text') : $this.data('resume-text'));\n        if (_this._paused) {\n          return _this.resume();\n        } else {\n          return _this.pause();\n        }\n      });\n    };\n\n    Tour.prototype._initKeyboardNavigation = function() {\n      if (!this._options.keyboard) {\n        return;\n      }\n      return $(document).on(\"keyup.tour-\" + this._options.name, (function(_this) {\n        return function(e) {\n          if (!e.which) {\n            return;\n          }\n          switch (e.which) {\n            case 39:\n              e.preventDefault();\n              if (_this._isLast()) {\n                return _this.next();\n              } else {\n                return _this.end();\n              }\n              break;\n            case 37:\n              e.preventDefault();\n              if (_this._current > 0) {\n                return _this.prev();\n              }\n          }\n        };\n      })(this));\n    };\n\n    Tour.prototype._makePromise = function(result) {\n      if (result && $.isFunction(result.then)) {\n        return result;\n      } else {\n        return null;\n      }\n    };\n\n    Tour.prototype._callOnPromiseDone = function(promise, cb, arg) {\n      if (promise) {\n        return promise.then((function(_this) {\n          return function(e) {\n            return cb.call(_this, arg);\n          };\n        })(this));\n      } else {\n        return cb.call(this, arg);\n      }\n    };\n\n    Tour.prototype._showBackground = function(step, data) {\n      var $backdrop, base, height, j, len, pos, ref, results, width;\n      height = $(document).height();\n      width = $(document).width();\n      ref = ['top', 'bottom', 'left', 'right'];\n      results = [];\n      for (j = 0, len = ref.length; j < len; j++) {\n        pos = ref[j];\n        $backdrop = (base = this.backdrops)[pos] != null ? base[pos] : base[pos] = $('<div>', {\n          \"class\": \"tour-backdrop \" + pos\n        });\n        $(step.backdropContainer).append($backdrop);\n        switch (pos) {\n          case 'top':\n            results.push($backdrop.height(data.offset.top > 0 ? data.offset.top : 0).width(width).offset({\n              top: 0,\n              left: 0\n            }));\n            break;\n          case 'bottom':\n            results.push($backdrop.offset({\n              top: data.offset.top + data.height,\n              left: 0\n            }).height(height - (data.offset.top + data.height)).width(width));\n            break;\n          case 'left':\n            results.push($backdrop.offset({\n              top: data.offset.top,\n              left: 0\n            }).height(data.height).width(data.offset.left > 0 ? data.offset.left : 0));\n            break;\n          case 'right':\n            results.push($backdrop.offset({\n              top: data.offset.top,\n              left: data.offset.left + data.width\n            }).height(data.height).width(width - (data.offset.left + data.width)));\n            break;\n          default:\n            results.push(void 0);\n        }\n      }\n      return results;\n    };\n\n    Tour.prototype._showOverlayElement = function(step) {\n      var $backdropElement, elementData;\n      $backdropElement = $(step.backdropElement);\n      if ($backdropElement.length === 0) {\n        elementData = {\n          width: 0,\n          height: 0,\n          offset: {\n            top: 0,\n            left: 0\n          }\n        };\n      } else {\n        elementData = {\n          width: $backdropElement.innerWidth(),\n          height: $backdropElement.innerHeight(),\n          offset: $backdropElement.offset()\n        };\n        $backdropElement.addClass('tour-step-backdrop');\n        if (step.backdropPadding) {\n          elementData = this._applyBackdropPadding(step.backdropPadding, elementData);\n        }\n      }\n      return this._showBackground(step, elementData);\n    };\n\n    Tour.prototype._hideOverlayElement = function(step) {\n      var $backdrop, pos, ref;\n      $(step.backdropElement).removeClass('tour-step-backdrop');\n      ref = this.backdrops;\n      for (pos in ref) {\n        $backdrop = ref[pos];\n        if ($backdrop && $backdrop.remove !== void 0) {\n          $backdrop.remove();\n        }\n      }\n      return this.backdrops = [];\n    };\n\n    Tour.prototype._applyBackdropPadding = function(padding, data) {\n      if (typeof padding === 'object') {\n        if (padding.top == null) {\n          padding.top = 0;\n        }\n        if (padding.right == null) {\n          padding.right = 0;\n        }\n        if (padding.bottom == null) {\n          padding.bottom = 0;\n        }\n        if (padding.left == null) {\n          padding.left = 0;\n        }\n        data.offset.top = data.offset.top - padding.top;\n        data.offset.left = data.offset.left - padding.left;\n        data.width = data.width + padding.left + padding.right;\n        data.height = data.height + padding.top + padding.bottom;\n      } else {\n        data.offset.top = data.offset.top - padding;\n        data.offset.left = data.offset.left - padding;\n        data.width = data.width + (padding * 2);\n        data.height = data.height + (padding * 2);\n      }\n      return data;\n    };\n\n    Tour.prototype._clearTimer = function() {\n      window.clearTimeout(this._timer);\n      this._timer = null;\n      return this._duration = null;\n    };\n\n    Tour.prototype._getProtocol = function(url) {\n      url = url.split('://');\n      if (url.length > 1) {\n        return url[0];\n      } else {\n        return 'http';\n      }\n    };\n\n    Tour.prototype._getHost = function(url) {\n      url = url.split('//');\n      url = url.length > 1 ? url[1] : url[0];\n      return url.split('/')[0];\n    };\n\n    Tour.prototype._getPath = function(path) {\n      return path.replace(/\\/?$/, '').split('?')[0].split('#')[0];\n    };\n\n    Tour.prototype._getQuery = function(path) {\n      return this._getParams(path, '?');\n    };\n\n    Tour.prototype._getHash = function(path) {\n      return this._getParams(path, '#');\n    };\n\n    Tour.prototype._getParams = function(path, start) {\n      var j, len, param, params, paramsObject;\n      params = path.split(start);\n      if (params.length === 1) {\n        return {};\n      }\n      params = params[1].split('&');\n      paramsObject = {};\n      for (j = 0, len = params.length; j < len; j++) {\n        param = params[j];\n        param = param.split('=');\n        paramsObject[param[0]] = param[1] || '';\n      }\n      return paramsObject;\n    };\n\n    Tour.prototype._equal = function(obj1, obj2) {\n      var j, k, len, obj1Keys, obj2Keys, v;\n      if ({}.toString.call(obj1) === '[object Object]' && {}.toString.call(obj2) === '[object Object]') {\n        obj1Keys = Object.keys(obj1);\n        obj2Keys = Object.keys(obj2);\n        if (obj1Keys.length !== obj2Keys.length) {\n          return false;\n        }\n        for (k in obj1) {\n          v = obj1[k];\n          if (!this._equal(obj2[k], v)) {\n            return false;\n          }\n        }\n        return true;\n      } else if ({}.toString.call(obj1) === '[object Array]' && {}.toString.call(obj2) === '[object Array]') {\n        if (obj1.length !== obj2.length) {\n          return false;\n        }\n        for (k = j = 0, len = obj1.length; j < len; k = ++j) {\n          v = obj1[k];\n          if (!this._equal(v, obj2[k])) {\n            return false;\n          }\n        }\n        return true;\n      } else {\n        return obj1 === obj2;\n      }\n    };\n\n    return Tour;\n\n  })();\n  return Tour;\n});\n\n\n//# sourceURL=webpack:///./node_modules/bootstrap-tour/build/js/bootstrap-tour.js?");

/***/ })

/******/ });
});;