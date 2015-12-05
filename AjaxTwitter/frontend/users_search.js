var FollowToggle = require('./follow_toggle.js');

var UsersSearch = function ($search, $list) {
  this.$search = $search;
  this.$list = $list;
  this.handleInput();

};

UsersSearch.prototype.handleInput = function (){
  this.$search.on("input", function (e){

    this.rawInput = this.$search.find("input[name='user-name']")
    this.searchTerm = this.rawInput.val()
    var ajaxOptions = {
      type: "GET",
      url: "/users/search",
      dataType: 'json',
      data: {query: this.searchTerm},
      success: function(data){
        this.renderResults(data);
      }.bind(this),
      error: function(){
        alert("failure");
      }
    };
    $.ajax(ajaxOptions);
  }.bind(this))
};

UsersSearch.prototype.renderResults = function(data){
  this.$list.empty();

  data.forEach( function(e){
    var output = $("<li><a href='/users/" + e.id + "'>" + e.username +
    "</a></li> <button type='button' class='follow-toggle' name='" + e.username + "'></button>");
    this.$list.append(output);
    new FollowToggle($("button[name='" + e.username + "']"),e);
  }.bind(this));
};


module.exports = UsersSearch;
