// --- Fake data taken from tweets.json ---
const data = [
    {
      "user": {
        "name": "Newton",
        "avatars": {
          "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
          "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
          "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
        },
        "handle": "@SirIsaac"
      },
      "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
      "created_at": 1461116232227
    },
    {
      "user": {
        "name": "Descartes",
        "avatars": {
          "small":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png",
          "regular": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png",
          "large":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png"
        },
        "handle": "@rd" },
      "content": {
        "text": "Je pense , donc je suis"
      },
      "created_at": 1461113959088
    },
    {
      "user": {
        "name": "Johann von Goethe",
        "avatars": {
          "small":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png",
          "regular": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png",
          "large":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png"
        },
        "handle": "@johann49"
      },
      "content": {
        "text": "Es ist nichts schrecklicher als eine tätige Unwissenheit."
      },
      "created_at": 1461113796368
    }
  ];

// --- Functions ---
function createTweetElement(tweetData){
    let $tweet = $("<article>").addClass("tweet");

    let $header = $("<header>")
    let $content = $("<div>").addClass("tweet__content").html(tweetData.content.text)
    let $footer = $("<footer>")

    let $avatar = $("<img>").addClass("tweet__avatar").attr('src', tweetData.user.avatars.regular)
    let $name = $("<h2>").addClass("tweet__name").html(tweetData.user.name)
    let $handle = $("<span>").addClass("tweet__handle").html(tweetData.user.handle)
    
    $header
        .append($avatar)
        .append($name)
        .append($handle)

    //let age = Date() - Date(tweetData.created_at*1000)
    //let time = (Date.getTime()/1000 - tweetData.created_at)/(24*60*60)
    //let age = new Date(tweetData.created_at)
    let age = 10;
    let ageString = `${age} days ago`
    let $age = $("<span>").addClass("tweet__age").html(ageString)
    
    $footer.append($age)

    $tweet
        .append($header)
        .append($content)
        .append($footer)

    return $tweet
}

function renderTweets(tweets) {
    tweets.forEach(tweet =>{
        var $tweet = createTweetElement(tweet);
        $('#tweets-container').append($tweet); 
    })
}

// Test / driver code (temporary). Eventually will get this from the server.
const tweetData = {
    "user": {
        "name": "Newton",
        "avatars": {
            "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
            "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
            "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
        },
        "handle": "@SirIsaac"
    },
    "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
}

var $tweet = createTweetElement(tweetData);
    
// Test / driver code (temporary)
console.log($tweet); // to see what it looks like
$('#tweets-container').append($tweet);

renderTweets(data);