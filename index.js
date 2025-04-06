// script.js
document.addEventListener("DOMContentLoaded", () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll("nav a").forEach(anchor => {
      anchor.addEventListener("click", (e) => {
        e.preventDefault();
        const targetSection = document.querySelector(e.target.getAttribute("href"));
        targetSection.scrollIntoView({ behavior: "smooth" });
      });
    });
  
    // Contact form submission alert
    const contactForm = document.getElementById("contactForm");
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("name").value;
      alert(`Thank you, ${name}! Your message has been received.`);
      contactForm.reset();
    });
  });
  
