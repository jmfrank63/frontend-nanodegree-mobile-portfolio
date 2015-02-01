Intructions how to optimize the portfolio

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
   using gimp to their respective sizes for the desktop variant.
   
3. Minify style.css and inline it. Minify pizza.html

4. Change default pizza.png as well as pizzeria.jpg to -medium variant.Change

5. Optimize function updatePositions in main.js:
   a. pull scrollTop calculation with division out of the loop
   b. use sin addition theorem to reduce calculations to two multiplications
      and one addition
   c. use lookup table for the sine and cosine values of the index (only 5 different)
   d. reduce number of pizzas to 24 (3 rows sufficient for most monitors)
   
6. Optimize resizePizzas by inlining all code of functions
   that are only called once
   Set optimized images sizes for small medium and large
   Replace functions with switch case by arrays or objects
   
7. Optimize Pizza Name creation
   Change from switch case to array lookup O(n) vs O(1)
   Generate pizza name by lookups to adjectives and to noun
   avoiding several function calls
   
   Not done: Write all adjectives in Upper Case and remove
   call to capitalize
   

