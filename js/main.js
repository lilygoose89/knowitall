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

// show/hide forms with buttons, and add/remove button class (for style)
  // instruction to remove hide by default on-click
    $("#kickstart").click(function(){
      $("#kickstart").removeClass("hide-kickstart");
    });
    // end of rule
  // show/hide
    $("#kickstart").click(function(){
        $("#sendquickmessage-form").hide();
    });
    $("#kickstart").click(function(){
        $("#kickstart-form").show();
    });
    $("#sendquickmessage").click(function(){
        $("#kickstart-form").hide();
    });
    $("#sendquickmessage").click(function(){
        $("#sendquickmessage-form").show();
    });
  //kickstart button
    $("#kickstart").click(function(){
        $("#kickstart").removeClass("button-toggle-inactive");
    });
   $("#kickstart").click(function(){
        $("#kickstart").addClass("button-toggle-active");
    });
      $("#kickstart").click(function(){
        $("#sendquickmessage").removeClass("button-toggle-active");
    });
   $("#kickstart").click(function(){
        $("#sendquickmessage").addClass("button-toggle-inactive");
    });
  //send quick message button
     $("#sendquickmessage").click(function(){
        $("#sendquickmessage").removeClass("button-toggle-inactive");
    });
   $("#sendquickmessage").click(function(){
        $("#sendquickmessage").addClass("button-toggle-active");
    });
      $("#sendquickmessage").click(function(){
        $("#kickstart").removeClass("button-toggle-active");
    });
   $("#sendquickmessage").click(function(){
        $("#kickstart").addClass("button-toggle-inactive");
    });
