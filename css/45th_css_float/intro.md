> CSS Layout - float and clear
-------------------------------
:
The CSS float property specifies how an element should float.

The CSS clear property specifies what elements can float beside the cleared element and on which side.



> The float Property
----------------------
:
The float property is used for positioning and formatting content e.g. let an image float left to the text in a container.

The float property can have one of the following values:

* left - The element floats to the left of its container
* right - The element floats to the right of its container
* none - The element does not float (will be displayed just where it occurs in the text). This is default
* inherit - The element inherits the float value of its parent


In its simplest use, the float property can be used to wrap text around images.


# (Already covered topic in html image part, but you can even visit w3schools for this lesson)






> Example - Float Next To Each Other     (This type of examples also have been done in html part "13th_html_divFloat")
:
# Normally div elements will be displayed on top of each other. However, if we use float: left we can let elements float next to each other:

example: do visit "float_next_to_each_other" folder.



# we can make float next to each other using these methods:
=>
Methods:

1) Step-1: making elements container to style:   overflow: hidden;
   Step-2: and the apply style to those contained element to :  float: left;
   * This method is used in  "12th_html_listsUnorder2".

2) Step-1: setting width(in %) of the elements by that way which gonna making width: 100% after the summing up of those elements width.
   Step-2: and then set style:  float: left   to that element whose width are manipulated to make width: 100% after the summing up. 
   * This method is used in  "13th_html_divFloat". 

