(function() {
  $(document).on("submit", "form[data-ajax=true]", function (ev) {
    var t = $(ev.target);
    t.find(':submit').addClass('loading');
  });
})(jQuery);
