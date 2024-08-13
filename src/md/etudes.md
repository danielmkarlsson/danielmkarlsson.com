<br><center>**Etudes**</center> 
These are intermediaries, mockups or experiments that I designed to quickly
investigate ideas. They are rough drafts or proofs of concepts that might
demonstrate a functionality or a phenomenon.  Stakes in the ground or notes for
things I'd like to develope further.  Typically I'll use these to get a handle
on things myself. Once in a while they'll be things I made to show other folks
what I'm aiming for. If you are one of those folks, then probably it's the top
one you're meant to hear.  <br>

<div class="dmk-player" data-playlist="etudes/index.json"></div>

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

<script>
function goToURL() {
    var links = [
        "./a-collapse-of-structures/",
        "./map/",
        "./now/",
        "./ruins-in-the-distance",
        "./gigs",
        "./log",
        "./log",
        "./frequently-asked-questions",
        "./list",
        "./etudes",
        "./sc4reaper",
        "./superclean-installparty",
        "./utilities",
        "./recipes",
        "./pieces",
        "./links",
    ];

    // get a random number between 0 and the number of links
    var randIdx = Math.round(Math.random() * (links.length - 1));
    // construct the link to be opened
    var root = window.location.protocol + '//' + window.location.host;
    var link = root + '/' + links[randIdx];

    document.location.href = link;
};
</script>

<p align="right">
<a href="#" onClick="goToURL()">∞</a>
</p>
<br>
<br>
