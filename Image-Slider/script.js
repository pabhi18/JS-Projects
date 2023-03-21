
let i = 0;
let img = [
  { src: "https://images.wallpaperscraft.com/image/single/freezelight_sparks_long_exposure_305226_3840x2400.jpg" },
  { src: "https://images.wallpaperscraft.com/image/single/skull_glow_red_246689_3840x2400.jpg" },
  { src: "https://images.wallpaperscraft.com/image/single/hexagons_shape_rendering_120754_3840x2160.jpg" },
  { src: "https://images.wallpaperscraft.com/image/single/keyboard_backlight_red_136083_3840x2400.jpg" },
  { src: "https://images.wallpaperscraft.com/image/single/cube_shape_3d_166466_3840x2160.jpg" }
];

let image = document.querySelector("#image");

const img_pre = document.querySelector("#btn_previous");
const img_next = document.querySelector("#btn_next");

img_pre.addEventListener("click", function() {
  i--;
  return img_set();
});

img_next.addEventListener("click", function() {
  i++;
  return img_set();
});

function img_set() {
  if (i < 0) {
    i = img.length - 1;
  } else if (i >= img.length) {
    i = 0;
  }
  image.setAttribute("src", img[i].src);
}
