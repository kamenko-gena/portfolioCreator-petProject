const gap = 6;

const carousel = document.getElementById("carousel"),
  content = document.getElementById("content"),
  next = document.getElementById("next"),
  prev = document.getElementById("prev");

next.addEventListener("click", e => {
  carousel.scrollBy(width + gap, 0);
});
prev.addEventListener("click", e => {
  carousel.scrollBy(-(width + gap), 0);
});

let width = carousel.offsetWidth;
window.addEventListener("resize", e => (width = carousel.offsetWidth));






const number = 0;

const carouselRev = document.getElementById("reviewCarousel"),
  contentRev = document.getElementById("reviewContent"),
  nextRev = document.getElementById("nextRev"),
  prevRev = document.getElementById("prevRev");

nextRev.addEventListener("click", e => {
  carouselRev.scrollBy(widthRev + number, 0);
});
prevRev.addEventListener("click", e => {
  carouselRev.scrollBy(-(widthRev + number), 0);
});

let widthRev = carouselRev.offsetWidth;
window.addEventListener("resize", e => (widthRev = carouselRev.offsetWidth));



// ACCARDION

let acc = document.getElementsByClassName("accordion");
    
    
for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}