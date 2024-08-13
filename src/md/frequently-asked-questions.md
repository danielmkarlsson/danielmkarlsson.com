<br><center>**Frequently asked questions**</center>

<br>**How do I install Scnvim without a package manager?**

First of all you download Scnvim, dont clone it, just download the .zip file. Then chop of the `-main` part from the folder name.
Next you want to put yourself in the `.vim` directory:

```cd ~/.vim```

Then you want to make some directorys and move into that innermost one:

```mkdir -p ~/.vim/pack/aducators/start && cd $_```

Then you move that Scnvim folder over on into there and you are done! Who even needs a package manager? 
Yes, yes, lots and lots of people want and need a package manager, for entirely legitimate reasons, I
know. For me tho, it was a requirement that I should not be forced to install `xcode select`, so this was my journey.

<br>**What's the startup keyCombo to install the OG OS on older Macs?**

`Shift Option ⌘ R` takes you into Internet Recovery mode.

<br>**What's the largest 16:10 resolution you can squeeze in under 1920 x 1080?**

`1728 × 1080`  

<br>**I need to stop using chrome because reasons. How do I make FireFox usable?**

• Turn off "ad measurment", wtf firefox:

dom.private-attribution.submission.enabled

• Suppress pop-up notification "Firefox is full screen":  
    
Type `about:config` in the  address bar.  
Search for `full-screen-api.warning.timeout`  
Set the value to `0`.  

• Stop Firefox from hijacking your hrdware media hotkeys:  

Type `about:config` in the  address bar.  
Search for `media.hardwaremediakeys.enabled`  
Double click the value to make it `false`.

• Suppress download pop-up window:  

`about:config`  
`browser.download.alwaysOpenPanel`  
`false`

• Change the Find in text search highlight colors:  

`about:config`  
ui.textSelectAttentionBackground = #A0A0A1
ui.textHighlightBackground = #646464

• Make the url at bottom left disappear when videos are fullscreened in Firefox:  

Click the settings icon in the top right corner, then  
`Help`,  
`More troubleshooting Information`,  
Scroll down to `Profile folder` and click the button next to that text that says  
`Show in finder`, then  
make a folder called `chrome` in there (case sensitive), then  
open a text editor and    
paste this in there:  

```
#statuspanel[type="overLink"] #statuspanel-label#statuspanel[type="status"] #statuspanel-label[value^="Look"],
#statuspanel[type="status"] #statuspanel-label[value^="Connect"],
#statuspanel[type="status"] #statuspanel-label[value^="Send"],
#statuspanel[type="status"] #statuspanel-label[value^="Transfer"],
#statuspanel[type="status"] #statuspanel-label[value^="Read"],
#statuspanel[type="status"] #statuspanel-label[value^="Wrote"],
#statuspanel[type="status"] #statuspanel-label[value^="Wait"],
#statuspanel[type="status"] #statuspanel-label[value*="TLS handshake"],
#statuspanel[type="status"] #statuspanel-label[value*="FTP transaction"] {
display:none!important;
}
```

Then save as:
`userChrome.css`   
inside the `chrome` folder.  
Restart Firefox.  
Should be good to go.  

I need these Firefox extensions to not be annoyed:

Vimium  
Copy PlainText  
uBlock Origin  
SponsorBlock  
Dark Background and Light Text  
Cookie Cutter GDPR Auto-Deny  
User-Agent Switcher and Manager  
hide-scrollbars  

<br>**How do you  make a macOS Mojave USB installer?**

`sudo /Applications/Install\ macOS\ Mojave.app/Contents/Resources/createinstallmedia --volume /Volumes/usb --applicationpath /Applications/Install\ macOS\ Mojave.app`

<br>**How do you organize your samples?**

Well, I mean I'll prefice this by stating that: Each to their own of course and
also that I am surprised that I get asked this so often. Whatever works for you
is naturally fine. I am increasingly getting the sense though that the way that
people I talk to are doing it, is not working out for them. I like to keep
things simple. I have a folder directly under my user called `snd`. In that
folder I have a bunch of three letter folders. Like this:

`~/snd/zth`  
`~/snd/gng`  
`~/snd/org`  

These folders all contain one or more .wav files that have that same three
letter name followed by a dash and then incrementing numbers beginning from
double zero one. Like this:

`zth-001.wav`  
`zth-002.wav`  
`zth-003.wav`  

I have another folder directly under my user called `scd`. In that
folder I have a bunch of SuperCollider documents. Like this:

`~/scd/zth.scd`  
`~/scd/gng.scd`  
`~/scd/org.scd`  

That way it's easy for me to keep things organized. I always know when a
certain SuperCollider document has sound files that go with it because I put
this oneliner at the top of my code:

`~clean.lsf("~/snd/zth")`

When I run that line those samples get loaded into RAM. I prefer this to the
alternative of always having all samples load in to RAM automagically upon
booting SuperCollider. This is partly because I don't want to sit and wait for
that to happen everytime I'm feeling creative, but mostly because I would
totally run out of RAM if I did that. Oh and hey, if you want to try also doing
it like how I'm doing it with SuperClean I need to tell you; Never put folders
in folders. SuperClean doesn't like it and subsequently won't let you do it. 
<br> <br>

**How do I find SuperCollider's Extension folder?** 

Run this line in SuperCollider:

`Platform.userExtensionDir`

Really great for when you're helping friends get SC up + running on all kinds
of exotic OS's. 
<br> <br>

**How do I set up Reaper to be able to do feedback?**

`File -> Project Settings -> Advanced -> Allow feedback in routing`  

Depending on your preferences you may also want to tick the box that says  

`Save as default project settings`  

I am team feedback 4 lyfe so, that's how I like my defaults.
<br> <br>

**I heard you have a lot of guitars, how many do you have?**

I don't want to say.  
I mean really... [laughs]     
Too many!

**Come on man how many?**

Geez Louise, I dunno... I mean it's not like I'm collecting them. They're
guitars that I _play_ you know. They all have different tunings and have
something that's special about them. One is a barytone guitar so it has a
longer scale length and heavier gauges. I am excited about that one. It's a
Hagström Viking. Semihollow body. I have it 'cause I used to have a Hagström
when I was a kid but it got took somewhere along the way. Then a while back I
had a chance to buy this barytone really cheap so. I mean, they're all cheap
guitars.  Nothing fancy. They're experiments. Not all of them successfull! One
is a black Epiphone SG with quarter tone fretting up to the twelth fret. That
one I don't play enough to be honest. One is an old parlor guitar where the lid
has a crack in it, the neck is half broken and it's missing a tuner. That's my
stunt guitar. That kind of thing, you know. 

**What are we talking here? Triple digits?**

NO! [laughs]  
That would be crazy.   
Single digits for sure! 
<br> <br>

**What are your settings for InitialKeyRepeat and KeyRepeat?**

I have 'em both set pretty fast but not as fast as some folks.    
I feel it suits my temperament. It's fast, but not twitchy.  
Here's how you can make yours like mine:

`defaults write -g InitialKeyRepeat -int 15;`  
`defaults write -g KeyRepeat -int 1`

I need it to be fast so that I can be lazy in the bad way in nvim. Fast frets
you know... I still do a _whole_ lot of hulkSmashing `hjkl` to get around even
tho I know better. I do some `{` and `}` to traverse blocks sometimes. I love
the idea of using marks although I feel like that's for when I have like a big
thing. Like a whole set of things that I want to navigate in more of a magical
way. Like for a gig maybe. I don't set up any marks when I am sat at home just
noodling trying stuff out. 
<br> <br>

**What operating system do you use?**

Mostly I use 10.14 now because I need to be able to run certain software that
won't run well, or at all, on more modern versions. I also have access to one
computer that runs 11.5.2 which is problematic because it won't let me run
everything I want to be able to run and it bugs me a whole lot. I also have a
couple of different Linux computers that I'm hoping will pan out on a long
enough timeline. Thanks to a lot of help from
[friends](https://computermusic.life/) I now have a pretty neat set up with
Arch running headless on a Rpi4. That's more of a long term project though. A
lot of stuff is coming together now in that space. I spend some time monitoring
that, without jumping ship entirely. I know that bareknuckling through, and not
getting any work done, just to be entirely sqeaky clean would not work for me.
<br> <br>

**I read you're a Marxist transhumanist singularitarian.**

Sure, yeah that's true.

**What does that even mean? Tell me about your politics.**

Well, the first part means that Marx is my main guy. I read Marx because what
he wrote resonates with me. I've come to understand from previous interactions
with people that it's important that I provide information about what Marx is
to me, or else things quickly get sidetracked. I regard Marx as a philosopher
and a poet. To me he's someone who did a lot of thinking about how to plan and
organize finite resources. He's separate from anything to do with any
administrative arm of any communist dictatorships you might be thinking of
here. 

**Ok so what's the main thing you draw from Marx?**

What I'm mostly thinking about is _utility_. I value things by how useful
they are, not only to myself, but to everyone. Every conscious being. I believe
in democracy. I really do. I also know how hollow that phrase sounds because of
how it has gotten used by what I regard to be some very undemocratic forces. My
end goal is economic democracy. Now, what I mean by that is democratic planning
of how finite resources are utilized. This leads me to the second part of
transhumanism. I see no way forward that leads to us fulfilling the promises we
all agreed to, as a species, in The United Nations Universal Declaration Of
Humans Rights, without  us passing through economic democracy. 

**Wow... ok, that's wild.**

We signed that declaration in 1948. That needle is not moving in the right
direction. The reason it's moving in the wrong direction is capitalism. In
capitalism all that matters is the bottom line. Profits. Money. The quality of
life for sentient beings on the other side of the planet, to give just one
example, does not matter. That declaration was a promise we all made and we are
not living up to it. So that's a diagnostic tool for me. I want to keep tabs on
how we are doing with that work that we already commited to doing because I
want to add a whole _bunch_ of stuff to that list. The right to computation,
completely free healthcare, education, public transportation, housing,
clothing, food, water, you name it, _everything_  for everyone, all of the time
and forever.

**That's a lot, how can we afford that?**

How can we afford _not_ to? Let's look at computation because, ultimately,
that's all we're doing. Every object, whether sentient or inert, miniscule or
monumental computes it's own weight and position in the universe. For sentient
matter there's a whole lot of other stuff going on on top of that. All of our
sensory information, all of our thoughts and our feelings, those are all being
computed in these biological computers, our bodies. Bodies are subject to wear
and tear over time. They break down. I'd like for us all to commit to solving
this problem, which I think is our biggest problem; Everybody's dying. I'd like
to add that to the list of tasks on our communal to do list. Indefinate
lifespan. Now, that's a big project, it's a lofty goal that would benefit
everyone. There's a lot of utility there. Big projects like this, there's just
no way the current economic system can reach a goal like that. Not so long as
we're all kept busy cutting each other's throats fighting for survival. 

**But everything that's alive has to die at some point tho right?**

I am really looking forward to living as software. That's a lot less likely to
happen as long as we are still in this old way of doing things where only very
few people are given the oppourtunity to find their favourite task to spend
time with and excel at. The right to computation roughly translates to the
right to selfeducation for me. Having access to a computer makes it possible to
circumvent an unjust system, where knowledge is held at artificial scarcity,
for fear of power slipping out of the hands of the few. We need everyone to be
as free, and as safe as possible, as soon as possible, in order to really
accomplish anything worth while. We might all get wiped out before we get to
the point where we are all truly free and safe otherwise. That scares me, you
know. 

**What scares you?**

That all of this might have been in vain. That everything everyone has ever
learned, all our thoughts and feelings could just disappear. The worse thing
about that dark vision of the future is that we will have done it to ourselves.
Maybe because we thought that we were different from one another somehow. We're
not. I can't bare that thought. I have to fight for a world where we can
accomplish something a lot bigger and better than fighting with each other over
bits of food all of the time. Another things that scares me is the idea that
complexity ineveitably leads to collapse. Now, there is no way of proving that
hypothesis, and I certanly hope it's not true. Still, I fear that this idea or,
this suspicion let's call it, is seeping into our collective unconscious and
potentially having a very negative effect on our ways of thinking. For example,
say you where the CEO of an electric car company and you have your sights set
on colonizing Mars as soon as possible. When you have a lofty goal like that
in your sights you might lose sight of... or actually, in this particular case 
it's more likely you were raised to never ever allow workers to unionize in 
your electric car factories. Whenever you tell yourself that the ends justify 
the means, then I think you're in trouble from an ethics and moral philosophy 
perspective.

**Don't you have to break a few...?**

I'm sorry for cutting you off there but I just hate that expression, and to
answer your question: No, certainly not. You most certanly do not _have_ to
"disincentivize" workers from unionizing, in order to ensure their inability to
start placing demands on the factory being a safe place to work where you can
make a living wage from working a fulltime job. In fact my position is that you
should not be _allowed_ to do that, even if your goal is to turn that insane
amount of profit into attempting to colonize Mars. Not even if your end goals
overlap even more with my own am I able to surrender on the idea that each
state that we inhabit on our way towards the future absolutely needs to be an
acceptable state for all conscious beings. I'll add here that _that_ is the
point where I myself fall prey to that nagging suspicion that everything may in
fact break at scale. It doesn't however stop me from following my convictions
and staying true to my beliefs. That is regardless of the perceived likeliness
of success in the here and now.
<br> <br>

**How do you work with harmonic progression in your music?**

The short answer is I don't. I for sure work with tonality and I make a lot of
choices that amount to pitch aggregates or lists of pitches. It's just the
progression part that makes this a tricky question to answer because It implies
linearity and I don't really do that. I tend to think of my music as outside of
time. I don't really want to go anywhere. I just want to build a place, and
then be in that place, watching the light change. I'll make a material, and
that can have a lot of change over time, but it will abide by the rules I've
sat up for it. Then I listen to it for a really long time and change smaller
and smaller things until it gives me enough of the kind of variation that I'm
looking for. I used to think that this was cheating or otherwise of a lesser
value than what I got the impression that other composers were doing. When I
was younger I caught some slack for this kind of musical suggestion approach
but nowadays I'm just really grateful to have found something I like doing. 

**Must be nice. How does that break down in practical terms?**

I'd like to say that it's different everytime, but I think that's more true of
where I end up than where I tend to begin. My go to scale for starting out is
`harmonicMinor`. Sequencing scales is another one of those things that I used
to feel like I shouldn't be doing. When I'm sat at an instrument, or if I roll
my own scale in a computer, ususally I'll just end up with something pretty
close to major, with like maybe one or two ambigious pitches in there. It seems
to be connected to the part of my brain that provides pitch material for
whistling or humming. I get outside of that when I sequence scales. I like
`whole` and a lot of the church scales but not all of them. I like a lot of the
minor scales. Up to pretty recently I would choose a tuning for the whole thing
but now I also change those up so I might return to the same scale but with a
different tuning. I think that's wild. It can have this whole other feel to it
on the second pass.

**What are some tunings you use?**

I like vanilla `et12` but you randomly subtract two from that chromatic scale.
All of those scales are great. Also I like the same idea but in `et31` but then
you do unique omissions per octave. I like `just` but I try to stear clear of
getting too locked in to cleanliness. If I do that one I'll have a high
likeliness of some really muddy and fevery intervals occuring. Also `sept2` I
have used but that one has kind of been used so much now it has this kind of
spent feel to it for me. I like that other one, `sept1` better. `vallotti` and
`werkmeister` are cool because they have that kind of early harpsichord music
feel to them. I have used a meantone one but I can't remember which one now,
but I don't really go in for that like super salty fevery vibe. I think a
better choice for flagging that kind of tuning that has those organ music
connotations is Barnes Bach. I used to use that tuning all the time but I don't
anymore and I miss it thinking about it now. Have a look see for yourself what
scales and tunings are in these handy directories: 

`Tuning.directory;` 
`Scale.directory;`
<br> <br>

**Alright so I have recorded some sound in SC, but now I can't find it?**

Run this line:  

`Platform.recordingsDir;`

That'll give you the path to the directory on your os. You can also set it to
something else if you would prefer. Like this: 

`thisProcess.platform.recordingsDir = ("your/path/here/"); `

You could put that in your startup file to make the change stick. Also might
be good to let you know that you can specify the number of channels you want to
record by running this line: 

`s.record(numChannels: 1);` 

That line will record just the first channel. The default is 2. You can set
that number to anything you like, but you'll have to specify your number of
outputs first like this: 

`s.options.numOutputBusChannels = 8;`

That will get you 8 channels out. So then if you run: 

`s.record(numChannels: 8);`

That will record those 8 channels in one file under the same header. If you
need to split those apart into mono channels I'd do that afterwards. I like
this utility:

[De-Interleaver.zip](https://github.com/muellmusik/De-Interleaver/releases/download/v1.3.0/De-Interleaver.2017-12-21.09-43-52.zip)

If you need to go the other way and interleave a bunch of mono files into a
single file under one header, it also does that. So that's a neat little
utility program. It does one thing and it does it well. 
<br><br>

**I am annoyed by superfluous messages about apps quitting unexpectedly.**

Try this:

`defaults write com.apple.CrashReporter DialogType none`
<br><br>

**How do I calculate the precise playback speed change of transposing down from 48000 to 44100?**

Divide the lower sample rate by the higher sample rate. If you want to go from
48 down to 44.1 that would look like this in SuperCollider:

`(44100 / 48000).asStringPrec(48)`

which yields: `0.918749999999999955591079014993738383054733276367`
SuperCollider also doubles as a very capable calculator which is real nice I
think.

**Can Reaper handle that kind of precision?**

Yes, go ahead and input the result of that calculation right up front there on
the big rate slider in the main window and you are done.
<br><br>

**I keep forgetting how to add a new ssh key to my site. Can you help?**

Sure. First run this line on the computer that you want to be able to ssh from:

`ssh-keygen -o -b 4096`

That'll make a new key pair. Next it'll ask you where to save it. Press Enter
to blow passed this and use the default location. Next it'll ask you for a
passphrase. I like to leave this blank because I don't want to have to type
this passphrase like a million times per day forever end ever. Then again, if
you are into the idea that any security is better than no security then by all
means, have it your way. You have to enter your passphrase twice. So in my case
I would press enter twice to leave it blank. Next you open up your public key
and copy it:

`cat ~/.ssh/id_rsa.pub`

Copy that _whole_ thing, including `ssh-rsa` at the beginning as well as the
stuff at the end. Then go to the place where you pop that into to your server.

When you are adding your new ssh key don't get riled by the fact that maybe the
ones that are there already don't look the same as the one you are about to
paste in there. Have faith, it'll work itself out. Paste it in there. Also it
is a _really_ good idea to provide an understandable description for this new
ssh key. Something like "M1 MBA 2022" could be easily understood by your future
self while as "biz_up_in_haya" you might think is cool now, but this is
a terrible way to treat your future self who wants to know which keys can be
deleted. Next up is connecting over ssh for the first time from this new computer:

`ssh -i ~/.ssh/id_rsa root@your-server's-ip-number-goes-here;`

If you get a question about authenticity bla, bla and are you sure? Then yes,
you are sure. After that you should be good to go.

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
