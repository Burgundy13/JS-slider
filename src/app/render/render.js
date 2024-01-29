export function render() {
	this.sliderElement = document.getElementById(this.el);
	this.sliderElement.className = 'slider';
	this.sliderContainer = document.createElement('div');
	this.sliderContainer.className = 'slider__slider-container';
	this.sliderElement.appendChild(this.sliderContainer);
	this.leftArrowBtn = document.createElement('button');
	this.leftArrowBtn.className = 'slider__left-arrow-btn';
	this.leftArrow = document.createElement('i');
	this.leftArrow.classList.add(
		'slider__left-arrow-btn__left',
		'fas',
		'fa-chevron-left'
	);
	this.sliderElement.appendChild(this.leftArrowBtn);
	this.leftArrowBtn.appendChild(this.leftArrow);
	this.rightArrowBtn = document.createElement('button');
	this.rightArrowBtn.className = 'slider__right-arrow-btn';
	this.rightArrow = document.createElement('i');
	this.rightArrow.classList.add(
		'slider__left-arrow-btn__right',
		'fas',
		'fa-chevron-right'
	);
	this.sliderElement.appendChild(this.rightArrowBtn);
	this.rightArrowBtn.appendChild(this.rightArrow);
	this.leftArrowBtn.style.display = 'none';
}

export function renderSlides(data) {
	this.sliderContainer.style.width = `${
		this.data.length * (this.sliderElement.offsetWidth / this.previewType)
	}px`;
	data.forEach((slide) => {
		const slideContainer = document.createElement('div');
		slideContainer.className = 'slider__slider-container__slide';
		slideContainer.style.width = `${
			this.sliderElement.offsetWidth / this.previewType
		}px`;
		const slideLink = document.createElement('a');
		slideLink.className = 'slider__link';
		slideLink.href = slide.redirectLink;
		slideLink.target = '_blank';
		slideContainer.appendChild(slideLink);
		const slideImg = document.createElement('img');
		slideImg.style.height = `${
			(9 * (this.sliderElement.offsetWidth / this.previewType)) / 16
		}px`;
		slideImg.className = 'slider__link__img';
		slideImg.src = slide.imgUrl;
		const slideTitle = document.createElement('h2');
		slideTitle.innerText = slide.caption;
		slideLink.appendChild(slideImg);
		slideLink.appendChild(slideTitle);
		this.sliderContainer.appendChild(slideContainer);
	});
}
