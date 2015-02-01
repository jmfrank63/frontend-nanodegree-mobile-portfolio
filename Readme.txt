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
   
2. 
