import './scss/style.scss';
import core from './app/core/core';
import checkScreenResolution from './app/helper/checkScreenResolution';

class Slider {
	constructor(el, data, options) {
		this.el = el;
		this.data = data;
		this.checkScreenResolution = checkScreenResolution;
		this.initialize = core;
		this.previewType = 6;
		this.countInfinity = 0;
	}
}

window.Slider = Slider;
