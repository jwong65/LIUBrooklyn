---
title: "Additional Notes"
date: 2018-02-22T18:00:26-05:00
draft: true
---
<h1>The _index.md file</h1>
Within the folders of the site that was created by using "hugo new site" was a content folder. After creating my first post
it created an additional folder inside the content that would be called posts and where subsequent posts were created.

The file _index was created and placed in the content folder.
This is the home page or rather the index page. I don't know why it wasn't working before but it was found through looking at the sample site Kube provides.

We copied the information within that sample and created a new index page called _index.md. This would be what comes up when I try to access localhost:1313.

Looking at the _index file
------
This file looks like this at the moment.

	+++
	description= "The learning process for getting Hugo, the static site generator working "
	title= "Index Page"
	draft = false
	+++
	
When I was trying to edit this file, if you place - - - instead of the +++ dividers, the site would no longer generate when I go to put "hugo server -D". So I assume that it only takes +++. I could not put any additional text into the index. The index page seems to be the same, as it requires the theme to be 
referenced to the page it was downloaded from and to give credit to the theme. Trying to edit any of the theme files caused GitBash to ask me to login to confirm if I was the creator of the theme.
I couldn't do much with this index page in the end, the description would be the sub header and the title would be the larger bolded text.

The config.toml file 
======

I would've thought the config file would've been in the layout folder but it is located with the other folders outside of themes.
I can't remember if I dragged the file into the assn2 folder, if I created one from scratch, or if it was already generated with the site. 

Within the config.toml file held the buttons for the top. Some of these buttons read FAQ, Blog and so-on.

The main format for these buttons were:


	[[menu.main]]
    name = "1. First installing Hugo"
	weight = -100
	url = "/posts/firstpost/"

This would be the first button, the name would be what the button reads. The url I had to locate /posts/firstpost/ as justing putting first post would force the button to go localhost:1313/firstpost/
and it doesn't exist.

Another thing I found out was that these buttons were arranged alphabetically. I couldn't find a way to rearrange the buttons.
Even by listing them differently than their alphabetically arranged would still result in the buttons arranged alphabetically from left to right.

To get around this I just put 1. 2. 3. and it would be listed properly. I couldn't find anything in the README.md file that said anything about it nor did a search help.

Buttons problem
------
Another problem I found with the buttons was that I could not just put localhost:1313/posts/firstpost/ or secondpost/ etc. This would cause the link to not recognize localhost. That's why I kept the /posts/firstpost/ in the URL.

From the first post labelled with 1. I could not get the buttons to the second or third buttons working. You would always have to go back to the **INDEX** page and then to the 2nd or 3rd page.
The problem with it was that when you were in the first page or any other page trying to access a different one - other than index, it would cause : 

For example from the first page trying to access the second page:

	localhost:1313/posts/firsthost > localhost:1313/posts/firsthost/posts/secondpost/

It would not recognize that it is a completely different page. This also happened when I was on the first page just clicking on the first page button again. It would give me 

	localhost:1313/posts/firsthost/posts/firsthost/

I tried using href, but that requires going to localhost, which the browser won't open.
I don't even know what I did to fix it, I just tried deleting one of the buttons - which was Blogs. Then I re-added the third page from scratch.

The buttons work now. If you're on the third post trying to access any other post it will correctly redirect into the other pages. I tried git status to see what was different, but GitBash didn't show me any changes.

The rest of the config.toml file
------

	baseURL = "http://example.org/"
	languageCode = "en-us"
	title = "Home"
	theme = "kube"

What I inputed for title = "-" That would be shown in the top left of the pages on the site. This would become "Home" as it always sent you back to localhost:1313.
I made sure that the theme="kube", this is supposed to be what the theme folder was called. In the other themes I would input "minimo-master" or whatever the folder of the theme was called.