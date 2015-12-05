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
        alert(data);
      }.bind(this),
      error: function(){
        alert("failure");
      }
    };
    $.ajax(ajaxOptions);
  }.bind(this))
};


module.exports = UsersSearch;
