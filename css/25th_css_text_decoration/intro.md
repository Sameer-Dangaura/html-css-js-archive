//This is not an actual  md  file. We used this extension just for styling purpos of a document.

> CSS Text Decoration
---------------------
:
In this chapter you will learn about the following properties:

* text-decoration-line
* text-decoration-color
* text-decoration-style
* text-decoration-thickness
* text-decoration



> Add a Decoration Line to Text
--------------------------------
:
The text-decoration-line property is used to add a decoration line to text.

Tip:
 You can combine more than one value, like overline and underline to display lines both over and under a text.


Example:

h1 {
  text-decoration-line: overline;
}

h2 {
  text-decoration-line: line-through;
}

h3 {
  text-decoration-line: underline;  // not recommended...
}

p {
  text-decoration-line: overline underline;
}



# Note: It is not recommended to underline text that is not a link, as this often confuses the reader.




> Specify a Color for the Decoration Line
------------------------------------------
:
The text-decoration-color property is used to set the color of the decoration line.

Example:

h1 {
  text-decoration-line: overline;
  text-decoration-color: red;
}

h2 {
  text-decoration-line: line-through;
  text-decoration-color: blue;
}

h3 {
  text-decoration-line: underline;
  text-decoration-color: green;
}

p {
  text-decoration-line: overline underline;
  text-decoration-color: purple;
}




> For Text-decoration-style and Text-decoration-thickness
: do visit w3schools.



>The Shorthand Property
------------------------
:
The text-decoration property is a shorthand property for:

* text-decoration-line (required)
* text-decoration-color (optional)
* text-decoration-style (optional)
* text-decoration-thickness (optional)

Example:

h1 {
  text-decoration: underline;
}

h2 {
  text-decoration: underline red;
}

h3 {
  text-decoration: underline red double;
}

p {
  text-decoration: underline red double 5px;
}




> A Small Tip
--------------
:
All links in HTML are underlined by default. Sometimes you see that links are styled with no underline. The text-decoration: none; is used to remove the underline from links, like this:

* Example:
____________________________________
a {
  text-decoration: none;
}
____________________________________

