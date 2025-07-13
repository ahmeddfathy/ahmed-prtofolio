// ===== NAVBAR AND FOOTER FUNCTIONALITY =====

document.addEventListener("DOMContentLoaded", function () {
  // ===== NAVBAR SCROLL EFFECT =====
  const navbar = document.querySelector(".navbar");
  const scrollToTopBtn = document.querySelector(".scroll-to-top");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 100) {
      navbar.classList.add("scrolled");
      if (scrollToTopBtn) {
        scrollToTopBtn.classList.add("visible");
      }
    } else {
      navbar.classList.remove("scrolled");
      if (scrollToTopBtn) {
        scrollToTopBtn.classList.remove("visible");
      }
    }
  });

  // ===== MOBILE NAVBAR TOGGLE =====
  const navbarToggle = document.querySelector(".navbar-toggle");
  const navbarNav = document.querySelector(".navbar-nav");

  if (navbarToggle && navbarNav) {
    navbarToggle.addEventListener("click", function () {
      navbarToggle.classList.toggle("active");
      navbarNav.classList.toggle("active");
    });

    // Close mobile menu when clicking on a link
    const navLinks = document.querySelectorAll(".nav-link");
    navLinks.forEach((link) => {
      link.addEventListener("click", function () {
        navbarToggle.classList.remove("active");
        navbarNav.classList.remove("active");
      });
    });

    // Close mobile menu when clicking outside
    document.addEventListener("click", function (e) {
      if (!navbar.contains(e.target)) {
        navbarToggle.classList.remove("active");
        navbarNav.classList.remove("active");
      }
    });
  }

  // ===== SCROLL TO TOP FUNCTIONALITY =====
  if (scrollToTopBtn) {
    scrollToTopBtn.addEventListener("click", function () {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  }

  // ===== SMOOTH SCROLLING FOR ANCHOR LINKS =====
  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  anchorLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        const offsetTop = targetElement.offsetTop - 80; // Account for fixed navbar
        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        });
      }
    });
  });

  // ===== ACTIVE NAVIGATION HIGHLIGHTING =====
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-link");

  function highlightActiveNav() {
    let current = "";
    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 100;
      const sectionHeight = section.offsetHeight;
      if (
        window.scrollY >= sectionTop &&
        window.scrollY < sectionTop + sectionHeight
      ) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
      }
    });
  }

  window.addEventListener("scroll", highlightActiveNav);

  // ===== LOADING ANIMATION =====
  const loadingOverlay = document.querySelector(".loading-overlay");
  if (loadingOverlay) {
    window.addEventListener("load", function () {
      setTimeout(() => {
        loadingOverlay.style.opacity = "0";
        setTimeout(() => {
          loadingOverlay.style.display = "none";
        }, 500);
      }, 1000);
    });
  }

  // ===== INTERSECTION OBSERVER FOR ANIMATIONS =====
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  }, observerOptions);

  // Observe elements with animation classes
  const animatedElements = document.querySelectorAll(
    ".fade-in-up, .fade-in-left, .fade-in-right"
  );
  animatedElements.forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(30px)";
    observer.observe(el);
  });

  // ===== SOCIAL LINKS HOVER EFFECTS =====
  const socialLinks = document.querySelectorAll(".social-link");
  socialLinks.forEach((link) => {
    link.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-3px) scale(1.1)";
    });

    link.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0) scale(1)";
    });
  });

  // ===== FOOTER LINKS ANIMATION =====
  const footerLinks = document.querySelectorAll(".footer-links a");
  footerLinks.forEach((link) => {
    link.addEventListener("mouseenter", function () {
      this.style.paddingRight = "15px";
    });

    link.addEventListener("mouseleave", function () {
      this.style.paddingRight = "0";
    });
  });

  // ===== NAVBAR BRAND ANIMATION =====
  const navbarBrand = document.querySelector(".navbar-brand");
  if (navbarBrand) {
    navbarBrand.addEventListener("click", function (e) {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  }

  // ===== CONTACT FORM VALIDATION (if exists) =====
  const contactForm = document.querySelector("#contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      // Basic validation
      const name = this.querySelector('input[name="name"]');
      const email = this.querySelector('input[name="email"]');
      const message = this.querySelector('textarea[name="message"]');

      let isValid = true;

      if (!name.value.trim()) {
        showError(name, "الاسم مطلوب");
        isValid = false;
      }

      if (!email.value.trim() || !isValidEmail(email.value)) {
        showError(email, "البريد الإلكتروني غير صحيح");
        isValid = false;
      }

      if (!message.value.trim()) {
        showError(message, "الرسالة مطلوبة");
        isValid = false;
      }

      if (isValid) {
        // Here you would typically send the form data
        showSuccess("تم إرسال الرسالة بنجاح!");
        this.reset();
      }
    });
  }

  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  function showError(element, message) {
    element.style.borderColor = "#ff6b35";
    // You can add more error styling here
  }

  function showSuccess(message) {
    // You can add success notification here
    console.log(message);
  }

  // ===== PERFORMANCE OPTIMIZATION =====
  // Debounce scroll events
  function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }

  // Apply debounce to scroll events
  const debouncedScroll = debounce(() => {
    highlightActiveNav();
  }, 10);

  window.addEventListener("scroll", debouncedScroll);

  // ===== WHATSAPP BUTTON FUNCTIONALITY =====
  const whatsappFloat = document.getElementById("whatsapp-float");
  if (whatsappFloat) {
    // Add click tracking (optional)
    whatsappFloat.addEventListener("click", function () {
      console.log("WhatsApp button clicked");
    });
  }
});

// ===== UTILITY FUNCTIONS =====
function createRippleEffect(element, event) {
  const ripple = document.createElement("span");
  const rect = element.getBoundingClientRect();
  const size = Math.max(rect.width, rect.height);
  const x = event.clientX - rect.left - size / 2;
  const y = event.clientY - rect.top - size / 2;

  ripple.style.width = ripple.style.height = size + "px";
  ripple.style.left = x + "px";
  ripple.style.top = y + "px";
  ripple.classList.add("ripple");

  element.appendChild(ripple);

  setTimeout(() => {
    ripple.remove();
  }, 600);
}

// Add ripple effect to buttons
document.addEventListener("click", function (e) {
  if (e.target.matches(".btn, .social-link, .nav-link")) {
    createRippleEffect(e.target, e);
  }
});
