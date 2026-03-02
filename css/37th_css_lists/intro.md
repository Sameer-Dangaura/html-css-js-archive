> HTML Lists and CSS List Properties    (Already done in html part)
-------------------------------------
:
In HTML, there are two main types of lists:

* unordered lists (<ul>) - the list items are marked with bullets
* ordered lists (<ol>) - the list items are marked with numbers or letters

The CSS list properties allow you to:

* Set different list item markers for ordered lists
* Set different list item markers for unordered lists
* Set an image as the list item marker
* Add background colors to lists and list items



> Different List Item Markers
------------------------------
:
The    list-style-type    property specifies the type of list item marker.

The following example shows some of the available list item markers:

Example:
__________________________
ul.a {
  list-style-type: circle;
}

ul.b {
  list-style-type: square;
}

ol.c {
  list-style-type: upper-roman;
}

ol.d {
  list-style-type: lower-alpha;
}
___________________________

# Note:
 Some of the values are for unordered lists, and some for ordered lists.




> Remove Default Settings
--------------------------
:
The     list-style-type:none    property can also be used to remove the markers/bullets. 

# Note that the list also has default margin and padding. To remove this, add margin:0 and padding:0 to <ul> or <ol>:

Example: 
______________________
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}
_______________________




> List - Shorthand property
----------------------------
:
The list-style property is a shorthand property. It is used to set all the list properties in one declaration:

When using the shorthand property, the order of the property values are:

* list-style-type (if a list-style-image is specified, the value of this property will be displayed if the image for some reason cannot be displayed)
* list-style-position (specifies whether the list-item markers should appear inside or outside the content flow)
* list-style-image (specifies an image as the list item marker)

If one of the property values above is missing, the default value for the missing property will be inserted, if any.


Example:
________________________________________
ul {
  list-style: square inside url("sqpurple.gif");
}
________________________________________




For more do visit w3schools.