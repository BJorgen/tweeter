$(function() {
    const $form = $('.new-tweet form');
    $form.on('submit', function () {
        event.preventDefault();
        const formContent = $(this).serialize();
        const $textArea = $(this).children('textarea');
        const tweet = $textArea.val();
        console.log(tweet)
        if (tweet) {
            if(tweet.length > 140) {
                alert('Edit yourself! Too much Tweet!')
            } else {
                $.ajax({
                    data: formContent,
                    url: '/tweets',
                    method: 'POST',
                    success: () => $textArea.val("")
                });
            }
        } else {
            alert("You can't tweet NOTHING!!")
        }
    });
  });