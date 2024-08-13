<br><center>**Ruins in the distance**</center><br> 
Quite a few years ago now, I started building an instrument based on feedback
in my computer. I was away in some other town at the time. I was selling my
time, and regretting it. I desperately needed a way to express something other
than servitude. I've kept working on this project ever since, and it has
evolved and changed a lot over the course of maintaining this project. I enjoy
the environment that the instrument has become very much. It feels a lot like
having a conversation with an old friend at this point. Most days I'll use what
I've already built to make music, but every now and then I'll want to try a new
idea of some kind. I'll then rebuild some aspect of how to control things,
using a different approach, or I might add new functionality, or I might tweak
the behaviour of some aspect of the synthesis. This work is very rewarding for
me and I hope I get to keep exploring this for a long time. My ambition is to
make a new audio file every day and to post that here, in my archive. This
routine helps me stay balanced. This project gives me the opportunity to
return to a particular way of listening that I enjoy. As I am returning again
and again to the same place, I am fascinated by how I get to experience new
things each time. I am reminded of the story of the stone garden in Ryōanji.
It's impossible to view all of the stones held within the garden from any
vantage point. The set of all possible configurations of this system is similar
in that it is very large. I like to keep busy. I never want to have the kind of
problem where I've lost touch with what it feels like to complete a piece of
music. This way, the last time I felt it, is never more than a day away.

<div class="dmk-player" data-playlist="index.json"></div>

<br>

<script async type="text/javascript" src="/dmk-player.js?v=5"></script>
<link rel="stylesheet" href="/dmk-player.css">

<script>
window.addEventListener('load', function () {
  var elements = document.getElementsByClassName('dmk-player');
  var players = Array.from(elements).map(function (el) {
    if (el.dataset) {
      var rootUrl = 'https://f005.backblazeb2.com/file/recovery-site/html/ruins/';
      var playlistIndexUrl = window.location.href;
      var playlist = el.dataset.playlist;
      var isVideo = !!el.dataset.isVideo;
      var layout = {
        title: false,
        elapsedTime: false
      };
      var options = {
        playlist: playlist,
        isVideo: isVideo,
        rootUrl: rootUrl,
        playlistIndexUrl: playlistIndexUrl,
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

<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>

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
