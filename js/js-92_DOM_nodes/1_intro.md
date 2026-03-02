# JavaScript HTML DOM Elements (Nodes)

- Adding and Removing Nodes (HTML Elements)

> Do visit: w3schools .


## Creating New HTML Elements (Nodes)
__________________________________________________________
<!-- This below JS content code you will understand, if you have visited `js-91_DOM_navigation`. -->

<html>
<body>

<h2>JavaScript HTML DOM</h2>
<p>Add a new HTML Element.</p>

<div id="div1">
<p id="p1">This is a paragraph.</p>
<p id="p2">This is another paragraph.</p>
</div>


<script>

const para = document.createElement("p");   //creates new empty <p>

const node = document.createTextNode("This is new."); //creates a text node (just plain text, no tags) with content "This is new."

para.appendChild(node); //appends text node as a child of the newly created <p> element

const element = document.getElementById("div1"); //access <div> element having id=div1

element.appendChild(para); //appends newly created <p> element having child text node which contain text as "This is new." as a child of <div> element having id=div1

</script>

</body>
</html>

__________________________________________________________


