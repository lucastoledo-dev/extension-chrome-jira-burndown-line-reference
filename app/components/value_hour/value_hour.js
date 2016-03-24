import './value_hour.less!';

import $ from 'jquery';
import {readonly} from '../../utils/property';

const TPL_ELEMENT = '<span class="burndown__value_hour"></span>';

let pixelsPerTime = 1;

export class ValueHour {
  static get pixelsPerTime() {
    return pixelsPerTime;
  }
  static set pixelsPerTime(value) {
    pixelsPerTime;
  }

  constructor (id) {
    readonly(this, 'id', id);

    this.__element = this._createElement();
    this.__pixelsPerTime = null;

    this.value = 0;
  }

  get element () {
    return this.__element;
  }

  get value () {
    return this.__value;
  }

  set value (value) {
    this.__value = value;
    this.__element
      .css('top', 'calc(100% - ' + ((this.__value * this.pixelsPerTime) || 0) + 'px)')
      .text(this.__value.toFixed(2) + 'h');
  }

  get pixelsPerTime () {
    return this.__pixelsPerTime || ValueHour.pixelsPerTime;
  }

  set pixelsPerTime (value) {
    this.__pixelsPerTime = value;
  }

  _createElement () {
    return $(TPL_ELEMENT)
      .attr('id', `burndown__value_hour__${this.id}`);
  }
}
