const revealItems = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.14 }
);

revealItems.forEach((item) => revealObserver.observe(item));

const contactForm = document.querySelector("#contact-form");
const formMessage = document.querySelector(".form-message");

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();
  formMessage.textContent = "메시지를 확인했어요. 곧 답장 드릴게요!";
  contactForm.reset();
});

const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".desktop-nav");

menuToggle.addEventListener("click", () => {
  const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isOpen));
  nav.classList.toggle("mobile-nav", !isOpen);
});

nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    menuToggle.setAttribute("aria-expanded", "false");
    nav.classList.remove("mobile-nav");
  });
});
