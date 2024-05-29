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
