// Using navbar links smooth scrolls
$(document).ready(function () {
  // Smooth scrolling function using jQuery's animate method
  function smoothScroll(target, duration) {
    let navbarHeight = $("nav").outerHeight(); // Get the navbar's height
    $("html, body").animate(
      {
        scrollTop: $(target).offset().top - navbarHeight,
      },
      duration
    );
  }

  // Attach click event handlers to navigation links using jQuery selectors
  $("nav a").click(function (e) {
    e.preventDefault();
    let target = $(this).attr("href");
    smoothScroll(target, 1000); // Adjust duration as needed
  });
});

function SubmitFormData() {
  const name = $("#name").val();
  const email = $("#email").val();
  const message = $("#message").val();
  const honeypot = $("#honeypot").val();

  // Only submit the form if the hidden field is empty to catch out bots
  if (!honeypot) {
    $.post(
      "./source/formsubmit.php",
      { name: name, email: email, message: message },
      () => $("#contact-form")[0].reset()
    );
  }
}
