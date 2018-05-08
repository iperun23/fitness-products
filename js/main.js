
// Ripple jQuery effect for slider
jQuery(document).ready(function() {
    "use strict"
        $('.slider').ripples({
            dropRadius: 20,
            perturbance: .03,
            interactive: true
        });

      

});

// Writing over the slider with text using js
let options = {
    strings: ["Best <strong class='primary'>Products!</strong>", "<strong class='primary'>Top</strong> Reviews!"],
    typeSpeed: 70,
    loop: true
  }
  
let typed = new Typed(".text", options);