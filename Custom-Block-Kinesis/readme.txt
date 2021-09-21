Hi Rafal,
In the previous version I created a little Wordpress custom theme where I created both options as a thank you for the comprehension and to give me more time to work on it, sometimes it's really hard to get time after work with kids.
In functions.php, at line 100 I've added the code to generate the custom blocks using Advanced Custom Fields (I remember you said you use it a lot).
In template-parts I created the template folders for both options and in assets/css I created main.scc for the little css added to show how I use to work with SASS
To generate the themes I've used Bootstrap-5 as I'm familiar with it, but I've also imported the css from tailwind to replicate the same style of the requested options.

For the test option 1, I created a double option for categories and posts as from experience, my clients want to be in control of everything they publish.
I've added a question before the Category and a question before the posts if they have to be automatically selected ( in that case I will run a Wordpress query ) or if the Editors want to pick up the Categories and Posts and change the order they are displayed.

I have a doubt about the test option 2 as well as the top left logo in the request is an SVG, I've instead added the field to upload any img, but I could eventually restrict the field to only svg elements or to add more parameters.

I've uploaded and tested the blocks on a live Wordpress installation on my domain.
I created a password protected page
https://luigibologna.co.uk/

the password is : LuigiKensis

I've also included an exported file from ACF named acf-export-2021-09-17

Now I have created a plugin to add the Option 1 test and the json file to add the ACF fields to render the custom block as requested.

I hope I understand what you were looking for as to create a plugin for a Gutenberg block we have few different ways.

Best regards,
Luigi
