import {noop} from 'lodash';
import {readonly} from './property';

let TPL_TRAMPOLINE =
`
(function () {
  var original   = %FUNCTION_PATH%;
  if (!typeof original === 'function') {
    return;
  }

  var trampoline = function (%FUNCTION_ARGS%) {
    var result = original.apply(this, arguments);
    var check  = JSON.stringify(%SERIALIZE_PATH%);

    var event  = new CustomEvent('%EVENT_NAME%', {detail: check});
    window.dispatchEvent(event);
  }

  trampoline.$original = original;
  %FUNCTION_PATH% = trampoline;
})();
`;

let TPL_TRAMPOLINE_REMOVE =
`
(function () {
  var trampoline = %FUNCTION_PATH%;
  if (!trampoline) {
    return;
  }

  var original   = trampoline.$original;
  if (original) {
    %FUNCTION_PATH%  = original;
  }
})();
`;

export class Detourer {

  constructor (opts) {
    readonly(this, 'name', opts.name);

    this.__script = null;
    this.__data   = null;
    this.__callback = (opts.callback||noop).bind(this);

    this.__options = {};
    this.__options.functionPath  = opts.functionPath || 'window.$dummy';
    this.__options.serializePath = opts.serializePath || '{}';
    this.__options.functionArgs  = opts.args || [];
  }

  run () {
    if (this.__script) {
      return;
    }

    this.__script = this._createDetourScript();
    this.__data   = null;

    this._createListener();

    return this;
  }

  remove () {
    this._removeListener();
    this._createRemovalScript();

    this.__script.remove();
    this.__script = null;
  }

  get eventName () {
    return 'detourer_' + this.name;
  }

  get data () {
    return this.__data;
  }

  _createDetourScript () {
    let source = this._createDetourFunction(this.__options);
    let script = this._createScript(source);

    return script;
  }

  _createRemovalScript () {
    let source = this._createRemovalFunction(this.__options);
    let script = this._createScript(source, true);

    return script;
  }

  _createScript (funcString, removeElement = false) {
    let script = document.createElement('script');
    script.setAttribute('id', this.name);
    script.textContent = this._createDetourFunction(this.__options);

    let doc = (document.head || document.documentElement);
    doc.appendChild(script);

    if (removeElement) {
      script.parentNode.removeChild(script);
    }

    return script;
  }

  _createDetourFunction (opts) {
    return TPL_TRAMPOLINE
      .replace(/\%FUNCTION_PATH\%/g, opts.functionPath)
      .replace(/\%SERIALIZE_PATH\%/g, opts.serializePath)
      .replace(/\%FUNCTION_ARGS\%/g, opts.functionArgs.join(','))
      .replace(/\%EVENT_NAME\%/g, this.eventName);
  }

  _createRemovalScript (opts) {
    return TPL_TRAMPOLINE_REMOVE
      .replace(/\%FUNCTION_PATH\%/g, opts.functionPath);
  }

  _createListener () {
    this.__listenerCallback = event => {
      this.__data = JSON.parse(event.detail);
      this.__callback(this.__data);
    };

    window.addEventListener(this.eventName, this.__listenerCallback);
  }

  _removeListener () {
    if (!this.__listenerCallback) {
      return;
    }

    window.removeEventListener(this.eventName, this.__listenerCallback);
  }
}