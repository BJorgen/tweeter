$(document).ready(function() {
    $('.new-tweet textarea').on('input', function() {
        const spaceLeft = 140 - $(this).val().length;
        const counter = $(this).siblings('div').find('.counter')
        counter.html(spaceLeft);
        if (spaceLeft < 0) {
            counter.addClass('invalid');
        } else {
            counter.removeClass('invalid');
        }
      })
  });
