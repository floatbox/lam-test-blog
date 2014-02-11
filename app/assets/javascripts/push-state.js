$(function() {
  var $mainBox = $("main"),

  setTitle = function(html) {
        document.title = html.match(/<title>(.*?)<\/title>/)[1].trim();
  },

  loadContent = function(href) {
    history.pushState({}, '', href);
    $mainBox.load(href + " main>*", setTitle);
  };

  $(window).on("popstate", function(e) {
    if (e.originalEvent.state !== null) {
      loadContent(location.href);
    }
  });

  $(document).on("click", "a", function(e) {
    if (e.ctrlKey || e.shiftKey || e.metaKey || !history.pushState) return true;

    var href = $(this).attr("href");

    if (href.indexOf(document.domain) > -1 || href.indexOf(':') === -1) {
      loadContent(href);
      return false;
    }
  });
});