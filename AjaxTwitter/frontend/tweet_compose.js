function TweetCompose($form, $list) {
  this.$form = $form;
  this.$list = $list;
  this.handleSubmit();
}

TweetCompose.prototype.handleSubmit = function() {
  this.$form.on("submit", function(e) {
    e.preventDefault();

    var content = this.$form.find("textarea[name='tweet[content]']");
    var mention = this.$form.find("select[name='tweet[mentioned_user_ids][]']");
    var formData = {tweet: {content: content.val(), mention: mention.val()}};

    var ajaxOptions = {
      type: "POST",
      url: "/tweets",
      dataType: "json",
      data: formData,
      success: function(response) {
        this.renderResponse(response);
      }.bind(this),
      error: function() {
        alert("failure");
      }.bind(this),
    }

    $.ajax(ajaxOptions);
  }.bind(this));
};

TweetCompose.prototype.renderResponse = function(response) {
  debugger;
  var output = "<li>" + response.content + "</li>";
  this.$list.append(output);
}

module.exports = TweetCompose;
