$(document).ready(function () {

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
          if (target.length) {
              $('html, body').animate({
              scrollTop: (target.offset().top - 54)
              }, 700, "easeInOutExpo");
              return false;
          }
      }
  });
});
