> Navigation Bars
------------------
:
Having easy-to-use navigation is important for any web site.

With CSS you can transform boring HTML menus into good-looking navigation bars.



> Navigation Bar = List of Links

# A navigation bar needs standard HTML as a base.


In our examples we will build the navigation bar from a standard HTML list.


A navigation bar is basically a list of links, so using the <ul> and <li> elements makes perfect sense: 

Example:
____________________________________________
<ul>
  <li><a href="default.asp">Home</a></li>
  <li><a href="news.asp">News</a></li>
  <li><a href="contact.asp">Contact</a></li>
  <li><a href="about.asp">About</a></li>
</ul>
_____________________________________________



Now let's remove the bullets and the margins and padding from the list:

Example: do visit "1_standard_code_for_both" folder.
_____________________________
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}
_____________________________

# The code in the example above is the standard code used in both vertical, and horizontal navigation bars, which you will learn more about in the next chapters.





> 2. Vertical Nav bar
---------------------
:
# For documentation, do visit w3schools.





> 3. Horizontal Nav bar
---------------------
:
There are two ways to create a horizontal navigation bar. Using inline or floating list items.


> Inline List Items
- One way to build a horizontal navigation bar is to specify the <li> elements as inline, in addition to the "standard" code from the previous page:

e.g: do visit "3_(i)_horizontal_nav_bar" folder.



> Floating List Items
Another way of creating a horizontal navigation bar is to float the <li> elements, and specify a layout for the navigation links:

# do must visit "21th_html_layout/HTML_layout_techniques/css_float_layout/css".

e.g: do visit "3_(i)_horizontal_nav_bar_float" folder.




________________________________________________________
# Tip: While working with   'position'  property make sure you know about their flow types. For that do visit "42th_css_position/flow_of_positioned_element"...
_________________________________________________________


