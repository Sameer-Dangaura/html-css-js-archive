> CSS Layout - Horizontal & Vertical Align


> Center Align Elements
------------------------
:
# To horizontally center a block element (like <div>), use margin: auto;

Setting the width of the element will prevent it from stretching out to the edges of its container.

# The element will then take up the specified width, and the remaining space will be split equally between the two margins:

e.g: already done in "13th_html_divCenterAlign".

# Note:
 Center aligning has no effect if the width property is not set (or set to 100%).





> Center Align Text
---------------------
:
To just center the text inside an element, use text-align: center;
                                            _____________________
-> It is commonly used and you are also using it.

e.g: do visit "24th_css_text_align".





> Center an Image
------------------
:
# To center an image, set left and right margin to auto and make it into a block element:

e.g: do visit "center_an_img" folder.





> Left and Right Align - Using position
-----------------------
:
# One method for aligning elements is to use position: absolute;:

-> to understand about 'absolute' do visit : "42th_css_position/position_absolute"

e.g: do visit "left_n_right_align_using_position" folder.

# Note: Absolute positioned elements are removed from the normal flow, and can overlap elements.





> Left and Right Align - Using float
--------------------------------------
:
# You know now about it.





> Center Vertically - Using padding
------------------------------------
:
# There are many ways to center an element vertically in CSS. A simple solution is to use top and bottom padding:

e.g: do visit "using_padding/center_vertically" folder.



> To center both vertically and horizontally, use padding and text-align: center:
-> already done "48th_css_inline_block/example_1_(must_visit)".

e.g: do visit "using_padding/center_vertically_n_horizontally".





> Center Vertically - Using line-height
--------------------
:
# Another trick is to use the line-height property with a value that is equal to the height property:

e.g: do visit "using_line_height" folder.





> Center Vertically - Using position & transform
--------------------
:
# If padding and line-height are not options, another solution is to use positioning and the transform property:

e.g: do visit "center_using_position_n_transform" folder.


# Tip:
 You will learn more about the transform property in our 2D Transforms Chapter.





> Center Vertically - Using Flexbox
--------------------
:
You can also use flexbox to center things. Just note that flexbox is not supported in IE10 and earlier versions:

e.g: do visit "center_using_flexbox" folder.

