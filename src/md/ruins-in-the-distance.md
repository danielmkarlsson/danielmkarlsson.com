**Ruins in the distance**

Quite a few years ago now, I started building an instrument based on feedback in
my computer. I was away in some other town at the time. I was selling my time,
and regretting it. I desperately needed a way to express something other than
servitude. I've kept working on this project ever since, and it has evolved and
changed a lot over the course of maintaining this project. I enjoy the
environment that the instrument has become very much. It feels a lot like having
a conversation with an old friend at this point. Most days I'll use what I've
already built to make music, but every now and then I'll want to try a new idea
of some kind. I'll then rebuild some aspect of how to control things, using a
different approach, or I might add new functionality, or I might tweak the
behavior of some aspect of the synthesis. This work is very rewarding for me and
I hope I get to keep exploring this for a long time. My ambition is to make a
new audio file every day and to post that here in my archive. This routine helps
me stay balanced. This project gives me the opportunity to return to a
particular way of listening that I enjoy. As I am returning again and again to
the same place, I am fascinated by how I get to experience new things each time.
I am reminded of the story of the stone garden in Ryōanji. It's impossible to
view all of the stones held within the garden from any vantage point. The
parameter space in this project is similar in that it is very large. A
tremendous amount of variation is possible at least. <br> I like to keep busy. I 
never want to have the kind of problem where I've lost touch with what it feels
like to complete a piece of music. This way, the last time I felt it, <br>
is never more than a day away.

<div class="dmk-player" data-playlist="ruins/index.json"></div>

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
