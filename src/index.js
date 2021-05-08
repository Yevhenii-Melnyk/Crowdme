jQuery(document).ready(function($) {
  const $burger = $(".header__burger");
  const $nav = $(".header__nav");
  const $html = $("html");
  const $a = $(".header__nav a");

  $burger.on("click", function() {
    $nav.toggle();
    $html.toggleClass("overflow");
  });

  $a.on("click", function() {
    $nav.hide();
    $html.removeClass("overflow");
  });
});
