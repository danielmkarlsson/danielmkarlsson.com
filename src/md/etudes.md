**Etudes**

These are intermediaries, mockups, experiments designed to investigate ideas
quickly. They are rough proofs of concepts that might demonstrate a
functionality or a phenomenon. Stakes in the ground or notes for further
development. Typically I'll use these to get a handle on things myself. Once in
a while they'll be things I made to show other folks what I'm aiming for. If you
are one of those folks, then probably it's the top one you're meant to hear.
<br>

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
