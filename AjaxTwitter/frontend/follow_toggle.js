function FollowToggle($button, options) {
  this.$button = $($button);
  this.userId = this.$button.attr('data-user-id') || options.id;
  this.followState = this.$button.attr('data-initial-follow-state') || options.followed;

  if(options){
    if(options.followed === true){
      this.followState = "followed"
    } else if (options.followed === false){
      this.followState = "unfollowed"
    }
  }


  this.render();
  this.handleClick();
}

FollowToggle.prototype.render = function(){
    if (this.followState === 'followed') {
      this.$button.prop("disabled", false);
      this.$button.text("Unfollow!");

    } else if (this.followState === 'unfollowed') {
      this.$button.prop("disabled", false);
      this.$button.text("Follow!");

    } else {
      this.$button.prop("disabled", true);
    };
  };


function ajaxOptions(method, followState, newState) {

  var options = {
    url: "/users/" + this.userId + "/follow",
    dataType: 'json',
    type: method,
    success: function(){
      this.followState = newState;
      this.render();
    }.bind(this),
    error: function(){
      alert("it didn't work :(");
      this.followState = followState;
      this.render();
    }
  }
  return options;

}


FollowToggle.prototype.handleClick = function() {
  this.$button.on("click", function(e) {
    e.preventDefault();
    var options;

    if (this.followState === 'followed') {
      this.followState = 'unfollowing';
      this.render();
      options = ajaxOptions.call(this, "DELETE", "followed", "unfollowed");
    } else if (this.followState === 'unfollowed') {
      this.followState = 'following';
      this.render();
      options = ajaxOptions.call(this, "POST", "unfollowed", "followed");
    }
    $.ajax(options);
  }.bind(this))
};

module.exports = FollowToggle;
