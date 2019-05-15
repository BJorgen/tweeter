$(function() {
    const $form = $('.new-tweet form');
    $form.on('submit', function () {
        event.preventDefault();
        const formContent = $(this).serialize();
        const $textArea = $(this).children('textarea');
        
        $.ajax({
            data: formContent,
            url: '/tweets',
            method: 'POST',
            success: () => $textArea.val("")
        });

    });
  });