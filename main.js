let siluette = document.getElementById("content");
let img1 = document.getElementById("link1");
let ujKepUrl = "camera-transparent-lila.png";
let ujKep = new Image();
ujKep.src = ujKepUrl;

let regiregiKep = "camera-transparent.png";
let regikep = new Image();
regikep.src = regiregiKep;

const showSiluette = () => {
  siluette.classList.add("show");
  let lilaKep = document.getElementById("kamera");
  lilaKep.src = ujKep.src;
};

const hideSiluette = () => {
  siluette.classList.remove("show");
  let lilaKep = document.getElementById("kamera");
  lilaKep.src = regikep.src;
};

img1.addEventListener("mousemove", showSiluette);
img1.addEventListener("mouseout", hideSiluette);
