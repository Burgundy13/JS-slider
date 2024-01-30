import {
	render,
	renderSlides,
	calculateSize,
	autoLoad,
} from '../render/render';
import { moveLeft, moveRight } from '../events/events';

export default function initialize() {
	this.render = render;
	this.renderSlides = renderSlides;
	this.calculateSize = calculateSize;
	this.render();
	this.renderSlides(this.data);
	this.checkScreenResolution();
	this.autoLoad = autoLoad;
	this.autoLoad();
	this.moveLeft = moveLeft;
	this.moveRight = moveRight;
	this.rightArrow.addEventListener('click', this.moveRight.bind(this));
	this.leftArrow.addEventListener('click', this.moveLeft.bind(this));
	window.addEventListener('resize', this.checkScreenResolution.bind(this));
}
