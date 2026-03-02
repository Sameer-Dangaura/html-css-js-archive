> CSS The object-fit Property
-----------------------------
:
The CSS   object-fit   property is used to specify how an <img> or <video> should be resized to fit its container.



> The CSS object-fit Property
------------------------------
:
The CSS object-fit property is used to specify how an <img> or <video> should be resized to fit its container.

# This property tells the content to fill the container in a variety of ways; such as "preserve that aspect ratio" or "stretch up and take up as much space as possible".

Look at the following image from Paris. This image is 400 pixels wide and 300 pixels high: | do visit w3schools for the image or go to "68th_css_object_fit/img/image_from_paris". |

However, if we style the image above to be half its width (200 pixels) and same height (300 pixels), it will look like this:    | do visit w3schools for the image or do visit "width_200px_height_300px" folder. |


# We see that the image is being squished to fit the container of 200x300 pixels (its original aspect ratio is destroyed).

# Here is where the    object-fit   property comes in.

 The object-fit property can take one of the following values:

* fill - This is default. 
        The image is resized to fill the given dimension. If necessary, the image will be stretched or squished to fit.

* contain - The image keeps its aspect ratio,
         but is resized to fit within the given dimension.

* cover - The image keeps its aspect ratio 
        and fills the given dimension. The image will be clipped to fit.

* none - The image is not resized

* scale-down - the image is scaled down to the smallest version of none or contain.


# I think mostly gonna use is "contain" and "cover" from my prospective.


________________________________
# For more, do visit w3schools.
________________________________

