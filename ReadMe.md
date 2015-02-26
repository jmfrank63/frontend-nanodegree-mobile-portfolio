Instructions how to optimize the portfolio

For index.html

1. Reduce image size of pizzeria.jpg with GIMP (use any you like) to 100 x 75.
   Reduce palette of image to 256 colors

2. Downloaded the font to the repository and added a @font-face to style.css

3. Minify CSS and inline it

4. Move inline script above CSS

5. Minify inline script to one line

6. Minify HTML with python htmlmin

For project-2048.html

1. Reduce image size of 2048.png with optipng

2. Do step 2-6 as in index.html

For project-webperf.html

1. Reduce image size of cam_be_like.jpg with Chrome plugin pagespeed insights

2. Do step 2-6 as in index.html

For project-mobile.html

1. Reduce image to 602x306 and 296x150 in GIMP and store them as separte images

2. Add a media query in a separate css for large screens
   In this case a large screen is everything above 320px of width.
   As I am doing this by hand (to learn it) I do not include more images
   for other screen sizes. The way it is done is a proof of concept.
   The smallest image is served by the markup and other screensizes are
   done by a css background.
   Finally minify and inline this css
   One could have just served the mobile image size and upscale it, but then the image
   does look blury.
   
3. Do steps 2-6 as in index.html

For pizza.html

1. Resized pizzeria.jpg using gimp to 360x270 and 256 colors
   then minified by jpegoptim
   
2. Rename pizza.png and pizzeria.jpg to -small, -medium and -large variants and resize them in
   using gimp to their respective sizes for the desktop variant. Testing gave
   the benefit of different sizes for to be small comapred to the overhead
   of setting different sizes for different slider settings. A medium size picture
   has been chosen to give best results.
   
3. Minify style.css and inline it. Minify pizza.html

4. Change default pizza.png as well as pizzeria.jpg to -medium variant as pointed
   out in #2.

For main.js

1. Optimize function updatePositions:
   
   a. pull scrollTop calculation with division out of the loop

   b. use sin addition theorem to reduce calculations to two multiplications
      and one addition
      
   c. use lookup table for the sine and cosine values of the index (only 4 different)
      this is much faster than the costly sine function
   
   d. reduce number of pizzas per row to 4
      as we don't need more for a decent user experience
   
   e. reduce number of pizzas to 16 (4 rows sufficient for most monitors)
      16 = 4 x 4. Four rows are visible so no more are needed.
   
   f. change movement to transform() as it hardware accelerated
   
   g. use getElementsByClassName and getElementById to speed up getting DOM elements
      see comments in main.js
   
2. Optimize resizePizzas function by inlining all code of functions
   that are only called once
   Set optimized images sizes for small medium and large
   Replace functions with switch case by arrays or objects
   
3. Optimize Pizza Name creation
   Change from switch case to array lookup O(n) vs O(1)
   Generate pizza name by lookups to adjectives and to noun
   avoiding several function calls
   
4. Uppercase nouns and adjectives in source file.
   var uN = [];
   for ( var i = 0; i < nounsList.length; i++){
       uN[i] = [];
       for ( var j = 0; j < nounsList[i].length; j++){
           uN[i].push(nounsList[i][j].capitalize());
       }
   };
   JSON.stringify(uN);
   and
   var uC = [];
   for ( var i = 0; i < adjectivesList.length; i++){
       uC[i] = [];
       for ( var j = 0; j < adjectivesList[i].length; j++){
           uC[i].push(adjectivesList[i][j].capitalize()); 
       }
   };
   JSON.stringify(uC);
   to uppercase the code directly in the console.
   Copied result over to the main.js file.
   Removed call to capitalize and the function itself

5. Checked main.js with eslint.
   
   Enviroments for testing:
   
   Measurements of framerates have been done on two different
   computers: 
   One 2.2 GHz Intel core Duo T7500 CPU 3GB Memory
   and a 1280x800 Intel Graphics 965, 256 SSD Windows 8.1 
   an upgraded Sony Vaio VGN-NR21 E/S.
   Second 2.26 GHz Intel Core Duo 8GB Memory Nvidia 9400
   256 SSD 1920x1080 Display an upgrade 3.1 late 2009 Mac Mini 
   with OSX 10.9
   While Framerate on the Mac just meets the requirements on the
   Vaio measurements showed sometimes a perfect result sometimes a fail.
   The difference could be due to the 965 chipset being at the outer
   fringe of its capabilities.
   
Sorry:

I apologize for being so sloopy. I should have commented things
better which would have saved you work. I hope not to make that mistake
a second time.