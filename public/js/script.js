// Variables
let browserHeight = $(window).height();
let browserWidth = $(window).width();

//Forces the browser to start at the top when refreshed w/ fade
$("body").fadeOut();
setTimeout(function() {
  $("html, body").scrollTop(0);
  $("body").fadeIn(1);
  $("html, body").scrollTop(0);
}, 800);

if (browserWidth >= 991) {
  $(".mobile-social").remove();
}

$(".loader-content").addClass("loader-animation");

window.addEventListener("load", function() {
  $(".loader").addClass("loader-height-animation");
  $(".left-border").addClass("left-border-animation");
  $("#scrolling-panel").css({ visibility: "visible" });

  if (browserWidth >= 991) {
    $(".nav-link").addClass("nav-link-animation");
    $(".navbar-brand").addClass("navbar-brand-animation");
  }

  if (browserWidth <= 991) {
    $(".dropdown-menu").remove();
    $(".navbar-brand").remove();
    $(".dropdown-toggle").remove();
  }

  if (browserWidth <= 395) {
    $(".garrett").css({
      transform: "scale(0.8)",
      bottom: "-10em",
      right: "15px"
    });
  }

  $(".garrett").addClass("garrett-animation");
});

$(document).ready(function() {
  // Add slideDown animation to Bootstrap dropdown when expanding.
  $(".dropdown").on("show.bs.dropdown", function() {
    $(this)
      .find(".dropdown-menu")
      .first()
      .stop(true, true)
      .slideDown();
  });

  // Add slideUp animation to Bootstrap dropdown when collapsing.
  $(".dropdown").on("hide.bs.dropdown", function() {
    $(this)
      .find(".dropdown-menu")
      .first()
      .stop(true, true)
      .slideUp();
  });

  //Disables scrolling until the loader finishes
  $("html").css({
    overflow: "hidden",
    height: "100%"
  });

  setTimeout(() => {
    $(".navbar").css({
      "z-index": "1500"
    });
  }, 3500);

  setTimeout(() => {
    $("html").css({
      overflow: "auto",
      height: "auto"
    });
    $(".loader-content").remove();
  }, 5000);

  if (browserHeight <= 766) {
    $(".garrett").css({ transform: "scale(0.9)", bottom: "-18%" });
  }

  $(function() {
    let navMain = $(".navbar-collapse"); // avoid dependency on #id
    // "a:not([data-toggle])" - to avoid issues caused
    // when you have dropdown inside navbar
    navMain.on("click", "a:not([data-toggle])", null, function() {
      navMain.collapse("hide");
    });
  });

  //For mobile
  $(".navbar-toggler").click(function() {
    $(".left-border").css({ position: "relative " });
  });

  //Parallax
  $(".garrett").mousemove(e => {
    parallaxIt(e, ".garrett", -100, -10);
  });

  $("#static-panel").mousemove(e => {
    parallaxIt(e, ".outer-img", -30, -20);
  });

  function parallaxIt(e, target, moveX, moveY) {
    let $this = $("body");
    let relX = e.pageX - $this.offset().left;
    let relY = e.pageY - $this.offset().top;

    TweenMax.to(target, 0.5, {
      x: ((relX - $this.width() / 2) / $this.width()) * moveX,
      y: ((relY - $this.height() / 2) / $this.height()) * moveY
    });
  }

  // The function toggles more (hidden) text when the user clicks on "Read more"
  $(".learn-more").click(() => {
    $(".article").slideToggle();
    if ($(".button-text").text() == "Read More") {
      $(".button-text").text("Read Less");
    } else {
      $(".button-text").text("Read More");
    }
  });

  // ===== Scroll to Top ====
  $(window).scroll(function() {
    if ($(this).scrollTop() >= 50) {
      // If page is scrolled more than 50px
      $("#return-to-top").fadeIn(200); // Fade in the arrow
    } else {
      $("#return-to-top").fadeOut(200); // Else fade out the arrow
    }
  });

  $("#return-to-top").click(function() {
    // When arrow is clicked
    $("body,html").animate(
      {
        scrollTop: 0 // Scroll to top of body
      },
      100
    );
  });
});
