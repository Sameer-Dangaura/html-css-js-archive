> CSS Layout - The position Property
-------------------------------------
:
The position property specifies the type of positioning method used for an element (static, relative, fixed, absolute or sticky).



> The position Property
-------------------------
:
The position property specifies the type of positioning method used for an element.

There are five different position values:

* static
* relative
* fixed
* absolute
* sticky

# Elements are then positioned using the top, bottom, left, and right properties. However, these properties will not work unless the position property is set first. They also work differently depending on the position value.




>1. position: static;
:
# HTML elements are positioned static by default.

# Static positioned elements are not affected by the top, bottom, left, and right properties.

An element with position: static; is not positioned in any special way; it is always positioned according to the normal flow of the page:

e.g: do visit "position_static" folder.




>2. position: relative;
:
An element with position: relative; is positioned relative to its normal position.

# Setting the top, right, bottom, and left properties of a relatively-positioned element will cause it to be adjusted away from its normal position. Other content will not be adjusted to fit into any gap left by the element.

e.g: do visit "position_relative" folder.




>3. position: fixed;
:
# An element with position: fixed; is positioned relative to the viewport, which means it always stays in the same place even if the page is scrolled. The top, right, bottom, and left properties are used to position the element.

A fixed element does not leave a gap in the page where it would normally have been located.

Notice the fixed element in the lower-right corner of the page. Here is the CSS that is used:

Example: do visit "" folder.
_______________________
div.fixed {
  position: fixed;
  bottom: 0;
  right: 0;
  width: 300px;
  border: 3px solid #73AD21;
}
________________________




>4. position: absolute;
:
An element with position: absolute; is positioned relative to the nearest positioned ancestor (instead of positioned relative to the viewport, like fixed).

However; if an absolute positioned element has no positioned ancestors, it uses the document body, and moves along with page scrolling.

# Note: Absolute positioned elements are removed from the normal flow, and can overlap elements.

Here is a simple example: For this example do visit w3schools.

e.g: do visit "position_absolute" folder.




>5. position: sticky;
:
An element with position: sticky; is positioned based on the user's scroll position.

# A sticky element toggles between relative and fixed, depending on the scroll position. It is positioned relative until a given offset position is met in the viewport - then it "sticks" in place (like position:fixed).

e.g: do visit "position_sticky" folder.

# Note:
 You must specify at least one of top, right, bottom or left for sticky positioning to work.




> Positioning Text In an Image
:
-> For this do visit w3schools.
-> This is simple, if you have understood about the  position: absolute;
