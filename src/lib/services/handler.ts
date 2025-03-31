import { DarkBackground, LightBackground, LightSignature, DarkSignature } from '$lib';

export function navbarScrollAnimation(
	navbar: HTMLElement,
	mobileMenu: HTMLElement,
	axisY: number = 100
): void {
	window.addEventListener('scroll', () => {
		const isHidden = mobileMenu.classList.contains('hidden');

		if (navbar && mobileMenu) {
			if (window.scrollY > axisY) {
				navbar.classList.remove('hidden', 'animate-slideOutUp');
				navbar.classList.add('fixed', 'animate-slideInDown');
			}

			if (window.scrollY === 0) {
				navbar.classList.add('animate-slideOutUp');

				if (!isHidden) {
					mobileMenu.classList.add('animate-slideOutUp');

					mobileMenu.addEventListener(
						'animationend',
						() => {
							mobileMenu.classList.add('hidden');
							mobileMenu.classList.remove('animate-slideOutUp');
						},
						{ once: true }
					);
				}
			}
		}
	});
}

export function smoothScrollAnimation() {
	const links = document.querySelectorAll('.my-navbar ul a');

	for (const link of links) {
		link.addEventListener('click', clickHandler);
	}

	function clickHandler(event: Event) {
		event.preventDefault();

		const ele = event.currentTarget as HTMLAnchorElement;
		const href = ele.getAttribute('href');

		if (href) {
			const targetEle = document.querySelector(href);

			if (targetEle) {
				targetEle.scrollIntoView({ behavior: 'smooth' });
			}
		}
	}
}

export function zoomEffect(node: HTMLDivElement, scale: number = 1.1) {
	node.style.transition = '0.8s';

	function zoomIn() {
		node.style.transform = `scale(${scale})`;
	}

	function zoomOut() {
		node.style.transform = 'scale(1)';
	}

	node.addEventListener('mouseenter', zoomIn);
	node.addEventListener('mouseleave', zoomOut);

	return {
		destroy(): void {
			node.removeEventListener('mouseenter', zoomIn);
			node.removeEventListener('mouseleave', zoomOut);
		}
	};
}

export function headerBackgroundTransition(): void {
	const header = document.getElementById('main-header');
	const logo = document.getElementById('logo') as HTMLImageElement;

	if (header && logo) {
		header.classList.add('transition-all', 'duration-300');

		if (localStorage.theme !== 'dark') {
			header.style.opacity = '0';

			setTimeout(() => {
				header.style.backgroundImage = `url(${LightBackground})`;
				logo.src = LightSignature;
				header.style.opacity = '1';
			}, 100);
		} else {
			header.style.opacity = '0';

			setTimeout(() => {
				header.style.backgroundImage = `url(${DarkBackground})`;
				logo.src = DarkSignature;
				header.style.opacity = '1';
			}, 100);
		}
	}
}

export function fadeInScrollAnimation(
	targets: NodeListOf<Element>,
	animation: string = 'animate-fadeIn'
) {
	const callback = function (entries: Array<IntersectionObserverEntry>) {
		entries.forEach((entry) => {
			console.log(entry);

			if (entry.isIntersecting) {
				entry.target.classList.add(animation);
			} else {
				entry.target.classList.remove(animation);
			}
		});
	};

	const observer = new IntersectionObserver(callback);

	targets.forEach(function (target) {
		target.classList.add('opacity-0');
		observer.observe(target);
	});
}

export function switchLanguageHandler(event: Event): void {
	const currentTarget = event.currentTarget as HTMLSelectElement;
	localStorage.lang = currentTarget.value;
}

export function slideHandler(): void {
	const carousels = document.querySelectorAll('.carousel-item') as NodeListOf<HTMLElement>;

	if (carousels.length > 0) {
		carousels[0].classList.add('active');
	}

	const right = document.getElementById('moveRight');
	const left = document.getElementById('moveLeft');
	const total = carousels.length;
	let current = 0;

	if (right) {
		right.addEventListener('click', function () {
			const prev = current;
			current = (current + 1) % total;
			setSlide(prev, current);
		});
	}

	if (left) {
		left.addEventListener('click', function () {
			const prev = current;
			current = (current - 1 + total) % total;
			setSlide(prev, current);
		});
	}

	const setSlide = (prev: number, next: number): void => {
		if (prev >= 0 && prev < total) {
			carousels[prev].classList.remove('active');
		}
		if (next >= 0 && next < total) {
			carousels[next].classList.add('active');
		}
	};
}
