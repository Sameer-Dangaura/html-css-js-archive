# While working with flexbox, make sure you know about the default values of each properties of flexbox. If you don't know about the default values of each properties then you will arise query-"How is this happened ?". So make sure you know about default values. 


> CSS Flex Container
--------------------


> The CSS Flex Container
:
Like we specified in the previous chapter, this is a flex container (the blue area) with three flex items:
# do visit "71th_css_flexbox/create_flex_container".


- The CSS properties we use for the flex container are:

* flex-direction
* flex-wrap
* flex-flow
* justify-content
* align-items
* align-content


> The CSS flex-direction Property
:
# The flex-direction property specifies the display-direction of flex items in the flex container.

The flex-direction property can have one of the following values:

* row
* column
* row-reverse
* column-reverse

# Example: do visit "flex-direction/row" folder.  
    The row value is the default value, and it displays the flex items horizontally (from left to right):

# Example: do visit "flex-direction/column" folder.
    The column value displays the flex items vertically (from top to bottom):

# Example: do visit "flex-direction/row-reverse" folder.
    The row-reverse value displays the flex items horizontally (but from right to left):

# Example: do visit "flex-direction/column-reverse" folder.
    The column-reverse value displays the flex items vertically (but from bottom to top):


> The CSS flex-wrap Property
:
# The flex-wrap property specifies whether the flex items should wrap or not, if there is not enough room for them on one flex line.

The flex-wrap property can have one of the following values:

* nowrap
* wrap
* wrap-reverse

# Example: do visit "flex-wrap/nowrap_(default)" folder 
    The nowrap value specifies that the flex items will not wrap (this is default):

# Example: do visit "flex-wrap/wrap" folder
    The wrap value specifies that the flex items will wrap if necessary:

# Example: do visit "flex-wrap/wrap-reverse" folder
    The wrap-reverse value specifies that the flex items will wrap if necessary, in reverse order:


> The CSS flex-flow Property
:
# The   flex-flow   property is a shorthand property for setting both the   flex-direction   and   flex-wrap   properties.

e.g: do visit "flex-flow" folder.


> The CSS justify-content Property
:
# The   justify-content   property is used to align the flex items when they do not use all available space on the main-axis (horizontally).

The justify-content property can have one of the following values:

* center
* flex-start
* flex-end
* space-around
* space-between
* space-evenly

# Example: do visit "justify-content/center" folder
    The center value positions the flex items in the center of the container:

# Example: do visit "justify-content/flex-start_(default)" folder
    The flex-start value positions the flex items at the beginning of the container (this is default):

# Example: do visit "justify-content/flex-end" folder
    The flex-end value positions the flex items at the end of the container:

# Example: do visit "justify-content/space-around" folder
    The space-around value displays the flex items with space around them:

# Example: do visit "justify-content/space-between" folder
    The space-between value displays the flex items with space between them:

# Example: do visit "justify-content/space-evenly" folder
    The space-evenly value displays the flex items with equal space around them:


> The CSS align-items Property
:
# The align-items property is used to align the flex items when they do not use all available space on the cross-axis (vertically).

The align-items property can have one of the following values:

* center
* flex-start
* flex-end
* stretch
* baseline
* normal

In the following examples we use a 200 pixels high container, to better demonstrate the align-items property.

# Example: do visit "align-items/center" folder
    The center value positions the flex items in the middle of the container:

# Example: do visit "align-items/flex-start" folder
    The flex-start value positions the flex items at the top of the container:

# Example: do visit "align-items/flex-end" folder
    The flex-end value positions the flex items at the bottom of the container:

# Example: do visit "align-items/stretch_(default)" folder
    The stretch value stretches the flex items to fill the container (this is equal to "normal" which is default):

# Example: do visit w3schools.
    The baseline value positions the flex items at the baseline of the container:


> The CSS align-content Property
:
The align-content property is used to align the flex lines.

# The align-content property is similar to align-items, but instead of aligning flex items, it aligns the flex lines.

# To understand the difference between the 'align-items' and 'align-content', do visit "align-items_n_align-content" folder.


The align-content property can have one of the following values:

* center
* stretch
* flex-start
* flex-end
* space-around
* space-between
* space-evenly

In the following examples we use a 600 pixels high container, with the flex-wrap property set to wrap, to better demonstrate the align-content property.

# Example: do visit "align-items_n_align-content" folder
    With center, the flex lines are packed toward the center of the container:

# Example: do visit "align-content/stretch_(default)" folder
    With stretch, the flex lines stretch to take up the remaining space of the container (this is default):

# For more about align-content property, do visit w3schools.



> Perfect Centering
: is already done in "49th_css_align/center_using_flexbox".

