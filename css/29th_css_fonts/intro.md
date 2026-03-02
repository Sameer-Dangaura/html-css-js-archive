# CSS Fonts: Choosing the right font for your website is important!

> CSS fonts using:   font-family   propery.

____________________________________________________________
* Font Selection is Important
Choosing the right font has a huge impact on how the readers experience a website.

The right font can create a strong identity for your brand.

Using a font that is easy to read is important. The font adds value to your text. It is also important to choose the correct color and text size for the font.
______________________________________________________________


> Generic Font Families
------------------------
:
In CSS there are five generic font families:

* Serif fonts have a small stroke at the edges of each letter. They create a sense of formality and elegance.
* Sans-serif fonts have clean lines (no small strokes attached). They create a modern and minimalistic look.
* Monospace fonts - here all the letters have the same fixed width. They create a mechanical look. 
* Cursive fonts imitate human handwriting.
* Fantasy fonts are decorative/playful fonts.

# All the different font names belong to one of the generic font families. 


For more do visit w3schools.

# Note:
 On computer screens, sans-serif fonts are considered easier to read than serif fonts.




> Some Font Examples
---------------------
:
Generic Font Family	                Examples of Font Names

1) Sans-serif	                   Arial, Verdana, Helvetica

2) Monospace	                Courier New, Lucida Console, Monaco

3) and so on...



example:
<style>
.p2 {
  font-family: Arial, Helvetica, sans-serif;
}

.p3 {
  font-family: "Lucida Console", "Courier New", monospace;
}              |______________|  |___________|  |________|
                    |                 |             |
                    |-> font names  <-|             |-> Generic font
</style>            |                 |
                    |                 |
                    |              secondary font
                    |
                primary font





> The CSS font-family Property
-------------------------------
:
In CSS, we use the font-family property to specify the font of a text.

# Note: If the font name is more than one word, it must be in quotation marks, like: "Lucida Console".


# Tip:
 The font-family property should hold several font names as a "fallback" system, to ensure maximum compatibility between browsers/operating systems. Start with the font you want, and end with a generic family (to let the browser pick a similar font in the generic family, if no other fonts are available). The font names should be separated with a comma. Read more about fallback fonts in the next chapter.


Example: do visit "font_family" folder.

