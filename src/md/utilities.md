**EMS AKG**

I made two impulse responses of the AKG spring reverb at EMS. I figured I could
share them here. They came out pretty decent I think. The real thing is it's own
thing for sure but files win on portability hands down so, go ahead, download
'em.  

[ems-akg.zip](https://danielmkarlsson.com/ems-akg.zip)

<br>

[//]: # ([.ndx](../) | <a href="#" onClick="goToURL()">.rnd</a>)

<br>
<br>

<script>
function goToURL() {
    var links = [
        ".",
        "./img",
        "./irc",
    ];

    // get a random number between 0 and the number of links
    var randIdx = Math.round(Math.random() * (links.length - 1));
    // construct the link to be opened
    var root = window.location.protocol + '//' + window.location.host;
    var link = root + '/' + links[randIdx];

    document.location.href = link;
};
</script>

<script async type="text/javascript" src="/player/dmk-player.js?v=5"></script>
<script>
window.addEventListener('load', function () {
  var elements = document.getElementsByClassName('dmk-player');
  var players = Array.from(elements).map(function (el) {
    if (el.dataset) {
      var rootUrl = window.location.origin;
      var playlist = el.dataset.playlist;
      var isVideo = !!el.dataset.isVideo;
      var layout = {
        title: false,
        elapsedTime: false
      };
      var options = {
        playlist: playlist,
        isVideo: isVideo,
        rootUrl: rootUrl
      };
      return new DMKPlayer(el, options, layout);
    }
  });
  players.forEach(function (player, index) {
    player.index = index;
    player.on('play', function () {
      players.forEach(function (p) {
        if (p.index !== player.index && p.isPlaying) {
          p.stop();
        }
      });
    });
  });
});


</script>
