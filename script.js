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
});
