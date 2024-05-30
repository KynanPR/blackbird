function loadHeader() {
	// Manually perform scroll on nav link click to have it be smooth and account for the header
	const header = document.querySelector("header");
	const navLinks = header.querySelectorAll("nav a");

	navLinks.forEach((link) => {
		link.addEventListener("click", handleNavigationClick);
	});

	function handleNavigationClick(event) {
		event.preventDefault();
		const targetSection = event.target.getAttribute("href");
		scrollToSection(targetSection);
	}

	function scrollToSection(targetSection) {
		const navbarHeight = header.offsetHeight;
		const targetElement = document.querySelector(targetSection);
		const targetPosition = targetElement.offsetTop;

		window.scrollTo({
			top: targetPosition - (navbarHeight + 50),
			behavior: "smooth",
		});
	}
}

function loadGallery() {
	const gallerySection = document.querySelector(".gallery-section");
	const galleryButton = gallerySection.querySelector(".gallery__button");

	galleryButton.addEventListener("click", toggleState);

	// let currentState = "expanded"; // Defaults to expanded in case JS doesn't load

	toggleState(); // As soon as the js loads though it collapses down

	function toggleState() {
		// const startState = currentState;

		if (gallerySection.classList.toggle("gallery-section--collapsed")) {
			gallerySection.scrollIntoView({ behavior: "smooth", block: "nearest" });
		}
		galleryButton.classList.toggle("gallery__button--collapsed");
		console.log("toggled state");
	}
}
