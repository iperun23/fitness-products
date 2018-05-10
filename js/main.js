
// Ripple jQuery effect for slider
jQuery(document).ready(function() {
    "use strict"
        $('.slider').ripples({
            dropRadius: 20,
            perturbance: .03,
            interactive: true
        });
        //Sticky Navigation 
        $(window).scroll(function() {
            var top = $(window).scrollTop();
            if (top >= 200) {
                $(".navbar").addClass('secondary');
            } else if ($(".navbar").hasClass('secondary')) {
                $(".navbar").removeClass('secondary');
            }
        });
      //Food Gallery image pop up using magnific popup
        $('.gallery').magnificPopup({
            delegate: 'a', // child items selector, by clicking on it popup will open
            type: 'image',
            gallery: {
                enabled: true
              }
          });

});

// Writing over the slider with text using js
let options = {
    strings: ["Best <strong class='primary'>Products!</strong>", "<strong class='primary'>Top</strong> Reviews!"],
    typeSpeed: 70,
    loop: true
  }
  
let typed = new Typed(".text", options);



