function toggleMenu() {
  const menuCard = document.getElementById("mobile-menu-card");
  const overlay = document.getElementById("overlay");
  const hamburgerIcon = document.getElementById("hamburger-icon");
  const cancelIcon = document.getElementById("cancel-icon");

  menuCard.classList.toggle("hidden");
  overlay.classList.toggle("hidden");

  hamburgerIcon.classList.toggle("hidden");
  cancelIcon.classList.toggle("hidden");
}
