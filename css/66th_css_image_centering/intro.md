# The main motive to explore this chapter, is to learn about flex. Since in this chapter flex is used,  so I'm going to explore this.

# I have also used flex before for that you can visit: "49th_css_align", "13th_html_divFlex", "21th_html_layout/HTML_layout_techniques", "22th_html_responsive".



> CSS Centering Images
-----------------------
:
________________________________________________________
Learn how to center an image horizontally and vertically with CSS.
________________________________________________________



> Center an Image Horizontally in Two Ways
:

1. Using margin: auto
---------------------
:
It is well known basic method to centering image(make sure you have changed level of <img> to block level element) or block level element horizontally, which you have also used before this chapter. 

e.g: do visit "49th_css_align" folder.


2. Using display: flex
----------------------
:
Another way to center an image horizontally on a page is to use display: flex.

Here, we put the <img> element inside a <div> container.

We add the following CSS to the div container:
______________________________________________________
display: flex
justify-content: center (centers the image horizontally in the div container)
______________________________________________________

# Then, we set a width for the image. The width of the image must be smaller than the width of the page.

Here is a horizontally centered image using display: flex: do visit "centering_horizontally" folder.


- Center an Image Vertically
-----------------------------
:
display: flex is also used to center an image vertically on a page.

Let's say we have a <div> container that is 600px high.

Now we want to center the image vertically in the div container.

Here, we also put the <img> element inside a <div> container.

We add the following CSS to the div container:
________________________________________________________
display: flex
justify-content: center (centers the image horizontally in the div container)
align-items: center (centers the image vertically in the div container)
height: 600px (the height of the div container)
________________________________________________________

# Then, we set a height for the image (must be smaller than the height of the container).

Here is a vertically centered image: do visit "centering_horizontal_vertical" folder. You can also visit "49th_css_align/center_using_flexbox".

