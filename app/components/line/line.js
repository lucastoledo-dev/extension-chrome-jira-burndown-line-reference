import './line.less!';

import $ from 'jquery';
import {readonly} from '../../utils/property';

const TPL_ELEMENT = '<span class="burndown__line"></span>';

export const ORIENTATION = {
  HORIZONTAL: 0,
  VERTICAL:   1
};

export const ORIENTATION_SIZE_ATTR_NAMES = [
  'width',
  'height'
];

export const ORIENTATION_POSITION_ATTR_NAMES = [
  'top',
  'left'
];

export class Line {
  constructor (id, orientation) {
    if (!(orientation in Object.values(ORIENTATION))) {
      throw new TypeError('Wrong line orientation!');
    }

    readonly(this, 'id', id);
    readonly(this, 'orientation', orientation);

    this.__element = this._createElement();
    this.__size = '100%';

    this.__offset = [0, 0];

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
    this._updateElementPosition();
  }

  get size () {
    return this.__size;
  }

  set size (size) {
    this.__size = size;
    this._updateElementSize();
  }

  getOffset () {
    return [this.__offset[ORIENTATION.VERTICAL], this.__offset[ORIENTATION.HORIZONTAL]];
  }

  setOffset (x, y) {
    this.__offset[ORIENTATION.VERTICAL] = x;
    this.__offset[ORIENTATION.HORIZONTAL] = y;

    this._updateElementPosition();
  }

  _createElement () {
    let o = this.orientation;
    let attr1 = ORIENTATION_SIZE_ATTR_NAMES[o];
    let attr2 = ORIENTATION_SIZE_ATTR_NAMES[+!o];

    return $(TPL_ELEMENT)
      .attr('id', `burndown__line__${this.id}`)
      .css(attr1, this.__size)
      .css(attr2, '0px');
  }

  _updateElementPosition () {
    let o = this.orientation;
    let attr1 = ORIENTATION_POSITION_ATTR_NAMES[o];
    let attr2 = ORIENTATION_POSITION_ATTR_NAMES[+!o];

    this.__element
      .css(attr1, ((this.__value+this.__offset[o])||0) + 'px')
      .css(attr2, (this.__offset[+!o]||0) + 'px');
  }

  _updateElementSize () {
    let o = this.orientation;
    let attr = ORIENTATION_SIZE_ATTR_NAMES[o];

    this.__element
      .css(attr, this.__size);
  }
}
