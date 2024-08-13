<br><center>**SuperClean InstallParty**</center>

Welcome one and all to this SuperClean InstallParty. 

SuperClean is a SuperCollider framework which easily provides access to some
basic utilities inside of SuperCollider itself. Not only can you play back all
of your samples without needless hassle in an environment that can grow with
you. SuperClean also contains a bunch of synths and a very flexible routing
system.

SuperClean is, in short, a one-stop-shopping-experience for folks who want:

• An MPC,  
• a bunch of synths,   
• a whoole lot of effects, and,  
• a flexible routing system

for the low, low asking price of: Free! Free as in costs nothing but more
importantly, free as in breaking out of jail kind of free. Also, on a personal
note here, hey, this is what I use to make music with every day. I really like
making music and, for me, this makes it way funner. Try it! What have you got
to loose?

Let's go ahead and download SuperCollider, SuperClean and the SC3 plugins:

<center>[Download SuperCollider](https://supercollider.github.io/downloads)</center>  
<br>
<center>[Download SuperClean](https://github.com/danielmkarlsson/SuperClean/releases)</center>
<br>
<center>[Download Sc3plugins](https://supercollider.github.io/sc3-plugins/)</center>  

If for some reason there is some kind of snag regarding that whole downloading
stuff from The Public Internet maneuver, raise your hand and I'll come over
with a USB for you. If we are not in the same room, then let me know through
email and I'll sort you out. You can find my email on my index page. Now boot
up SuperCollider.

Next let's go to `File`, `Open user support directory`. This is a hidden place
on your computer. If you ever need to get back here then, now you know how.
Grab hold of the folder called `sc3plugins` and the `SuperClean` folder and
drag them both to the `Extensions` folder. Click your way into the `SuperClean`
folder. Now open the file `superclean_startup.scd` and copy that whole mess of
text. Go to `File`, `Open startup file`, paste into there. Save the file. Quit
and then start up SuperCollider again. That should do it! 

Let's try it out by opening `examples.scd` which is also located in the
SuperClean folder. Any time after starting SuperCollider you see the message `[
SuperClean up + running ]` that means everything is ready to go. Put the text
cursor inside a code black and run it by pressing `cmd + Enter`. At this point
you should hear something. If no go, take a look at the video walkthrough
below. If still no go, I can come over to help you, or let me know through
email and we can work something out that works for you. 

Now that everybody is up + running the sky is the limit! We could literally
have any sound arrive at any time. Go forth in thrash! Really looking forward
to hanging out and getting into SuperClean together. Don't be a stranger!

[Check this project out on github](https://github.com/danielmkarlsson/SuperClean)

Below is a video walkthrough of the installation process as it went down at the
first Patterns in SuperCollider with SuperClean lesson:

<video controls="controls" width="100%" name="SuperClean-install-walkthrough.mov"
src="superClean-install-walkthrough.mov"></video>

<br>
<br>

<!--   
<br><center>**The EMS course**</center>

I did two semesters of this course I created for Elektronmusikstudion EMS which
is located in Stockholm Sweden. The course was held entirely online. The course
was open to everyone, regardless of geographical location. It provided a
biweekly opportunity to connect with people making weird and wonderful music
with SuperCollider all over the world. I had a great time doing it and I think
I'd like to come back to it somehow in the future.<br><br>

<center>[Rummage through the show notes for the course here](https://github.com/danielmkarlsson/SuperClean-code/tree/main/Patterns-in-SuperCollider-with-SuperClean)</center>

<br>
<br>

<br><center>**Patterns in SuperCollider with SuperClean course overview**</center>

00: Pre course email general corraling. Matrix element, sharing code with git.  

01: Introduction, Installation, configuration, defaults, evaluation, navigation.   

02: Continously redefining patterns and binding values to parameter names.      

03: Sequential patterns. Linear deterministic patterns. Parameterization of music.  

04: Stochastic choices. Weighted distributions. A closer look at SuperClean keys.  

05: Unweighted choice between threshold values. Directionality and meandering.  

06: Installing custom extensions. Repeating stochastic sequences. The golden urn.  

07: Translating value ranges. Connecting parameters. Scales, tunings, chords.  

08: Segmented interpolation over time. Functions in patterns. Data sharing.  

09: Infinite stochastic choices derived from a single number. Finite duration.  

10: Form, music in parts, recording, routing, multichannel external connectivity.   

11: Completing works. Performing works. Comparing portability of formats.  
-->

<br><center>**Getting started using Patterns with SuperClean.**</center>

Here's a lil piece of boilerplate code to get us started:

```text
(
Pdef(0,
	Pbind(*[
		type: \cln,
		snd: \sin,
	])
).play
)
```

Now, what that lil sucker does is give us a comfortable interface. With this we
can put the text cursor anywhere inside of the outermost parantheses and
evaluate it with Command Enter, and it goes. It does the bleeps forever. How do
we stop this thing? That's Command period (the little dot at the end of a
sentence). Next we see `Pdef` which gives us a running pattern definition. We
can redefine this stream of musical event, while it's running. To me this is
essential, otherwise I get annoyed at how clunky the workflow is. Let's do a
quick redefining of what we are hearing. First get the pattern started, then,
while it's running, overwrite `\sin` with `saw\` and then reevaluate. This
changes what we are hearing. SuperClean has a bunch of synths available to us.
We just redefined our running pattern from making sine wave bleeps to saw wave
bloops. Next in the boilerplate code block is `Pbind` which binds the parameters
in the left column to the values in the right column. The colon character is in
the middle, between the two columns, keeping them separate. The first parameter
in the left column is `type` and we set that value to `\cln` in the right
column. I like to think of this as the on button for SuperClean. This tells
SuperCollider to make everything SuperClean has to offer available to us in this
block of Pattern code. The next parameter in the left column is `snd` which
stands for sound and refers to either the name of a synth or the name of a
folder containing samples. Let's set that to `\mmd` and evaluate. Now, what that
does is play the zeroth file in a sample folder called mmd. This folder is
inside of the SuperClean folder that we dragged to the Extensions folder
earlier. The folder contains thirteen short drum synthesis sounds that I made on
my Micro Modular. They are only 10Mb all together and they get loaded into RAM
when SuperClean boots up. I put those in there as a utility. They are good for
getting started quickly and trying stuff out with samples. Let's add a new
parameter so we can control which file inside this folder gets played. 

```text
(
Pdef(0,
	Pbind(*[
		type: \cln,
		snd: \mmd,
        num: 1,
	])
).play
)
```

Oh hey now that made the sound change didn't it? We've set the sample player to
the first file in the folder. Go ahead and change this number a bunch of times
to audition all of the different samples in that folder. As you were doing that
did you notice that the thing counts from zero and that there are 13 samples in
the folder and also that it wraps around so that the value 0 and the value 13
trigger the same sample. That's how that works. Let's do some linear sequencing
with `Pseq`.

```text
(
Pdef(0,
	Pbind(*[
		type: \cln,
		snd: \mmd,
		num: Pseq([1, 7, 9, 11, 12, 6, 5], inf),
	])
).play;
)
```

But this is so boringly slow. Let's make it faster.

```text
(
Pdef(0,
	Pbind(*[
		type: \cln,
		snd: \mmd,
		num: Pseq([1, 7, 9, 11, 12, 6, 5], inf),
        dur: 1/8,
	])
).play;
)
```

Alright that's better, but now it's beginning to bore me again because it's just
the same thing over and over again. Let's fix that by introducing a new pattern
object that does stochastic sequencing, `Prand`:

```text
(
Pdef(0,
	Pbind(*[
		type: \cln,
		snd: \mmd,
		num: Prand([1, 7, 9, 11, 12, 6, 5], inf),
        dur: 1/8,
	])
).play;
)
```

I want more variation so let's add another parameter. `amp` will let us vary the
amplitude. Let's also get `Plprand` in there as a new Pattern object. This one
is a nice pairing with amplitude because reasons. 


```text
(
Pdef(0,
	Pbind(*[
		type: \cln,
		snd: \mmd,
		num: Prand([1, 7, 9, 11, 12, 6, 5], inf),
        dur: 1/8,
        amp: Plprand(0.25, 1.0),
	])
).play;
)
```

Nice to have some dynamics going. Next I want to add some panning and I'll pair
that parameter nicely with `Pmeanrand` which prefers the middle of the value
range.

```text
(
Pdef(0,
	Pbind(*[
		type: \cln,
		snd: \mmd,
		num: Prand([1, 7, 9, 11, 12, 6, 5], inf),
        dur: 1/8,
        amp: Plprand(0.25, 1.0),
        pan: Pmeanrand(0.0, 1.0),
	])
).play;
)
```

You might want to know how the change "the BPM", but do you really though? This
will change it globally, for all patterns, until you recompile:

`TempoClock.default.tempo = 128/60;`

I think it's way nicer to just change this *per pattern* with `stretch`


```text
(
Pdef(0,
	Pbind(*[
		type: \cln,
		snd: \mmd,
		num: Prand([1, 7, 9, 11, 12, 6, 5], inf),
        dur: 1/8,
        amp: Plprand(0.25, 1.0),
        pan: Pmeanrand(0.0, 1.0),
        stretch: 0.75,
	])
).play;
)
```

Setting `stretch` to 0 is infinitely fast and setting `stretch` to 2 is half tempo.
Using `stretch` opens up a door to *polytempic* music and musics that morph fluidly
between different tempos. Imagine that for a minute. Wild right?

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
