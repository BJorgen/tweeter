$(function() {
    const $form = $('.new-tweet form');
    $form.on('submit', function () {
        event.preventDefault();
        const formContent = $(this).serialize();
        const $textArea = $(this).children('textarea');
        const $counter = $(this).children('.counter')
        const tweet = $textArea.val();
        const maxTweetLength = 140;
        if (tweet) {
            if(tweet.length > maxTweetLength) {
                alert('Edit yourself! Too much Tweet!')
            } else {
                $.ajax({
                    data: formContent,
                    url: '/tweets',
                    method: 'POST',
                    success: () => {
                        $textArea.val("");
                        loadTweets();
                        $counter.text(140);
                    }
                });
            }
        } else {
            alert("You can't tweet NOTHING!!")
        }
    });
});


$(function() {
    $('.toggle-new-tweet').on('click', function () {
        $newTweet = $("section.new-tweet")
        $newTweet.slideToggle("fast")
        $newTweet.find("textarea").focus();
    });
});