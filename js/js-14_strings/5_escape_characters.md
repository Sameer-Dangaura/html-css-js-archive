> Escape Characters
:
- Because strings must be written within quotes, JavaScript will misunderstand this string:


<let text = "We are the so-called "Vikings" from the north.";




- The string will be chopped to "We are the so-called ".

- To solve this problem, you can use an backslash escape character.

The backslash escape character (\) turns special characters into string characters:


# For examples, do visit: "5_example.js"




# Six other escape sequences are valid in JavaScript:

Code	Result

\b	    Backspace
\f	    Form Feed
\n	    New Line            => Somewhere, I used it.
\r	    Carriage Return
\t	    Horizontal Tabulator
\v	    Vertical Tabulator


# Note:
- The 6 escape characters above were originally designed to control typewriters, teletypes, and fax machines. They do not make any sense in HTML.

