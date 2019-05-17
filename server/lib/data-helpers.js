"use strict";

// ======================================================
//                Data Helper Functions
// ======================================================

module.exports = function makeDataHelpers(db) {
  return {


    // Save tweets to the mongo database
    saveTweet: function(newTweet, callback) {
      db.collection("tweets").insertOne(newTweet, (err, id) => {
        callback(null, true);
      });
    },

    // Get tweets to the mongo database
    getTweets: function(callback) {
        db.collection("tweets").find().toArray((err, result) => {
          if (err) { throw err}
          const sortNewestFirst = (a, b) => a.created_at - b.created_at;
          callback(null, result.sort(sortNewestFirst));
        });
    }


  };
}
