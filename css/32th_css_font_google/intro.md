> Google Fonts
---------------
:
If you do not want to use any of the standard fonts in HTML, you can use Google Fonts.

Google Fonts are free to use, and have more than 1000 fonts to choose from.




# How To Use Google Fonts
:
Just add a special style sheet link in the <head> section and then refer to the font in the CSS.

Example: do visit "google_font_1" folder.
Here, we want to use a font named "Sofia" from Google Fonts:
______________________________________________________________
<head>

<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Sofia">--------------|
                            |->just imports the "Sofia fonts"

<style>
body {
  font-family: "Sofia", sans-serif;
}               |____|  |________|
                   |        |
                   |        |->fallback generic font
                   |
                   |
                applying "Sofia fonts" which is imported using google api and not part of "sans-serif" generic
</style>
</head>

_______________________________________________________________



# Note:
 When specifying a font in CSS, always list at minimum one fallback font (to avoid unexpected behaviors). So, also here you should add a generic font family (like serif or sans-serif) to the end of the list.





> Use Multiple Google Fonts
-----------------------------
:
To use multiple Google fonts, just separate the font names with a pipe character (|), like this:

Example:
Request multiple fonts:
______________________

<head>
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Audiowide|Sofia|Trirong">
<style>
h1.a {font-family: "Audiowide", sans-serif;}
h1.b {font-family: "Sofia", sans-serif;}
h1.c {font-family: "Trirong", serif;}
</style>
</head>


# Note: Requesting multiple fonts may slow down your web pages! So be careful about that.




For more do visit w3schools.
_____________________________
