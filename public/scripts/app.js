// ======================================================
//                          App.js
// ======================================================
// On form load:
//          hide the error message
//          listen for tweet form submit
//          listen for tweet form toggling
//          load tweets
// ======================================================

$(document).ready(function() {
    $(".new-tweet--error").hide();
    $('.new-tweet form').on('submit', submitNewTweet);
    $('.toggle-new-tweet').on('click', toggleSubmitForm);
    loadTweets();
});
