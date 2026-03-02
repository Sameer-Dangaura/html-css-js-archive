> The CSS Font Property
------------------------
:
To shorten the code, it is also possible to specify all the individual font properties in one property.

The font property is a shorthand property for:
    |___|

* font-style
* font-variant
* font-weight
* font-size/line-height
* font-family

# Note: The font-size and font-family values are required. If one of the other values is missing, their default value are used.



Example:

Use font to set several font properties in one declaration:
_________________________________
p.a {
  font: 20px Arial, sans-serif;
}

p.b {
  font: italic small-caps bold 12px/30px Georgia, serif;
}
____________________________________

