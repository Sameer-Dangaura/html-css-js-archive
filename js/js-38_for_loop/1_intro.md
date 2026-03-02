> JavaScript For Loop
:
- Loops can execute a block of code a number of times.


JavaScript Loops
________________
: Loops are handy, if you want to run the same code over and over again, each time with a different value.

Often this is the case when working with arrays:
-------------------------
Instead of writing:
text += cars[0] + "<br>";
text += cars[1] + "<br>";
text += cars[2] + "<br>";
text += cars[3] + "<br>";
text += cars[4] + "<br>";
text += cars[5] + "<br>";
-------------------------

-------------------------
You can write:
for (let i = 0; i < cars.length; i++) {
  text += cars[i] + "<br>";
}
--------------------------


