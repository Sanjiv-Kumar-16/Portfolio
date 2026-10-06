document.addEventListener("DOMContentLoaded", function () {
  const navToggle = document.querySelector(".nav-toggle");
  const navMenu = document.querySelector(".nav-menu");

  if (navToggle && navMenu) {
    navToggle.addEventListener("click", () => {
      const isOpen = navMenu.classList.toggle("open");
      navToggle.setAttribute("aria-expanded", String(isOpen));
    });

    navMenu.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("open");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
      event.preventDefault();
      const submitButton = contactForm.querySelector("button[type='submit']");
      if (submitButton) {
        const originalText = submitButton.textContent;
        submitButton.textContent = "Message Sent";
        submitButton.disabled = true;
        setTimeout(() => {
          submitButton.textContent = originalText;
          submitButton.disabled = false;
          contactForm.reset();
        }, 1800);
      }
    });
  }
});
