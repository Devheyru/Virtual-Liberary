const toggler = document.querySelector(".toggler");
const navLinks = document.querySelector(".nav-links");
const reader = document.getElementsByClassName(".read");

toggler.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});
const contactForm = document.querySelector(".contact-form");

contactForm.addEventListener("submit", function (event) {
  event.preventDefault();

  contactForm.reset();

  alert("Thank you for your message! We will get back to you shortly.");
});
document.querySelectorAll("body a").forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      const headerOffset = document.querySelector(".header")?.offsetHeight || 0;
      const extraAdjustment = 5;
      smoothScrollTo(targetElement, 1000, headerOffset - extraAdjustment);
    }
  });
});

function smoothScrollTo(targetElement, duration, offset = 0) {
  const startPosition = window.scrollY;
  const targetPosition =
    targetElement.getBoundingClientRect().top + window.scrollY - offset;
  const distance = targetPosition - startPosition;
  let startTime = null;

  function animationScroll(currentTime) {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const run = easeInOutQuad(timeElapsed, startPosition, distance, duration);
    window.scrollTo(0, run);
    if (timeElapsed < duration) requestAnimationFrame(animationScroll);
  }

  function easeInOutQuad(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  }

  requestAnimationFrame(animationScroll);
}
