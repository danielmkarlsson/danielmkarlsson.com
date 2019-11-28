**Daniel M Karlsson**

Composer focused primarily on texture and timbre.<sup><a href="#fn1" id="ref1">1</a></sup>  
Works extensively with algorithmic composition.  
Transhumanist singularitarian.<sup><a href="#fn2" id="ref2">2</a></sup>

[col](./a-collapse-of-structures) | 
[map](./map) | 
[rui](./ruins-in-the-distance) | 
[pcs](./pieces) | 
[etu](./etudes) | 
[gig](./gigs) | 
[s4r](https://danielmkarlsson.com/sc4reaper/) |
[utl](./utilities) | 
[log](./log) | 
[git](https://github.com/danielmkarlsson)
  
```text 
/|\
  \/||////
    \/||||\\||\\
      /|/|\\\|\//|\|//|\\
        \\/\\/|\/|||/\|\|\/|/|/\|\\
      |/|/|\||/|/\||/\||//||/\\/
    /|\/|//||//|\\\/|/|\/||/
  /|\|||///|\\\|\|\/|\
/||\|\|/|/\|/
```
<p>

Below is the track that I think is my strongest work at present. If you are
pressed for time then I think you should start there.

<div class="dmk-player" data-playlist="indexPlaylist/index.json"></div> <br> If
you'd like to read some text I wrote about that piece, then click the link above
that says col. There are some other links to the right of it that I made for
other pieces and projects I've done in the past. Those are still valid as
representative examples of the kind of music that I make.

</p>

I would _love it_ if you emailed me, about anything, right now even. I am
entirely serious, have at it! I think that if you emailed me then that would be
the best thing that could happen here after you are finished with your goTo of
me [chuckles].

firstname no initial [at] firstname initial lastname [dot] com

<br>

<br>

<div class="footnotes">

<div><sup id="fn1">1. Drone Music basically but, as always, it's complicated.</sup></div>
<div><sup id="fn2">2. Think more of a Fun-Times-Fully-Automated-Luxury-Space-Communism-With-Optional-Mind-Uploading-For-All <br>
&nbsp;&nbsp;&nbsp; rather than an evil neoliberal plot to bleed the commons dry.</sup></div>

</div>

<script>
function goToURL() {
    var links = [
        "./rui",
        "./log",
    ];

    // get a random number between 0 and the number of links
    var randIdx = Math.round(Math.random() * (links.length - 1));
    // construct the link to be opened
    var root = window.location.protocol + '//' + window.location.host;
    var link = root + '/' + links[randIdx];

    document.location.href = link;
};

// | <a href="#" onClick="goToURL()">.rnd</a> |

</script>

<style>.playlist { display: none; }</style>

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
        title: true,
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

// <script src="audio-player.js"></script>

</script>
