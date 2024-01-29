import { render, renderSlides } from '../render/render';

export default function initialize() {
	this.render = render;
	this.renderSlides = renderSlides;
	this.render();
	this.renderSlides(this.data);
	this.rightArrow.addEventListener('click', this.moveRight.bind(this));
	this.leftArrow.addEventListener('click', this.moveLeft.bind(this));
}
