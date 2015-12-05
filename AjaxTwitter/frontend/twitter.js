var FollowToggle = require('./follow_toggle.js');
var UsersSearch = require('./users_search.js');
var TweetCompose = require('./tweet_compose.js');

window.onload = function () {
  $(".follow-toggle").each( function(idx, el) {
    new FollowToggle(el);
  })

  $(".user-search").each( function(index, el){
    new UsersSearch($(el), $(".users"));
  })

  $(".tweet-compose").each( function(index, el){
    new TweetCompose($(el), $("#feed"));
  })
}
