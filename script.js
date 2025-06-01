const revealElements = document.querySelectorAll(".reveal");

const revealOnScroll = () => {
  const triggerBottom = window.innerHeight * 0.85;
  revealElements.forEach(el => {
    const boxTop = el.getBoundingClientRect().top;
    if (boxTop < triggerBottom) {
      el.classList.add("active");
    } else {
      el.classList.remove("active");
    }
  });
};

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
      const fills = entry.target.querySelectorAll(".progress-fill");
      fills.forEach(fill => fill.style.width = getComputedStyle(fill).width); // triggers animation
    }
  });
}, {
  threshold: 0.3
});

reveals.forEach(el => observer.observe(el));