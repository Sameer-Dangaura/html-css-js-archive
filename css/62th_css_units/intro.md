> CSS Units
-----------
:

- some css units (px, em) are covered in "31th_css_font_size" also.


# For this, do visit w3schools.




> Relative Lengths
-------------------
:
Relative length units specify a length relative to another length property. Relative length units scale better between different rendering mediums.


    Unit	     Description
  -------       --------------

1)  em	         Relative to the font-size of the element (2em means 2 times the size of the current font)

2) rem	         Relative to font-size of the root element

3) vw	      Relative to 1% of the width of the viewport*
________________________________________________________
- vw units font shrinks while width of viewport decreases.
This is also discussed in "31th_css_font_size" and "22th_html_responsive/responsive_text" at that time, I didn't knew about it's shrinkage and enlarge conditions.
________________________________________________________

4) vh	    Relative to 1% of the height of the viewport*

5) %	    Relative to the parent element

6) and so on...



_________________________________________________________
# Tip:
 The em and rem units are practical in creating perfectly scalable layout!
* Viewport = the browser window size. If the viewport is 50cm wide, 1vw = 0.5cm.
_________________________________________________________

