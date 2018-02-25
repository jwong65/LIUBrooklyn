---
title: "Installing Hugo on Windows"
date: 2018-02-21T14:28:23-05:00
draft: true
---

# Installing using GitBash

The learning experience for the hugo system was difficult to start up. When installing hugo onto my computer, I had difficulties
 as I was using Windows. The environment variables made it so that whenever I tried using any hugo commands - they didn't exist. I couldn't find the PATH file 
 in the environment variable but it was just path (all lowercase) not PATH.
 
 Steps |  |
--- | --- | 
*No* | `Directions' |
 1.| The first step was creating a folder for Hugo I used the C drive.|
 2.| Inside the Hugo folder I created two more folders, one called bin and one called Sites |
 3.| I downloaded Hugo using this link [here](https://github.com/gohugoio/hugo/releases), I used Hugo version 0.36.1 for Windows 64 bits. |
 4.| After downloading Hugo and extracting the .zip file, I put all of its contents into the bin folder that was created. |
 5.| I'm using a Windows 10 Laptop, so I have to go into the Environment Variables, which I do by going to the System settings. |
 6.| Using *System* I moved into *Advanced System Settings* and then *Environment Variables* |
 7.| Once in the Environment Variables I found the PATH, even though it wasn't in all capital letters it was still the path that had to be edited. |
 8.| Editing the path I adding the location of the bin folder which was in the C drive with the Hugo folder that was created |
 9.| To make sure that Hugo was installed properly in GitBash, I typed in "hugo version" and I got the following:
 
	Hugo Static Site Generator v0.36 windows/amd64 BuildDate: 2018-02-05T15:23:01Z

	I didn't have to use "brew install hugo" because that's only for Mac