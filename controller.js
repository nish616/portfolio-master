window.onload = () => {

	window.scrollTo(0, 0);

	const sections = [{
		section: document.querySelector('.section-2'),
		title: document.querySelector('.section-2 .title h2')
	}, {
		section: document.querySelector('.section-3'),
		title: document.querySelector('.section-3 .title h2')
	}];

	function isElementInViewport(el) {
		const rect = el.getBoundingClientRect();
		return (
			rect.top >= 0 &&
			rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
		);
	}

	function debounce(func, timeout = 300) {
		let timer;
		return (...args) => {
			clearTimeout(timer);
			timer = setTimeout(() => { func.apply(this, args); }, timeout);
		};
	}

	function handleScroll() {
		for (const section of sections) {
			// console.log(section);
			if (isElementInViewport(section.section)) {
				if (!section.title.classList.contains('section-visible')) {
					console.log("Added");
					section.title.classList.add('section-visible');
				}
			} else {
				if (section.title.classList.contains('section-visible')) {
					section.title.classList.remove('section-visible');
				}
			}
		}
	}

	// Initial check in case the section is already in the viewport on page load
	handleScroll();

	// Add scroll event listener
	window.addEventListener('scroll', function (event) {
		debounce(handleScroll());
	});
}
