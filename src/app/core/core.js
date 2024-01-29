import { render, renderSlides } from '../render/render';

export default function initialize() {
	this.render = render;
	this.renderSlides = renderSlides;
	this.render();
	this.renderSlides(this.data);
}
