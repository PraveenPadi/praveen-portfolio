document.addEventListener("DOMContentLoaded", () => {
  // Sticky Navbar Logic
  const navbar = document.getElementById("navbar");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 20) {
      navbar.classList.add("bg-[#0B0F17]/80", "backdrop-blur-md", "border-b", "border-white/10", "py-4");
      navbar.classList.remove("bg-transparent", "py-6");
    } else {
      navbar.classList.add("bg-transparent", "py-6");
      navbar.classList.remove("bg-[#0B0F17]/80", "backdrop-blur-md", "border-b", "border-white/10", "py-4");
    }
  });

  // Intersection Observer for Animations
  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.15
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
        
        // Handling bars with delays
        if (entry.target.classList.contains('mock-bar-container')) {
           const bars = entry.target.querySelectorAll('.mock-bar');
           bars.forEach((bar, index) => {
             setTimeout(() => {
                bar.classList.add('in-view');
             }, index * 100);
           });
        }
        
        // Remove observer to avoid re-triggering, or keep it for continuous animations
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  const animatableElements = document.querySelectorAll(".fade-up, .fade-in, .slide-right, .mock-bar-container");
  animatableElements.forEach(el => observer.observe(el));

  // Lightbox Modal Logic for Dashboard Images
  const lightboxModal = document.getElementById("lightbox-modal");
  const lightboxImg = document.getElementById("lightbox-img");
  const lightboxTitle = document.getElementById("lightbox-title");
  const lightboxClose = document.getElementById("lightbox-close");
  const lightboxTriggers = document.querySelectorAll(".lightbox-trigger");

  const openLightbox = (imgSrc, imgAlt) => {
    lightboxImg.src = imgSrc;
    lightboxImg.alt = imgAlt;
    lightboxTitle.textContent = imgAlt;
    lightboxModal.classList.remove("opacity-0", "pointer-events-none");
    lightboxModal.classList.add("opacity-100");
    document.body.classList.add("overflow-hidden");
  };

  const closeLightbox = () => {
    lightboxModal.classList.remove("opacity-100");
    lightboxModal.classList.add("opacity-0", "pointer-events-none");
    document.body.classList.remove("overflow-hidden");
    setTimeout(() => {
      lightboxImg.src = "";
    }, 300);
  };

  lightboxTriggers.forEach(trigger => {
    trigger.addEventListener("click", () => {
      const img = trigger.querySelector("img");
      if (img) {
        openLightbox(img.src, img.alt);
      }
    });
  });

  lightboxClose.addEventListener("click", closeLightbox);
  lightboxModal.addEventListener("click", (e) => {
    if (e.target === lightboxModal || e.target.id === "lightbox-modal") {
      closeLightbox();
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !lightboxModal.classList.contains("opacity-0")) {
      closeLightbox();
    }
  });
});
