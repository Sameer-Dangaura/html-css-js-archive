> CSS Text Alignment
--------------------
:
Text Alignment and Text Direction
In this chapter you will learn about the following properties:

* text-align
* text-align-last
* direction
* unicode-bidi
* vertical-align


> Text Alignment
----------------
:
The text-align property is used to set the horizontal alignment of a text.

A text can be left or right aligned, centered, or justified.

The following example shows center aligned, and left and right aligned text (left alignment is default if text direction is left-to-right, and right alignment is default if text direction is right-to-left):

Example: do visit "text_align" folder.



# When the text-align property is set to "justify", each line is stretched so that every line has equal width, and the left and right margins are straight (like in magazines and newspapers):

* Example: do visit "text_align_justify" folder.




> Text Align Last
------------------
:
The text-align-last property specifies how to align the last line of a text.

example:
-------
<style>
p.a {
  text-align-last: right;
}

p.b {
  text-align-last: center;
}

p.c {
  text-align-last: justify;
}
</style>

For more: do visit w3schools.




> Text Direction
----------------
:
The direction and unicode-bidi properties can be used to change the text direction of an element:

Example
__________________________
p {
  direction: rtl;   //makes text direction from   right to left.
  unicode-bidi: bidi-override;  //this overrides
}
__________________________




> Vertical Alignment
---------------------
:
The vertical-align property sets the vertical alignment of an element.

Example: do visit "vertical_align" folder.

