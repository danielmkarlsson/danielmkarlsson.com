<br><center>**hld**</center><br> 
<div class="dmk-player" data-playlist="index.json"></div>

I went to EMS two times and recorded the Halldorophone which is on loan to EMS
from the inventor. I found it works best without any kind of bow interaction.
This is at least true for me and for the kinds of sounds that I want to produce.
I played the instrument laying on it's back using only the attenuators and the
tuning pegs. I only used one of the built in speakers because the other one made
a tremendous amount of hum. There was still some hum and so the only way to get
a clean enough signal was to play it loud. This is a shame because it would be
nice to be able to play more one the edge of feedback. I used my nice mics and
mic pres and recorded at 192kHz 24 bit Stereo like I always do. The single file
is about five minutes long and is a distillation of the best parts of the
sessions I did with the instrument at EMS. I would like to go back and do some
more recordings. I feel I only scratched the surface of what is possible with
the instrument. In the code I like how the `hal` reverb came out. I sat with
that for some time and it was a nice and subtle thing in the end. It's a very
narrowly filtered fizzy reverb. Since `hal` does not bleed over out into a wider
field I had the idea to do the panning quite extreme. That line quite neatly
captures this idea I've had for some time now. Starts out doing one event dead
center and then is followed by an exponentially slanted left pan and then an
exponentially slanted right pan and then back around to the middle. This pairs
nicely with that narrow `hal` sound. Also `cav` gives it that low end and
mirrored reflection in the stereo image. Nice to get to use the hex group of
tunings on top of the regular churchy tunings also. Been trying to get that to
work for a while now.

[Download this sample pack here.](https://f005.backblazeb2.com/file/log-packs/hld.zip) 
<br>

```text
~clean.lsf("~/snd/hld")
(
Routine{
    //s.record;
    //1.wait;
    Pdef(0,
        Pseed(9196,
            Pbind(*[
                type: \cln,
                snd: \hld,
                flp: Pwhite(0, 1),
                pan: Pseq([0.5, Pexprand(1.0, 1.5, 1) - 1, 2 - Pexprand(1.0, 1.5, 1)], inf).trace,
                cav: 1/2,
                cai: Pseg(Pdup(2, Pwhite(0.0, 1.0)), Pwhite(30.0, 90.0), \lin, inf),
                atk: Plprand(4.0, 8.0),
                hld: Plprand(5.0, 20.0),
                rel: Plprand(4.0, 12.8),
                crv: 6,
                crt: -6,
                sustain: Pkey(\atk) + Pkey(\hld) + Pkey(\rel),
                bgn: (Pwhite(0.0, 0.4) + Pseq([0, 0.5], inf)),
                scale: Pdup(Plprand(19, 29), Pxshuf([
                    Scale.aeolian(\just),
                    Scale.dorian(\just),
                    Scale.ionian(\just),
                    Scale.locrian(\just),
                    Scale.lydian(\just),
                    Scale.mixolydian(\just),
                    Scale.phrygian(\just),
                    Scale.hexAeolian(\just),
                    Scale.hexDorian(\just),
                    Scale.hexMajor6(\just),
                    Scale.hexMajor7(\just),
                    Scale.hexPhrygian(\just),
                    Scale.hexSus(\just),
                ], inf)),
                degree: Pdup(Plprand(1, 19), Phprand(-7, 7).unique) - Pwrand2([0, 7], [1, 4], inf),
                dur: Pkey(\sustain) / Plprand(10.0, 20.0) * Pkey(\degree).linlin(-14, 7, 4, 0),
                hpf: Pkey(\degree).linexp(-14, 7, 250, 20),
                amp: Pdup(Plprand(1, 2), Phprand(0.3, 0.6)) / Pkey(\degree).linlin(-14, 7, 0.7, 1.3),
                hal: 1/4,
                hai: Pseg(Pdup(2, Pwhite(0.0, 1.0)), Pwhite(30.0, 90.0), \lin, inf),
                rts: 19,
                edf: 0,
                ldf: 0,
                hlp: 16000,
                hhp: 8000,
            ])
        )
    ).play;
    1140.wait;
    Pdef(0).stop;
    120.wait;
    s.stopRecording;
}.play
)
```
<br>
<br><br><center>**sbt**</center><br> 
<!-- <div class="dmk-player"data-playlist="sbt/index.json"></div> -->

As I was completing Towards a Music for Large Ensemble I began to feel I did not
have time to complete an etude for each new instrument I added. Now it's after
the premiere of the piece, so there is time again. Time to focus in on one
instrument at a time and to figure out a way to make another piece from a single
recording. This one I did with this great iterator which is a superball
textured rubber mallet. You rub it against drum skins or gongs, or other things,
and it makes the whole thing vibrate in this really particular way. I had made
recordings of a Tom that I had bought cheap, but that drum made a low mid sound
with not a lot of high end, so in th end it ended up sounding too noisy after
the post processing envolved in the large ensemble piece. I wanted more
amplitude, a lower fundamental and more overtones. I ended up putting a 1 by 1/2
meter metal plate in a bathtub and using the superball mallet on the outside
with the mics on the inside. I recorded with my usual gear at 192kHz, 24 bits.
There are 61 wav files in the folder. I chose to preserve the dynamic
relationship between the files, as that was very clearly necessary in order to
capture this technique faithfully. In the code I had the idea that I wanted
there to be a kind of slowly mounting tendency towards higher and higher
transpositions. This idea got combined with some low passed deviations in the
short term, and then a modulo at the end, so that it wraps around from highest
to lowest transposition. I had been carrying this idea around for a long time
and I enjoyed incorporating it here. I am grateful that the style of playing and
the dynamics enable this upward tendency to not be to Overbearing on the general
impression of the piece. I felt the idea worked best as a fairly subtle thing,
complemented in consort by other temperaments.

[Download this sample pack here.](https://f005.backblazeb2.com/file/log-packs/sbt.zip) 
<br>

```text
~clean.lsf("~/snd/sbt")
(
Routine{
    //s.record;
    //1.wait;
    Pdef(0,
        Pseed(9127,
            Pbind(*[
                type: \cln,
                snd: \sbt,
                dur: Plprand(0.1, 1.0),
                bgn: Pwhite(0.0, 1.0).round(0.2).unique,
                num: Pdup(Pexprand(1, 2), Pxshuf((0 .. 60), inf)),
                atk: Pexprand(5.0, 10.0).trace,
                hld: Pexprand(5.0, 10.0),
                rel: Pexprand(5.0, 10.0),
                crv: 5,
                crt: -5,
                sustain: (Pkey(\atk) + Pkey(\hld) + Pkey(\rel) + 1),
                amp: Pseg(Pdup(2, Phprand(0.45, 0.9)), Pwhite(30.0, 90.0), \wel, inf),
                scale: Scale.chromatic(\sept1),
                degree: (Pdup(Plprand(9, 19), Pexprand(1, 10) - 1).asInteger + Pdup(Plprand(9, 19), Pseq((0, 1 .. 18), inf)) % 19 - 12),
                pan: Pbrown(0.2, 0.8, Pwhite(0.1, 0.2)),
                hal: 1/3,
                hai: 1,
                edf: 0,
                ldf: 0,
                rts: 8,
                hlp: 200,
                cav: 1/6,
                dup: Plprand(9, 19),
                fsh: Pdup(Pkey(\dup), Pwrand2([0, Pexprand(1.0, 2.5, 1) - 1], [19, 1], inf)),
                fsm: Pdup(Pkey(\dup), Pwrand2([0, Pexprand(1.0, 2.5, 1) - 1], [19, 1], inf)),
                flp: Pseed(0, Pwhite(0, 1)),
                stretch: Pseg(Pdup(2, Pmeanrand(0.5, 1.5)), Pwhite(30.0, 90.0), \lin, inf),
            ])
        )
    ).play;
    1140.wait;
    Pdef(0).stop;
    120.wait;
    s.stopRecording;
}.play
)
```
<br>
<br>
<br><center>**est**</center><br> 
<!-- <div class="dmk-player"data-playlist="est/index.json"></div> -->

I put snare wires on top of a small tambourine drum. Then I put an ebow on the snare wires. 
The ebow makes the snare wire under it vibrate. I put the mics at either end of the snare 
wires laid across the middle of the small tambourine drum. It had that delicate balance of 
stability and instability that I keep coming back to. I recorded eight three minute takes of 
different positions with my regular setup at 192kHz. I added a 30 second fade on either end 
of all them. Half of the takes I used the harmonic mode on the ebow. In the code I came back 
to the idea of using `bnd` to get a slow glissando to a quantized value. This has been showing 
up lately and I feel it is going somewhere interesting. I split the octave in 24 parts so I'd 
have enough end points over 1/8th moving up and one 1/8th moving down. This one has a strong 
focus on the higher end of the spectrum as I made it to fit with other more low end heavy 
material.

[Download this sample pack here.](https://f005.backblazeb2.com/file/log-packs/est.zip) 
<br>

```text
~clean.lsf("~/snd/est")
(
Routine{
    //s.record;
    //1.wait;
    Pdef(0,
        Pseed(3257,
            Pbind(*[
                type: \cln,
                snd: \est,
                flp: Pwhite(0, 1),
                num: Pdup(Plprand(1, 3), Pxshuf((0 .. 7), inf)),
                bnd: Pmeanrand(-0.125, 0.125).round(1/24),
                bno: Pmeanrand(30.0, 90.0),
                bnt: Pmeanrand(2.0, 8.0),
                bgn: Plprand(0.0, 0.5),
                atk: Phprand(3.0, 30.0),
                hld: Phprand(3.0, 30.0),
                rel: Phprand(3.0, 30.0),
                crv: Pwhite(5.0, 7.0),
                crt: Pkey(\crv).neg,
                sustain: Pkey(\atk) + Pkey(\hld) + Pkey(\rel) + 1,
                dur: Pkey(\sustain) / 24,
                scale: Scale.chromatic(\mean4),
                degree: Pdup(Plprand(1, 3), Plprand(0, 7)),
                octave: Pdup(Plprand(1, 3), Pmeanrand(4, 8).round),
                pan: Pwhite(0.0, 1.0),
                cav: 1,
                cai: Pseg(Pdup(2, Pwhite(1/8, 1.0)), Pwhite(30.0, 90.0), \wel, inf),
                amp: Pseg(Pdup(2, Plprand(0.3, 0.6)), Pwhite(30.0, 90.0), \wel, inf) / Pkey(\octave).linlin(4, 8, 1, 1.5),
            ])
        )
    ).play;
    1140.wait;
    Pdef(0).stop;
    120.wait;
    s.stopRecording;
}.play
)
```
<br>
<br>
<br><center>**eph**</center><br> 
<!-- <div class="dmk-player"data-playlist="eph/index.json"></div> -->

I wrote on The Public Internet that I was looking to borrow a trombone. A person
reached out and said I could borrow their Euphonium because it was the closest thing they had.
I recognized this person from years back but we never played together or hung out. Amazing. 
It felt like The Internet of Olde. People just being nice to each other because it feels nice. 
We met up and talked a little bit. It was very nice. I carried the thing back home and it was
surprisingly heavy. Big sturdy black case with cute stickers on it. I sat up my regular rig
with the nice mics and the nice preamps and the nice soundcard. Took me a while to get used to 
the instrument but in the end I got it done. It's that same embouchure thing that the trumpet has,
just bigger and lower. I recorded the lowest note that I could get out of the instrument. I am not
sure that it is the lowest possible note tho. For sure the lowest I could do. I stitched together a 
bunch of shorter notes to make a really long one. I recorded in Stereo at 192kHz but exported out at 
96kHz an octave below what I had played. I did some colour work in the high end to get it to where it 
needed to be. The resultant file is 6 minutes and 30 seconds. When I was working with the material
I remembered something a composition teacher of mine from way back when I was at The School of 
Composition had told me. It was about intonation and about how they felt that it was strange that
in New Music you have this compromise as your starting point and then just dig in deeper by using 
quartertones. I always thought that was wild that my teacher acknowledged this cognitive dissonance 
and then just shrugged it off. So that idea is in there. Also I wanted to have a kind of mix between 
brownian motion and a rising offset with a sharp drop off as a way to present the pitch material over time. 
That's a saw, just real slow. Also it felt cool to use modulo to have the pitches wrap around above the octave.

[Download this sample pack here.](https://f005.backblazeb2.com/file/log-packs/eph.zip) 
<br>

```text
~clean.lsf("~/snd/eph")
(
Routine{
    //s.record;
    //1.wait;
    Pdef(0,
        Pseed(152,
            Pbind(*[
                type: \cln,
                snd: \eph,
                dur: (1 / Pexprand(1.0, 29.0)),
                lpf: Pseg(Pdup(2, Phprand(20, 20000)), Pwhite(15.0, 90.0), \exp, inf), 
                amp: Pseg(Pdup(2, Plprand(0.125, 0.225)), Pwhite(15.0, 90.0), \wel, inf) * Pkey(\lpf).expexp(20, 20000, 8, 1),
                scale: Scale.chromatic(\et12),
                dup: Plprand(99, 199),
                saw: Pdup(Pkey(\dup)/1.5, Pseq((0, 1/4 .. 12), inf)) % 12.25,
                degree: Pdup(Pkey(\dup), Pkey(\saw) + Pseq([0, Pbrown(0.0, 12.0, Pwhite(1/4, 1))], inf)).round(1/4) % 12.25,
                flp: Pwhite(0, 1),
                bgn: Plprand(0.0, 1.0),
                atk: Plprand(1.0, 33.0),
                rel: Plprand(1.0, 33.0),
                hld: Plprand(1.0, 33.0),
                sustain: Pkey(\atk) + Pkey(\hld) + Pkey(\rel),
                pan: Pwhite(0.0, 1.0),
                cav: 1,
                cai: Pseg(Pdup(2, Plprand(0.0, 1.0), Pwhite(15.0, 90.0), \wel, inf)),
                hpf: Pseg(Pdup(2, Pexprand(20, 200)), Pwhite(15.0, 90.0), \exp, inf),
                calcFreq: Pfunc{|ev|ev.use{ev.freq.asStringPrec(48).postln}},
            ])
        )
    ).play;
    1140.wait;
    Pdef(0).stop;
    99.wait;
    s.stopRecording;
}.play
)
```
<br>
<br>
<br><center>**mtb**</center><br> 
<!-- <div class="dmk-player"data-playlist="mtb/index.json"></div> -->

I went to visit a friend who lives a little bit outside of the city.
Ducked in real quick in a cute lil second hand shop before catching the train back.
I found this little childrens toy that had these great big metal bells in it.
Later when I got home I took it apart so I could get access to the bells more easily.
I found a way of palm muting the bells and moving slowly, very close to the microphones
that I really enjoyed. A subdued, slow trickling of metal. Recorded using my regular setup
at 192kHz. There are eleven Stereo files all between three and four seconds long.
I have a long standing relationship with this idea of the "mass event". I think I picked it
up from Xenakis. I really enjoy this sort of flocking behavior. Through the whole process
of working on this thing I was slowing everything down. This kind of thing I really don't want
to feel rushed.

[Download this sample pack here.](https://f005.backblazeb2.com/file/log-packs/mtb.zip) 
<br>

```text
~clean.lsf("~/snd/mtb")
(
Routine{
    //s.record;
    //1.wait;
    Pdef(0,
        Pseed(2748,
            Pbind(*[
                type: \cln,
                snd: \mtb,
                num: Pxshuf((0 .. 10), inf),
                flp: Pwhite(0, 1),
                dur: 1 / Pseg(Pdup(2, Pwhite(3.0, 33.0)), Pwhite(1.0, 100.0), \lin, inf),
                octave: Pseg(Pdup(2, Pmeanrand(3.0, 7.0)), Phprand(166.0, 199.0), \lin, inf),
                amp: Pseg(Pdup(2, Pexprand(0.5, 1.0)), Pexprand(0.01, 33.0), \exp, inf),
                pan: Pseg(Pdup(2, Pmeanrand(0.1, 0.9)), Pexprand(0.01, 33.0), \exp, inf),
                lpf: Pseg(Pdup(2, Phprand(200, 20000.0)), Pwhite(166.0, 199.0), \exp, inf),
                hpf: Pseg(Pdup(2, Pexprand(20.0, 80.0)), Pwhite(166.0, 199.0), \exp, inf),
                hpq: Pseg(Pdup(2, Plprand(0.0, 0.125)), Pwhite(166.0, 199.0), \wel, inf) * Pkey(\hpf).explin(20, 80, 2, 0.5),
                lhf: Pseg(Pdup(2, Pmeanrand(0.2, 0.8)), Pwhite(166.0, 199.0), \lin, inf),
                fsh: Pseg(Pdup(2, Pmeanrand(-1.1, 1.1)), Pwhite(166.0, 199.0), \lin, inf),
                fsm: Pseg(Pdup(2, Pmeanrand(-1.1, 1.1)), Pwhite(166.0, 199.0), \lin, inf),
                rma: 1/8,
                rmf: Pseg(Pdup(2, Pexprand(0.0001, 1000.0)), Pwhite(166.0, 199.0), \exp, inf),
                rdf: Pseg(Pdup(2, Pexprand(0.0001, 1000.0)), Pwhite(166.0, 199.0), \exp, inf),
                spd: Pwrand2([-1, 1], [1, 100], inf),
                cav: 8,
                cai: Pseg(Pdup(2, Pwhite(0.125, 1.0)), Pwhite(166.0, 199.0), \lin, inf),
                cvl: Pseg(Pdup(2, Pmeanrand(0.5, 0.8)), Pwhite(166.0, 199.0), \wel, inf),
                sustain: 16,
            ])
        )
    ).play;
    1140.wait;
    Pdef(0).stop;
    120.wait;
    s.stopRecording
}.play
)
```
<br>
<br>
<br><center>**шрами**</center><br> 
<!-- <div class="dmk-player"data-playlist="sar/index.json"></div> -->

I soldered together a cute little electronic noise instrument from a pcb kit I ordered from 
[noise.technology](https://noise.technology/) which is run by Max Wainwright who is a guy 
I studied composition with. He pledged to donate all of the profits from the sales of these
kits during the month of October 2023 to [Disarmament Solutions](https://disarmamentsolutions.com/ukraine/donate)
which is a donation program which supports Ukraine with urgently needed demining equipment. 
I thought that all sounded great so I ordered a kit. It arrived quickly, was easy to solder together
and super fun to play in real time. I did my sort of ususal thing and recorded 8 three minute 
recordings in 192kHz mono 24 bit. These samples are all somewhat steady states, but they all 
have a little life to them. This kit has my warmest recommendation. Briefly about the title of
this composition; I started just spontaniously naming the sample pack something with three
letters, like how I usually do. The circuit is called Simple & Radical so first I thought I'd 
use `snr` but then I realized that name is already in use in [SuperClean](https://github.com/danielmkarlsson/superclean). 
I settled on `sar` as in Simple And Radical. After I had gotten to a point where I felt content with 
how the music sounded I started thinking about Ukraine and about Russias illegal war and about their 
tactic of putting mines in fields where crops grow, making it impossible to steward the earth and 
grow the land. I thought then that the land is full of scars which will take great effort and a long 
time to heal. Sår is scars in Swedish and without the umlaut it's `sar`. Sår doesn't work as the name 
of a sample folder because computers. I translated scars into Ukrainian and I got шрами.

[Download this sample pack here.](https://f005.backblazeb2.com/file/log-packs/sar.zip) 
<br>

```text
~clean.lsf("~/snd/sar")
(
Routine{
    //s.record;
    //1.wait;  
    Pdef(0,
        Pseed(9991,
        Pbind(*[
            type: \cln,
            snd: \sar,
            bgn: Pdup(Pexprand(9, 99), Pwhite(0.0, 0.9)).trace(prefix: ", "),
            pan: Pseg([0.0, 1.0, 0.0], Pwhite(30.0, 60.0), \wel, inf),
            ddv: Pwhite(0.33, 11.0),
            ddp: Pkey(\ddv).linlin(0.33, 11.0, 1, 8),
            dur: 1 / Pdup(Pkey(\ddp), Pkey(\ddv)),
            jpr: 1/16,
            jpg: 32,
            num: Pdup(Pwhite(39, 119), Pxshuf((0 .. 7),inf)),
            spd: Pdup(Pwhite(39, 119), Pexprand(1/4, 3.75)).round(1/7),
            atk: Pexprand(4.0, 12.0),
            hld: 2,
            rel: Pexprand(4.0, 12.0),
            crv: 0,
            legato: 25,
            amp: Pseg(Pdup(2, Plprand(0.5, 2.0)), Pwhite(15.0, 30.0), \wel, inf),
            lpf: Pseg(Pdup(2, Phprand(32, 20000)), Pwhite(15.0, 30.0), \wel, inf),
            lhf: Pseg(Pdup(2, Phprand(0.025, 0.5)), Pwhite(15.0, 30.0), \wel, inf),
            cav: 1/2,
            cai: Pseg(Pdup(2, Pwhite(0.25, 1.0)), Pwhite(15.0, 30.0), \wel, inf),
            dfm: 1,
            dfg: Pseg(Pdup(2, Pwhite(1.0, 2.0)), Pwhite(100.0, 200.0), \wel, inf),
        ])
    )
    ).play;
    1140.wait;
    Pdef(0).stop;
    120.wait;
    s.stopRecoding;
}.play
)
```
<br>
<br>
<br><center>**swp**</center><br> 
<!-- <div class="dmk-player"data-playlist="swp/index.json"></div> -->

I recorded some feedback through through my Rundgång prototype and a small
metal plate using the nice mics and the nice micpres. I felt I was not
satisfied with the amount of width in the recording. I made an edit where I
split the file in half and then used only one channel from the original Stereo
file. I put one part of it in the left channel and the other in the right
channel. This reminds me of how I used to overdub and hard pan guitars back in
the day. I think this dual Mono idea still works, and also that it is a
classic. I think that I will use this technique again. Nice to pair this with
the recently added `flp` parameter that flips the channels in a Stereo file.
The folder contains a single three minute Stereo file recorded at 192kHz and
then exported at 48kHz, two octaves down.

[Download this sample pack here.](https://f005.backblazeb2.com/file/log-packs/swp.zip) 
<br>

```text
~clean.lsf("~/snd/swp")
(
Routine{
    //s.record;
    //1.wait;
    Pdef(0,
        Pseed(9,
            Pbind(*[
                type: \cln,
                snd: \swp,
                bgn: Pxshuf((0.0, 0.05 .. 0.5), inf),
                amp: Pseg(Pdup(2, Phprand(1/16, 0.55), Pwhite(5.0, 20.0), \sin, inf)),
                atk: 19,
                hld: 9,
                rel: 19,
                crv: 6.0,
                crt: -6.0,
                cav: 1/2,
                cai: Plprand(0.0, 1.0),
                pan: Pmeanrand(0.1, 0.9),
                legato: 99,
                stretch: Pseg(Pdup(2, Pmeanrand(1/4, 4.0)), Pwhite(5.0, 20.0), \sin, inf).trace,
                scale: Scale.chromatic,
                degree: Pdup(Plprand(1, 5), Pwrand2((0 .. 12), [20, 1, 20, 1, 20, 1, 20, 1, 20, 1, 20, 1, 20], inf)),
                val: Pwrand2([4, 5], [1, 20], inf),
                octave: Pdup(Pkey(\val).linlin(4, 5, 20, 1), Pkey(\val)),
                flp: Pseed(0, Pwhite(0, 1)),
            ])
        )
    ).play;
    1200.wait;
    Pdef(0).stop;
    240.wait;
    s.stopRecording;
}.play
)
```
<br>
<br>
<br><center>**lsh**</center><br> 
<!-- <div class="dmk-player"data-playlist="lsh/index.json"></div> -->

I made this music from the recordings I did of the lowest keyboard register on
the organ at Lötsjö kapell. I chose this registration because it had the fewest
overtones out of the registrations available. It's called _Rohrflöjt 4'_. The
perceived tonality in this music is entirely derived from the instrument
itself. The recordings are all 192 kHz, 24 bit. I recorded about three minutes
worth of every note in this registration using the same gain settings for each
one. The differences in amplitude and panning in the files themselves are a
result of putting the microphones in this one particular spot that I prefered
over other places I tried. Because I made such long recordings and there were
56 notes, this .zip file is pretty big. 11.83GB in fact. Please be advised. In
the code I liked how I was able to create a relationship between the stochastic
operations that yield the values for the volume envelope. I connected the sum
of that continously changing envelope calculation to the durations. I then
found that I could trim things down to get the density I wanted by dividing
those values by five. This gave the amount of overlapping notes I wanted. In
the past I've tried to limit the amount of data I put into RAM. With this one,
things really got out of hand tho. I was really struggling to get this to
play back without hickups, although thankfully recording did work. I might be
imagining things, but I think increasing the block size helps, so I included that
line at the top. This later got solved nicely when [redFrik](https://fredrikolofsson.com) 
added the ability to read sound files from disk to SuperClean.



[Download this sample pack here.](https://f005.backblazeb2.com/file/log-packs/lsh.zip) 
<br>

```text
Server.default.options.blockSize = 4096;
~clean.csf("~/snd/lsh");
(
Routine{
    //s.record;
    //1.wait;
    Pdef(0,
        Pseed(20,
            Pbind(*[
                type: \cln,
                snd: \lsh,
                atk: Phprand(16.0, 64.0),
                hld: Plprand(8.0, 64.0),
                rel: Phprand(16.0, 64.0),
                dur: ((Pkey(\atk) + Pkey(\hld) + Pkey(\rel)) / 5).trace,
                legato: Pkey(\dur) * 2,
                crv: 2.0,
                num: Plprand(0, 55),
                spd: Prand([1, 1/2], inf),
                pan: Pseq([0.5, Pmeanrand(0.0, 1.0, inf)], inf),
                cav: 1/4,
                amp: (0.7 / Pkey(\num).linlin(0, 55, 1, 3)) * 1.25,
                //aux: Pseed(2, Pxshuf(((0 .. 5) ++ (7 ..10)), inf)),
            ])
        )
    ).play;
    1140.wait;
    Pdef(0).stop;
    240.wait;
    s.stopRecording;
}.play
)
```
<br>
<br>
<br><center>**nsb**</center><br> 
<!-- <div class="dmk-player"data-playlist="nsb/index.json"></div> -->

A friend of mine who is a really great percussionist let me borrow one of his
bows. It's a custom made bow. It's made with fishing line and it is quite short
but it has at least the height of a Contrabass bow, might even be bigger than
that. This means you can really dig in. The short travel of the bow is great I
realize now after using it for a while. It affects the way I think about bow
changes a whole lot. Because they have to happen more often it creates this
kind of breathing or rhythm even. I really enjoy how these give a kind of life
to the sustained parts of the sound. The thing being bowed is a stainless steel
baking bowl. I've used these before a lot but not this particular one. This one
is my biggest one yet. It was fun to play it and to find a certain node and a
certain angle on the rim of the bowl. I recorded in my usual way with the fancy
mics and the double soundcard setup. There is a single 192kHz 24 bit Stereo
sound file at around three minutes in duration inside the sample folder.

[Download this sample pack here.](https://f005.backblazeb2.com/file/log-packs/nsb.zip) 
<br>

```text
~clean.lsf("~/snd/nsb")
(
Routine{
    //s.record;
    //1.wait;
    ~a = {|seed, pan, aux| 
        var b = 
        Pbind(*[ 
            type: \cln,
            snd: \nsb,
            dur: Plprand(1.0, 5.0),
            bgn: Plprand(0.0, 0.9),
            atk: 0.5 * Pkey(\dur),
            hld: 2.0 * Pkey(\dur),
            rel: 0.5 * Pkey(\dur),
            crv: 0.0,
            legato: 5 * Pkey(\dur),
            scale: Pdup(Plprand(13, 17), Pxshuf([
                Scale.harmonicMinor(\sept1),
                Scale.mixolydian(\sept2),
                Scale.aeolian(\sept1),
                Scale.enigmatic(\sept2),
            ], inf)),
            degree: Pdup(Plprand(3, 7), Pmeanrand(-7, 7)).round,
            octave: Pdup(Plprand(3, 7), Plprand(3, 5)),
            mtranspose: Pdup(Plprand(13, 17), Pmeanrand(-1, 3).round),
            lpf: Plprand(15000, 20000),
            acc: Pfunc{|ev| ev.use { ~freq.value() }},
            acp: Pfunc({|ev|
                var root = 60.0;
                var freq = ev[\acc];
                var xa = root / freq;
                var xb = 0.222; // Exponent
                xa.pow(xb);
            }),
            amp: (Pseg(Pseq([0.15, Plprand(0.25, 0.5, inf)], inf), Pseq([19, Plprand(3.0, 90.0, inf)], inf), \wel, inf) 
                * Pkey(\acp)).trace,
            cav: 2,
            cai: Pseg(Pseq([0, Phprand(0.0, 1.0, inf)], inf), Pseq([90, Plprand(3.0, 90.0, inf)], inf), \wel, inf),
            pan: pan,
            aux: aux, 
        ]);
        Pseed(seed, Pseq([b], inf)); 
    };
    Pdef(0, ~a.(3480, Pseq([0, Phprand(0.1, 0.5, inf)], inf), 0)).play; 
    Pdef(1, ~a.(5690, Pseq([1, Plprand(0.5, 0.9, inf)], inf), 1)).play; 
    (19 * 60).wait;
    Pdef(0).stop;
    Pdef(1).stop;
    240.wait;
    s.stopRecording;
}.play
)
```
<br>
<br>
<br><center>**bcm**</center><br> 
<!-- <div class="dmk-player"data-playlist="bcm/index.json"></div> -->

I bought a cymbal real cheap at a second hand store close to were I live. I
used the nice mics and the nice preamps to record it. I layed the cymbal on a
table with the bell down and bowed it over the side of the table. It was a
little finicky to get the mics in the right position because if I had them too
close the stereo field varied way too much with each bowing. I figured out
after a while that there was a mic position which was a little bit backed off
from as close as possible that kept the stereo field stable while still picking
up that low end that comes with proximity that I was looking to capture. This
kind of thing is just great on it's own and to my mind doesn't need much passed
just doing it. In the code I wanted to keep things simple and not do a lot. I
just wanted to have a slow and steady presenting of the material in some
different combinations of transpositions. I just had the one little idea where
I wanted the rounding of the playback speed to switch from 1/7 to 1/13 after
5/8 of the total duration. There are two files in the pack. One is about two
minutes long and the other is about four minutes long. Both were recorded at
192kHZ in stereo.

[Download this sample pack here.](https://f005.backblazeb2.com/file/log-packs/bcm.zip) 
<br>

```text
~clean.lsf("~/snd/bcm")
(
Routine{
    //s.record;
    //1.wait;
    Pdef(0,
        Pseed(9678,
            Pbind(*[
                type: \cln,
                snd: \bcm,
                num: Pwhite(0, 1),
                seg: Pseg([0, 1], 1200, \lin, 1),
                bgn: Pseq([Pwhite(0.0, 0.5, 1), Pwhite(0.5, 1.0, 1)], inf),
                amp: Pseg(Phprand(0.2, 0.4), Plprand(30.0, 90.0), \sin, inf),
                spd: Pdup(Plprand(2, 4), 
                    Plprand(1/4, 4.0).round(1 / Pkey(\seg).linlin(0.624, 0.625, 7, 13))).trace,
                atk: Phprand(9.0, 19.0),
                hld: Phprand(9.0, 19.0),
                rel: Phprand(9.0, 19.0),
                dur: Pwhite(1.5, 6.0),
                cav: 1,
                legato: 99,
                //aux: Pseed(0, Pxshuf((0 .. 10), inf)),
            ])
        )
    ).play;
    (19 * 60).wait;
    Pdef(0).stop;
    240.wait;
    s.stopRecording;
}.play
)
```
<br>
<br>
<br><center>**fms**</center><br> 
<!-- <div class="dmk-player"data-playlist="fms/index.json"></div> -->

I put a long, thin metal shelf on a box with a pickup and a speaker in it and
got some feedback going through the shelf itself. The shelf acts as a complex
resonator. I bought the shelf at a thrift store for real cheap. It was made by
the dominant cheap furniture franchise (you know the one), and has since been
discontinued. [My friend Jon](https://thehumancomparator.net/) made the box
with a pickup and a speaker in it. It's called _Rundgång_. I have grown quite
fond of this contraption. It's an interesting iterator. I don't reach for it
quite as often as a bow, but that's alright. It's very good at what it does. It
felt nice to make another track using it with the nice mics. The feedback
teeters through some steady states and I vary the amplitude with small nudges
now and then, striving to maintain those delicate steady states. I used my
regular recording setup. The result was one Stereo file recorded at 192kHZ. In
the code it felt very liberating to be doing a kind of compacti glissandi music
again. I've been wanting to get back to making a music which allows for a wider
gamut of pitch relationships for some time now. I am grateful for the degree of
detailed variation which is possible utilizing the parameters that deal with
the glissandi. It's a subtle thing, but I enjoyed making a connection between
the amount of glissando and the panning position.

[Download this sample pack here.](https://f005.backblazeb2.com/file/log-packs/fms.zip) 
<br>

```text
~clean.lsf("~/snd/fms")
(
Routine{
    //s.record;
    //1.wait;
    Pdef(0,
        Pseed(3471, 
            Pbind(*[
                type: \cln,
                snd: \fms,
                dur: Plprand(1.0, 4.0),
                bgn: Pwrand2([Pwhite(0.0, 0.5, 1), Pwhite(0.5, 1.0, 1)], [2, 1], inf),
                scale: Scale.bartok(\sept2),
                octave: Pdup(9, Pmeanrand(3, 7)),
                degree: Pdup(Phprand(6, 9), Pmeanrand(-7, 7)),
                mtranspose: Pdup(Phprand(4, 9), Phprand(0, 7)),
                harmonic: Pdup(Phprand(2, 9), Phprand(1, 4)),
                calcFreq: Pfunc{|ev|ev.use{ev.freq.asStringPrec(48).postln}},
                frq: Pfunc{|ev|ev.use{ev.freq}},
                amp: Pseg(Pmeanrand(0.333, 0.666), Phprand(30.0, 90.0), \sin, inf) / Pkey(\frq).linlin(209, 4735, 1, 4),
                bnd: Pmeanrand(-0.25, 0.25),
                bno: Pmeanrand(3.0, 9.0),
                bnt: Pmeanrand(3.0, 9.0),
                pan: Pkey(\bnd).linlin(-0.25, 0.25, 0.1, 0.9),
                atk: Pwhite(9.0, 18.0),
                hld: Pwhite(3.0, 9.0),
                rel: Pwhite(3.0, 9.0),
                crv: 0,
                legato: 99,
                cav: 1,
                cai: Pseg(Plprand(0.0, 1.0), Phprand(30.0, 90.0), \sin, inf),
                stretch: Pseg(Phprand(0.5, 1.0), Phprand(30.0, 90.0), \sin, inf),
                //aux: Pseed(0, Pxshuf((0 .. 10), inf),
            ])
        )
    ).play;
    (19 * 60).wait;
    Pdef(0).stop;
    240.wait;
    s.stopRecording;
}.play
)
```
<br>
<br>
<br><center>**phg**</center><br> 
<!-- <div class="dmk-player"data-playlist="phg/index.json"></div> -->

I wanted to make a slower and more subtle music than what I’ve been making as
of lately. Still I wanted for there to be changes, but just more gradual. Also
I wanted to see if I could do something with fewer parameters which still felt
interesting to me. I wanted to take a conscious step away from complexity and
just present more of a phenomenon or a kind of state. I knew I wanted to come
back to glass because it has a very distinctive sound to it which kind of
reminds me of additive synthesis. I like how the transpositions add up and how
the speed of the iteration follows suit. A while back I rescued the mechanical
guts of a piano from an old piano technician that would have thrown them away
otherwise. I’ve been slowly taking it apart and saving the felt hammers. For
this recording I used one of those felt hammers on a fairly large glass bowl.
It’s the kind you might use for a salad or maybe some fruit. The shape of the
bowl is quite plain. It’s more of a kitchen utility. I got it for next to
nothing at a thrift store a while back. I used my new mics real close and my
regular setup with my mic pres and soundcard. I used the piano hammer and
played real soft right in between the mics. One 3 minute recording at 192KHz.
That little code block has a couple of connections between parameters using
Pkey. I had the idea that I wanted there to be a gap in the range. I made that
case sit up a little more as what it is by applying a lowpass filter at 200Hz
only for that lowest octave. I also gave the low end a boost in amplitude. I’ve
used linear mapping for this lately, and I think I prefer it now over
exponential mapping for this kind of spectrum tilt despite that being
counterintuitive.

[Download this sample pack here.](https://tinyurl.com/42hz8xvt) 
<br>

```text
~clean.lsf("~/snd/phg")
(
Routine{
    //s.record;
    //1.wait;
    Pdef(0,
        Pseed(3626,
            Pbind(*[
                type: \cln,
                snd: \phg,
                dur: Plprand(4.0, 8.0),
                legato: 199,
                spd: Pdup(Plprand(1, 3), Plprand(1/32, 7.0).round(1/12)),
                octave: Pkey(\spd).linlin(1, 1/16, 4, 5),
                lpf: Pkey(\octave).linlin(4, 5, 200, 20000),
                rel: Pkey(\spd).linlin(1/32, 7.0, 180.0, 90.0),
                crv: -4,
                pan: Pwhite(0.0, 1.0),
                amp: (Plprand(0.75, 1.5) / Pkey(\spd).linlin(1/16, 4.0, 1/8, 4)).trace,
                cav: 1/2,
            ])
        )
    ).play;
    (17 * 60).wait;
    Pdef(0).stop;
    240.wait;
    s.stopRecording;
}.play
)
```
<br>

<br><center>**thb**</center><br> 
<!-- <div class="dmk-player"data-playlist="thb/index.json"></div> -->

A while back I borrowed two ebows from a friend who lives close to where I
live. That got the grand total up to three ebows for a while. At first I tried
my big Zither thinking that it would work well with changing to new strings a lot.
That was not working, so I went the other route and I got out my smallest little
red Zither that I bought for five euros at a fleamarket in Berlin a long time
ago. In some weird way I feel like that is my best one. I have the strings all
tuned real low on that one. I lined up all three ebows at the bridge end of the
Zither and then slowly moved one at a time a tiny bit forward. Because the
strings are tuned so low there's all kinds of strange glissandos and
interactions between the ebows and the strings. The ebows themselves assume the
role of preparations, interfering with the strings physically. I made the
recordings with my Line Audio CM4's, because this was a while back, so I didn't
have the new mics yet. It was tricky to get a good placement of the mics
because the Zither is so tiny and it was very crowded with ebows all over it. I
got the mics as close as I could. Later, when I was doing the editing, I
decided that the stereo field was off somehow, in a way that is hard to
explain. After I had something cooking with the code I went back and split the
two stereo files from the two takes apart, and that made everything better. I
think that is cool. You have two takes, and each take has two mono versions
with slightly different phase information in them. The sample rate resolution
is 192KHz. When I had originally made these recording and got halfway working
on the code, I put the piece to one side, because I felt I had already done
Zither, and that I should focus on getting other instruments recorded. I love
working with Zithers though and now that I've done some work putting together
some ensemble music, I don't think that's a problem any more. Different styles
of playing with different preparations yield very different sounding results,
even though the recordings might be done on the same instrument. I am very happy
and grateful that I get to do whatever I want to do when I am making music. One
take is a about 15 minutes and the other take is obout 19 minutes. In the code
I ended up doing something a little new, for me at least, and I think that
this little idea could prove very useful in future. I realised that I needed to
change values for `\cav`, which is a global effect, much more often than I
wanted to produce new events and trigger more samples to play back. I realized
I needed to take care of that because in the beginning of the track I could
hear the send into the reverb was being updated far too seldomely, so it sounded
terraced. I did not want that for this music, so I came up with this `Ppar`
wrapping around the two `Pbind` objects, with a single `Pdef` wrapped at the
top to keep a single name for when I need to stop the carousel. The lower `Pbind`
only handles the send into the reverb, which at that hastened update rate
makes for a buttery smooth interpolation for the reverb send. Since it is a
global effect, it works. It looks kind of strange like that I think, but that's
as few lines as I could get it to do the job in. I also took some time to add
some form enhancing details on various keys. Especially in the introduction
where a faint sound is heard in one channel, and then after a while the reverb
starts filling out the empty channel. It's subtle, but it's there. I used
various `Pkey` references and also deliberately allowing some `Pseq` objects to
get stuck at various points. When I first encountered this behaviour in `Pseq`
I regarded it as a kind of bug, or at least an unwanted outcome. Now it has
become a valuable stategy instead. I enjoy noticing when I've changed my mind
about things.

[Download this sample pack here.](https://tinyurl.com/5kffczmj) 
<br>

```text
~clean.lsf("~/snd/thb");
(
Routine{
	//s.record;
	//1.wait;
	Pdef(0,
		Pseed(2883,
			Ppar([
				Pbind(*[
					type: \cln,
					snd: \thb,
					num: Pxshuf((0 .. 3), inf),
					bgn: Pwhite(0.0, 1.0),
					atk: Plprand(30.0, 100.0),
					hld: Pmeanrand(30.0, 100.0),
					rel: Phprand(30.0, 100.0),
					crv: Pdup(Pseq([1, 1, inf], 1), Pseq([8, 4, 2], 1)),
					amp: Pseq([0.33, Pdup(Pwhite(1, 8), Plprand(0.33, 0.88))], inf),
					dur: (300 / Phprand(1.0, 9.0)),
					pan: Pseq([1, Pmeanrand(0.0, 1.0)], inf),
					cav: 1.5,
					cai: Pseg([0, 1, 0.5], 560, \wel, inf),
					spd: Plprand(Pkey(\cai).linlin(0.0, 1.0, 0.5, 0.33), Pkey(\cai).linlin(0.0, 1.0, 2.0, 1.0)),
					bnd: Pmeanrand(Pkey(\cai).linlin(0.0, 1.0, 0.0, -1.0), Pkey(\cai)) / 10,
					bno: Pkey(\atk) + Pkey(\hld) + Pkey(\rel) / 2,
					bnt: Pkey(\atk) + Pkey(\hld) + Pkey(\rel) / 2,
					sustain: 300,
					legato: 300,
				]),
				Pbind(*[
					type: \cln,
					snd: \sin,
					amp: 0,
					dur: 1/99,
					cav: 0.75,
					cai: Pseg([0, 1, 0.5], 560, \wel, inf).trace,
				])
			])
		)
	).play;
	1050.wait;
	Pdef(0).stop;
	240.wait;
	s.stopRecording;
}.play
)
```
<br>

<br><center>**pno**</center><br> 
<!-- <div class="dmk-player"data-playlist="pno/index.json"></div> -->

I bought a tiny Piamino for real cheap. It only has 55 keys. It is not a good
idea to try to move a piano on your lonesome so, I paid professional piano
movers to bring it up the stairs to the apartment. I definitely think it was a
fair price for what they did. After I got it into the livingroom I spent some
time tuning the piano to get it roughly up to pitch. It was about a half step
sunk. I went through and tuned it a bunch more times because I was curious if I
could get it into a passable state. I could not. It's real finicky work. You
need to have gone to school for that kind of work. It just so happens I have a
friend who I used to play in bands with who later went to school to learn how
to tune pianos. He came over and I sat with him when he tuned the piano. It was
such a trip. As a listening exercise it is really trippy is what I mean here.
My friend did a really good job and the piano is at the time of writing still
in tune. I need to be more precise with what I mean by in tune. I've come to
regard the piano as an instrument to be very strongly entangled with the way
that it is commonly tuned. That tuning is ET12. Not only that but there is also
a kind of stretching that is most prononuced in the lower register. I wanted to
have access to that. Playing it now, in a particular way, with the softening
pedal pressed down, and with a light touch, I am reminded of the first pinao I
ever had access to as a kid. It was at my aunt's house. I knew I had to have
that most common of tunings because that's how my aunt's piano was tuned. I sat
and noodled with that kind of "composer's piano", playing softly, for long
stretches. I started to notice that the mechanical action of the keys are
different when played very softly. It affects the speed at which you can play
new notes, I'm guessing it's because the hammer does not have time to travel
back all of the way. There is a delicate way of playing that can be reached
there. A way of playing that is unique to this particular instrument. I
recorded C's in four octaves. I felt that struck the balance I am looking for.
Sampling every key five times at different velocites is not what I want to do.
In the recordings I made I oscillate both in tempo and velocity over that
threshold which is unique to that particular key, which in turn affects the
phrasing, as the hammer at times does not have time to fall back entirely
before being pushed forward again. Each recording is a different length
somewhere between two and three minutes. This was a very strong experience. It
felt very hypnotic and eerily familar somehow. Like reliving something vaguley
recolleceted from childhood. The mind couldn't really remember. Not in any
susbstantial detail, not really. It was more of a feeling. Thinking back now I
think of it more as a ritualised channeling than anything else. I finally got
those new microphones I've been waiting for and used them to record. They are a
matched pair of Sennheiser MKH-8040. They are the best microphones that I have
ever gotten a chance to use. Last time I had access to them was when I did my
master. So now I have the complete kit. The mics, preamps and soundcard that I
like. Nice feeling of wholeness. I put the microphones extremely close. Right
up next to where the hammer meets the string. I changed up the microphone
positioning for each of the recordings. There are four samples recorded at
192KHz. In the code there was a tricky bit that took a while to get right. I
think now once I have the solution I foresee having use of it in future. The
problem I had was that when low notes got chosen and held for longer durations
the music got a kind of empty feeling to it. I got around that by having
pitches under a certain threshold multiply the durations by a factor of eight.
This led to an increase in amplitude and in strain on my CPU when there were
longer passages with this fast material. I wanted to have some of those fast
low notes be rests instead, so that I could thin the music out a little for
just the low fast notes. I got in trouble for a bit and I couldn't figure out
why it wasn't working and in the end I figured out it was because of order of
execution. The `type: ` key is always the first thing I set so it is such a
common pattern I couldn't think outside of that. It looks weird to me to have
that key all the way at the bottom but that's how it needs to be. Otherwise it
makes up it's own value for duration. The default is 1 and that does not give
an error and was tricky for me to work out. I am imagining this could be used
as a kind of life insurance or speed limit. In certain situations it would be
better for me to generate pauses instead of totally choking up my CPU.

[Download this sample pack here.](https://tinyurl.com/b9vxbe5d) 
<br>

```text
~clean.lsf("~/snd/pno")
(
Routine{
    //s.record;
    //1.wait;
    Pdef(0,
        Pseed(2356,  
            Pbind(*[
                snd: \pno,
                atk: 15.0,
                hld: 15.0,
                rel: 15.0,
                crv: 0.0,
                bgn: Plprand(0.0, 0.5),
                scale: Pdup(Plprand(999, 9999), Pxshuf([
                    Scale.ionian,
                    Scale.superLocrian,
                    Scale.lydian,
                    Scale.phrygian,
                    Scale.neapolitanMajor,
                    Scale.dorian,
                    Scale.mixolydian,
                    Scale.locrian,
                ], inf)),
                degree: Pdup(Plprand(19, 199), Pwhite(-7, 0)),
                octave: Pdup(Plprand(29, 299), Pwhite(3, 5)),
                calcFreq: Pfunc{|ev|ev.use{ev.freq.asStringPrec(48).postln}},
                frq: Pfunc{|ev|ev.use{ev.freq}},
                dur: (Pseg(Plprand(30.0, 40.0), Plprand(30.0, 90.0), \wel, inf) / 256 
                    / Pkey(\frq).expexp(66, 67, 8, 1)),
                num: Pdup(Plprand(9, 99), Pxshuf((0 .. 3), inf)),
                pan: Pmeanrand(0.0, 1.0),
                amp: Pseg(Plprand(1/4, 1/2), Plprand(30.0, 90.0), \wel, inf),
                cai: Pseg(Phprand(0.1, 1.0), Plprand(30.0, 90.0), \wel, inf),
                cav: 1/3,
                legato: 699.0,
                stretch: Pseed(0, Pseg(Plprand(1.0, 3.0), Plprand(30.0, 90.0), \wel, inf)),
                type: Pfunc {arg event;
                    if (event.dur < 0.02) {
                        [\cln, \rest].choose
                        
                    } {
                        \cln
                    }
                },
                //aux: Pseed(1, Pxshuf((0 .. 10), inf)),
            ])
        )
    ).play;
    (19 * 60).wait;
    Pdef(0).stop;
    240.wait;
    //s.stopRecording
}.play
)
```
<br>

<br><center>**cbg**</center><br> 
<!-- <div class="dmk-player"data-playlist="cbg/index.json"></div> -->

A while back I found a cigar box guitar for real cheap at a second hand store
close to where I live. It was handbuilt. I think whoever made it spent a lot of
time on it, but in the end regarded it as a disappointment. It took me quite a
while to figure out how to play it and get good recordings out of it. It is not
very loud. I think that has something to do with the rather small and thin
balsam wood box, which also lacks a sounding hole. Another interesting design
choice is the bridge which is made out of metal. The bridge is slanted at an
angle and the way the broom handle is set through the box lets the string have
quite a bit of close proximity to the rather elongated bridge. The result is a
metallic buzzing sound. At first this was a lot more subtle because I was
playing it with a pick and trying to get different pitches out of it by placing
my left index finger on the string and resting it against the broom handle.
This made the string muted and the sustain very short. I tried it with an ebow.
Took me a while to realize that the ebow needed to be propped up on one side to
get to the right height without muting the string when the instrument was laid
on it's back. It was starting to sound good at that point, but it was still too
faint. I dug out an old idea I had years ago. I soldered together three 9 volt
battery clips so that they can supply the ebow with 18 volts coming from two 9
volt batteries. This works fine and is probably sort of what the Bass ebow is
doing. The string got a little too chaotic with all of that juice at low
tensions, so I added a voltage regulator in between the batteries and the ebow.
This way I could dial in the voltage somewhere between 9 and 18 volts. It
really felt like a goldilocks kind of just right state. I tuned the string as
low as I could without the fundamental falling apart and then tuned it up to
the nearest et12 semitone. I then proceded to record in my usual way at 192kHz.
I got the mics real super close to where the front of the ebow was, about
halfway up the box. I was real particular about tuning it and I made 90 second
takes. Each one of these tensions yielded a unique interaction between the
string and the ebow that I really got a kick out of. So I made one recording
for each semitone. I got up to 17 of them, then the tension got too high and
the signal coming from the string got too low to record properly. I also did
not want to break the string as I think it would be difficult to replace given
the design of the instrument. Added a bit of fading in and out and there you
go. In the code I finally got to use the sequencing the tunings and the scales
separately trick that I had been waiting to make use of for a while. In a way I
kind of ruined it by having the `num` key actually do `chromatic(\et12)`
transpositions. For the longest time things where not working, but then after
days of thinking about it I remembered the old Feldman trick of slowing things
down until I got everything to my liking. I also fought for a long time to have
this one in a higher register but I was not feeling it. Taking the whole range
down an octave really helped. I think it's that metal bridge with that great
buzzing sound that got me in trouble there for a while. It's a wild sound and
it has all of this high frequency energy going on inside of it.

[Download this sample pack here.](https://tinyurl.com/yzcts3r5) 
<br>

```text
~clean.lsf("~/snd/cbg");
(
var scales = Pseed(0, 
    Pxshuf([
        Scale.augmented,
        Scale.bartok,
        Scale.minor,
        Scale.harmonicMinor,
        Scale.mixolydian
    ], inf)
).asStream;

Routine{
    //s.record;
    //1.wait;
    Pdef(0,
        Pseed(1240,
            Pbind(*[
                type: \cln,
                snd: \cbg,
                num: Pdup(Plprand(1, 15), Phprand(0, 16)),
                dur: Plprand(1.0, 8.0) * 3,
                bgn: Plprand(0.0, 0.5),
                tun: Pdup(Plprand(10, 20), Pxshuf([
                    Tuning.pythagorean, 
                    Tuning.just, 
                    Tuning.sept1, 
                    Tuning.sept2, 
                    Tuning.vallotti,
                    Tuning.wcSJ,
                ], inf)),
                scale: Pdup(Plprand(10, 20), Pfunc {|ev| 
                    var scale = scales.next;
                    scale.tuning = ev[\tun];
                    "% : %".format(scale.name, scale.tuning.name).debug('scale');
                    scale;
                }),
                degree: Pdup(Plprand(10, 20), Plprand(0, 7)),
                octave: Pdup(Plprand(10, 20), Pmeanrand(3, 5)),
                mtranspose: Pdup(Plprand(111, 222), Plprand(-5, 2)),
                calcFreq: Pfunc{|ev|ev.use{ev.freq.asStringPrec(48).postln}},
                frq: Pfunc{|ev|ev.use{ev.freq}},
                legato: 999,
                sustain: 999,
                atk: Plprand(9.0, 15.0) * 2,
                hld: Plprand(11.0, 17.0) * 2,
                rel: Plprand(7.0, 13.0) * 4,
                crv: Phprand(2.0, 6.0),
                pan: Pdup(Plprand(1, 2), Pmeanrand(0.0, 1.0)),
                amp: (Pseg(Plprand(1/3, 1/2), Plprand(15.0, 115.0), \wel, inf) 
                    / Pkey(\frq).expexp(130, 523, 0.75, 1.0) * Pkey(\num).linexp(0, 23, 1, 3) / 3).trace,
                cav: 2/3,
                cai: Pseg(Phprand(0.0, 1.0), Phprand(90.0, 180.0), \wel, inf),
                //aux: Pseed(0, Pxshuf((0 .. 10), inf),
            ])
        )
    ).play;
    (19 * 60).wait;
    Pdef(0).stop;
    240.wait;
    s.stopRecording
}.play
)
)
```
<br>

<br><center>**vcl**</center><br> 
<!-- <div class="dmk-player"data-playlist="vcl/index.json"></div> -->

A friend from England came to stay in the apartment during a guest composer
residency at EMS. A buddy of mine who lives nearby lent a Cello to my friend
from England for the duration of the residency. I negotiatied to hang on to the
Cello for a lil bit after my friend from England left,  before giving it back
to my buddy who lives near by. This allowed me to make some recordings with the
instrument. It was fun to play it, and I got all hopnotized playing the lowest
open string. I sat up my usual dual soundcard rig. I placed one microphone real
close right at the bridge, and one microphone real close at the edge of the
fretboard. Both microphones faced flat onto the string. These two signals I
then panned hard left and right and increased the width of the stereo field in
post. I got pretty far into making music before I felt I had to go back and
edit out the bow changes. I kept at it making the music with no bow changes but
then I realized that I needed to have some bow changes in there some of the
time in order to measure out time. I felt as though I needed some fixtures in
the scenery along the road, otherwise I felt I was stuck in place. I did some
fun stuff in the code that I won't usually do. I made some linear sequences of
scale degrees. I wouldn't call these melodies because I keep changing the
scale. I made one sequence that starts on each one of the eight scale degrees I
was using. These linear sequences all have their own amount of steps in them.
That's a little nod to isometric stuff there even though, as stated above, the
switching out of scales adds this layer of interpretation on top there. All of
the sequences deplete all of the eight scale degrees. This idea keeps coming
back. I want to present all of the available pitches because it yields a kind
of variation that I'm fond of. I connected the envelopes to the durations which
then get stretched back and forth which gives the music a kind of breathing
that I enjoyed. There are these peaks and valleys of density. The way this
panned out felt fresh to me. There is some crosstalk between parameters there
that gives the music a sense of direction. I exported two stereo file at
192kHz. One with bow changes and one without them. The latter is an edit of the
former.

[Download this sample pack here.](https://tinyurl.com/4ks95yzp) 
<br>

```text

~clean.lsf("~/snd/vcl")
(
Routine{
    //s.record;
    //1.wait;
    Pdef(0,
        Pseed(10,
            Pbind(*[
                type: \cln,
                snd: Pseq([\vcl, Pwrand2([\vcl, \r], [1, 2], 1)], inf),
                num: Pseq([1, Pdup(Plprand(1, 8, 1), 0)], inf),
                dur: Plprand(5.0, 11.0),
                scale: Pdup(Plprand(15, 30), Prand([
                    Scale.ionian(\wcSJ),
                    Scale.mixolydian(\wcSJ),
                    Scale.whole(\wcSJ),
                    Scale.phrygian(\wcSJ),
                    Scale.bartok(\wcSJ),
                ], inf)),
                degree: Pdup(Plprand(3, 7), Pxshuf([
                    Pseq([0, 3, 5, 4, 6, 2, 1, 4, 3, 6, 5, 7], 1),
                    Pseq([1, 0, 3, 2, 4, 3, 6, 5, 7], 1),
                    Pseq([2, 3, 0, 7, 5, 3, 4, 2, 5, 1, 3], 1),
                    Pseq([3, 7, 1, 2, 0, 6, 5, 4, 6, 7, 4, 2], 1),
                    Pseq([4, 5, 3, 2, 6, 1, 0, 7, 5, 6], 1),
                    Pseq([5, 4, 7, 6, 7, 3, 5, 1, 2, 0, 4, 5, 3], 1),
                    Pseq([6, 7, 6, 5, 6, 4, 5, 3, 2, 4, 1, 0], 1),
                    Pseq([7, 0, 6, 1, 5, 2, 4, 3], 1),
                ], inf)),
                octave: Pseed(5, Phprand(4, 6)),
                bgn: Pwhite(0.0, 0.9),
                amp: Plprand(0.15, 0.55) * Pkey(\octave).linlin(4, 6, 1.5, 0.75),
                crv: 0,
                atk: Pkey(\dur) * 7,
                hld: Pkey(\dur) * 3,
                rel: Pkey(\dur) * 5,
                legato: 999,
                cav: 2/3,
                pan: Pseq([0.5, Plprand(0.1, 0.9, 1), Phprand(0.1, 0.9, 1)], inf),
                stretch: Pseg([1, 1/8, 1, 8, 1], Pmeanrand(20.0, 40.0), \sin, inf).trace,
                //aux: Pxshuf((0 .. 10), inf),
            ])
        )
    ).play;
    (19 * 60).wait;
    Pdef(0).stop;
    240.wait;
    s.stopRecording;
}.play
)
```
<br>

<br><center>**gvs**</center><br> 
<!-- <div class="dmk-player"data-playlist="gvs/index.json"></div> -->

The other day when I was making the rounds to the local second hand shops and
flea markets, like I do. In the middle of the vaguely familar, there stood upon
a shelf a golden vase. It was of some unknowabale alloy. Probably copparish in
reality, but the neurons in charge of finding gold tones clearly won out. I
took my headphones out of my ears, held the vase close to one ear and struck it
softly with the palm of my hand. I could tell it was special. Very resonant.
Later, when I got home, I used a cartoon-chicken-yellow electric oatdrank latte
wisk on that golden vase. The metal spool on the wisk has come halfway off of
the rod. This made for a very interesting recording, as I have come to realize
more and more of late, metal on metal action has a ton of that high frequency
energy I am looking for. The signal chain during recording was as is now
custom. In post I added a small increase in energy at 32Hz and applied a tiny
bit of transparent limiting, being careful to keep as much of the dynamics as I
could. I exported a single stereo file at 192kHz.

[Download this sample pack here.](https://tinyurl.com/49xt448j) 
<br>

```text
~clean.lsf("~/snd/gvs")
(
Routine{
    //s.record;
    //1.wait;
    Pdef(0,
        Pseed(2,
            Pbind(*[
                type: \cln,
                snd: \gvs,
                dup: Plprand(5, 11),
                dur: Plprand(1.0, 9.0),
                scale: Scale.minor(\just),
                degree: Pdup(Pkey(\dup), Plprand(0, 7)),
                octave: Pdup(Pkey(\dup), Plprand(4, 5)),
                mtranspose: Pwhite(-4, 4),
                bgn: (Plprand(0.0, 0.5) + Pwrand2([0, 1], [50, 1], inf)).trace,
                atk: Pkey(\bgn).linlin(0.0, 0.5, 1.0, 19.0),
                hld: Plprand(19.0, 29.0),
                rel: Plprand(19.0, 29.0),
                crv: 6,
                amp: Pseg(Plprand(0.125, 1.0), Plprand(15.0, 60.0), \wel, inf),
                legato: 99,
                pan: Pmeanrand(0.1, 0.9),
                cav: 1,
                cai: Pseg(Plprand(0.0, 1.0), Plprand(15.0, 60.0), \wel, inf),
                hpf: Pwrand2([20, 5000, 10000], [8, 4, 1], inf) + Pkey(\bgn).linlin(0.0, 1.0, 0, 8000),
                // aux: Pseed(0, Pxshuf((0 .. 10), inf)),
            ])
        )
    ).play;
    (19 * 60).wait;
    Pdef(0).stop;
    240.wait;
    s.stopRecording;
}.play
)
```
<br>

<br><center>**rec**</center><br> 
<!-- <div class="dmk-player"data-playlist="rec/index.json"></div> -->

I was looking for cheap instruments on used instrument sites, like I do, when I
saw that you can get a Recorder for real cheap. Then I had a faint recollection
that there might be a Recorder somewhere in the house, so I asked my wife
who replied "I actually have two!" We had a go playing together. It is almost
impossible to stay in tune while sustaining long durations. Overblowing is also
a very likely outcome. This made for a very silly and fun little interaction.
At that point I almost decided against trying to make one of these pieces, but
then I thought that I should give it a try _because_ I had identified it as a
difficult task. I recorded using the same mics I always use, with the same
double soundcard setup at 192kHz. In the end I exported the files two octaves
down at 48kHz. I was listening in headphones with realtime passthrough when I
was recording and it was impossible to get any kind of stability going at low
pitch and amplitude with close micing, so I had to switch things up. I stepped
away from the mics to the other side of the room and turned around so I was
facing away from the microphones. The Alto Recorder was a total no go. The most
stable pitch turned out to be the highest pitch on the Soprano Recorder. I
recorded five breaths worth of that. I had to do a lot of editing, and as a
result the files have different durations. That editing also led to some
inconsistencies in how the waveforms lined up during crossfades which I felt
was interesting. There are quite a few different crossfades throughout the five
files which all ended up having their own unique little waverings. I have grown
to understand that these kinds of imperfections are of great value later in the
process when I stack a bunch of different transpositions on top of each other.
I finally got around to using an old idea for scale material that I used to do
all the time in the before times but now it's been ages since the last time I
did it. I used ten out of the twelve available pitches. I think any ten out of
the twelve work. I just really dig that omisson of any two out of the twelve. I
am happy I had a chance to come back to that idea and that I still feel that it
works like a charm. 

[Download this sample pack here.](https://tinyurl.com/yaj6hcwp) 
<br>

```text
~clean.lsf("~/snd/rec")
(
Routine{
    //s.record;
    //1.wait;
    Pdef(0,
        Pseed(3565,
            Pbind(*[
                type: \cln,
                snd: \rec,
                drv: Plprand(1.5, 15.0),
                dur: Pdup(Pkey(\drv).linlin(1.5, 15.0, 8, 1), Pkey(\drv)),
                num: Pxshuf((0 .. 4), inf),
                atk: Plprand(15.0, 45.0),
                hld: Plprand(15.0, 45.0),
                rel: Plprand(15.0, 45.0),
                crv: Pmeanrand(-8.0, 4.0),
                pan: Pmeanrand(0.1, 0.9),
                bgn: Plprand(0.0, 0.1),
                scale: Scale.chromatic,
                degree: Pdup(Plprand(9, 21), Prand((0 .. 3) ++ (5 .. 8) ++ (10 .. 12), inf)),
                legato: 32,
                octave: Pmeanrand(1, 6),
                calcFreq: Pfunc{|ev|ev.use{ev.freq.asStringPrec(48).postln}},
                frq: Pfunc{|ev|ev.use{ev.freq}},
                amp: (Pseg(Plprand(1/11, 1/4), Plprand(30.0, 90.0), \wel, inf) * Pkey(\freq).expexp(65, 587, 2.0, 0.75)),
                brf: 200,
                hpf: 200,
                cav: 1,
                cai: Pseg(Phprand(0.0, 1.0), Phprand(30.0, 90.0), \wel, inf),
            ])
        )
    ).play;
    (19 * 60).wait;
    Pdef(0).stop;
    240.wait;
    s.stopRecording;
}.play
)
```
<br>

<br><center>**met**</center><br> 
<!-- <div class="dmk-player"data-playlist="met/index.json"></div> -->

I've been collecting bowls and various other metal objects from thrift stores
for quite some time now. I for sure got the idea from first hearing and then
playing with [Henrik Olsson](http://bjornbergborg.blogspot.com/p/henrik-olsson.html) 
who is a truly gifted percussion player. I selected four of these metal objects
and recorded myself playing them with a mallet. I used my usual double sound
card setup. I tried to play in time, or in the same tempo within each take. I
then actively tried to forget about the tempo I had used in the previous take.
Which was not that hard to do, as it took me quite some time to reposition my
two Line Audio CM3 microphones and set the gain for each take. There are four
takes. These recordings went through quite a bit of post processing. I squeezed
the dynamics in a couple of different ways using multiband and single band
compression. I also spent quite a bit of time sculpting the transients. There
was a lot of back and forth there. The four files all have their fade ins and
outs baked in. I recorded and exported at 192kHz.

[Download this sample pack here.](https://tinyurl.com/4cw9c7jc) 
<br>

```text
~clean.lsf("~/snd/met")
(
Routine{
    //s.record;
    //1.wait;
    Pdef(0,
        Pseed(5,
            Ppar(
                3.collect{
                    Pspawn(
                        Pbind(*[
                            method: \seq,
                            pattern: Pfunc{|ev|
                                Pbind(*[
                                    type: Pwrand2([\cln, \r], [1, 4], inf),
                                    snd: \met,
                                    num: Pxshuf((0 .. 3), inf),
                                    dur: 2.0 / Pdup(Plprand(3, 9), Plprand(9.0, 17.0)),
                                    legato: 239,
                                    pan: Pmeanrand(0.0, 1.0),
                                    scale: Scale.chromatic(\sept1),
                                    degree: Pdup(Plprand(1, 3), Plprand(-9, 3)),
                                    octave: Plprand(3, 5),
                                    calcFreq: Pfunc{|ev|ev.use{ev.freq.asStringPrec(48).postln}},
                                    frq: Pfunc{|ev|ev.use{ev.freq}},
                                    amp: Pseg(Plprand(-16.5, -7.5), Plprand(5.0, 90.0), \wel, inf).dbamp /  Pkey(\frq).expexp(39, 294, 1, 2),
                                    atk: Phprand(12.0, 16.0),
                                    hld: Pmeanrand(8.0, 32.0),
                                    rel: Phprand(16.0, 64.0),
                                    crv: Pmeanrand(4.0, 8.0),
                                    sustain: Phprand(32.0, 128.0),
                                    bgn: Plprand(0.0, 1.0),
                                    cav: 3,
                                    cai: Pseg(Phprand(0.0, 1.0), Plprand(5.0, 90.0), \wel, inf),
                                    hpf: Pseg(Plprand(160, 1200), Plprand(5.0, 90.0), \wel, inf),
                                    fsh: Pdup(Plprand(3, 13), Pwhite(-5.0, 3.0)),
                                    fsm: Pdup(Plprand(3, 13), Pwhite(-5.0, 3.0)),
                                    hai: Pseg(Phprand(0.0, 1.0), Plprand(5.0, 90.0), \wel, inf),
                                    hal: 0.75,
                                    rts: 15,
                                    hlp: 4000,
                                    dla: 1,
                                    dlf: 0,
                                    dlt: 16,
                                    dls: Pseg([Pdup(2, Plprand(0.0, 1.0)), 0], Plprand(5.0, 90.0), \wel, inf),
                                    stretch: Pseg([Pdup(2, Plprand(1.0, 4.0)), 1], Plprand(5.0, 90.0), \wel, inf),
                                ])
                            },
                        ])
                    )
                }
            )
        )
    ).play;
    (19 * 60).wait;
    Pdef(0).stop;
    240.wait;
    s.stopRecording;
}.play
)
```
<br>

<br><center>**trp**</center><br> 
<!-- <div class="dmk-player"data-playlist="trp/index.json"></div> -->

I made some recordings of a trumpet I bought ages ago when the municipality was
replacing it's music school instruments and selling the old ones at an
amazingly cheap yard sale. I had been putting it off for a long time because I
knew that it would be difficult because I was never any good at playing the
trumpet and my embouchure for sure is shot nowadays. Luckily I could utilize
magics like doing many takes and, editing, lots and lots of editing. I scraped
together 1 minute and 44 seconds worth of a single sustained note. It's a Mono
recording done at 192kHz. I used this broken Silent Brass mute which I was
happy I still had kept back from when I used to play more. Even though the
microphone inside it has given out, it is still the most silent trumpet
practice mute I ever tried. It's kind of like how an escalator that breaks down
can still be used as stairs. I put this cheap little no name lapel microphone
inside the mute and wedged it in tight with the cable coming out of the side of
the horn, and it worked like a charm. I think it sounded better than I remember
the microphone that came with the thing sounded. I kept some of the diminuendos
that are due to me running out of breath in the recording, and that gave it
this pulsing kind of thing that I really enjoyed. After struggling to get the
kind of releases I wanted, I decided to bake them into the file so I made four
copies of the file with four different fadeout lengths. In the code the thing
that was new for me this time is a really old idea. I don't remember exactly
who told me this story but I'm pretty sure it was some kind of teacher from
when I was in high school. It was about this conceptual art film where the film
was looping and each time it looped it got one frame longer each time. I
remember imagining how annoying that must have been to watch. In my code here
the thing starts over after a minute, then two, then four, then eight. After
that there's a little bit of going backwards. So instead of addition my thing
is multiplication and then a retrograde at the end. Not quite the same, but It
felt nice to finally get around to hearing this idea put into practice. I was
curious to see if it might lend a sense of form sort of creeping in to the
listener, maybe on more of a subliminal level. It deals with memory in some
way, as it is presenting the exact same material more than once. I have rarely,
if ever done this in my music.

[Download this sample pack here.](https://tinyurl.com/msrhjs64) 
<br>

```text
~clean.lsf("~/snd/trp")
(
Routine{
    //s.record;
    //1.wait;
    Pdef(0,
        Pseed(206,
            Pbind(*[
                type: \cln,
                snd: Pwrand2([\trp, \r], [1, 2], inf),
                num: Pwrand2((0 .. 3), (4 .. 1), inf),
                dur: 4 / Pdup(Plprand(1, 11), Plprand(5, 11)),
                atk: 39,
                hld: 29,
                rel: 19,
                crv: 6,
                sustain: 89,
                bgn: Pwhite(0.0, 0.75),
                pan: Pseq([Plprand(0.0, 0.5, 1), Phprand(0.5, 1.0, 1)], inf),
                scale: Pdup(Plprand(9, 29), Pxrand([
                    Scale.augmented(\just),
                    Scale.whole(\just),
                    Scale.mixolydian(\just),
                    Scale.ionian(\just),
                ], inf)),
                degree: Pdup(Plprand(1, 9), Plprand(0, 7)),
                octave: Pdup(Plprand(1, 9), Plprand(3, 6)),
                mtranspose: Pdup(Plprand(1, 9), Pwhite(-5, 3)),
                amp: Pseg(Plprand(1/16, 1/4), Plprand(75.0, 150.0), \wel, inf).trace,
                cai: Pdup(Plprand(1, 11), Plprand(0.0, 1.0)),
                cav: 2.0,
                hpf: Pseg(Plprand(40, 400), Plprand(15, 90), \exp, inf),
                brf: Plprand(20, 20000),
                brq: Pwhite(0.0, 1.0),
                brn: Pwhite(0.0, 1.0),
                bro: Pwhite(0.0, 1.0),
            ])
        )
    ).play;
    60.wait;
    Pdef(0).reset;
    (2 * 60).wait;
    Pdef(0).reset;
    (4 * 60).wait;
    Pdef(0).reset;
    (8 * 60).wait;
    Pdef(0).reset;
    (4 * 60).wait;
    Pdef(0).stop;
    (2 * 60).wait;
    s.stopRecording;
}.play;
)
```
<br>

<br><center>**gls**</center><br> 
<!-- <div class="dmk-player"data-playlist="gls/index.json"></div> -->

One morning as the old clock radio woke me, I heard a piece of music that
included Glass Armonica. I was reminded I've been wanting to record glass for a
long time. I bowed a glass with some water on my finger. It's the kind you
would use for water. The glass is quite thin. In the manufacturing the rim of
the glass has been cut, so there is no ring on it, as is found on the other
glasses in the kitchen. This glass was once in use as a water glass, but
because all of the other one's in it's set have met with various accidents over
the years, this is the last of it's kind. It has been delegated to a bookshelf
where it now houses various seedlings as part of a small flock of other
orphaned glassware. I spent quite some time playing it, and gradually came to
understand that a delicate balance between pressure and speed had to be upheld
in order to not flood the timbre with too many overtones. I was able to salvage
over two minutes worth of usable material from a much longer recording. I
recorded in Mono using a borrowed Røde NT 1000 microphone and my regular
combination of soundcards at 192kHz.

[Download this sample pack here.](https://tinyurl.com/49b3k35a) 
<br>

```text
~clean.lsf("~/snd/gls")
(
Routine{
    //s.record;
    //1.wait;
    Pdef(0,
        Pseed(7,
            Ppar(
                7.collect{
                    Pspawn(
                        Pbind(*[
                            method: \seq,
                            pattern: Pfunc{|ev|
                                Pbind(*[
                                    type: Pwrand2([\cln, \r], [5, 1], Plprand(5, 11)),
                                    snd: \gls,
                                    dur: Pdup(Plprand(5, 11), Phprand(1.0, 60.0)).trace,
                                    scale: Pdup(Plprand(5, 11), Pxshuf([
                                        Scale.harmonicMinor(\sept1),
                                        Scale.romanianMinor(\sept2),
                                        Scale.neapolitanMinor(\sept1),
                                        Scale.minor(\sept2),
                                        Scale.mixolydian(\sept1),
                                        Scale.ionian(\sept2),
                                        Scale.locrian(\sept1),
                                        Scale.superLocrian(\sept2),
                                        Scale.phrygian(\sept1),
                                        Scale.bartok(\sept2),
                                        Scale.whole(\sept1),
                                        Scale.marva(\sept2),
                                    ], Plprand(5, 11))),
                                    degree: Pdup(Plprand(1, 3), Plprand(0, 7)),
                                    mtranspose: Pdup(Plprand(1, 3), Plprand(-5, 2)),
                                    octave: Pdup(Plprand(1, 3), Plprand(2, 5), Plprand(5, 11)),
                                    bgn: Plprand(0.0, 1.0),
                                    pan: Pmeanrand(0.0, 1.0, Plprand(5, 11)),
                                    legato: 70,
                                    atk: Phprand(10.0, 30.0),
                                    hld: Plprand(1.0, 10.0),
                                    rel: Phprand(10.0, 30.0),
                                    crv: 0,
                                    cav: 2,
                                    cai: Pwhite(1/8, 1/2),
                                    amp: Pdup(Plprand(5, 11), Plprand(0.25, 0.75) * Pkey(\octave).linexp(2, 5, 1, 1/8)),
                                    //aux: Pseed(0, Pxshuf((0 .. 11), Plprand(5, 11))),
                                ])
                            },
                        ])
                    )
                }
            )
        )
    ).play;
    (19 * 60).wait;
    Pdef(0).stop;
    240.wait;
    s.stopRecording;
}.play
)
```
<br>

<br><center>**tgt**</center><br> 
<!-- <div class="dmk-player"data-playlist="tgt/index.json"></div> -->

I bought a used toy guitar for real cheap. The body is approximately an eighth
of full size. Four steel strings. I laid it flat on it's back and put an ebow
on it. I tuned the two middle strings real low and the two outer strings high
to get the ebow so close to the second string from the top that it's touching
the string in part of its oscillation. This gave it a kind of hurdy gurdy
feel. I recorded it in Stereo at 192kHz and exported an octave lower at 96kHz.
I enjoy how the cycle of the string's contact with the ebow is played at
different speeds for the different pitches. At times there are interesting
polytempic interactions between the different layers. In the code I got back
into using Pspawn which I haven't used in a while and now I feel really good
about this approach. I get the feeling that it is very CPU efficient.

[Download this sample pack here.](https://tinyurl.com/zxxnmd8x) 
<br>

```text
~clean.lsf("~/snd/tgt")
(
Routine{
    //s.record;
    //1.wait;
    Pdef(0,
        Pseed(837,
            Ppar(
                99.collect{
                    Pspawn(
                        Pbind(*[
                            method: \seq,
                            pattern: Pfunc{|ev|
                                Pbind(*[
                                    type: Prand([\cln, \r], 2),
                                    snd: \tgt,
                                    atk: Plprand(60.0, 90.0),
                                    hld: Plprand(5.0, 15.0),
                                    rel: Plprand(30.0, 60.0),
                                    crv: -6,
                                    bgn: Pwhite(0.0, 0.6),
                                    pan: Pseq([Plprand(0.0, 1.0, 1), Phprand(0.0, 1.0, 1)], 2).trace,
                                    scale: Scale.pelog(\just),
                                    degree: Pdup(Plprand(1, 2), Plprand(0, 7)),
                                    octave: Plprand(4, 5),
                                    mtranspose: Phprand(-2, 2),
                                    amp: Pdup(Plprand(1, 99), Plprand(1/64, 1/8)),
                                    cav: 8,
                                ])
                            },
                        ])
                    )
                }
            )
        )
    ).play;
    (19 * 60).wait;
    Pdef(0).stop;
    240.wait;
    s.stopRecording;
}.play
)
```
<br>

<br><center>**bfn**</center><br> 
<!-- <div class="dmk-player"data-playlist="bfn/index.json"></div> -->

Quite a while back I made an informal recording to try out a new kind of fan
on my steel string parlor guitar. It's a Levin. I've been trying to find a good
fan to use on guitar for years and years. A long time ago there was a white
little handheld fan called Draget that a bunch of improvisors all got at the
same time. My favourite sound that came out of that is David Stackenäs's. He
did a whole concept album called Bow that came out on Kning Disk. On the record
he only used that style of playing. It is strikingly beautiful. Focused and
reduced to perfection. I did that first informal recording in mono with my
handcomputer. The plan was always to do a proper recording later. I had done
some work on the code but then I put it to the side. Months pass. Then one
night I start messing with it again and I start to feel that it's getting to
where It needs to be so I decide to do that proper recording I had planned to
do. I rig up my whole set up with the double sound cards. Out of that recording
I get three good samples. One where I stay on the highest string. The sound I
like is right on the second fret. There is something nodal there. The other two
takes I move up through the strings and then the other way around. It's wild.
Extremely dynamic. When I swap out the informal recording I realize I need to
keep that alongside the new material. I think that was interesting the way that
worked out in the code on the `num` line. There are these two different colours
in there this way. The informal mono recording is 44.1kHz. The other ones where
recorded in Stereo at 192kHz and exported at half speed at 96kHz.

[Download this sample pack here.](https://tinyurl.com/29pu2ht7) 
<br>

```text
~clean.lsf("~/snd/bfn")
(
Routine{
    //s.record;
    //1.wait;
    Pdef(0,
        Pseed(940,
            Pbind(*[
                type: Pwrand2([\cln, \r], [1, 5], inf),
                snd: \bfn,
                dur: 0.125 / Pdup(Plprand(3, 13), Plprand(3, 13)),
                num: Pdup(Pseq([1, Plprand(1, 4, 1)], inf), Pseq([Pxrand((0 .. 2), 1), 3], inf)),
                atk: Plprand(9.0, 19.0),
                hld: Plprand(9.0, 29.0),
                rel: Plprand(9.0, 39.0),
                legato: (Pkey(\atk) + Pkey(\hld) + Pkey(\rel) * 9999),
                crv: Plprand(0.0, 8.0),
                bgn: Pwhite(0.0, 1.0),
                pan: Pdup(Plprand(5, 11), Pseq([Plprand(0.0, 1.0, 1), Phprand(0.0, 1.0, 1)], inf)),
                scale: Pdup(Plprand(5, 11), Pxshuf([
                    Scale.harmonicMinor(\sept1),
                    Scale.mixolydian(\sept2),
                    Scale.whole(\vallotti),
                    Scale.romanianMinor(\mean4),
                    Scale.diminished(\mean5),
                    Scale.lydianMinor(\mean6),
                    Scale.dorian(\wcSJ),
                ], inf)),
                degree: Pdup(Plprand(5, 11), Plprand(0, 6)),
                octave: Pdup(Plprand(5, 11), Plprand(4, 8)),
                mtranspose: Pdup(Plprand(5, 11), Plprand(-5, 2)),
                amp: Pseg(Plprand(1/7, 0.65), Plprand(6.0, 60.0), \wel, inf).trace,
                cai: Pseg(Plprand(0.0, 1.0), Plprand(15.0, 90.0), \wel, inf),
                cav: 1/2,
                fsh: Plprand(0.0, 10.0),
                fsm: Plprand(0.0, 2.0),
                bnd: Pdup(Pseq([1, Plprand(1, 4, 1)], inf), Pseq([Phprand(-0.25, 0.0, 1), 0], inf)),
                stretch: Pseg([Pdup(2, Plprand(1.0, 16.0)), Plprand(1.0, 16.0)], Plprand(15.0, 90.0), \sin, inf),
            ])
        )
    ).play;
    (19 * 60).wait;
    Pdef(0).stop;
    240.wait;
    s.stopRecording;
}.play
)
```
<br>

<br><center>**snr**</center><br> 
<!-- <div class="dmk-player"data-playlist="snr/index.json"></div> -->

I’ve been trying to find a cheap used snare drum for a while now but I haven’t
found one that I think would work for me. Then I got to thinking that just the
snare part is cheap and that most likely I could use that as a preparation
because I like rattly stuff and hey, a snare for sure does that. I made as long
of a recording as my arm had strength for in one go. I shook the snare real
close to my CM3’s. I recorded in 192kHz thinking that I would be using The
Quincy Jones Trick later because I could hear straight away that it had this
nice high pitch thin metal sound that I was real curious to hear played back
slower. So I messed around with the code and after a while of changing up the
numbers for the envelope times I felt I wanted those to always stay the same.
Then I had the idea to connect the playback speed to the scaling of the
envelope. So I switched over to Reaper and cut up the file and applied the
amplitude envelope there. This gave me 26 files. Each file is 33 seconds in
duration. I exported them at 48kHz. After a while Working on the code side of
the things I realized that I needed to be able to calculate the duration for
each sample at the different playback rates and to give that value to legato.
There was some number juggling but I think that in the end it came out alright
with that variable up top and that formula in the legato line at the bottom.
This solution proly I will have use of again.

[Download this sample pack here.](https://tinyurl.com/3pn659de) 
<br>

```text
~clean.lsf("~/snd/snr")
(
Routine{ 
    var a = 261.6255653005986232528812251985073089599609375;
    //s.record;
    //1.wait;
    Pdef(0,
        Pseed(238,
            Pbind(*[
                type: \cln,
                snd: \snr,
                num: Pxshuf((0 .. 25), inf),
                seg: Plprand(15.0, 180.0),
                dur: (3 / Pdup(Plprand(5, 11), Plprand(5.0, 11.0))),
                amp: Pseg(Plprand(1/6, 6/9), Pkey(\seg), \wel, inf),
                scale: Scale.chromatic(\sept1),
                degree: Pdup(Plprand(3, 15), Plprand(-5, 7)),
                one: Pseg([0.0, 1.0], 1140, \lin, 1),
                octave: (Pdup(Pmeanrand(2, 17), Pmeanrand(2, 6)) + Pkey(\one).linlin(0.89, 0.9, 0, 2)), 
                fsh: Pdup(Plprand(3, 9), Plprand(-6.5, 7.5)),
                fsm: Pdup(Plprand(2, 8), Plprand(-2.5, 3.5)),
                cav: 2,
                cai: Pseg(Plprand(1/8, 1/2), Pkey(\seg), \wel, inf),
                stretch: Pseg(Pwhite(1/4, 4.0), Pkey(\seg), \wel, inf), 
                brf: Pseg([Pdup(2, Plprand(20, 20000)), Plprand(20, 20000)], Pkey(\seg), \sin, inf),
                brn: Pseg([Pdup(2, Plprand(0.0, 1.0)), Plprand(0.0, 1.0)], Pkey(\seg), \sin, inf),
                bro: Pseg([Pdup(2, Plprand(0.0, 0.5)), Plprand(0.0, 0.5)], Pkey(\seg), \sin, inf),
                brq: Pseg([Pdup(2, Plprand(0.0, 1.0)), Plprand(0.0, 1.0)], Pkey(\seg), \sin, inf),
                calcFreq: Pfunc{|ev|ev.use{ev.freq.asStringPrec(48).postln}},
                frq: Pfunc{|ev|ev.use{ev.freq}},
                legato: a / Pkey(\frq) * 66,
            ])
        )
    ).play;
    (19 *60).wait;
    Pdef(0).stop;
    240.wait;
    s.stopRecording;
}.play
)
```
<br>

<br><center>**mtf**</center><br> 
<!-- <div class="dmk-player"data-playlist="mtf/index.json"></div> -->

I bought a strange flute made out of metal for next to nothing. I bought it
used like I try to do for most things. I recorded 16 takes of the same low
note. But that’s not where I started. Lemme back up here. I was messing around
with some Karplus Strong synthesis. It’s the stuff that sounds sort of like a
string maybe, if you squint your ears. I was trying to solve something along
the lines of interpolating to a stochastic value, then holding at that value
for a variable duration, then interpolating to a new value from the held value.
The thing kind of got away from me and became something else. A something else
that I liked. I could hear that it had something, but I wanted to stay on track
with this idea of making music out of sample packs. I put it aside for a while.
Then I remembered a story a friend of mine told me about how one time he came
up with a sound he liked from doubling up and letting some of the sawtooth wave
he’d used to tune a string blend with the string. That package of the string
and the sawtooth then went into the granulation, and _that_, was the sound. I
mean it was just overdubbing in my case, but anyway, remembering that story
made me think I should try to replace my Karplus Strong synthesis with this
flute sound instead. I messed around and it took me a real long time to get the
thing to stay in tune as I was playing it because, hey, I don’t really play
wind instruments, but also because the thing is spectacularly poorly made and
on top of that you can tell from lots and lots of dings all over it that it’s
been through a lot. There is a piece of wood inside the mouthpiece that I think
is supposed to be held in place by the metal but it has shook loose at some
point so it’s real finicky. You gotta hit it just right with the air pressure
or else it moves forward, at which point you get no sound, and you gotta shake
it loose again. So I was doing that for quite a while to get the 16 takes of
the same low note. I of course did the trick of recording at a higher sample
rate (192kHz). Then slowing it down and exporting at (44.1kHz) like I’ve been
doing for a while now. I will in future posts refer to this as The Quincy Jones
Trick. After I while of trying to make it work I realized that it's a good
idea, but, wanting to keep both the string synthesis and the flute recording
was not going to work out this time. I'm going to keep that on the backburner
for the next phase, where I'm looking to make ensemble music out of these
single sample pack log entries. I then ran into a bunch of trouble with the
code. In the end I had to use factory style to make the thing fit this postcard
size because I had three stems playing at different speeds and then I had the
doubling on top of that. My initial thinking was to keep these postcard code
block small in size but also very simple in terms of their content. It proved
difficult to stick with that idea.  Maybe in the future I could have another
crack at refactoring some of these that got a little too big. Who knows, future
me might have a few new tricks up his sleeve. So anyway, I ended up with six
stems in total, but only three of them are meant to be unique in terms of pitch
and duration information. The two different groups combine to form something
together. I enjoy how the two halves have different filter and reverb values
attached to them but the same pitch and duration material going through them.
This is thanks to using the same set of seeds, so they’ll have this intertwined
ebb and flow, getting brighter and darker. Also towards the end, the three
darker stems (more often lowpassed and twice the amount of `cav`) make their
exit before the brighter group. It might give a subtle sense of preample to the
ending. I thought that was neat. 

[Download this sample pack here.](https://tinyurl.com/mus54h6p) 
<br>

```text
~clean.lsf("~/snd/mtf")
(
Routine{
    //s.record(numChannels: 4);
    //1.wait;
    ~arc = {|seed, snd, dur, amp, sustain, cav, aux, lpf, lhf|
    var bin = 
    Pbind(*[ 
        type: Pwrand2([\cln, \r], [1, 2], inf),
        snd: snd,
        dur: dur,
        num: Pseed(5, Pxshuf((0 .. 15), inf)),
        scale: Scale.mixolydian(\wcSJ),
        degree: Pdup(Plprand(5, 22), Pdup(Plprand(1, 32), Pbrown(-9, 12, Plprand(1, 5)))),
        pan: Pmeanrand(0.0, 1.0),
        amp: amp / Pkey(\degree).linexp(-9, 12, 1, 3),
        sustain: sustain,
        cav: cav,
        aux: aux,
        atk: Plprand(8.0, 10.0),
        hld: Plprand(8.0, 10.0),
        rel: Plprand(8.0, 10.0),
        stretch: Pseg(Pmeanrand(0.5, 1.0), Plprand(30.0, 90.0), \wel, inf),
        lpf: lpf,
        lhf: lhf,
        calcFreq: Pfunc{|ev|ev.use{ev.freq.asStringPrec(48).postln}},
    ]);
    Pseed(seed, Pseq([bin], inf)); 
};
Pdef(0, ~arc.(11, \mtf, 1/8, Pdup(Plprand(1, 5), Pseg(Plprand(-39.0, -15.0), Plprand(30.0, 90.0), \wel, inf)).dbamp, Plprand(25.0, 50.0), 1, 0, 
    Pseg(Phprand(2000, 20000), Plprand(30.0, 90.0), \wel, inf), Pseed(2, Pseg(Phprand(0.05, 0.5), Plprand(30.0, 90.0), \wel, inf)))).play;
Pdef(1, ~arc.(22, \mtf, 1/4, Pdup(Plprand(1, 5), Pseg(Plprand(-39.0, -15.0), Plprand(30.0, 90.0), \wel, inf)).dbamp, Plprand(25.0, 50.0), 1, 0, 
    Pseg(Phprand(2000, 20000), Plprand(30.0, 90.0), \wel, inf), Pseed(2, Pseg(Phprand(0.05, 0.5), Plprand(30.0, 90.0), \wel, inf)))).play;
Pdef(2, ~arc.(33, \mtf, 1/2, Pdup(Plprand(1, 5), Pseg(Plprand(-39.0, -15.0), Plprand(30.0, 90.0), \wel, inf)).dbamp, Plprand(25.0, 50.0), 1, 0, 
    Pseg(Phprand(2000, 20000), Plprand(30.0, 90.0), \wel, inf), Pseed(2, Pseg(Phprand(0.05, 0.5), Plprand(30.0, 90.0), \wel, inf)))).play;
Pdef(3, ~arc.(11, \mtf, 1/8, Pdup(Plprand(1, 5), Pseg(Plprand(-33.0, -15.0), Plprand(30.0, 90.0), \wel, inf)).dbamp, Plprand(5.0, 10.0), 2, 1, 
    Pseg(Plprand(200, 20000), Plprand(30.0, 90.0), \wel, inf), Pseed(2, Pseg(Plprand(0.05, 0.5), Plprand(30.0, 90.0), \wel, inf)))).play;
Pdef(4, ~arc.(22, \mtf, 1/4, Pdup(Plprand(1, 5), Pseg(Plprand(-33.0, -15.0), Plprand(30.0, 90.0), \wel, inf)).dbamp, Plprand(5.0, 10.0), 2, 1, 
    Pseg(Plprand(200, 20000), Plprand(30.0, 90.0), \wel, inf), Pseed(2, Pseg(Plprand(0.05, 0.5), Plprand(30.0, 90.0), \wel, inf)))).play;
Pdef(5, ~arc.(33, \mtf, 1/2, Pdup(Plprand(1, 5), Pseg(Plprand(-33.0, -15.0), Plprand(30.0, 90.0), \wel, inf)).dbamp, Plprand(5.0, 10.0), 2, 1, 
    Pseg(Plprand(200, 20000), Plprand(30.0, 90.0), \wel, inf), Pseed(2, Pseg(Plprand(0.05, 0.5), Plprand(30.0, 90.0), \wel, inf)))).play;
(17 * 60).wait;
Pdef(3).stop;
Pdef(4).stop;
Pdef(5).stop;
150.wait;
Pdef(0).stop;
Pdef(1).stop;
Pdef(2).stop;
240.wait;
s.stopRecording;
}.play;
)
```
<br>

<br><center>**smb**</center><br> 
<!-- <div class="dmk-player"data-playlist="smb/index.json"></div> -->

I recorded a small metal bowl which was suspended above a contraption called
_Rundgång_ that [my friend Jon](https://thehumancomparator.net/) who is a
master luthier made. It is a kind of testbed for feedback. It's great. I've
been beta testing it for Jon for a while now. It has a humbucker pickup, a
strong amp and a speaker in it. I suspended some rubber bands just above the
pickup and the speaker. I played this rig by slowly changing the amplitude and
the timbre of the feedback via the contraption's precise controls, which in
turn changed the way the bowl vibrated and moved around. I enjoy how the small
metal bowl is mostly caught in the magnetic field of the pickup but still has
some degree of movement thanks to the rubber bands. Recorded at 96kHz using a
Zoom H1 in extremely close proximity to the source.

[Download this sample pack here.](https://tinyurl.com/4yctdx9f) 
<br> 

```text
~clean.lsf("~/snd/smb")
(
Pdef(0,
	Pseed(19,
		Pbind(*[
			type: \cln,
			snd: \smb,
			frm: Pseg([0, 1], 1140, \lin, 1).trace,
			dur: Pdup(Plprand(1, 11), Plprand(0.045, 4.5)),
			bgn: Pseg(Plprand(0.0, 1.0), Plprand(18.0, 180.0), \wel, inf) + Pseg(Plprand(0.0, 1.0), Plprand(18.0, 180.0), \wel, inf),
			legato: Pseg(Plprand(4.0, 32.0), Plprand(18.0, 180.0), \wel, inf),
			tri: Pseg(Phprand(0.5, 1.0), Plprand(18.0, 90.0), \wel, inf),
			shp: Pseg(Phprand(0.5, 1.0), Plprand(18.0, 90.0), \wel, inf),
			sha: 0,
			shi: Pseg(Plprand(0.5, 1.0), Plprand(18.0, 90.0), \wel, inf),
			sho: Pseg(Pmeanrand(0.25, 0.75), Plprand(18.0, 90.0), \wel, inf),
			slo: Pseg(Phprand(0.25, 1.0), Plprand(18.0, 90.0), \wel, inf),
			hit: Pseg(Plprand(0.25, 1.0), Plprand(18.0, 90.0), \wel, inf),
			lot: Pseg(Phprand(0.25, 1.0), Plprand(18.0, 90.0), \wel, inf),
			fsh: Pseg(Phprand(0.25, 1.0), Plprand(18.0, 90.0), \wel, inf),
			fsm: Pseg(Pmeanrand(-2.5, 2.5), Plprand(18.0, 90.0), \wel, inf),
			rma: Pseg(Plprand(0.0, 0.5), Plprand(18.0, 90.0), \wel, inf),
			rmf: Pseg(Plprand(20, 200), Plprand(18.0, 90.0), \wel, inf),
			pan: Pmeanrand(0.1, 0.9),
			rdf: Pkey(\rmf) / 2,
			rdt: Phprand(3.0, 90.0),
			atk: Pkey(\dur) * 3,
			hld: Pkey(\dur) * 3,
			rel: Pkey(\dur) * 3,
			crv: 0,
			lpf: Pseg(Phprand(2000, 20000), Plprand(18.0, 90.0), \wel, inf),
			lhf: Pseg(Phprand(0.25, 0.5), Plprand(18.0, 90.0), \wel, inf),
			spd: Pseed(Pkey(\frm).linlin(0.36, 0.361, 19, 21), Pseg(Plprand(0.5, 1.0), Plprand(36.0, 360.0), \wel, inf)),
			nth: Pseg(Plprand(0.5, 1.0), Plprand(36.0, 360.0), \wel, inf),
			amp: (Pkey(\frm).linexp(0, 1, 0.5, 1) 
                * Pseg(Pseed(Pkey(\frm).linlin(0.36, 0.361, 19, 22), Pmeanrand(-12.0, -3.0), Plprand(18.0, 90.0), \wel, inf))).dbamp,
			zip: Plprand(18.0, 90.0),
			ocd: Pseg(Phprand(0.5, 1.0), Plprand(18.0, 90.0), \wel, inf),
			ocq: Pseg(Plprand(0.5, 1.0), Plprand(18.0, 90.0), \wel, inf),
			dla: Pseg(Plprand(0.0, 0.5), Plprand(18.0, 90.0), \wel, inf),
			dlf: Pseg(Plprand(0.0, 0.5), Plprand(18.0, 90.0), \wel, inf),
			dlt: 16,
			cav: 2,
			cai: Pseg(Phprand(0.75, 1.0), Plprand(18.0, 90.0), \wel, inf),
			cai: 1,
			cvt: Pseg(Phprand(0.75, 1.0), Plprand(18.0, 90.0), \wel, inf),
			cvd: Pseg(Pwhite(0.0, 0.25), Plprand(18.0, 90.0), \wel, inf),
			cvl: Pseg(Phprand(0.0, 0.25), Plprand(18.0, 90.0), \wel, inf),
			hpf: Pseg(Plprand(30, 200), Plprand(18.0, 90.0), \wel, inf),
			smr: Pseg(Plprand(0.0, 0.6), Plprand(18.0, 90.0), \wel, inf),
		])
	)
).play;
)
```
<br>

<br><center>**zth**</center><br> 
<!-- <div class="dmk-player"data-playlist="zth/index.json"></div> -->

I recorded my larger zither with some preparations on it. Magnets and glass
marbles. Four takes recorded in stereo at 192kHz, then transposed down to half
speed and exported at 96kHz. There are a couple of low drones and then a couple
of busier, prepared recordings in the folder. The scale material is a minor
scale, but I added one sharp and one flat alteration in the degree parameter.
The tuning is five limit just intonation.  There are two different rooms. Also
there is some octave down and quarter octave effects added, which at times can
sound like a synth doubling the unprepared sounds. There is also some subtle
ring modulation in a low range at times. I very much enjoy this added fizzy,
torn paper kind of effect that the ringmodulaiton gives. I think it augments
the prepared sounds nicely. The first event is unique in that it has its
duration and attack doubled. This acts as a kind of intro. I am fond of this
idea, as it offers me a way to amplify the sense of a particular point of
departure, which is separate from how the material is presented in the rest of
the finite unfolding of combinations of values.

[Download this sample pack here.](https://tinyurl.com/yc72dxy2) 
<br> 

```text
~clean.lsf("~/zth")
(
Pdef(0,
	Pseed(22,
		Pbind(*[
			type: \cln,
			snd: \zth,
			bgn: Plprand(0.0, 0.75),
			num: Pdup(Plprand(0, 5), Pxshuf((0 .. 3), inf)),
			crv: Pwrand2([Phprand(-3.0, 0.0, 1), 
                Plprand(0.0, 3.0, 1)], [1, 4], inf),
			atk: Plprand(16.0, 64.0) 
                * Pdup(Pseq([1, inf],inf), Pseq([2, 1], inf)),
			rel: Plprand(16.0, 64.0),
			legato: 140,
			dur: (Pwrand2([20, 22, 24], [4, 2, 1], inf) 
                / Pdup(Phprand(5, 11), Phprand(5, 11))
				* Pdup(Pseq([1, inf],inf), Pseq([20.0, 1.4], inf))),
			octave: Pwrand2([2,3,4,5,6], [1,4,16,64,16], inf),
			scale: Scale.minor(\just),
			degree: Pdup(Plprand(1, 10), 
                Pwrand2([-6, -5s, -3, 0, 2, 4b, 5], 
                [1, 2, 4, 8, 4, 2, 1], inf)),
			pan: (Pseq([Phprand(0.0, 0.5, 1), 
                Phprand(0.0, 0.5, 1)], inf)
				/ Pdup(Pseq([1, inf],inf), Pseq([8, 1], inf))).trace,
			amp: Pdup(Plprand(10, 100), Pwhite(-21.dbamp, -9.dbamp))
			/ Pdup(Pseq([1, inf],inf), Pseq([1.5, 1], inf)),
			ocd: Pwhite(0.0, 1.0),
			ocq: Pwhite(0.0, 1.0),
			cav: 1,
			cai: Pseg(Pwhite(1/3, 23), 
                Pwhite(60.0, 120.0), \wel, inf),
			hal: Pseg(Pwhite(0.0, 1.0), 
                Pwhite(30.0, 90.0), \wel, inf),
			hhp: Pseg(Phprand(20, 10000), 
                Pwhite(30.0, 90.0), \exp, inf),
			rts: Pseg(Plprand(1.0, 5.0), 
                Pwhite(30.0, 90.0), \exp, inf),
			lpf: Plprand(20, 20000),
			val: Plprand(20.0, 2000.0),
			rep: Pkey(\val).explin(20.0, 2000.0, 10, 1),
			hpf: Pdup(Pkey(\rep), Pkey(\val))
			* Pdup(Pseq([1, inf],inf), Pseq([1.125, 1], inf)),
			rma: Plprand(0.0, 0.5),
			rmf: 152.25 * Pdup(Plprand(5, 50), 
                Pwrand2([1/4, 1/2, 1, 2, 4, 8], 
                [2, 4, 8, 4, 2, 1], inf)),
		])
	)
).play;
)
```
<br>

<br><center>**bbu**</center><br> 
<!-- <div class="dmk-player"data-playlist="bbu/index.json"></div> -->

I recorded 183 very short transient sounds using bamboo kitchen utensils. I
used the Audient iD14 as the preamp but recorded in a NI Komplete Audio 6 MK2
because the iD14 has way better preamps but only allows a maximum of 96kHz
while the KA6 can go up to 192kHz. The recordings are not as clean as I'd like
but they are ok I think. I need to get better microphones. I used a pair of
Line Audio CM3's, which I think are great for the asking price. They sound a
lot more expensive then they are in the high end. They also really shine live
because they can amplify a whole lot before starting to feed back. But hey, for
recording these kinds of faint sounds, especially with the great iD14 pres, you
end up hearing the noise in the microphones themselves. I tried denoising but
that came out like complete mush.  The room tone and the noise floor are all
tangled up together in the tail there. I used a gate to gently sculpt the tail
of the release and then slam shut. There are 183 stereo files exported at
192kHz in this pack. The files are all very short. All but one are under a
second in duration.  

[Download this sample pack here.](https://log-sample-packs.s3.eu-north-1.amazonaws.com/bbu.zip) 
<br> 

```text
~clean.lsf("bbu");

(
Routine{
    //s.record;
    //1.wait;
        ~pat = {| num, aux|
    var pattern = Pbind(*[
        type: \cln,
		snd: \bbu,
        dur: Pseg([1, Plprand(0.25, 4.0), 1], 
            Pwhite(30.0, 90.0), \sin, inf),
        amp: Pseg([0.45, 0], Plprand(45.0, 90.0), \sin, 1) 
            - Pdup(Pseq([4, inf], 1), Pseq([0.45, 0], 1)),
        pan: Pseg(Pmeanrand(0.0, 1.0), 
            Pwhite(30.0, 90.0), \sin, inf),
        spd: Pdup(inf, Plprand(0.5, 1.0)),
		num: num, 
        //aux: aux,
		dur: Pseg([1, Pwhite(0.25, 1.0), 1], 
            Pwhite(30.0, 90.0), \sin, inf),
	]);
    Pseq([ pattern ], inf);
};

Pdef(184, Ppar( 183.collect{|patnum| ~pat.(patnum, patnum)})).play;

t = Task({
    { 
    Pdef(184).reset;
    exprand(15, 90).round.wait.postln;
}.loop 
});
t.start;
    (20 * 60).wait;
    Pdef(184).stop;
    2.wait;
    s.stopRecording;
}.play
)
```
<br>

<br><center>**acf**</center><br> 
<!-- <div class="dmk-player"data-playlist="acf/index.json"></div> -->

I recorded an accordion's lowest note, held for as long as I could sustain it.
I chose the registration that had what sounded to me like the most overtones
with a single tongue. I then mimicked the sound of the registration with the
least overtones in post using a filter. This way the zero crossings are in the
same place in the two files. Recorded and exported at 192kHz. The files are 2
minutes and 21 seconds in duration.  

[Download this sample pack here.](https://log-sample-packs.s3.eu-north-1.amazonaws.com/acf.zip) 
<br> 

```text
~clean.lsf("acf")
(
Routine{
    //s.record;
    //1.wait;
    (
        Pdef(0,
            Pseed(1467,
                Pbind(*[
                    type: Pseq([\cln, Pwrand2([\cln, \r], 
                        [1, 75], inf)], inf),
                    num: Pwrand2([0, 1], [1, 6], inf),
                    snd: \acf,
                    pan: Pwhite(0.0, 1.0),
                    baz: Plprand(150.0, 180.0),
                    crv: -8,
                    cav: 15,
                    cvt: 1,
                    cvd: 0,
                    cai: Pseg(Phprand(0.5, 1.0), 
                        Pwhite(90.0, 180.0), \wel, inf),
                    dur: 1 / Pdup(Phprand(5, 11), 
                        Phprand(5, 11)),
                    scale: Scale.melodicMinor(\wcSJ),
                    degree: Pwrand2([Phprand(-18, 0, 1), 
                        Plprand(-8, 0, 1)], [1, 4], inf),
                    octave: Pwrand2([5, 6, 7], [4, 8, 1], inf),
                    mtranspose: Pseed(0, Pdup(Plprand(99, 1099), 
                        Pseries(0, 1, inf))),
                    amp: Pdup(Plprand(1, 35), 
                        Plprand(-18.dbamp, -15.dbamp)
                        / Pkey(\degree).linexp(-18, 0, 1, 5)),
                    lpf: (Plprand(2000, 20000) 
                        / Pkey(\degree).linexp(-21, 0, 1, 5)).trace,
                    ocd: Pseg(Pmeanrand(0.0, 1.0), 
                        Pwhite(60.0, 120.0), \wel, inf),
                    //aux: Pxshuf((0 .. 11), inf),
                    hpf: 80,
				])
            )
        ).play
    );
    (19 * 60).wait;
    Pdef(0).stop;
    240.wait;
    s.stopRecording;
}.play
)
```
<br>

<br><center>**tap**</center><br> 
<!-- <div class="dmk-player"data-playlist="tap/index.json"></div> -->

I recorded a sine wave onto a cassette tape using a JVC UX-T20BK. When I played
it back I recorded it at 192kHz. I then transposed it down to 44.1kHz and
exported it. The file is 2 minutes and 36 seconds in duration.  

[Download this sample here.](https://tinyurl.com/y8szwyzc) 
<br> 

```text
~clean.loadSoundFiles("tap")
(
Pdef(0,
    Pseed(183,
        Pbind(*[
            type: \cln,
            scale: Scale.mixolydian(\just),
            dev: Pwhite(-18, 34),
            der: Pkey(\dev).linlin(-18, 34, 19, 1),
            degree: Pdup(Pkey(\der),Pkey(\dev)),
            snd: Pwrand2([\tap, \dfd], [5, 1], inf),
            amv: Pwhite(1/2, 8.0),
            amt: Pkey(\amv).linlin(1/2, 8.0, 10.0, 90.0),
            amp: 0.3 / Pseg(Pkey(\amv), Pkey(\amt), \exp, inf) 
                / Pkey(\degree).linexp(-18, 34, 1/3, 1.5),
            dur: 1,
            atk: Phprand(7.5, 15.0) 
                / Pkey(\degree).linlin(-22, 34, 1, 2),
            rel: Phprand(7.5, 15.0) 
                / Pkey(\degree).linlin(-22, 34, 1, 2),
            crv: 0,
            bgn: Pwhite(0.0, 0.1),
            pan: Pwhite(0.0, 1.0),
            lhf: Pwhite(0.3, 0.6),
            lpv: Phprand(20, 20000),
            lpr: Pkey(\lpv).explin(20, 20000, 8, 1),
            lpf: Pdup(Pkey(\lpr), Pkey(\lpv)),
            hpf: Pseg(Plprand(20, 300), Plprand(20, 200), \exp, inf),
            stretch: Pseg(Pwhite(1/11, 2.0), 
                Pwhite(10, 20), \exp, inf).trace,
            cav: 1,
            legato: Pkey(\atk) + Pkey(\rel) + 1,
            tri: Pseg(Pwhite(0.0, 1.0), 
                Pwhite(10.0, 100.0), \sin, inf),
            shp: Pseg(Pwhite(0.0, 0.25), 
                Pwhite(10.0, 100.0), \sin, inf),
            sho: 1,
            shi: Pseg(Pwhite(0.0, 0.05), 
                Pwhite(10.0, 100.0), \sin, inf),
            ocu: Pseg(Pwhite(0.0, 0.5), 
                Pwhite(10.0, 100.0), \sin, inf),
            ocd: Pseg(Pwhite(0.0, 0.5), 
                Pwhite(10.0, 100.0), \sin, inf),
        ])
    )
).play
)
```
<br>

<br><center>**mrb**</center><br> 
<!-- <div class="dmk-player"data-playlist="mrb/index.json"></div> -->

I wanted to make sure that I had gotten rid of that pesky bug where a little
bit longer files would play back all rotten.  Sounded like low sample rate.
This was due to round off errors. I recorded my tele laid flat on my desk with
an ebow and a little glass marble sat on top of it. The little glass marble
connects two adjacent strings. I tuned down the strings a whole lot. I had to
tune down the adjacent strings to get the ebow down real low so it'd be close
enough to sustain the third wound string from the top. I propped up the head
just so. Took a while to find the right angle where the ebow would make the
string vibrate, which in turn made the marble move around within about half a
fret's worth. This gave me just the right amount of variation while still
maintaining the fundamental. I recorded at 192kHz. The slightest fadein at the
top of the file and right at the end I pick up the ebow off of the string. The
file is 12 minutes and 13 seconds in duration. It's a Mono file because I
recorded straight out of the guitar into the soundcard. Didn't even use a
compressor.  

[Download this sample pack here.](https://tinyurl.com/5pydwjn3) 

<br> 

```text
~clean.loadSoundFiles("mrb")
(
Pdef(0,
	Pseed(949,
		Pbind(*[
			type: \cln,
			snd: \mrb,
			spd: Plprand(1/4, 7.0).round(1/7).trace,
			dur: Phprand(10.0, 20.0),
			amp: Plprand(0.1, 0.9) 
			    / Pkey(\spd).linexp(1/4, 7.0, 0.5, 6.0) / 2.25,
			bgn: Pwhite(0.0, 0.9),
			atk: Pwhite(5.0, 30.0),
			hld: Pwhite(9.0, 99.0),
			rel: Pwhite(9.0, 99.0),
			pan: Pwhite(0.0, 1.0),
			crv: 8,
			cav: 0.5,
		])
	)
).play;
)
```
<br>

<br><center>**bwm**</center><br> 
<!-- <div class="dmk-player"data-playlist="bwm/index.json"></div> -->

Anything can be bowed. Even a black metal stove guard I bought for 10 sek at a
thrift store one time ages ago. I finally got around to bowing it and found
some ways to get some different sounds out of it. At first I thought the main
thing was bowing the sides of the frame because that made the loudest sound in
the room but once I got to listening through a condenser microphone up close I
heard that there was more to the thin rod that ran between the ends of the
frame. After a while of messing around with microphoe placement I tried it in
combination with a bass humbucker pickup I had soldered an XLR jack to a while
back. That was the sound. Tons of bass as well as really clean soaring high
pitched sounds. Bowing at an angle made a big difference also in terms of
controlling which node rang the loudest. In the end I opted for only using the
pickup because it was the cleanest. Recorded in 192kHz. Did a tiny, tiny bit of
very delicate denoising. Played back at half speed. Chopped up the recording
into 8 mono files at aroundabouts 90 seconds each. Exported at 44.1kHz.

[Download this sample pack here.](https://f005.backblazeb2.com/file/log-packs/bwm.zip) 

<br> 

```text
~clean.loadSoundFiles("bwm")
(
Pdef(0,
    Pseed(293,
        Pbind(*[
            type: \cln,
            snd: \bwm,
            dur: Pdup(Pwhite(1, 3), Plprand(1/7, 13.0)),
            num: Pxshuf((0 .. 7), inf),
            atk: Phprand(1.0, 4.5) * Pkey(\dur),
            hld: Plprand(1.0, 4.5) 
                * Pkey(\dur).linlin(1/7, 13.0, 1.0, 13.0),
            rel: Phprand(1.0, 4.5) 
                * Pkey(\dur).linlin(1/7, 13.0, 1.0, 13.0),
            crv: 0,
            amp: Pdup(Phprand(3, 11), Phprand(1/11, 1/2)),
            bgn: Pwhite(0.0, 1.0),
            pan: Pwhite(0.0, 1.0),
            cav: 1/2,
            hal: Pseg(Pwhite(0.0, 0.5), 
                Pwhite(30.0, 90.0), \wel, inf),
            dla: Pseg(Pwhite(0.0, 0.5), 
                Pwhite(30.0, 90.0), \wel, inf),
            dlf: 0,
            dlt: 16,
            rts: Pseg(Pwhite(0.0, 9.0), 
                Pwhite(30.0, 90.0), \wel, inf),
            spd: Pwrand2([1, 2, 4, 8], [12, 8, 4, 1], inf),
            lpf: Pkey(\spd).linexp(1, 8, 20000, 20),
            lhf: Pkey(\spd).linlin(1, 8, 0.5, 0),
            hpf: Pseg([20, 200, 20, 20], 
            Pwhite(30.0, 90.0), \wel, inf),
            scale: Scale.prometheus(\mean5),
            degree: Pdup(Phprand(9, 19), 
                Pwrand2([0, 2, 4, 5], [8, 4, 2, 1], inf)),
        ])
    )
).play
)
```
<br>

<br><center>**stn**</center><br> 
<!-- <div class="dmk-player"data-playlist="stn/index.json"></div> -->

I started off the day by recording some chuggy stunt guitar sounds in 192kHz. I
made six short samples of the zeroth and first fret using three playing styles.
Open long, open staccato and palm muted. I made two takes of all three styles
and hardpanned them left and right. I denoised them, careful not to leave
marks. I beefed things up a little bit while still keeping some of the dynamics
inherent in the playing styles. I thought that I would be making some kind of
chuggy rhythmically driven music, but that did not happen today as you can hear
in the example below. Maybe some other day. 

[Download this sample pack here.](https://f005.backblazeb2.com/file/log-packs/stn.zip) <br>
<br> 

```text
~clean.loadSoundFiles("stn");
(
Pdef(0,
    Pseed(17,
        Pbind(*[
            type: \cln,
            snd: \stn,
            num: Pdup(Pexprand(1, 48), Pxshuf((0 .. 5), inf)),
            dur: 1 / Pdup(Pexprand(2, 5), 
                Pexprand(1, 7).round) * Pwhite(1, 2) / 5,
            amp: Pdup(Pexprand(1, 96), Pexprand(1/8, 8.0)),
            atk: Pmeanrand(0.0, 1.0),
            hld: Pmeanrand(1.0, 2.0),
            rel: Pkey(\dur) * 8,
            crv: Pdup(Pexprand(1, 24), Pmeanrand(-8.0, 8.0)),
            lpf: 20000 - Pexprand(20, 20000),
            pan: Pmeanrand(0.0, 1.0).trace,
            lhf: Pexprand(1.01, 1.98) - 1,
            bnd: Pwhite(-0.125, 0.125),
            scale: Scale.chromatic,
            degree: Pdup(Pexprand(1, 192), 
                Plprand(-18.0, 9.0)).round(0.5),
            sustain: Pdup(Pexprand(1, 12), Pwhite(0.5, 4.0)),
            spd: Pwrand2([-1, 1], [1, 64], inf),
            cav: Pseg([0.0, 0.025, 0.0], 100, \sine, inf),
        ])
    )
).play
)
```
<br> 
<br>
<br>

<style>.playlist { display: none; }</style>

<script async type="text/javascript" src="/dmk-player.js?v=5"></script>
<link rel="stylesheet" href="/dmk-player.css">

<script>
window.addEventListener('load', function () {
  var elements = document.getElementsByClassName('dmk-player');
  var players = Array.from(elements).map(function (el) {
    if (el.dataset) {
      var rootUrl = 'https://f005.backblazeb2.com/file/log-tracks/hld/';
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
