> What are Web Safe Fonts?
---------------------------
:
Web safe fonts are fonts that are universally installed across all browsers and devices.


# Fallback Fonts
However, there are no 100% completely web safe fonts. There is always a chance that a font is not found or is not installed properly.

Therefore, it is very important to always use fallback fonts.

This means that you should add a list of similar "backup fonts" in the font-family property. If the first font does not work, the browser will try the next one, and the next one, and so on. Always end the list with a generic font family name.



Example:
----------
Here, there are three font types: Tahoma, Verdana, and sans-serif. The second and third fonts are backups, in case the first one is not found.

p {
font-family: Tahoma, Verdana, sans-serif;
}               |       |        |
                |       |        |
        primary font    |       Generic font
                        |
                    secondary font




# Best Web Safe Fonts for HTML and CSS
:
The following list are the best web safe fonts for HTML and CSS:

* Arial (sans-serif)
* Verdana (sans-serif)
* Tahoma (sans-serif)
* Trebuchet MS (sans-serif)
* Times New Roman (serif)
* Georgia (serif)
* Garamond (serif)
* Courier New (monospace)
* Brush Script MT (cursive)


# Note:
 Before you publish your website, always check how your fonts appear on different browsers and devices, and always use fallback fonts!



* For more do visit w3schools.
_______________________________


