# For this chapter, do visit w3schools.



Q. Why extracting string characters introduced and where it is used in JavaScript?
Ans:

- In JavaScript, extracting string characters was introduced to enable manipulation, processing, and analysis of textual data at the character level.

- Since JavaScript is widely used for web development, working with strings efficiently is essential for tasks like:
* user input validation,
* text formatting,
* and dynamic content updates.




> Here, In this chapter you gonna get introduced with RegExp like:
* text.replace(/MICROSOFT/i, "W3Schools");
* text.replace(/Microsoft/g, "W3Schools");
:
- So, don't worry about that. It is nothing but, 
A regular expression is a sequence of characters that forms a search pattern.

When you search for data in a text, you can use this search pattern to describe what you are searching for.

A regular expression can be a single character, or a more complicated pattern.

Regular expressions can be used to perform all types of     text search     and     text replace    operations.

________________________________
# Syntax:
----------
    /pattern/modifiers;
________________________________


- Example:

1) /MICROSOFT/i;
Example explained:

/MICROSOFT/i  =>is a regular expression.

MICROSOFT  =>is a pattern (to be used in a search).

i  =>is a modifier (modifies the search to be case-insensitive).


And as above mentioned RegExp examples:

* text.replace(/MICROSOFT/i, "W3Schools");
=> This gonna replace the string "MICROSOFT" having case-insensitive(i.e.That don't matter even, if it is in capital letter "MICROSOFT" or small letter "microsoft") of the text variable with the string "W3Schools".

* text.replace(/Microsoft/g, "W3Schools");
=> 
Here,      /g     flag is a global match. That means, this gonna replace the string "Microsoft" with string "W3Schools", where ever it appears in the text variable.
