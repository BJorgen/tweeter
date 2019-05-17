$(function() {
    const $form = $('.new-tweet form');
    $form.on('submit', function () {
        event.preventDefault();
        const formContent = $(this).serialize();
        const $textArea = $(this).children('textarea');
        const $counter = $(this).find('.counter');
        const tweet = $textArea.val();
        const maxTweetLength = 140;

        $(".new-tweet--error").text('');
        $textArea.removeClass("invalid");

        if (!tweet) {

            $(".new-tweet--error").text('You cannot tweet NOTHING!!')
            $textArea.addClass("invalid");

        } else if(tweet.length > maxTweetLength) {

                $(".new-tweet--error").text('Edit yourself! Too much Tweet!');
                $textArea.addClass("invalid");

        } else {
            $.ajax({
                data: formContent,
                url: '/tweets',
                method: 'POST',
                success: () => {
                    $textArea.val("");
                    loadTweets();
                    $counter.text(maxTweetLength);
                }
            });
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