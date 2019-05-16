// --- Helper Functions ---
function ageInDays(timeStamp) {
    const nowTimeStamp = new Date().getTime();
    const daysNum = (nowTimeStamp - timeStamp)/(24*60*60*1000);
    return Math.round(daysNum);
}


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

    let $age = $("<span>").addClass("tweet__age").text(`${ageInDays(tweetData.created_at)} days ago`)
    
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


function renderTweets(tweets) {
    tweets.forEach(tweet => {
        var $tweet = createTweetElement(tweet);
        $('#tweets-container').prepend($tweet); 
    })
}

