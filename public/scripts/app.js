// ======================================================
//                          App.js
// ======================================================

// Hide the error message on loading and load tweets

$(document).ready(function() {
    $(".new-tweet--error").hide();
    loadTweets();
});
