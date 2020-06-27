// Burger Menu
var navb = document.getElementById("navb");
navb.addEventListener("click", function() {
  navb.classList.toggle("is-active");
  document.getElementById("menu").classList.toggle("is-active");
});

// Background Animation
VANTA.DOTS({
    el: ".animatedbg",
    mouseControls: false,
    touchControls: true,
    minHeight: 200.00,
    minWidth: 200.00,
    scale: 1.00,
    scaleMobile: 1.00,
    color: 0x3273DC,
    size: 1.60,
    spacing: 23.00,
    showLines: false
})