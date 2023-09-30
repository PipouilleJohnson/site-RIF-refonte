const menuBurger = document.getElementById("menu-burger");
const menuDeroulant = document.getElementById("menu-deroulant");

let isMenuDeroulantVisible = false;

menuBurger.addEventListener("click", () => {
  isMenuDeroulantVisible = !isMenuDeroulantVisible;

  if (isMenuDeroulantVisible) {
    menuDeroulant.style.display = "flex";
  } else {
    menuDeroulant.style.display = "none";
  }
});

menuDeroulant.addEventListener("click", () => {
  isMenuDeroulantVisible = !isMenuDeroulantVisible;

  if (isMenuDeroulantVisible) {
    menuDeroulant.style.display = "flex";
  } else {
    menuDeroulant.style.display = "none";
  }
});
