// // --- Fake data taken from tweets.json ---
// const data = [
//     {
//       "user": {
//         "name": "Newton",
//         "avatars": {
//           "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
//           "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
//           "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
//         },
//         "handle": "@SirIsaac"
//       },
//       "content": {
//         "text": "If I have seen further it is by standing on the shoulders of giants"
//       },
//       "created_at": 1461116232227
//     },
//     {
//       "user": {
//         "name": "Descartes",
//         "avatars": {
//           "small":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png",
//           "regular": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png",
//           "large":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png"
//         },
//         "handle": "@rd" },
//       "content": {
//         "text": "Je pense , donc je suis"
//       },
//       "created_at": 1461113959088
//     },
//     {
//       "user": {
//         "name": "Johann von Goethe",
//         "avatars": {
//           "small":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png",
//           "regular": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png",
//           "large":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png"
//         },
//         "handle": "@johann49"
//       },
//       "content": {
//         "text": "Es ist nichts schrecklicher als eine tätige Unwissenheit."
//       },
//       "created_at": 1461113796368
//     }
//   ];

// --- Functions ---
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

