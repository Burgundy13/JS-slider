export function moveRight() {
	this.countInfinity++;
	this.leftArrowBtn.style.display = 'block';
	const matrix = new WebKitCSSMatrix(this.sliderContainer.style.transform);
	this.sliderContainer.style.transform = `translateX(${
		matrix.m41 - this.sliderElement.offsetWidth
	}px)`;

	if (this.countInfinity === this.data.length / this.previewType - 1) {
		this.rightArrowBtn.style.display = 'none';
	}
}

export function moveLeft() {
	this.countInfinity--;
	const matrix = new WebKitCSSMatrix(this.sliderContainer.style.transform);
	this.sliderContainer.style.transform = `translateX(${
		matrix.m41 + this.sliderElement.offsetWidth
	}px)`;
	this.rightArrowBtn.style.display = 'block';

	if (this.countInfinity === 0) {
		this.leftArrowBtn.style.display = 'none';
	}
}
