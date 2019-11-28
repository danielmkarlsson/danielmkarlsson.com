**SC4Reaper**

I was given the opportunity to hold a course in SoundDesign at Stockholm
University of The Arts. It was initially intended to be solely about Reaper. I
negotiated the situation to have the course also include ways that SuperCollider
can extend the capabilities and capacities of Reaper. In this course we will
learn to channel three types of data from SuperCollider to Reaper. In doing so
we will extend the realm of the possible when we organize sound. The three data
types are: Audio, MIDI and finally OSC. Please download the below .zip which
contains files which can be used to make sound in SuperCollider, to record that
sound in Reaper and to control Reaper in ways which are not possible using
Reaper alone:  
[sc4Reaper.zip](https://github.com/danielmkarlsson/sc4reaper/archive/master.zip)<br><br>

<video controls="controls" width="100%" name="sc4reaper01.mov"
src="sc4reaper01.mov"></video>

This configuration guide presumes that your operating system is Mac OS X Sierra,
High Sierra or thereabouts, and that you know the password to the user you are
logged in as. I have it on good authority that if you are on Catalina or above,
things will be different for you, that is to say you might have a difficult time
with your configuration. The course in general presumes that you have never
opened SuperCollider or Reaper. The aim of this configuration guide in
particular, and this course in general is to make you more free in the ways that
you can use Reaper which for all intents and purposes is a highly capable DAW,
but still, just a DAW. As such it is inherently linear in it's very nature.
SuperCollider will allow us to add dainty bells and gleeful whistles to the day
to day of how we work with Reaper.

Open Terminal.app, then copy the below command into Terminal.app and run it by
pressing Enter. This will ask for your password. When you input your password
there will be no visual feedback on the screen, which is fine. When it's
finished it will let us install all kinds of cool applications and plugins from
anywhere we prefer:  

`sudo spctl --master-disable`<br><br>

<video controls="controls" width="100%" name="sc4reaper02.mov"
src="sc4reaper02.mov"></video>

Please download and install the 64 bit version of Reaper from the below link.
Reaper is our DAW, it is where we record sound and generally do our work of
organizing sound:  
[Reaper.fm](https://Reaper.fm)<br><br>

Please download and install the Current Version (with Apple notarization) from
the below link. SuperCollider let's us do anything and everything that we could
ever dream of. We interface with SuperCollider by writing and manipulating code.
It contains a state of the art synthesis engine which is renowned for it's
efficiency and cleanliness. It also contains quite an elegant programming
language that has been specifically tailored to our needs, being as we are; Folks
who want to organize sound:  
[supercollider.github.io](https://supercollider.github.io/download)<br><br>

Please download and install the latest signed version of SoundFlower from the
link below. SoundFlower let's us route audio between programs inside our
computers:  
[github.com/mattingalls/Soundflower](https://github.com/mattingalls/Soundflower)<br><br>

It is my strongly expressed recommendation that you never, ever, _ever_ listen
to the sound output of SuperCollider without first having routed it into Reaper
using SoundFlower. Three reasons: The first of which is safety. SuperCollider is
special in the way that it will let you make yourself deaf if you ask it to make
you deaf. Contrastingly Reaper is special in the opposite way. It will never let
even a single sample pass through it that could make you deaf. Reaper will
automatically mute it's output before we get into any real trouble. The second
reason is diagnostics. It is really easy to keep track of what is going on with
the input in Reaper. The metering is a lot better than SuperCollider's out of
the box. The third reason is organization. Having access to Reaper's capacities
as a DAW makes organizing sound a lot easier. I should state that entirely
unique ways of organizing sound within time are possible inside of
SuperCollider, but it is my experience that those ways of organizing sound are a
way's way yonder, onward on a timeline ahead of us. Even though we are just
starting out, making bleeps and bloops is not enough, we want to organize sound
in powerful abstracted ways, on day one!

Please note that if you have used SoundFlower in the past with a GUI then I
should tell you that this is not that. This is a kernel extension. Long story
short: It not only works now, it is very trustworthy because the original
developer Matt Ingalls has taken back control over his project.

First begin by going into System Preferences, Sound and then toggle "Show volume
in menu bar" because we are going to be toggling that _a whole lot_ let me tell
y'all. Next hold down Alt and press the speaker icon in the menu bar. Change the
"Input Device" to "SoundFlower (2ch)". Press the volume increase button on your
keyboard (just to the left of the power button). Set it to two units from the
max. This will act as your send from program A to program B. Now press the
volume icon in the menu bar again and switch over to your preferred output
device. If I'm using my quick + dirty headphone output I like to set mine at
four volume units. This will vary wildly on different setups.

Now that we have Reaper, SuperCollider and SoundFlower successfully installed on
our machines let's go ahead and boot Reaper if you haven't already. Press `Cmd +
,` to reach SuperCollider's Preferences pane. A multitude of things can be
configured here.  The different settings have been grouped in categories and
subcategories in the pane to the left. We can navigate in the pane either by
clicking or by using the up and down arrow keys. In the first category "General"
we can see that it is possible to import and export all of Reaper's
configuration settings. This is good to know in case you find yourself working
on an unfamiliar machine and want to use your own special settings that make
working in Reaper feel homey, and life in general feel bearable. I like to
untoggle "Show splash screen in startup", but don't feel like you have to. 

A couple of steps down is "Media item defaults". I like to set my "Default
fadeIn/fadeOut shape" to the third one from the top and the "Default crossfade
shape" to the second one from the top. Go ahead and feel this out for what you
prefer and change them to your faves once you get a handle on what those are.

Another couple of steps down under "Audio" is "Device". In that preference pane
first toggle "Allow use of different input and output devices" then choose
SoundFlower as the input device and BuiltIn Output as your output.

Next open a program called Audio MIDI Setup. Click on the "Window" tab and click
on "Show MIDI Studio". Next click on "IAC Driver". Toggle "Device is online".
Close Audio MIDI Setup and go back to Reaper. Next on our configuration list is
"MIDI Devices". Double click the IAC driver in the list of MIDI inputs. Toggle
both "Enable input from this device" and "Enable input for control messages".
Double click the IAC driver in the list of MIDI outputs. Toggle "Enable output
to this device". Press "Apply".

Next under Plugins click on "Compatibility". Set "VST/AU bridging/firewalling" to
"In separate plugin process".

Last but definitely not least let's set up "Control/OSC/web". Click "Add". In
the "Control Surface Mode" menu choose "OSC (open sound control)". Set "Mode" to
"Local port". "Local listen port" should read "8000" and whatever local IP you
get is good. Toggle "Allow binding messages to Reaper actions and FX learn". If
the "Apply" button is not grey, then press that. If it's grey then that is fine
also.  Press "OK". Boom, we are now done with setting up Reaper.

Next up is SuperCollider so go ahead and boot it up. SuperCollider is at least
two things. Right now we're looking at SuperCollider's IDE which means
Integrated Development Environment. I interpret that as a special flavour of
text editor that to some extent is tailored to the kind of code that we want to
write. On a practical level what I'm talking about here is the round swirly
SuperCollider icon in the dock where we see the programs that are open right
now. Next to it is the square swirly SuperCollider icon which is SCSynth. Go
ahead and press `Cmd + ,`. We are now in SuperCollider's IDE configuration.
Press "Editor". Toggle "Wrap test in post window". This is essential. Depending
on taste you might also enjoy toggling "Disable blinking cursor", drives me nuts
if I don't do that anyway. Press "Apply" and "OK" to exit.

By default SuperCollider has three windows open. The code window, the help
window and the post window. I like to close the help window and move the post
window and attach it at the bottom. I find that this makes better use of limited
screen real estate. I like to have the docs open in it's own window in a browser
and then use `Cmd + tab` to toggle to the docs when I need to look something up.
That way the docs aren't cramped up into a tiny box that forces me to scroll all
the time. The docs are hard enough to read as it is (that's a strange kind of
joke right there). Boom! Y'allses SC IDE is now sat up.

In the .zip you downloaded earlier is a file called Startup.scd that I want you
to open up now. Copy that mess of text. Close that file. Press the "File" tab,
then "Open startup file". Paste into there. Press `Cmd + s` to save it. Then
press `Cmd + Shift + L` to recompile the class library. We're going to be doing
this a lot. It's one of a few different ways that we can ask SuperCollider to
take a look at itself to see if the way that it is configured has changed in any
way. All of the lines of executable code in that file are now ran automagically
each time we start SuperCollider. These are sensible defaults I promise. You're
gonna wanna poke through 'em once you get settled in tho for sure, but until
then, go with these.

Open up that sc4reaper folder and look for a file called Pxshuf. Have that ready
in a Finder window on the side there because we're going to put it in the right
place soon. Go back to SuperCollider. Press the "File" tab. Click "Open user
support directory". Quick tangent: We are now in a hidden, secret place on your
computer because  yada, yada, reasons. Click on the "Extensions" folder to open
it. Drag that Pxshuf.sc file over into there. Go back to SuperCollider and press `Cmd
+ Shift + L` to recompile the class library. You have now extended
SuperCollider's capabilities with one custom Pattern class which is David
Granström's handiwork. It is excellent. If you for some reason ever find
yourself without it, you could use the vanilla version instead. It is similar
but behaves a little different. It is called Pshuf.

Patterns is one of around five competing paradigms within SuperCollider. These
different paradigms represent different ways of thinking, writing code and most
importantly, getting things done. A thing can get done in SuperCollider in a
bunch of different ways. That can be confusing. Different strokes for different
folks is all. I'd like for you to be able to identify some different styles and
strategies. Blue words that begin with a big P, followed by a word or two after
that is what tell me that I'm looking at code written in this Pattern style.

We'll get back to Patterns later but it is now high time that we use
SuperCollider to make some sound. Open the 101.scd file that you can find in
your SC4Reaper. This style of writing SuperCollider code is often called
Function play. We can identify it by it's use of curly braces and the word play
either at the bigging or the end of it. These are often short because a long
time there was a project called sc140 that tried to spread the gospel of
SuperCollider by showing that a lot could be done with very few characters. Long
story short; These are everywhere on The Public Internet. You might find one you
like one day and use the sound it makes. Press `Cmd + B`. This boots the server.
Notice that there is a text marker. Make sure that this text marker is on the
line with the code. Now press `Shift + Enter`. This will evaluate the code. Now
press `Cmd + M`. This will bring up SuperCollider's volume meter. Hopefully we
should see some coclourful lights there. No sound tho right? Open Reaper. Make a
new track by pressing `Cmd + T`. Press the red button on the track we just
added. This arms the track for recording. Notice that the track is represented
in two places. Down in the mixer and in the track lane. Both have turned red
because they represent the same thing. Let's choose how many channels we want to
record. Down and to the right we see "input 1". Click this text field. click
"Input: Stereo" and then "Input 1/Input 2". We should at this point see that
signal from SuperCollider is reaching Reaper in the track meter. If we hover
over the tiny speaker icon on the track we see that record monitoring is turned
off. Click the tiny speaker icon to turn it on. If all has gone well we should
now hear the sound that is coming from SuperCollider. Let's record this sound.
Press `Cmd + R` to record. Press the space bar when you have a lil´ snip
recorded. You'll now see a dalog urging you to decide what to do with this file
you just recorded. Untoggle "on stop". This makes it easier and faster to work
with Reaper when we are recording a bunch of tracks and we want have another
shot at nailing our take as quickly as possible. Notice that the track you just
recorded is white which means it is selected. Press backspace to delete it.
Quick and easy.

Switch over to SuperCollider. Press `Cmd + .`(that's period, the end of sentence
character) to stop the sound. Evaluate the code again. Notice that the sound is
similar but different. That is because the code contains some stochastic choices
that I've asked the computer to make. This gives us a unique collapsing of the
wave front each time we run the code.

<br>

Every time we feel that we need to start from the beginning learning how to do
things in SuperCollider we begin with Eli Fieldsteel's excellent video tutorial
series:  
[Fieldsteel video series](https://www.youtube.com/watch?v=yRzsOOiJ_p4&list=PLPYzvS8A_rTaNDweXe6PX4CXSGq4iEWYC)<br><br>

If we want, we can also look at the code from the above Fieldsteel videos here:
[Fieldsteel video series code](https://github.com/elifieldsteel/Supercollider3_tutorials_code/tree/master/full%20video%20scripts)<br><br>

If we find ourselves just wanting to look up a particular thing, the docs are
online here:  
[SuperCollider documentation online](https://github.com/elifieldsteel/Supercollider3_tutorials_code/tree/master/full%20video%20scripts)<br><br>

Thanks to the tireless efforts of Mads Kjeldgaard one awesome place has all the
best resources and tutorials waiting for us when we want to dig deeper:   
[Awesome SuperCollider](https://github.com/madskjeldgaard/awesome-supercollider)<br><br>

How to change the default synth in SuperCollider:  
[madskjeldgaard.dk](https://www.madskjeldgaard.dk/how-to-change-the-default-synth-in-supercollider/)<br><br>

Get Git:  
[git-scm.com](https://git-scm.com/)<br><br>

How to git:  
[c0dereview.github.io](https://c0dereview.github.io/tutorial/2018/01/09/git-part-1/)<br><br>

An FM synth that can be computer controlled:  
[github.io/dexed](http://asb2m10.github.io/dexed/)<br><br>

A safer Benjolin:  
[github.com/madskjeldgaard](https://gist.github.com/madskjeldgaard/67d286651b574565dedb8bd50b4c25f6)<br><br>

sInstruments:  
[github.com/redfrik/sinstruments](https://github.com/redfrik/sinstruments)<br><br>

SoundHack (++bubbler) have modern versions of their freeware plugins through the
link below in case you want to compare to the vintage rare ones included in the
.zip at the top of this page:  
[www.soundhack.com](https://www.soundhack.com/freeware/)<br><br>

The DtBlkFx plugins are free but sadly going out of style (32 bit plugin):  
[rekkerd.org/dtblkfx](https://rekkerd.org/dtblkfx/)<br><br>

DestroyFX are another favourite of mine from the wild, wild west of the
naughties freeware plugin scene:  
[destroyfx.smartelectronix.com](http://destroyfx.smartelectronix.com/)<br><br>

The Melda plugins are for reals free and super useful:  
[meldaproduction.com](https://www.meldaproduction.com/MFreeFXBundle)<br><br>

If you give an email, any email, to Izotope, they'll give you their Imager
plugin:  
[izotope.com](https://www.izotope.com/en/products/ozone-imager.html)<br><br>

The modern way to ask ~~strangers~~ other users how to do things in SuperCollider is
here:   
[The SuperCollider Forum](https://scsynth.org/)<br><br>

At the time of writing it is an experimental feature of SuperCollider to be able
to run VST plugins inside of SuperCollider itself:  
[scsynth.org thread](https://scsynth.org/t/vstplugin-v0-2-test-release/1237)<br><br>

SuperCollider integration for Neovim:  
[github.com/davidgranstrom/scnvim](https://github.com/davidgranstrom/scnvim)<br><br>

Amazing online gallery of fragments made with SuperCollider:    
[synthdef.art](https://synthdef.art/function-play/)<br><br>

Two drones of infinite duration: 
[danielmkarlsson.github.io/](http://danielmkarlsson.github.io/)<br><br>

I've been maintaining  a project called Ruins in the distance for quite a few
years now. That project mainly uses the tools and techniques we've been using in
the course:   
[danielmkarlsson.com/ruins-in-the-distance](https://www.danielmkarlsson.com/ruins-in-the-distance/)<br><br>

Verdensteatret - HANNAH, a stage performance that utilizes SuperCollider in a
multitude of ways:   
[verdensteatret.com](https://vimeo.com/243080465)<br><br>

EMS is great:  
[elektronmusikstudion.se](http://elektronmusikstudion.se/)<br><br>

<br>

[//]: # ([.ndx](../) | <a href="#" onClick="goToURL()">.rnd</a>)

<br>
<br>

<script>
function goToURL() {
    var links = [
        ".",
        "./img",
        "./irc",
    ];

    // get a random number between 0 and the number of links
    var randIdx = Math.round(Math.random() * (links.length - 1));
    // construct the link to be opened
    var root = window.location.protocol + '//' + window.location.host;
    var link = root + '/' + links[randIdx];

    document.location.href = link;
};
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
