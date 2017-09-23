//load the DOM
$(document).ready(function(){

  //log
  console.log('ready!');

  //click hamburger icon
  $('.toggle-mobile-menu').click(function(){

      //show mobile menu
      $('#mobile-menu').toggleClass('mobile-menu-visible')
  });

});
/*
** Includes:
** - jquery.js
** - jquery.flexslider.js
*/

  // Send a message to console after window load
  console.log('Window loaded!');

  // Assign flexslider functoin to class .flexslider
  $('.flexslider').flexslider({

    // Customize flexslider properties
    animation: "slide",
    slideshowSpeed: 5000,
    animationSpeed: 1000,
    slideshow: false,
    directionNav: false,
    controlNav: false,
    start: function (slider) {

      // Click on the left arrow
      $('#flex-left').on('click', function(event){

        // prevent default action
        event.preventDefault();

        // Move to previous slide
        $('.flexslider').flexslider('prev');

      });

      // Click on the right arrow
      $('#flex-right').on('click', function(event){

        // prevent default action
        event.preventDefault();

        // Move to next slide
        $('.flexslider').flexslider('next');

      });

    }

  });
