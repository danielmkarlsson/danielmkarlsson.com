<br><center>**NixOS configuration**</center><br>

Let's get NixOS installed on a late 2015 eleven inch MacBook Air. It'll be fun
and easy because this walkthrough works.

First thing we need is an image of NixOS. I downlaoded the GNOME, 64-bit 
Intel/AMD graphical ISO image of the NixOS Linux distribution 
[here](https://nixos.org/download/).

Next we need something to burn the image onto a USB drive with some kind of 
software. It is perfectly fine to block this program's access to the internet. 
It just wants to show you some ads maybe while you are burning the image.
I decided on [Balena Etcher](https://etcher.balena.io/). 

Drag and drop interface with clearly marked drop areas.  
Flash the USB.  
Pop it into the computer where you want to install NixOS.  
Hold down Alt while rebooting.  
Choose the option on the right.  
Never mind about the wifi now.  
Let the installer do it's thing with the top option which is called long string of numbers and Installer at the end.  
Use an ethernet connection to the internet. 
That is easiest.  
The installer will not work otherwise, which is crazy really.  
Click and hold when choosing zone to get around a bug there.  
For the Swedish keyboard that I use there is an option that says no dead keys.  
I have used that one.  
I think maybe the username has to be different than the network user.  
I chose Gnome as the desktop for now.  
Might could change it later.  
Allow unfree software.  
Replace a partition.  
Click the partition.  
Graphical quirk in the installer so I had the click to expand the program to the
screen size in order to see the install button at the bottom.  
Looks fast at first and like the progressbar is gonna be good but no.  
This could take a while.  
Click the log button on the right to see that the process is running even tho it
looks like it stalls at about halfway.  
After the installer has finished it could use a reboot.  
The gui installer is kind of broken so you have to hold down on the trackpad
while selecting stuff like location and type of keyboard.
The command key opens up something similar to spotlight.
I used Firefox here. 
Download the dotfiles.
Find the configuration.nix file.
Everything is stock and there even is no Vi so I recommend doing this in
Console, which is what the stock terminal is called:

sudo mv Home/Downloads/dotfiles-main/configuration.nix ../../etc/NixOS/configuration.nix
