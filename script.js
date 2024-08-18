function toggleMenu() {
  const menuCard = document.getElementById("mobile-menu-card");
  const overlay = document.getElementById("overlay");
  const hamburgerIcon = document.getElementById("hamburger-icon");
  const cancelIcon = document.getElementById("cancel-icon");

  // Toggle the modal card and overlay visibility
  menuCard.classList.toggle("hidden");
  overlay.classList.toggle("hidden");

  // Toggle between hamburger and cancel icons
  hamburgerIcon.classList.toggle("hidden");
  cancelIcon.classList.toggle("hidden");
}
