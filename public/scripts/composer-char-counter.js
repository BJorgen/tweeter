// ======================================================
//              Tweet Character Counter
//
//       maxTweetLength is defined in config.js
// ======================================================

$(document).ready(function() {
    $('.new-tweet textarea').on('input', function() {

        const spaceLeft = maxTweetLength - $(this).val().length;
        const counter = $(this).siblings('div').find('.counter')
        counter.html(spaceLeft);
        
        if (spaceLeft < 0) {
            counter.addClass('invalid');
        } 
        else {
            counter.removeClass('invalid');
        }

      })
  });
