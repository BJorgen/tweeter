// ======================================================
//          Submit New Tweet - Helper Function
// ======================================================
function showNewTweetError(message) {
    $textArea = $(".new-tweet textarea")
    $newTweetError = $('.new-tweet--error')

    if(!message){
        $newTweetError.slideUp();
        $textArea.removeClass("invalid");
    } else {
        $newTweetError.slideUp("fast", () => {
            $newTweetError.text(message);
            $newTweetError.slideDown("fast");
        })
        $textArea.addClass("invalid");
        $textArea.focus();
    }
}


// ======================================================
//         Submit New Tweet - Front End Handling
// ======================================================
$(function() {

    const $form = $('.new-tweet form');
    $form.on('submit', function () {
        event.preventDefault();
        const formContent = $(this).serialize();
        const $textArea = $(this).children('textarea');
        const $counter = $(this).find('.counter');
        const tweet = $textArea.val();
        
        // Clear error using showNewTweetsError - input false
        showNewTweetError(false);

        if (!tweet) {
            showNewTweetError('You cannot tweet NOTHING!!');
        }
        else if(tweet.length > maxTweetLength) {
                showNewTweetError('Edit yourself! Too much Tweet!');
        }
        else {
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



// ======================================================
//         Submit New Tweet - Toggle Form
// ======================================================
$(function() {
    $('.toggle-new-tweet').on('click', function () {
        $newTweet = $("section.new-tweet")
        $newTweet.slideToggle("fast")
        $newTweet.find("textarea").focus();
    });
});


