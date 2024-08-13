<br><center>**Pieces**</center> 
These are some pieces that I composed at some points in the past. I find that I
need to carry these with me in my life for some reason. They are alright I
suppose. It feels strange hearing them now, remembering things about how they
were made. You might be hearing them for the first time. They all took
something different out of me. I had to figure them out. They each contain some
kind of new way for me to relate to the task of organizing sound. Everything is
always changing. So am I. This is as it should be I think. I was hoping that I
would remember where I heard the story about the group of poets, in the tenth
century in Japan who had all decided to let each other change their names, to
begin again, with a fresh voice, whenever they felt the need. As I remember the
story, they'd change their name every ten years or so. These pieces all sound
like past incarnations of myself composed them. For some reason I need to keep
them around to remind me of how I used to think and feel.

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
