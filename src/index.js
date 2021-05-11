jQuery(document).ready(function($) {
  const $burger = $(".header__burger");
  const $nav = $(".header__nav");
  const $html = $("html");
  const $a = $(".header__nav a");
  const $arrowUp = $(".arrowUp");
  const $headerNav = $(".header__nav a");
  const $projectsSliders = $(".projects__cards");
  const $commentSliders = $(".comment__items");

  $burger.on("click", function() {
    $nav.toggle();
    $html.toggleClass("overflow");
  });

  $a.on("click", function() {
    $nav.hide();
    $html.removeClass("overflow");
  });

  $(window).on(
    "scroll",
    $.debounce(500, function() {
      if ($(this).scrollTop() > 100) {
        $arrowUp.addClass("active");
      } else {
        $arrowUp.removeClass("active");
      }
    })
  );

  $arrowUp.on("click", function() {
    $("html, body").animate({ scrollTop: 0 }, 700);
  });

  $headerNav.on("click", function(e) {
    e.preventDefault();
    const target = $(this).attr("href");
    console.log($(target).offset().top);
    $("html, body").animate({ scrollTop: $(target).offset().top }, 500);
  });

  const newSliderSettings = {
    slidesToShow: 1,
    prevArrow: "<button class='slick-prev'><</button>",
    nextArrow: "<button class='slick-next'>></button>",
    mobileFirst: true,
    responsive: [
      {
        breakpoint: 992,
        settings: "unslick",
      },
    ],
  };

  $projectsSliders.slick(newSliderSettings);

  $(window).on("resize", function() {
    if (
      $(this).width() < 992 &&
      !$projectsSliders.hasClass("slick-initialized")
    ) {
      $projectsSliders.slick(newSliderSettings);
    }
  });

  const SliderSettings = {
    slidesToShow: 1,
    prevArrow: "<button class='slick-prev'><</button>",
    nextArrow: "<button class='slick-next'>></button>",
    mobileFirst: true,
    responsive: [
      {
        breakpoint: 890,
        settings: "unslick",
      },
    ],
  };

  $commentSliders.slick(SliderSettings);

  $(window).on("resize", function() {
    if (
      $(this).width() < 890 &&
      !$commentSliders.hasClass("slick-initialized")
    ) {
      $commentSliders.slick(SliderSettings);
    }
  });

  /*$projectsSliders.on("init", function() {
    $(".slick-prev").text("<");
    $(".slick-next").text(">");
  });*/
});
