> CSS Attribute Selectors
--------------------------


> Style HTML Elements With Specific Attributes
-----------------------------------------------
:
It is possible to style HTML elements that have specific attributes or attribute values.


>1. CSS [attribute] Selector
:
-  select elements with a specified attribute.
e.g:
__________________________
Example
a[target] {
  background-color: yellow;
}
___________________________


>2. CSS [attribute="value"] Selector
:
- select elements with a specified attribute and value.
e.g:
____________________________
Example
a[target="_blank"] {
  background-color: yellow;
}
____________________________


>3. CSS [attribute~="value"] Selector
:
- select elements with an attribute value containing a specified word.
e.g:
____________________________
Example
[title~="flower"] {
  border: 5px solid yellow;
}
____________________________


>4. CSS [attribute|="value"] Selector
:
- select elements with the specified attribute, whose value can be exactly the specified value, or the specified value followed by a hyphen (-).
e.g:
____________________________
Example
[class|="top"] {
  background: yellow;
}
____________________________


>5. CSS [attribute^="value"] Selector
:
- select elements with the specified attribute, whose value starts with the specified value.
e.g:
____________________________
Example
[class^="top"] {
  background: yellow;
}
____________________________


>6. CSS [attribute$="value"] Selector
:
- select elements whose attribute value ends with a specified value.
e.g:
____________________________
Example
[class$="test"] {
  background: yellow;
}
____________________________


>7. CSS [attribute*="value"] Selector
:
- select elements whose attribute value contains a specified value.
e.g:
____________________________
Example
[class*="te"] {
  background: yellow;
}
____________________________


_________________________________________________________
# For above detailed understanding, do visit w3schools.
_________________________________________________________


 

> Styling Forms
:
# The attribute selectors can be useful for styling forms without class or ID:

e.g: do visit "styling_forms" folder.


