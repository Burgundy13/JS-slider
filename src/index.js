import './scss/style.scss';
import core from './app/core/core';

class Slider {
	constructor(el, data, options) {
		this.el = el;
		this.data = data;
		this.initialize = core;
	}
}

window.Slider = Slider;
