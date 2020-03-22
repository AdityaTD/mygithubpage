$(document).ready(function() {
  $(".navbar-burger").click(function() {
      $(".navbar-burger").toggleClass("is-active");
      $(".navbar-menu").toggleClass("is-active");
  });
});

VANTA.DOTS({
    el: ".hero",
    mouseControls: false,
    touchControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    scale: 1.00,
    scaleMobile: 1.00,
    color: 0x3980e6,
    size: 1.60,
    spacing: 23.00,
    showLines: false
})