**Pieces**

These are some pieces that I composed at some points in the past. I find that I
need to carry these with me in my life for some reason. They are alright I
suppose. It feels strange hearing them now, remembering things about how they
were made. You might be hearing them for the first time. They all took something
different out of me. I had to figure them out. They each contain some kind of
new way for me to relate to the task of organizing sound. Everything is always
changing. So am I. This is as it should be I think. This morning I started
listening to John Cage and David Tudor's _Indeterminacy: New Aspect Of Form In
Instrumental And Electronic Music_. It's got some great stories in it. I was
hoping that I would get to hear the one about the group of poets, in the tenth
century in Japan who had all decided to let each other change their names, to
begin again, with a fresh voice, whenever they felt the need. As I remember the
story, they'd change their name every ten years or so. I had to leave to get on
with my day before I got a chance to hear if that story really was in there or
not. I could very well be mistaken. These pieces all sound like past incarnations
of myself composed them. I need to keep them around to remind me of how I used
to think and feel.

<div class="dmk-player" data-playlist="pieces/index.json"></div>

<br>

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
