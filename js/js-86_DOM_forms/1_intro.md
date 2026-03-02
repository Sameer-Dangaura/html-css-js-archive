> JavaScript Forms
:
# Finding HTML Elements by HTML Object Collections:
- This example finds the form element with id="frm1", in the forms collection, and displays all element values:

Example
_____________________________________________
const x = document.forms["frm1"];
let text = "";
for (let i = 0; i < x.length; i++) {
  text += x.elements[i].value + "<br>";
}
document.getElementById("demo").innerHTML = text;
______________________________________________



# Do visit: w3schools .

