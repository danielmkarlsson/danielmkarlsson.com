<div class="dmk-player" data-playlist="indexPlaylist/index.json"></div> 
In a strangely real way for me, I've always been writing this piece. There is a
slow grind of trying things, and hoping that this time, they'll fit. I know I'm
kidding when I say that I'm always writing the same piece, only maybe there was
always a part of me that wanted more change faster. To metamorphosize
definitively. To kill off my past self, in an exquisitely brutal way. To break
free. That word, freedom, always has that same inevitable allure. Mesmerizing
like little else. Palpably hypnotizing. So I started talking, running my mouth
like I do, about what was holding me back. Categories of sound, whole strata of
expression that where, or rather, I had made forbidden to approach. What was
lacking, past just going for it, was the ability to translate between
modalities. I measure my own freedom in capacities. What tasks am I able to
complete? The change might not have been measured in leaps and bounds by anyone
else's yard stick but for me, this was a big deal. The scope of my craftsmanship
got expanded working on this piece. So what I'm talking about here in practical
terms is extracting polyphonic pitch information from sound and translating it
into useful information. I was then able to further sculpt the translated data
in order to make other, transformed reflections of originals. These new
entities were completely set apart from material that I had been able to summon
previously. At least that's the way I felt about it: Really inspired
artistically by having broken new ground technically. There it is again, that
internal emotional state, unprovable as ever, relatable only through story.

This piece came off of the heels of working on [Mapping The Valleys of The
Uncanny](http://danielmkarlsson.com/map/) for what I felt was a really long
time. The format of the residency was that we had a week at Ställberg in the
beginning of the summer and then there was the concert at the end of the summer.
In the beginning of the summer I had the idea that I wanted to return to the
idea of anchoring the piece in the place. This was just as much a trope for me
going into as it reads to you now. I really _did_ want to leave my comfort zone
[chuckles]. What I ended up with in practice was running a bunch of tuba
glissandos through a big rattly tin box. There was the idea of intentional
contamination of "field recordings" (any recording done outside of the studio is
a very wide casting of the net). I think the term reAmping is more plausible.
Also the more conventional strategy of reRecording sounds in a room, as a reverb
became very integral to the work. The utility of the impulse responses that Mats
and David recorded was enormous. Also the particular flavour of running sound
through the room in realtime with all of it's unique nonlinearities became very
apparent in comparison. Recording various material through the box and
Maskinhallen at double the samplerate and then playing them back at half the
speed also proved rewarding. When I got back home I expanded on my experiences.
I did a lot of reAmping of materials I had created in Ställberg through
different transducers. I was able to make various metal objects vibrate creating
complex nonlinear connections between the low end and the high end of the
spectrum. The less noble the metal the better it seems, so far at least. Still
exploring that space.

In terms of form, I guess it's rondo. That is really a very fancy form if you
know me, or my way of relating to form (I've been ignoring it, actually). For
the longest time it seems, I've been carrying around the idea that my music
should have no form, because finite realisations where always a matter of
staying practical. I felt that all of my compositions where actually states,
infinite in terms of time, the way that places are. You could enter into them
and stay there, listening, as long as you cared to. Thinking of the
boundlessness of time itself has always inspired me most of all. I guess you
could say that a lot has changed. Getting back to the subject at hand; The form
of the piece is `ABACADAEAFAGAHA` basically. If I'm being very particular then
all of the `A`'s are more like `A`<sup>1</sup>, `A`<sup>2</sup>, `A`<sup>3</sup>
etc. because as we progress through them, they get more and more inclined to
present a more dualistic, or layered tonality. This saltiness is more noticeable
towards the end. 

Also another little tidbit is that `F` is split in two parts in
the 8 channel version. Halfway through the two ensembles in the inner most quad
configuration switch places. I felt it was an interesting kind of movement. I
could hear it, no problem. I guess you could say it is the only actual
spatialisation going on in the piece. That change occurs over the span of one
minute. All of the things that appeared to be moving are actually due to how the
synthesis was split up in four stereo files. Have a look at that [code
here](https://raw.githubusercontent.com/danielmkarlsson/a-collapse-of-structures/master/A%20collapse%20of%20structures.scd).
I enjoy how the line between what is an overtone in a spectrum and what is a new
pitch in a linear sequence is blurred. The choice of which speaker every new
pitch arrives in adds a sense of being veiled by the sound around you. 
It is a kind of phenomenological result of the synthesis. The synth definition
was originally written by [Marcus Pal](https://www.marcuspal.com/), then later
adapted in collaboration with friends. 

In the synth definition the envelope segments are expressed in percentages. <br>
`e4` through to `e1` tell you how far into the note value that the envelope
should have reached it's maximum level after the attack time, after which the
release time begins immediately. So an `e1` value of `0.01` will yield a 1%
duration for the attack and a 99% duration for the release. `c4` through to `c1`
denote the curvature of the envelope segments. `hr` is the harmonicity ratio of
the operator. `mi` means modulation index, which is the modulation amount by
which that oscillator will modulate the next. The last oscillator (`e1`) doesn't
have a modulation index value because it isn't modulating anything else. I like
to think that because we are listening to the different operators on their own,
as well as hearing their effect on each other, spread out around us in the room,
and that these operator frequencies are harmonic ratios of the fundamental,
something special happens. At least to my ears I am reminded of how the natural
overtone series can be used in additive synthesis. The sensation is further
heightened for me by SuperCollider's uncanny knack for delivering such clean
synthesis, owing to negligible round off errors in the calculation of waveforms
at the lowest level. This becomes especially important for me where modulation
indexes are concerned. Without this level of detail, FM can otherwise become a
very round about way for me to make white noise. Anyway, this .scd is now out in
the wild. You go ahead and have a mess a round with it and let me know how it
goes.

The bottom half of the file is where the patterning of events happens. The
durations between the events are pretty straightforward, this is slowly evolving
music. The key to how I can get away with what I'm doing in the keys that
control which pitches get chosen is that aforementioned slowness. I think I
picked it up from Morton Feldman. Slowing things down makes strange pitch
sequences a _lot_ more palatable. It let's me do things like sequence scales. I
think I was attracted to that idea initially because I was in awe of the height
of abstraction there. If we compare it to sequencing enharmonic transposition
for example, then sequencing scales looks to me like it would happen at a much
higher altitude. It has that titillating quality I am such a tremendous sucker
for. For a long time I felt like I was cheating doing this but I got over that
after I did Map. The reason was that I had some really uplifting interactions
talking to folks about how I had organized the pitches after that first show. I
think at this point I've started thinking of it as something akin to a trademark
move. But `\scale` is not the only key here. Most times I'll start with just one
scale and sequence `\degree` and `\octave` and try to get something going. When
I have something that works started, I'll then want more variation. I'm all
about variation. That's what leads me to find things like different scales
having different amount of degrees in them _interesting_ and then proceed to
sequence `\degree` grinning. This kind of thing is tricky though. I have to go
very slow.  I change one tiny thing at a time, and just focus on that. Then
after I'm satisfied, I move on to the next thing. Also using `\Pseed` to find a
good spot in the river to step down into helps a lot after I reach the point
where I have more than a few keys effecting what pitch comes out.

This piece was originally composed for 8 channels and had it's premiere on the
second of August 2019 at [Ställbergs Gruva](http://www.stallbergsgruva.se/) as
part of their three day festival "Att återta det levande". I was able to spend
an inordinate amount of unusually intense time writing this piece, thanks to the
generous support of [Musikverket](https://musikverket.se/), who supported
Ställberg's residency program Timbre. The residency culminated in our
contribution to the festival in the form of a concert. The entire concert was
six hours in total. It started at six in the evening and ended at midnight. The
concert was held in Maskinhallen, which has a breathtakingly beautiful room
tone. It is my favourite resonant space. Myself, [Maria W.
Horn](http://mariahorn.se/), [Mats Erlandsson](http://matserlandsson.com/),
[Lisa Stenberg](https://lisastenberg.com/) and [David
Granström](https://davidgranstrom.com/) each wrote about an hour's worth of
music for the concert. I am especially grateful to Anton Andersson who did the
lights, Eric Sjögren who was our director and Veine Bartos who was our
carpenter, without whom neither the residency nor the concert would have been
possible. I had the time of my life and I felt part of something much larger
than myself. That really is the way I've always wanted to feel. I am so happy
and grateful to have been a part of this project that I feel like my heart might
cave in on itself.

<br>

<br>

<style>.playlist { display: none; }</style>

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
