// Smooth scroll
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

// Contact form
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Thank you for your message!");
  this.reset();
});

// Fade-in animation
window.addEventListener("DOMContentLoaded", () => {
  const hiddenElements = document.querySelectorAll(".hidden");
  hiddenElements.forEach((el, index) => {
    setTimeout(() => {
      el.classList.add("show");
    }, index * 400);
  });
});

// ------------- Image Slider -------------
const slides = document.querySelector(".slides");
const images = document.querySelectorAll(".slides img");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let index = 0;
let visible = 3; // default desktop

function updateVisible() {
  if (window.innerWidth <= 480) visible = 1;
  else if (window.innerWidth <= 768) visible = 2;
  else visible = 3;
}
updateVisible();
window.addEventListener("resize", updateVisible);

function showSlide(i) {
  const total = images.length;
  const maxIndex = Math.ceil(total / visible) - 1;
  if (i < 0) index = maxIndex;
  else if (i > maxIndex) index = 0;
  else index = i;

  slides.style.transform = `translateX(-${index * 100}%)`;
}

prevBtn.addEventListener("click", () => showSlide(index - 1));
nextBtn.addEventListener("click", () => showSlide(index + 1));

// Auto play
setInterval(() => { showSlide(index + 1); }, 4000);
// Lightbox viewer
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.querySelector(".lightbox .close");

document.querySelectorAll("#projects .slides img").forEach(img => {
  img.addEventListener("click", () => {
    lightbox.style.display = "flex";
    lightboxImg.src = img.src;
  });
});

closeBtn.addEventListener("click", () => {
  lightbox.style.display = "none";
});

lightbox.addEventListener("click", (e) => {
  if (e.target !== lightboxImg) {
    lightbox.style.display = "none";
  }
});
// Scroll reveal effect
function reveal() {
  let reveals = document.querySelectorAll(".reveal");
  for (let i = 0; i < reveals.length; i++) {
    let windowHeight = window.innerHeight;
    let elementTop = reveals[i].getBoundingClientRect().top;
    let elementVisible = 100;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    }
  }
}

window.addEventListener("scroll", reveal);

// Trigger reveal on page load as well
window.addEventListener("load", reveal);
