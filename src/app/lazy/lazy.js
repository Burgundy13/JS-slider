export default function () {
	this.imageObserver = new IntersectionObserver((entries) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				const lazyImage = entry.target;
				lazyImage.src = lazyImage.dataset.src;
			}
		});
	});
}
