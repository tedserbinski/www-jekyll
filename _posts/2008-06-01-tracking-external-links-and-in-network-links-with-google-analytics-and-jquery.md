--- 
layout: post
title: Tracking External Links and "In-Network" Links with Google Analytics and jQuery
created: 1212378436
---
<a href="http://www.mothersclick.com/">MothersClick</a> is a flourishing site that is growing very quickly. As such, tracking user behavior with <a href="http://www.google.com/analytics/">Google Analytics</a> is becoming very important as it helps to determine how to adjust the site to better meet the needs of our users. And now, as we prepare to launch our full ParentsClick Network of sites, we need to track what they are doing <strong>across</strong> our network of sites.

Well thankfully Analytics makes this easier through its ability to <a href="http://www.google.com/support/googleanalytics/bin/answer.py?answer=55527&topic=11006">track outbound links</a> and <a href="http://www.google.com/support/googleanalytics/bin/answer.py?answer=55503&topic=11009">cross domain links</a>. But the problem then arises, who is going to update all of those hardcoded links with Javascript code? Is there an easier way?



Sure there has gotta be, jQuery is wonderful and we could use that. So I googled it and found a great post doing something very close to what I was looking for: <a href="http://blog.rebeccamurphey.com/2008/01/06/track-outbound-clicks-with-google-analytics-and-jquery/">Rebecca Murphey's blog post</a> on that topic. While this worked great for outbound links, it didn't help with cross domain (or in-network links). So I modified her code a bit to check links against an array of our sites and adjust the Analytics code as necessary. The result was this:


{% highlight javascript %}
<script type="text/javascript">
  // this code adds analytic specific onclick handlers for links to sites in our network (to pass cookies)
  // and external links (to track exit points)
  $(document).ready(function() {
    // strip the host name down, removing subdomains or www
    var host = window.location.host.replace(/^(([^\/]+?\.)*)([^\.]{4,})((\.[a-z]{1,4})*)$/, '$3$4');
    var sites = ['parentsclick.com', 'parentsclick.net', 'mothersclick.com', 'fathersclick.com', 'momblognetwork.com'];
    $('a').each(function() {
      var $a = $(this);
      var href = $a.attr('href');
      var pass = false;

      try {
        // see if the link is external
        if ( (href.match(/^http/)) && (! href.match(host)) ) {
          $.each(sites, function (i, n) {
            // if link is to one of our sites, pass cookie data
            if (href.match(n)) {
              pass = true;
            }
          });
          if (pass) {
            $a.click(function() {
              pageTracker._link(href);
              return false;
            });
          }
          else {
            // if external link to some other site
            $a.click(function() {
              pageTracker._trackPageview('/outgoing/' + href);
            });
          }
        }
      }
      // IE7 throws errors often when dealing with irregular links, such as:
      // <a href="node/10"></a> Empty tags.
      // <a href="http://user:pass@example.com">example</a> User:pass syntax.      
      catch(error) {
        return false;
      }      
    }); 
  });    
</script>
{% endhighlight %}

Hope that helps someone else, makes tracking all of that stuff considerably easier.

