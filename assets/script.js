// $(document).ready(function($) {
// 
//    $(".scroll a, .navbar-brand, .gototop").click(function(event){   
//    event.preventDefault();
//    $('html,body').animate({scrollTop:$(this.hash).offset().top}, 1000,'swing');
//    $(".scroll li").removeClass('active');
//    $(this).parents('li').toggleClass('active');
//    });
//    });






var wow = new WOW(
  {
    boxClass:     'wowload',      // animated element css class (default is wow)
    animateClass: 'animated', // animation css class (default is animated)
    offset:       0,          // distance to the element when triggering the animation (default is 0)
    mobile:       true,       // trigger animations on mobile devices (default is true)
    live:         true        // act on asynchronously loaded content (default is true)
  }
);
wow.init();




$('.carousel').swipe( {
     swipeLeft: function() {
         $(this).carousel('next');
     },
     swipeRight: function() {
         $(this).carousel('prev');
     },
     allowPageScroll: 'vertical'
 });

/* For toggle  */
// for Portfolio
//$(document).ready(function(){
//     $(".carousel-inner").click(function(){
//         $(".our_team").fadeToggle(2000);
//     }); 
//});

// for About Me

//$(document).ready(function(){
//     $(".cam1").click(function(){
//         $("#about").fadeToggle(2000);
//     }); 
//});

// for statistics
 
//$(document).ready(function(){
//     $(".cam2").click(function(){
//         $("#statistics").fadeToggle(2000);
//     }); 
//});

// for Contact

//    $(document).ready(function(){
//         $(".cam3").click(function(){
//             $("#section3").fadeToggle(2000);
//         }); 
//    });

// for number 

    $(document).ready(function(){
         $(".three").click(function(){
             $(".num").fadeToggle(2000);
         }); 
    });




























//Form 




/*global $, alert, console */
$(function () {
    'use strict';
    
    var userErrors = true, // SETTING ERRORS STATUS
        mailErrors = true,
        msgErrors = true;
    
    $('.username').blur(function () { // USERNAME
        if ($(this).val().length < 4) {
            $(this).css('border', '1px solid #f00').parent().find('.custom-alert').fadeIn(200).end().find('.asterisx').fadeIn(100);
            userErrors = true;
        } else {
            $(this).css('border', '1px solid darkgreen').parent().find('.custom-alert').fadeOut(200).end().find('.asterisx').fadeOut(100);
            userErrors = false;
        }
    });
    
    $('.email').blur(function () { // EMAIL
        if ($(this).val().length < 1) {
            $(this).css('border', '1px solid #f00').parent().find('.custom-alert').fadeIn(200).end().find('.asterisx').fadeIn(100);
            mailErrors = true;
        } else {
            $(this).css('border', '1px solid darkgreen').parent().find('.custom-alert').fadeOut(200).end().find('.asterisx').fadeOut(100);
            mailErrors = false;
        }
    });
    
    $('.message').blur(function () { // MESSAGE
        if ($(this).val().length < 10) {
            $(this).css('border', '1px solid #f00').parent().find('.custom-alert').fadeIn(200).end().find('.asterisx').fadeIn(100);
            msgErrors = true;
        } else {
            $(this).css('border', '1px solid darkgreen').parent().find('.custom-alert').fadeOut(200).end().find('.asterisx').fadeOut(100);
            msgErrors = false;
        }
    });
    
    // SUBMIT FORM VALIDATE
    $('.contact-form').submit(function (e) {
        if (userErrors === true || mailErrors === true || msgErrors === true) {
            e.preventDefault();
            $('.username, email, .message').blur();
        }
    });
});



