---
title: "Building site"
date: 2018-02-22T18:00:21-05:00
draft: true
---

	# After installing Hugo [here](https://github.com/gohugoio/hugo/releases)
	
I first generated a site by going into the command line, GitBash, and navigated to the destination I wanted the files for the site.

Creating the site 
======
The folder I created was going to be called assn2, so I once I was in the CS120-repo, I used "hugo newsite assn2".
The hugo quick start page mentions using "hugo newsite quickstart" but that only changes the folder the site is to being named quickstart.
Once hugo finishes generating the page it was recommended to use a theme. 

Adding the theme
======
There is a directory of themes that hugo can use [over here](https://themes.gohugo.io)
The theme I used was Kube, its directory is [here](https://themes.gohugo.io/kube/)
The directory tells us how to install Kube, this specific theme.
The first step it tells us is to "mkdir themes" which is making another directory named themes - but using "newsite" created the themes folder already
So I didn't have to input that into the command line. It then asks us to move into the folder which is just using "cd" to change directories.
The last step was to input in the comannd line : 
$ git clone https://github.com/jeblister/kube.git

This calls the theme to be downloaded into the themes folder.

Using the Kube theme
------
At first I tried going back to the folder I created assn2. I used the command "hugo server -D" to show the site.
I then tried accessing localhost:1313, which is what the prompt tells me the site should be at.
I could not find the site as it wasn't showing anything. I tried uninstalling the theme but deleting the entire folder for themes and recreating it.

I also tried a number of other themes to see if this was only specific to a certain one.
I tried [Hugo Initio](https://themes.gohugo.io/hugo-initio/) and [Hugo Minimo](https://themes.gohugo.io/minimo/), but I found that I couldn't get localhost:1313 show me a page to confirm if it was working.

Eventually we created an index.md page in the content folder of the website. This would eventually show me a page for the site.

Creating posts
------
To create a post I would input "hugo new post" and then follow it with what it would be the file name. This would generate a folder within the content folder of the site.

Inside the folder would be another folder titled "posts" and my first post would be located in the folder. I edited the file which would be used .md