> CSS Layout - Float Examples
------------------------------
:
- (Some of float examples I'm skipping because those examples are relative i.e. similar to already done examples)

This page contains common float examples.




> Equal Height Boxes
---------------------
:
In the previous examples, you learned how to float boxes side by side with an equal width.

# However, it is not easy to create floating boxes with equal heights. A quick fix however, is to set a fixed height, like in the example below:

* For this example using float: do visit w3schools.

# However, using float is not very flexible. It is ok if you can guarantee that the boxes will always have the same amount of content in them. But many times, the content is not the same. If you try the example above on a mobile phone, you will see that the second box's content will be displayed outside of the box. This is where CSS3 Flexbox comes in handy - as it can automatically stretch boxes to be as long as the longest box:

* Example using flexbox: do visit "equal_height_boxes_by_flexbox" folder.





> Web Layout Example
----------------------
:
It is also common to do entire web layouts using the float property.
e.g: do visit "web_layout_by_float" folder.

