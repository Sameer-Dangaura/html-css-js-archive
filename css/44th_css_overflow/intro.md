> CSS Layout - Overflow
--------------------------
:
# The CSS overflow property controls what happens to content that is too big to fit into an area.


> CSS Overflow
---------------
:
# The overflow property specifies whether to clip the content or to add scrollbars when the content of an element is too big to fit in the specified area.

The overflow property has the following values:

* visible 
- Default. The overflow is not clipped. The content renders outside the element's box

* hidden  (This one is used already by me in some of lessons of projects)
- The overflow is clipped, and the rest of the content will be invisible

* scroll 
- The overflow is clipped, and a scrollbar is added to see the rest of the content

* auto 
- Similar to scroll, but it adds scrollbars only when necessary



# Note: The overflow property only works for block elements with a specified height.

# Note:
 In OS X Lion (on Mac), scrollbars are hidden by default and only shown when being used (even though "overflow:scroll" is set).



__________________________________________________________________
# For better understanding about this topic: do visit w3schools.
__________________________________________________________________




> overflow-x and overflow-y
----------------------------
:
The overflow-x and overflow-y properties specifies whether to change the overflow of content just horizontally or vertically (or both):

* overflow-x specifies what to do with the left/right edges of the content.
* overflow-y specifies what to do with the top/bottom edges of the content.

# overflow-x: (auto/scroll); is used to make table responsive. You can visit it in table responsive in w3schools.
