// ======================================================
//    Submit New Tweet - Helper Function (Error Message)
// ======================================================
function showNewTweetError(message) {
    $textArea = $(".new-tweet textarea");
    $newTweetError = $('.new-tweet--error');

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
//       Submit New Tweet - Front End Handling
// ======================================================

function submitNewTweet(event) {
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
            success: (res) => {
                $textArea.val("");
                renderTweets([res]);
                $counter.text(maxTweetLength);
            }
        });
    }
}

// ======================================================
//         Submit New Tweet - Toggle Form
// ======================================================

function toggleSubmitForm() {
    $newTweet = $("section.new-tweet");
    $newTweet.slideToggle("fast");
    $newTweet.find("textarea").focus();
}
