/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
$(document).ready(function() {
    
    function loadTweets(){
        $.ajax({
            method : 'GET',
            url : '/tweets',
            contentType : 'application/json',
            success: (data) => renderTweets(data)
        });
    }

    loadTweets();
    //renderTweets(data);
});
