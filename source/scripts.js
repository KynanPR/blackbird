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
	const galleryCollapsible = gallerySection.querySelector(".gallery__collapsible");
	const galleryButton = gallerySection.querySelector(".gallery__button");

	galleryButton.addEventListener("click", toggleState);

	// Defaults to expanded in case JS doesn't load, but as soon as JS loads, colapse it down
	// Manually add rather than using toggleState() to avoid usual scrolling behaviour
	galleryButton.classList.add("gallery__button--collapsed");
	galleryCollapsible.classList.add("gallery__collapsible--collapsed");

	function toggleState() {
		// const startState = currentState;
		if (galleryCollapsible.classList.toggle("gallery__collapsible--collapsed")) {
			galleryCollapsible.scrollIntoView({ behavior: "smooth", block: "nearest" });
		}
		galleryButton.classList.toggle("gallery__button--collapsed");
		console.log("toggled state");
	}
}

function SubmitFormData() {
	var name = $("#name").val();
	var email = $("#email").val();
	var phone = $("#phone").val();
	var gender = $("input[type=radio]:checked").val();
	var message = $("#message").val();
	$.post(
		"formsubmit.php",
		{ name: name, email: email, phone: phone, gender: gender, message: message },
		function (data) {
			$("#results").html(data);
			$("#myForm")[0].reset();
		}
	);
}
