$(document).ready(function () {
  $(".js--section-features").waypoint(
    function (direction) {
      if (direction == "down") {
        $("nav").addClass("sticky");
      } else {
        $("nav").removeClass("sticky");
      }
    },
    {
      offset: "60px;",
    }
  );
  /*Showing Animation By Clicking Button */
  $(".js-scroll-to-plans").click(function () {
    $("html,body").animate(
      {
        scrollTop: $(".js--section-plans").offset().top,
      },
      1000
    );
  });

  $(".js-scroll-to-start").click(function () {
    $("html,body").animate(
      {
        scrollTop: $(".js--section-features").offset().top,
      },
      1000
    );
  });

  /*Navigation scroll*/

  $("a").on("click", function (event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        1000,
        function () {
          window.location.hash = hash;
        }
      );
    }
  });

  /*Animation on scroll */
  $(".js--wp-1").waypoint(
    function (direction) {
      $(".js--wp-1").addClass("animated fadeIn");
    },
    {
      offset: "50%",
    }
  );
  $(".js--wp-2").waypoint(
    function (direction) {
      $(".js--wp-2").addClass("animated fadeInUp");
    },
    {
      offset: "50%",
    }
  );
  $(".js--wp-3").waypoint(
    function (direction) {
      $(".js--wp-3").addClass("animated fadeIn");
    },
    {
      offset: "50%",
    }
  );
  $(".js--wp-4").waypoint(
    function (direction) {
      $(".js--wp-4").addClass("animated pulse");
    },
    {
      offset: "50%",
    }
  );

  /*Showing bar in small screen & removing in large screen */

  $(".js--nav-icon").click(function () {
    var nav = $(".js--main-nav");
    var icon = $(".js--nav-icon i");
    nav.slideToggle(200);
    if (icon.hasClass("fas fa-bars")) {
      icon.removeClass("fas fa-bars");
      icon.addClass("fas fa-times");
    } else {
      icon.removeClass("fas fa-times");
      icon.addClass("fas fa-bars");
    }
  });
});
