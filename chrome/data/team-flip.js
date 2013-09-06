(function() {
  $.each($('div.j-textWithImage'), function(key, value) {
    var p = $('#' + value.id + ' p');
    p.hide();
    $('#' + value.id + ' img').on("click", function(event) { p.slideToggle(); });
  });
})();

