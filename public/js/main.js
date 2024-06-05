let image_dark = "./public/images/introduction/intro_dark.png";
let image_light = "./public/images/introduction/intro.png";

let image = document.querySelector("#image");

let mediaQuery = window.matchMedia('(prefers-color-scheme: dark');

if (mediaQuery.matches) {
  image.setAttribute("src", image_dark);
} else {
    image.setAttribute("src", image_light);
}
