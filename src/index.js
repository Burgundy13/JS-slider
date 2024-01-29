import './scss/style.scss';
import core from './app/core/core';
import { moveLeft, moveRight } from '../src/app/events/events';

class Slider {
	constructor(el, data, options) {
		this.el = el;
		this.data = data;
		this.initialize = core;
		this.previewType = 6;
		this.countInfinity = 0;
		this.moveLeft = moveLeft;
		this.moveRight = moveRight;
	}
}

window.Slider = Slider;
