'use strict';

var tweetShortener = {
  wordSubstituter: function(tweet_line){
    var reg_to = / to | two | too /g;
    var reg_for=/for\b|four/ig;
    return tweet_line.replace(/hello/g,'hi').replace(reg_to,' 2 ').replace(reg_for,'4').replace(/be\b/g,'b').replace(/ you /g,' u ').replace(/ at /g,' @ ').replace(/ and /g,' & ');
        },
  bulkShortener: function(tweet){
    var result=[];
    for (var i=0;i<tweet.length;i++){
      result.push(this.wordSubstituter(tweet[i]));
    }
    return result;

  },
  selectiveShortener: function(tweet){
    if (tweet.length>140) {
      return this.wordSubstituter(tweet);
    }else {
      return tweet;
    }
  },
  shortenedTruncator: function(tweet){
    if (this.wordSubstituter(tweet).length>140) {
      return this.wordSubstituter(tweet).slice(0,137)+"...";
    }else{
      return tweet;
    }
  },
};
