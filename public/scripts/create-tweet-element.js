// ======================================================
//        Create Tweet Element - Helper Function
// ======================================================

function ageInDays(timeStamp) {
    const nowTimeStamp = new Date().getTime();
    const daysNum = (nowTimeStamp - timeStamp)/(24*60*60*1000);
    return Math.round(daysNum);
}


function ageOfTweet(timeStamp) {
    const nowTimeStamp = new Date().getTime();
    const timeDiffSeconds = (nowTimeStamp - timeStamp)/1000
    const daysNum = Math.floor((timeDiffSeconds)/(24*60*60));
    if(daysNum > 0){
        return `${daysNum} days ago`
    }
    else {
        const HoursNum = Math.floor((timeDiffSeconds)/(60*60));
        if (HoursNum > 0){
            return `${HoursNum} hours ago`
        }
        else {
            const MinsNum = Math.floor((timeDiffSeconds)/(60));
            if (MinsNum > 0){
                return `${MinsNum} minutes ago`
            }
        }
    }
}

// ======================================================
//                Create Tweet Element
// ======================================================

function createTweetElement(tweetData){
    const $tweet = $("<article>").addClass("tweet");

    const $header = $("<header>")
    const $content = $("<div>").addClass("tweet__content").text(tweetData.content.text)
    const $footer = $("<footer>")

    let $avatar = $("<img>").addClass("tweet__avatar").attr('src', tweetData.user.avatars.regular)
    let $name = $("<h2>").addClass("tweet__name").text(tweetData.user.name)
    let $handle = $("<span>").addClass("tweet__handle").text(tweetData.user.handle)
    
    $header
        .append($avatar)
        .append($name)
        .append($handle)

    // ---- Can optionally show age of Tweet in just days (ageInDays) or days, hours, min (ageOfTweet) ---

    // let $age = $("<span>").addClass("tweet__age").text(`${ageInDays(tweetData.created_at)} days ago`)
    let $age = $("<span>").addClass("tweet__age").text(ageOfTweet(tweetData.created_at))
    
    const $tweetActions = `
        <div class="tweet__actions">
            <i class="fas fa-flag"></i>
            <i class="fas fa-retweet"></i>
            <i class="fas fa-heart"></i>
        </div>`

    $footer
        .append($age)
        .append($tweetActions)

    $tweet
        .append($header)
        .append($content)
        .append($footer)

    return $tweet
}


// ======================================================
//                  Render Tweets
// ======================================================

function renderTweets(tweets) {
    tweets.forEach(tweet => {
        var $tweet = createTweetElement(tweet);
        $('#tweets-container').prepend($tweet); 
    })
}


// ======================================================
//                  Load Tweets
// ======================================================

function loadTweets(){
    $.ajax({
        method : 'GET',
        url : '/tweets',
        contentType : 'application/json',
        success: (data) => renderTweets(data)
    });
}