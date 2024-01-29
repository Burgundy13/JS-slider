import './scss/style.scss';
import core from './app/core/core';

class Slider {
	constructor(el, data, options) {
		this.el = el;
		this.data = data;
		this.initialize = core;
		this.previewType = 6;
	}
}

window.Slider = Slider;
