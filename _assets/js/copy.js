//= require vendor/clipboard.min.js

$(document).ready(function() {
  var clipboard = new Clipboard ('.btn');

  clipboard.on('success', function(e) {
    e.trigger.innerText = 'Copied!';
    e.trigger.className = 'btn-copied';

    setTimeout(function() {
      $(e.trigger).removeClass('btn-copied');
      $(e.trigger).addClass('btn');
      e.trigger.innerText = 'Copy';
      e.clearSelection();
    }, 3000);
  });
});
