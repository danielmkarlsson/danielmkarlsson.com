<br><center>**Towards a music for large ensemble**</center><br> I've been making
a bunch of 20 minute pieces with [SuperClean](./superclean-installparty) for
some time now. I am fond of the idea that there can be pieces within pieces, or
at least some modularity or memory. Some degree of referentially is there
anyway. It's to do with the idea of slow accumulation of small things eventually
amounting to a significantly larger something. As the work has progressed, I've
been thinking more about the uniqueness requirement for all these examples of
working with sample packs that I've made by playing and recording an instrument
or an object. I've noticed that there are a lot of sounds that have to do with
either strings or metals. Also there is a growing number of variations of
bellowed pipes. A couple of different organs, accordion and shruti. They all
sound different spectrally, but I also play them differently, so modes of play
is now firmly a part of how I think about this. When a group of these similar
instruments arrive together I find that it is lovely to hear their sometimes
subtle difference in color augmented by how they are played. I am sharing the
code and the sample packs on my [log](./log) page as I finish the pieces. As
this is a commission for [Edition](http://www.edition-festival.com/), and time
is, as always, moving forward, I won't always make the solo piece first. It will
have to depend, on a lot of things. I have to allocate my time and energy
wisely. I figure I'll get around to doing the solo pieces I didn't feel I had
time to do now, after I do the gig. Could be a nice way to soften the curvature
of coming down from the high of working on the piece. Maybe, who knows. First I
thought that I'd be set with twelve instruments. Then I thought for sure that
sixteen of those single instrument or object sample pack pieces would be enough
to make an ensemble piece from. I decided on twelve initially because after
searching around a lil bit I felt that twelve unique instruments mapped well
enough for me onto the idea of the sinfonietta. I have changed my mind again now
about the size of the ensemble. I think I'm just going to keep adding
instruments as I go. I am now thinking I need to have more variation in terms of
physical materials and playing techniques used in order to round out the
ensemble. Also this idea needs to be carefully balanced against density. If
things get too dense then precious details get lost. Also I'm thinking about how
some of these recordings have tiny iterative sounds within their more continuous
sound. I have found these to be valuable in terms of picking out distinct
features, and then that way kind of keeping track of them in the music as it
unfolds. The latest idea I've had is to make chords. I really didn't think that
this idea would work, but it does. I am very grateful. I've added a high
register Organ chord instrument and a high register Euphonium instrument. They
use the same pitch and scale material as in the big piece. I find that they work
well together, although that is quite an unlikely occurrence. I now think of
them as bookends which provide support and cohesion. I've now finally gotten to
64 instruments so that's the instrumentation taken care of. Things are starting
to crystallize. I now have a couple of different categories or groups of
instruments, or behaviors if you will. In this last chord group I have the
highest organ registration with the least amount of overtones that I recorded at
Markuskyrkan. Then there is also the highest note on my biggest Zither played
with an ebow in overtone mode. Then there is the highest note I could play on
the Euphonium I recorded in the ballroom at the shared studio space with the
mics at the other end of the room. Lastly there is the Trumpet I recorded with a
lapel mic inside my silent brass. So four of those high frequency chord
instruments. Also I got eleven of the transient, single hit instruments. They
only play once when the larger enveloping routine that starts and stops Pdefs
chooses a new constellation. Also there are the group of instruments that have
attack time set to one second. They come in just at the tail of those
transients, so together they can form a kind of gestalt made up of multiple
instruments. Lastly there are the sustained sounds which fade in and out very
slowly and form long arcs. I had been putting off breaking out the onset 
instruments into their own Pbind factory. Once I got that sorted things 
fell into place and now the piece is ready to be performed.

<div class="dmk-player" data-playlist="now/index.json"></div> <br> 

<br>

```text
(
~clean.csf("~/snd/acf"); ~clean.lsf("~/snd/bbu"); ~clean.csf("~/snd/bfn"); ~clean.csf("~/snd/bwm"); ~clean.csf("~/snd/gls");
~clean.csf("~/snd/gvs"); ~clean.csf("~/snd/met"); ~clean.csf("~/snd/mrb"); ~clean.csf("~/snd/mtf"); ~clean.csf("~/snd/phg");
~clean.csf("~/snd/pno"); ~clean.csf("~/snd/rec"); ~clean.csf("~/snd/sbt"); ~clean.csf("~/snd/smb"); ~clean.csf("~/snd/snr");
~clean.lsf("~/snd/stn"); ~clean.csf("~/snd/swp"); ~clean.csf("~/snd/tap"); ~clean.csf("~/snd/tgt"); ~clean.csf("~/snd/thb");
~clean.csf("~/snd/trp"); ~clean.csf("~/snd/vcl"); ~clean.csf("~/snd/zth"); ~clean.lsf("~/snd/mtb"); ~clean.csf("~/snd/hld");
~clean.lsf("~/snd/gng"); ~clean.csf("~/snd/lsh"); ~clean.csf("~/snd/bcm"); ~clean.lsf("~/snd/fmr"); ~clean.csf("~/snd/nsm");
~clean.lsf("~/snd/pnf"); ~clean.csf("~/snd/ztn"); ~clean.csf("~/snd/fms"); ~clean.csf("~/snd/eph"); ~clean.csf("~/snd/orb");
~clean.csf("~/snd/nsg"); ~clean.csf("~/snd/dcp"); ~clean.lsf("~/snd/dpl"); ~clean.csf("~/snd/wsl"); ~clean.csf("~/snd/spb");
~clean.csf("~/snd/hgf"); ~clean.csf("~/snd/vla"); ~clean.csf("~/snd/ocv"); ~clean.csf("~/snd/pck"); ~clean.csf("~/snd/cbg");
~clean.csf("~/snd/nmp"); ~clean.csf("~/snd/tlb"); ~clean.csf("~/snd/shr"); ~clean.csf("~/snd/nsb"); ~clean.lsf("~/snd/mtr");
~clean.lsf("~/snd/glk"); ~clean.lsf("~/snd/res"); ~clean.csf("~/snd/cha"); ~clean.csf("~/snd/bcy"); ~clean.csf("~/snd/nkh"); 
~clean.csf("~/snd/ctb"); ~clean.csf("~/snd/mtl"); ~clean.csf("~/snd/est"); ~clean.lsf("~/snd/cta"); ~clean.csf("~/snd/cla");
~clean.csf("~/snd/mks"); ~clean.csf("~/snd/mkc"); ~clean.csf("~/snd/epc"); ~clean.csf("~/snd/ztc"); ~clean.csf("~/snd/trc"); 
~slnd = Scala("~/scl/slendro.scl");
~zsts = Scala("~/scl/07-37.scl");
~bal5 = Scala("~/scl/balafon5.scl");
~dip7 = Scala("~/scl/diaphonic_7.scl");
~dusc = Scala("~/scl/dudon_saba-c.scl");
)

(
~a = {|type, snd, spd, num, bgn, atk, octave, degree, aux, cav, amp|
    var b =
    Pbind(*[
        type: type,
        snd: snd,
        spd: spd,
        num: num,
        flp: Pwhite(0, 1),
        bgn: bgn,
        pan: Pmeanrand(0.1, 0.9),
        atk: atk,
        hld: Plprand(39.0, 59.0),
        rel: Phprand(31.0, 51.0),
        crv: Phprand(1.0, 5.0),
        crt: Pkey(\crv).neg,
        dur: Pkey(\atk) + Pkey(\hld) + Pkey(\rel) / Pexprand(1.75, 4.0),
        sustain: Pkey(\atk) + Pkey(\hld) + Pkey(\rel) + 199,
        cav: cav,
        cai: Pseg(Phprand(0.5, 1.0), Pwhite(30.0, 90.0), \wel, inf),
        scale: Pdup(Plprand(55, 111), Pxshuf([
                Scale.harmonicMinor(\sept2),
                Scale.melodicMinor(\sept1),
                Scale.ionian(\just),
                Scale.mixolydian(\mean4),
                ~slnd.scale,
			    ~zsts.scale,
			    ~bal5.scale,
			    ~dip7.scale,
			    ~dusc.scale,
            ], inf)),
        octave: octave,
        degree: degree,
        amp: amp,
        aux: aux,
        //calcFreq: Pfunc{|ev|ev.use{ev.freq.asStringPrec(48).postln}},
        //hpf: 100,
	]);
	Pseq([b], inf);
};
 
~c = {|type, snd, spd, num, bgn, atk, octave, degree, aux, cav, amp|
    var d =
    Pbind(*[
        type: type,
        snd: snd,
        spd: spd,
        num: num,
        flp: Pwhite(0, 1),
        bgn: bgn,
        pan: Pmeanrand(0.1, 0.9),
        atk: atk,
        hld: Plprand(39.0, 59.0),
        rel: Phprand(31.0, 51.0),
        crv: Phprand(2.0, 7.0),
        crt: Pkey(\crv).neg,
        dur: Pkey(\atk) + Pkey(\hld) + Pkey(\rel) / Pexprand(1.75, 4.0),
        sustain: Pkey(\atk) + Pkey(\hld) + Pkey(\rel) + 199,
        cav: cav,
        cai: Pseg(Phprand(0.5, 1.0), Pwhite(30.0, 90.0), \wel, inf),
        scale: Pdup(Plprand(55, 111), Pxshuf([
                Scale.harmonicMinor(\sept2),
                Scale.melodicMinor(\sept1),
                Scale.ionian(\just),
                Scale.mixolydian(\mean4),
                ~slnd.scale,
			    ~zsts.scale,
			    ~bal5.scale,
			    ~dip7.scale,
			    ~dusc.scale,
            ], inf)),
        octave: octave,
        degree: degree,
        amp: amp,
        aux: aux,
        //calcFreq: Pfunc{|ev|ev.use{ev.freq.asStringPrec(48).postln}},
        //hpf: 100,
	]);
	Pseq([d], inf);
};
)

(
~bst = 3.0;
~aux = Pxshuf((0, 1 .. 15), inf).asStream;
~atk = Phprand(15.0, 30.0).asStream; 
~rst = Pwrand2([\cln, \], [1, 1], inf).asStream;
~bgn = Pwhite(0.0, 0.75).asStream; // do the math on these individually
~bbuNum = Pxshuf((0 .. 182), inf).asStream;
~stnNum = Pxshuf((0 .. 5), inf).asStream;
~mtbNum = Pxshuf((0 .. 10), inf).asStream;
~fmrNum = Pxshuf((0 .. 30), inf).asStream;
~gngNum = Pxshuf((0 .. 15), inf).asStream;
~pnfNum = Pxshuf((0 .. 12), inf).asStream;
~metNum = Pxshuf((0 .. 3), inf).asStream;
~pnoNum = Pxshuf((0 .. 3), inf).asStream;
~recNum = Pxshuf((0 .. 4), inf).asStream;
~sbtNum = Pxshuf((0 .. 4), inf).asStream;
~snrNum = Pxshuf((0 .. 25), inf).asStream;
~thbNum = Pxshuf((0 .. 3), inf).asStream;
~trpNum = Pxshuf((0 .. 3), inf).asStream;
~zthNum = Pxshuf((0 .. 2), inf).asStream;
~lshNum = Pxshuf((0 .. 55), inf).asStream;
~bfnNum = Pxshuf((0 .. 2), inf).asStream;
~bwmNum = Pxshuf((0 .. 7), inf).asStream;
~orbNum = Pxshuf((0 .. 6), inf).asStream;
~dcpNum = Pxshuf((0 .. 4), inf).asStream;
~dplNum = Pxshuf((0 .. 29), inf).asStream;
~spbNum = Pxshuf((0 .. 3), inf).asStream;
~cbgNum = Pxshuf((0 .. 16), inf).asStream;
~nmpNum = Pxshuf((0 .. 6), inf).asStream;
~tlbNum = Pxshuf((0 .. 3), inf).asStream;
~shrNum = Pxshuf((0 .. 3), inf).asStream;
~mtrNum = Pxshuf((0 .. 4), inf).asStream;
~mtlNum = Pxshuf((0 .. 9), inf).asStream;
~glkNum = Pxshuf((15 .. 29), inf).asStream;
~resNum = Pxshuf((0 .. 64), inf).asStream;
~bcyNum = Pxshuf((0 .. 39), inf).asStream;
~estNum = Pxshuf((0 .. 7), inf).asStream;
Pdef(00, ~c.(Pseq([Pwrand2([\cln, \], [1, 0], 1), Pseq([\], inf)], inf), \bbu, 1, Pfunc({~bbuNum.next}), 0, 0, 5, 0, Pfunc({~aux.next}) + 16, 0, (Phprand(-12.0, -6.0) + ~bst).dbamp));
Pdef(01, ~c.(Pseq([Pwrand2([\cln, \], [0, 16], 1), Pseq([\], inf)], inf), \stn, 1, Pfunc({~stnNum.next}), 0, 0, 5, Plprand(0, 1), Pfunc({~aux.next}) + 16, 0, (Phprand(-12.0, -9.0) + ~bst).dbamp));
Pdef(02, ~c.(Pseq([Pwrand2([\cln, \], [1, 0], 1), Pseq([\], inf)], inf), \mtb, 1, Pfunc({~mtbNum.next}), 0, 0, 5, 0, Pfunc({~aux.next}) + 16, 0, (Plprand(-21.0, -18.0) + ~bst).dbamp));
Pdef(03, ~c.(Pseq([Pwrand2([\cln, \], [1, 0], 1), Pseq([\], inf)], inf), \fmr, 1, Pfunc({~fmrNum.next}), 0, 0.05, 5, Pxshuf((0 .. 3), inf), Pfunc({~aux.next}), 1, (Plprand(-18.0, -12.0) + ~bst).dbamp));
Pdef(04, ~c.(Pseq([Pwrand2([\cln, \], [1, 0], 1), Pseq([\], inf)], inf), \gng, 1, Pfunc({~gngNum.next}), 0, 1/32, Pwhite(5, 6), 0, Pfunc({~aux.next}), 1, (Phprand(-18.0, -12.0) + ~bst).dbamp));
Pdef(05, ~c.(Pseq([Pwrand2([\cln, \], [1, 0], 1), Pseq([\], inf)], inf), \pnf, 1, Pfunc({~pnfNum.next}), 0, 0, Phprand(3, 5), 0, Pfunc({~aux.next}) + 16, 0, (Phprand(-9.0, -6.0) + ~bst).dbamp));
Pdef(06, ~c.(Pseq([Pwrand2([\cln, \], [1, 0], 1), Pseq([\], inf)], inf), \dpl, 1, Pfunc({~dplNum.next}), 0, 0, 5, 0, Pfunc({~aux.next}) + 16, 0, (Phprand(-12.0, -9.0) + ~bst).dbamp));
Pdef(07, ~a.(Pseq([Pwrand2([\cln, \], [1, 0], 1), Pseq([\], inf)], inf), Pseq([\mtl, \mtr], inf), 1, Pfunc({~dplNum.next}), 0, 0, 5, 0, Pfunc({~aux.next}) + 16, 0, (Phprand(-9.0, -3.0) + ~bst).dbamp));
Pdef(08, ~c.(Pseq([Pwrand2([\cln, \], [1, 0], 1), Pseq([\], inf)], inf), \glk, 1, 0, 0, 0, 4, Plprand(0, 7), Pfunc({~aux.next}) + 16, 0, (Plprand(-15.0, -9.0) + ~bst).dbamp)); 
Pdef(09, ~c.(Pseq([Pwrand2([\cln, \], [1, 0], 1), Pseq([\], inf)], inf), \res, 1, Pfunc({~dplNum.next}), 0, 0, 4, Plprand(0, 11), Pfunc({~aux.next}), 1, (Plprand(-9.0, -3.0) + ~bst).dbamp)); 
Pdef(10, ~c.(Pseq([Pwrand2([\cln, \], [1, 0], 1), Pseq([\], inf)], inf), \cta, 1, 0, 0, 0, 5, Pxshuf((-2 .. 2), inf), Pfunc({~aux.next}), 1, (Plprand(-18.0, -12.0) + ~bst).dbamp)); 
Pdef(11, ~a.(Pwrand2([\cln, \], [1, 16], inf), \met, 1, Pfunc({~metNum.next}), Pfunc({~bgn.next}), Pfunc({~atk.next}), Pdup(Plprand(1, 11), Phprand(5, 6)), Plprand(0, 7), Pfunc({~aux.next}), 1, (Plprand(-21.0, -15.0) + ~bst).dbamp));
Pdef(12, ~a.(Pwrand2([\cln, \], [1, 4], inf), \mrb, 1, 0, Pfunc({~bgn.next}), Pfunc({~atk.next}), Pdup(Plprand(1, 11), Phprand(7, 8)), Plprand(0, 7), Pfunc({~aux.next}), 1, (Plprand(-15.0, -9.0) + ~bst).dbamp));
Pdef(13, ~a.(Pfunc({~rst.next}), \mtf, 1, 0, Pfunc({~bgn.next}), Pfunc({~atk.next}), 5, Plprand(0, 7), Pfunc({~aux.next}), 1, (Plprand(-18.0, -12.0) + ~bst).dbamp));
Pdef(14, ~a.(Pwrand2([\cln, \], [1, 8], inf), \phg, 1, 0, Pfunc({~bgn.next}), Pfunc({~atk.next}), Pdup(Plprand(1, 11), Plprand(5, 7)), Plprand(0, 7), Pfunc({~aux.next}), 1, (Plprand(-15.0, -9.0) + ~bst).dbamp));
Pdef(15, ~a.(Pwrand2([\cln, \], [1, 4], inf), \pno, 1, Pfunc({~pnoNum.next}), Pfunc({~bgn.next}), Pfunc({~atk.next}), 6, Pmeanrand(-1, 1), Pfunc({~aux.next}), 1, (Plprand(-15.0, -9.0) + ~bst).dbamp));
Pdef(16, ~a.(Pwrand2([\cln, \], [1, 8], inf), \rec, 1, Pfunc({~recNum.next}), 0, Pfunc({~atk.next}), Pdup(Plprand(1, 11), Phprand(4, 6)), Plprand(0, 7), Pfunc({~aux.next}), 1, (Plprand(-15.0, -9.0) + ~bst).dbamp)); 
Pdef(17, ~a.(Pwrand2([\cln, \], [1, 4], inf), \sbt, 1, Pfunc({~sbtNum.next}), 0, Plprand(1.0, 2.0), 3, Phprand(0, 7), Pfunc({~aux.next}), 1, (-6.0 + ~bst).dbamp));
Pdef(18, ~a.(Pwrand2([\cln, \], [1, 16], inf), \smb, 1, 0, Pfunc({~bgn.next}), Pfunc({~atk.next}), 5, Phprand(0, 7), Pfunc({~aux.next}), 1, (Plprand(-15.0, -9.0) + ~bst).dbamp));
Pdef(19, ~a.(Pwrand2([\cln, \], [1, 8], inf), \snr, 1, Pfunc({~snrNum.next}), 0, Plprand(1.0, 7.0), Pdup(Plprand(1, 11), Pmeanrand(4, 6)), Pmeanrand(-3, 4), Pfunc({~aux.next}), 1, (Plprand(-18.0, -12) + ~bst).dbamp)); //16
Pdef(20, ~a.(Pwrand2([\cln, \], [1, 8], inf), \swp, 1, 0, Pfunc({~bgn.next}), Pfunc({~atk.next}), Pdup(Plprand(1, 11), Phprand(5, 8)), Plprand(0, 7), Pfunc({~aux.next}), 1, (Plprand(-18.0, -12.0) + ~bst).dbamp));
Pdef(21, ~a.(Pwrand2([\cln, \], [1, 8], inf), \tap, 1, 0, Pfunc({~bgn.next}), Pfunc({~atk.next}), Pdup(Plprand(1, 11), Plprand(4, 7)), Plprand(0, 7), Pfunc({~aux.next}), 1, (Plprand(-18.0, -12.0) + ~bst).dbamp));
Pdef(22, ~a.(Pwrand2([\cln, \], [1, 16], inf), \tgt, 1, 0, Pfunc({~bgn.next}), Pfunc({~atk.next}), 4, Plprand(0, 7), Pfunc({~aux.next}), 1, (Plprand(-15.0, -15.0) + ~bst).dbamp));
Pdef(23, ~a.(Pwrand2([\cln, \], [1, 8], inf), \thb, 1, Pfunc({~thbNum.next}), Pfunc({~bgn.next}), Pfunc({~atk.next}), Pdup(Plprand(1, 11), Phprand(5, 8)), Plprand(0, 7), Pfunc({~aux.next}), 1, (Plprand(-21.0, -15.0) + ~bst).dbamp));
Pdef(24, ~a.(Pwrand2([\cln, \], [1, 8], inf), \trp, 1, Pfunc({~trpNum.next}), 0, Pfunc({~atk.next}), Pdup(Plprand(1, 11), Pwhite(4, 5)), Plprand(0, 7), Pfunc({~aux.next}), 1, (Plprand(-27.0, -21.0) + ~bst).dbamp));
Pdef(25, ~a.(Pwrand2([\cln, \], [1, 2], inf), \vcl, 1, 0, Pfunc({~bgn.next}), Pfunc({~atk.next}), Pdup(Plprand(3, 11), Phprand(5, 7)), Pxshuf((0 .. 7), inf), Pfunc({~aux.next}), 1, (Plprand(-15.0, -9.0) + ~bst).dbamp));
Pdef(26, ~a.(Pwrand2([\cln, \], [1, 8], inf), \zth, 1, Pfunc({~trpNum.next}), Pfunc({~bgn.next}), Pfunc({~atk.next}), Pdup(Plprand(1, 11), Pmeanrand(5, 8)), Plprand(0, 7), Pfunc({~aux.next}), 1, (Plprand(-15.0, -9.0) + ~bst).dbamp));
Pdef(27, ~a.(Pwrand2([\cln, \], [1, 4], inf), \hld, 1, 0, Pfunc({~bgn.next}), Pfunc({~atk.next}), Pdup(Plprand(1, 11), Pwhite(3, 5)), Plprand(0, 7), Pfunc({~aux.next}), 1, (Plprand(-15.0, -3.0) + ~bst).dbamp));
Pdef(28, ~a.(Pfunc({~rst.next}), \lsh, 1, Pfunc({~lshNum.next}), Pfunc({~bgn.next}), Pfunc({~atk.next}), Plprand(3, 4), Plprand(0, 7), Pfunc({~aux.next}), 1, (Phprand(-18.0, -12.0) + ~bst).dbamp));
Pdef(29, ~a.(Pfunc({~rst.next}), \acf, 1, 0, Pfunc({~bgn.next}), Pfunc({~atk.next}), Pdup(Plprand(1, 11), Phprand(5, 8)), Plprand(0, 7), Pfunc({~aux.next}), 1, (Plprand(-21.0, -15.0) + ~bst).dbamp));
Pdef(30, ~a.(Pfunc({~rst.next}), \bcm, 1, Pwhite(0, 1), Pfunc({~bgn.next}), Pfunc({~atk.next}), Pdup(Plprand(1, 11), Pwhite(5, 7)), Plprand(0, 7), Pfunc({~aux.next}), 1, (Plprand(-18.0, -9.0) + ~bst).dbamp));
Pdef(31, ~a.(Pwrand2([\cln, \], [1, 4], inf), \bfn, 1, Pfunc({~bfnNum.next}), Pfunc({~bgn.next}), Pfunc({~atk.next}), Pdup(Plprand(1, 11), Phprand(5, 7)), Plprand(0, 7), Pfunc({~aux.next}), 1, (Plprand(-21.0, -12) + ~bst).dbamp));
Pdef(32, ~a.(Pwrand2([\cln, \], [1, 8], inf), \bwm, 1, Pfunc({~bwmNum.next}), 0, Pfunc({~atk.next}), Pdup(Plprand(1, 11), Plprand(5, 8)), Plprand(0, 7), Pfunc({~aux.next}), 1, (Plprand(-21.0, -15) + ~bst).dbamp));
Pdef(33, ~a.(Pwrand2([\cln, \], [1, 8], inf), \nsm, 1, 0, Pfunc({~bgn.next}), Pfunc({~atk.next}), Pdup(Plprand(1, 11), Plprand(5, 7)), Plprand(0, 7), Pfunc({~aux.next}), 1, (Phprand(-21.0, -18.0) + ~bst).dbamp));
Pdef(34, ~a.(Pfunc({~rst.next}), \gls, 1, 0, Pfunc({~bgn.next}), Pfunc({~atk.next}), Pdup(Plprand(1, 11), Plprand(5, 7)), Plprand(0, 7), Pfunc({~aux.next}), 1, (Plprand(-27.0, -21) + ~bst).dbamp));
Pdef(35, ~a.(Pwrand2([\cln, \], [1, 8], inf), \ztn, 1, 0, 0, Plprand(0.0, 0.1), 4, Plprand(0, 7), Pfunc({~aux.next}) + 16, 0, (Plprand(-24.0, -18) + ~bst).dbamp));
Pdef(36, ~a.(Pwrand2([\cln, \], [1, 4], inf), \fms, 1, 0, Pwhite(0.0, 1.0), Pfunc({~atk.next}), Pwhite(3, 4), Prand([0, Plprand(0, 7, 1)], inf), Pfunc({~aux.next}) + 16, 0, (Plprand(-21.0, -15) + ~bst).dbamp));
Pdef(37, ~a.(Pwrand2([\cln, \], [1, 8], inf), \eph, 1, 0, Pfunc({~bgn.next}), Pfunc({~atk.next}), 5, Plprand(-4, 3), Pfunc({~aux.next}), 1, (Plprand(-24.0, -18) + ~bst).dbamp));
Pdef(38, ~a.(Pwrand2([\cln, \], [1, 2], inf), \orb, 1, Pfunc({~orbNum.next}), Plprand(0.0, 0.25), 1, 5, Plprand(0, 3), Pfunc({~aux.next}), 1, (Plprand(-12.0, -6) + ~bst).dbamp));
Pdef(39, ~a.(Pwrand2([\cln, \], [1, 2], inf), \nsg, 1, 0, Plprand(0.0, 0.75), 1, Pwhite(3, 4), Plprand(0, 7), Pfunc({~aux.next}), 1, (Plprand(-21.0, -15) + ~bst).dbamp));
Pdef(40, ~a.(Pfunc({~rst.next}), \dcp, 1, Pfunc({~dcpNum.next}), 0, 1, 4, Plprand(4, 10), Pfunc({~aux.next}), 1, (Plprand(-24.0, -18.0) + ~bst).dbamp));
Pdef(41, ~a.(Pwrand2([\cln, \], [1, 8], inf), \gvs, 1, 0, Pwhite(0, 1/4), Pfunc({~atk.next}), Pdup(Plprand(1, 11), Plprand(5, 6)), Plprand(0, 7), Pfunc({~aux.next}), 1, (Plprand(-18.0, -15.0) + ~bst).dbamp));
Pdef(42, ~a.(Pwrand2([\cln, \], [1, 8], inf), \wsl, 1, 0, Phprand(0.0, 3/4), 1, Pwhite(3, 5), Plprand(0, 7), Pfunc({~aux.next}), 1, (Plprand(-36.0, -33.0) + ~bst).dbamp));
Pdef(43, ~a.(Pwrand2([\cln, \], [1, 16], inf), \spb, 1, Pfunc({~spbNum.next}), Plprand(0.0, 3/4), 1, 4, Plprand(0, 7), Pfunc({~aux.next}), 1, (Plprand(-15.0, -12.0) + ~bst).dbamp));
Pdef(44, ~a.(Pwrand2([\cln, \], [1, 4], inf), \hgf, 1, 0, Plprand(0.0, 3/4), 1, 5, Pmeanrand(-3, 4).round, Pfunc({~aux.next}), 1, (Plprand(-12.0, -18.0) + ~bst).dbamp));
Pdef(45, ~a.(Pwrand2([\cln, \], [1, 4], inf), \vla, 1, 0, Pwhite(0.0, 3/4), 1, Pwhite(3, 5), Plprand(0, 7), Pfunc({~aux.next}), 1, (Plprand(-12.0, -18) + ~bst).dbamp));
Pdef(46, ~a.(Pwrand2([\cln, \], [1, 2], inf), \ocv, 1, 0, Pwhite(0.0, 3/4), 1, Pwhite(3, 4), Plprand(0, 7), Pfunc({~aux.next}), 1, (Plprand(-12.0, -18.0) + ~bst).dbamp));
Pdef(47, ~a.(Pwrand2([\cln, \], [1, 16], inf), \pck, 1, 0, Plprand(0.0, 3/4), 1, Pwhite(3, 5), Plprand(0, 7), Pfunc({~aux.next}) + 16, 0, (Plprand(-36.0, -30.0) + ~bst).dbamp));
Pdef(48, ~a.(Pwrand2([\cln, \], [1, 4], inf), \cbg, 1, Pfunc({~cbgNum.next}), Pwhite(0.0, 0.1), 1, Pwhite(4, 5), Plprand(0, 7), Pfunc({~aux.next}), 1, (Plprand(-18.0, -15.0) + ~bst).dbamp));
Pdef(49, ~a.(Pwrand2([\cln, \], [1, 4], inf), \nmp, 1, Pfunc({~nmpNum.next}), Pwhite(0.0, 0.1), 1, Pwhite(4, 5), Plprand(0, 7), Pfunc({~aux.next}), 1, (Plprand(-15.0, -12.0)  + ~bst).dbamp));
Pdef(50, ~a.(Pwrand2([\cln, \], [1, 2], inf), \tlb, 1, Pfunc({~tlbNum.next}), Pwhite(0.0, 0.1), Pfunc({~atk.next}), Pwhite(4, 5), Plprand(0, 7), Pfunc({~aux.next} + 16), 0, (Plprand(-21.0, -15.0) + ~bst).dbamp));
Pdef(51, ~a.(Pwrand2([\cln, \], [1, 8], inf), \shr, 1, Pfunc({~shrNum.next}), Pwhite(0.0, 0.1), Pfunc({~atk.next}), Pwhite(3, 4), Pxshuf((0 .. 7), inf), Pfunc({~aux.next}), 1, (Plprand(-30.0, -24.0) + ~bst).dbamp));
Pdef(52, ~a.(Pwrand2([\cln, \], [1, 2], inf), \nsb, 1, 0, Pwhite(0.0, 0.1), Pfunc({~atk.next}), Plprand(3, 5), Plprand(0, 7), Pfunc({~aux.next}), 1, (Plprand(-15.0, -9.0) + ~bst).dbamp));
Pdef(53, ~a.(Pwrand2([\cln, \], [1, 4], inf), \cha, 1, 0, Pfunc({~bgn.next}), Pfunc({~atk.next}), 4, Phprand(0, 3), Pfunc({~aux.next}), 1, (Plprand(-15.0, -9.0) + ~bst).dbamp));
Pdef(54, ~a.(Pwrand2([\cln, \], [1, 8], inf), \bcy, 1, Pfunc({~bcyNum.next}), 0, 0, 5, Pmeanrand(-3, 4).round, Pfunc({~aux.next}), 1, (Plprand(-21.0, -15.0) + ~bst).dbamp));
Pdef(55, ~a.(Pwrand2([\cln, \], [1, 2], inf), \nkh, 1, 0, Pfunc({~bgn.next}), Pfunc({~atk.next}), 5, Pwhite(-2, 5), Pfunc({~aux.next}), 1, (Plprand(-24.0, -18.0) + ~bst).dbamp));
Pdef(56, ~a.(Pwrand2([\cln, \], [1, 4], inf), \ctb, 1, 0, Pfunc({~bgn.next}), Pfunc({~atk.next}), 5, Plprand(-4, 4), Pfunc({~aux.next} + 16), 0, (Plprand(-21.0, -15.0) + ~bst).dbamp));
Pdef(57, ~a.(Pwrand2([\cln, \], [1, 4], inf), \est, 1, Pfunc({~estNum.next}), Pfunc({~bgn.next}), Pfunc({~atk.next}), Pmeanrand(4, 7).round, Plprand(0, 7), Pfunc({~aux.next}), 1, (Plprand(-12.0, -6.0) + ~bst).dbamp));
Pdef(58, ~a.(Pwrand2([\cln, \], [1, 2], inf), \cla, 1, 0, Pfunc({~bgn.next}), Pfunc({~atk.next}), 5, Pmeanrand(-16, 0).round.unique, Pfunc({~aux.next}), 1, (Plprand(-18.0, -12.0)  + ~bst - Pkey(\degree).linlin(-15, 0, 0, 6)).dbamp));
Pdef(59, ~a.(Pwrand2([\cln, \], [1, 2], inf), \mks, 1, 0, Pfunc({~bgn.next}), Pfunc({~atk.next}), 5, Plprand(0, 7), Pfunc({~aux.next}), 1, (Plprand(-15.0, -9.0) + ~bst).dbamp));
Pdef(60, ~a.(Pwrand2([\cln, \], [1, 2], inf), \mkc, 1, 0, Pfunc({~bgn.next}), Phprand(30.0, 60.0), 5, Phprand(-14, 7), Pfunc({~aux.next}), 1, (Plprand(-18.0, -15.0) + ~bst).dbamp));
Pdef(61, ~a.(Pwrand2([\cln, \], [1, 1], inf), \epc, 1, 0, Pfunc({~bgn.next}), Phprand(30.0, 60.0), 5, Phprand(-14, 7), Pfunc({~aux.next}), 1, (Plprand(-9.0, -3.0) + ~bst).dbamp));
Pdef(62, ~a.(Pwrand2([\cln, \], [1, 2], inf), \ztc, 1, 0, Pfunc({~bgn.next}), Phprand(30.0, 60.0), 5, Phprand(-14, 7), Pfunc({~aux.next}), 1, (Plprand(-15.0, -9.0) + ~bst).dbamp));
Pdef(63, ~a.(Pwrand2([\cln, \], [1, 2], inf), \trc, 1, Pxrand([0, 1], inf), Pfunc({~bgn.next}), Phprand(30.0, 60.0), 5, Phprand(-14, 7), Pfunc({~aux.next}), 1, (Plprand(-15.0, -9.0) + ~bst).dbamp));
)

(
//var onsetNumDefs = (00 .. 10);
var sustainNumDefs = Pxshuf((11 .. 63), inf).asStream; 
var onsetNumDefs = Pxshuf((0 .. 10), inf).asStream; 
~sustainMinStart = 12;
~sustainMaxStart = 24;
~onsetMinStart = 2;
~onsetMaxStart = 4;
~sustainMinWait = 60;
~sustainMaxWait = 120;

if (~sustainIds.notNil) {
    ~sustainRoutine.stop;
    ~sustainIds.do {arg id;
        "Stopped Pdef(%)".format(id).postln;
        Pdef(id).stop;
    };

};

~sustainRoutine = Routine {
    loop {
        var n = rrand(~sustainMinStart, ~sustainMaxStart);
        //~ids = sustainNumDefs.scramble.keep(n);
        ~sustainIds = sustainNumDefs.nextN(n);
        ~sustainIds.do {arg id;
            "Started Pdef(%)".format(id).postln;
            Pdef(id).play(quant: 1);
        };
        exprand(~sustainMinWait, ~sustainMaxWait).wait;
        ~sustainIds.do {arg id;
            "Stopped Pdef(%)".format(id).postln;
            Pdef(id).stop;
        };
    }
}.play;


if (~onsetIds.notNil) {
    ~onsetRoutine.stop;
    ~onsetIds.do {arg id;
        "Stopped Pdef(%)".format(id).postln;
        Pdef(id).stop;
    };

};

~onsetRoutine = Routine {
    loop {
        var n = rrand(~onsetMinStart, ~onsetMaxStart);
        //~onsetIds = onsetNumDefs.scramble.keep(n);
        ~onsetIds = onsetNumDefs.nextN(n);
        ~onsetIds.do {arg id;
            "Started Pdef(%)".format(id).postln;
            Pdef(id).play(quant: 1);
        };
        exprand(~sustainMinWait, ~sustainMaxWait).wait; // correct
        ~onsetIds.do {arg id;
            "Stopped Pdef(%)".format(id).postln;
            Pdef(id).stop;
        };
    }
}.play;
)
```

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

