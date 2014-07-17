//= require vendor/jquery-2.1.1.min.js
//= require vendor/waypoints.min.js


/**
 * Load disqus comments when visitor scroll down page to comments
 *
 * Usage:
 * Add a div with id 'disqus_thread' and data attributes for every disqus parameter:
 *
 * <div id='disqus_thread' data-disqus-shortname='username' data-disqus-url='http://example.com/post/post-name/'></div>
 *
 * @author: Murat Corlu
 * @link: https://gist.github.com/gists/2290198
 */
$(function() {
  var disqus_div = $('#disqus_thread');
  if (disqus_div.size() > 0) {
    var ds_loaded = false,
      top = disqus_div.offset().top, // WHERE TO START LOADING
      disqus_data = disqus_div.data(),
      check = function() {
        if (!ds_loaded && $(window).scrollTop() + $(window).height() > top) {
          ds_loaded = true;
          for (var key in disqus_data) {
            if (key.substr(0, 6) == 'disqus') {
              window['disqus_' + key.replace('disqus', '').toLowerCase()] = disqus_data[key];
            }
          }

          var dsq = document.createElement('script');
          dsq.type = 'text/javascript';
          dsq.async = true;
          dsq.src = 'http://' + window.disqus_shortname + '.disqus.com/embed.js';
          (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
        }
      };

    $(window).scroll(check);
    check();
  }
});


$(document).ready(function() {
  // only show animated headshot once per browser session
  if (!sessionStorage.loaded) {
    $('#logo').addClass('fadeIn');
    sessionStorage.loaded = true;
  }
  else {
    $('#logo').css('visibility', 'visible');
  }

  // http://www.webtutorialplus.com/flyout-card-recommended-articles-jquery/
  $('section.e-content').waypoint(function(direction) {
    $('#flyout').toggleClass('hidden', direction === 'up');
  }, {
    offset: function () {
      return $.waypoints('viewportHeight') - $(this).height() + 250; // 250px from bottom of the article
    }
  });


  // load Twitter JavaScript after page is loaded
  !function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0], p = /^http:/.test(d.location) ? 'http' : 'https';
    if (!d.getElementById(id)) {
      js = d.createElement(s);
      js.id = id;
      js.async = true;
      js.src = p + '://platform.twitter.com/widgets.js';
      fjs.parentNode.insertBefore(js, fjs);
    }
  }(document, 'script', 'twitter-wjs');

});
