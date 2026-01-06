// ===============================
// Main JS (Typed + Particles + AOS + Scroll Top)
// ===============================

document.addEventListener("DOMContentLoaded", () => {

  /* ========= Typed Text ========= */
  if (document.querySelector(".typed-text")) {
    new Typed(".typed-text", {
      strings: ["Senior Frontend Developer",
  "UI Engineer",
  "Design-Focused Web Developer"],
      typeSpeed: 70,
      backSpeed: 40,
      loop: true
    });
  }

  /* ========= Particles JS ========= */
  if (document.getElementById("particles-js")) {
    particlesJS("particles-js", {
      particles: {
        number: { value: 60 },
        color: { value: "#14b8a6" },
        shape: { type: "circle" },
        opacity: { value: 0.3 },
        size: { value: 3 },
        line_linked: {
          enable: true,
          color: "#14b8a6",
          opacity: 0.4
        },
        move: { enable: true, speed: 1.8 }
      },
      interactivity: {
        events: {
          onhover: { enable: true, mode: "grab" }
        },
        modes: {
          grab: {
            distance: 150,
            line_linked: { opacity: 1 }
          }
        }
      },
      retina_detect: true
    });
  }

  /* ========= AOS ========= */
  AOS.init({
    duration: 1000,
    once: true
  });

  /* ========= Scroll To Top ========= */
  const scrollBtn = document.getElementById("scrollTopBtn");

  if (scrollBtn) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 250) {
        scrollBtn.classList.add("show");
      } else {
        scrollBtn.classList.remove("show");
      }
    });

    scrollBtn.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  }

});
