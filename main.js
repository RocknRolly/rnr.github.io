let siluette = document.getElementById("content");
let img1 = document.getElementById("link1");

const showSiluette = () => {
  siluette.classList.add("show");
};

const hideSiluette = () => {
  siluette.classList.remove("show");
};

img1.addEventListener("mousemove", showSiluette);
img1.addEventListener("mouseout", hideSiluette);
