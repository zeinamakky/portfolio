// This is where it all goes :)

;(function ($) {
  'use strict';
  var content  = $('.container').smoothState({
        // onStart runs as soon as link has been activated
        onStart : {
          
          
          // Alterations to the page
          render: function () {

            // Quickly toggles a class and restarts css animations
            content.toggleAnimationClass('is-exiting');
          }
        }
      }).data('smoothState'); // makes public methods available
})(jQuery);