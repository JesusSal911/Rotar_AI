const navbar = document.getElementById("navbar");
const openButton = document.getElementById("open-sidebar-button");
const closeButton = document.getElementById("close-sidebar-button");
const overlay = document.getElementById("overlay");

function openSidebar() {
  if (navbar) {
    navbar.classList.add("show");
    overlay.classList.add("show");
    openButton.setAttribute("aria-expanded", "true");
  } else {
    console.error("No se encontró el elemento #navbar");
  }
}

function closeSidebar() {
  if (navbar) {
    navbar.classList.remove("show");
    overlay.classList.remove("show");
    openButton.setAttribute("aria-expanded", "false");
  } else {
    console.error("No se encontró el elemento #navbar");
  }
}

if (openButton && closeButton && overlay) {
  openButton.addEventListener("click", openSidebar);
  closeButton.addEventListener("click", closeSidebar);
  overlay.addEventListener("click", closeSidebar);
} else {
  console.error("No se encontraron algunos elementos necesarios.");
}
