$(function() {
    $(".new-tweet--error").hide();

    const $form = $('.new-tweet form');
    $form.on('submit', function () {
        event.preventDefault();
        const formContent = $(this).serialize();
        const $textArea = $(this).children('textarea');
        const $counter = $(this).find('.counter');
        const tweet = $textArea.val();
        const maxTweetLength = 140;

        $(".new-tweet--error").slideUp();
        $textArea.removeClass("invalid");

        if (!tweet) {
            showNewTweetError('You cannot tweet NOTHING!!');

        } else if(tweet.length > maxTweetLength) {
                showNewTweetError('Edit yourself! Too much Tweet!');

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



function showNewTweetError(message) {
    $newTweetError = $('.new-tweet--error')
    $newTweetError.slideUp("fast", () => {
        $newTweetError.text(message);
        $newTweetError.slideDown("fast");
    })
    $textArea = $(".new-tweet textarea")
    $textArea.addClass("invalid");
    $textArea.focus();
}