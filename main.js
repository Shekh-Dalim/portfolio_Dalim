var typed = new Typed(".text", {
  strings: ["Web Developer", "Computer Programmer", "Instagrammer"],
  typeSpeed: 100,
  backSpeed: 100, // Corrected from 'backspeed' to 'backSpeed'
  backDelay: 1000,
  loop: true,
});

/*js */
// Get the button
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

// Show or hide the button based on scroll position
window.onscroll = function() {
    if (document.body.scrollHeight - window.scrollY <= window.innerHeight + 100) {
        scrollToTopBtn.style.display = "block"; // Show button when near footer
    } else {
        scrollToTopBtn.style.display = "none"; // Hide button otherwise
    }
};

// Scroll to top function
scrollToTopBtn.addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Smooth scrolling effect
    });
});