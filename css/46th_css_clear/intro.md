> CSS Layout - clear and clearfix
:

> The clear Property
---------------------
:
# When we use the float property, and we want the next element below (not on right or left), we will have to use the clear property.

The clear property specifies what should happen with the element that is next to a floating element.

The clear property can have one of the following values:

* none - The element is not pushed below left or right floated elements. This is default
* left - The element is pushed below left floated elements
* right - The element is pushed below right floated elements
* both - The element is pushed below both left and right floated elements
* inherit - The element inherits the clear value from its parent

# When clearing floats, you should match the clear to the float: If an element is floated to the left, then you should clear to the left. Your floated element will continue to float, but the cleared element will appear below it on the web page.


example: do visit "clear" folder.




> The clearfix Hack     (Already done in "21th_html_layout/HTML_layout_techniques/css_float_layout")
:
If a floated element is taller than the containing element, it will "overflow" outside of its container. We can then add a clearfix hack to solve this problem:
Example
.clearfix {
  overflow: auto;
}

# The overflow: auto clearfix works well as long as you are able to keep control of your margins and padding (else you might see scrollbars). The new, modern clearfix hack however, is safer to use, and the following code is used for most webpages:

Example: do visit "clearfix" folder.
___________________
.clearfix::after {
  content: "";
  clear: both;
  display: table;
}
___________________


# You will learn more about the ::after pseudo-element in a later chapter.



___________________________________
# I asked a question to chatgpt: 
___________________________________
 which one is correct and incorrect or both are correct? 

 .clearfix::after { 
  content: "";
  display: table;
  clear: both;
}  
and 
.clearfix::after {
  content: "";
  clear: both;
  display: table;
}   

- Chatgpt:
Both styles are correct, and the order of properties does not affect the result. You can use either one based on personal or team preferences for readability and consistency in your codebase.

