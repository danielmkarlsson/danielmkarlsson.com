<center>**<span class="blinking">UNDER CONSTRUCTION!</span>**</center>
<center><span class="blinking">My site is going through some _serious_ changes.</span></center><br>

<br><center>**Daniel M Karlsson**</center><br>
<center>Composer focused primarily on texture and timbre.<sup><a href="#fn1" id="ref1">1</a></sup>  
Works extensively with algorithmic composition.  
Marxist transhumanist singularitarian.<sup><a href="#fn2" id="ref2">2</a></sup></center><br>
<center>
[col](./a-collapse-of-structures) | 
[map](./map) | 
[now](./now) |
<!--[pcs](./pieces) |--> 
[gig](./gigs) | 
[log](./log) | 
[faq](./frequently-asked-questions) | 
[git](https://github.com/danielmkarlsson)  
[list](./list) | 
[etud](./etudes) | 
[scip](https://danielmkarlsson.com/superclean-installparty/) |
[read](https://danielmkarlsson.com/read/) |
<!--[rigs](./rigs/) |-->
[util](./utilities) | 
[rcps](./recipes/)    
[ruins](./ruins-in-the-distance/) |
[sc4re](https://danielmkarlsson.com/sc4reaper/) |
[piecs](./pieces/) |
[links](./links/)  

<link rel="me" href="[https://social.ordinal.garden/@t36s]" />

</center>


<!--<p>-->

<!--Below is the track that I think is my strongest work at present. If you are-->
<!--pressed for time then I think you should start there.-->

<div class="dmk-player" data-playlist="indexPlaylist/index.json"></div> <br> 
<!--If you'd like to read some text I wrote about that piece, then click the link-->
<!--above that says col. There are some other links around there that I made for-->
<!--other pieces and projects I've done in the past. Those are still valid as-->
<!--representative examples of the kind of music that I make.-->

<!--</p>-->

I would _love it_ if you emailed me, about anything, right now even. I am
entirely serious, have at it! I think that if you emailed me then that would be
the best thing that could happen here after you are finished with your goTo of
me [chuckles].

<center>firstname no initial [at] firstname initial lastname [dot] com</center>
<br>

<br>

<div class="footnotes">

<div><sup id="fn1">1. Drone basically but, as always, it's
complicated.</sup></div> <div><sup id="fn2">2. My biggest short term goal is
_Economic Democracy_ for everyone. A simpler wording would be "everything for
everyone". Practical breakdown includes, but is not limited to: Free access to
food, housing, clothing, education, transportation and computation. I am
entirely anti capitalist and I regard any and all speculation as fundamentally
unacceptable. My biggest long term goal is a fun times fully automated luxury
space communism with optional mind uploading for all. You need to know that
about me if we are going to be friends.</sup></div>

</div>

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
        "./mecha-geriatric",
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

<script>
//<p align="left">
//<button1 onclick="darkMode()">°</button1>
//</p>
</script>

<script>
function darkMode() {
   var element = document.body;
   element.classList.toggle("dark-mode");
}
</script>

<br>
<br>

