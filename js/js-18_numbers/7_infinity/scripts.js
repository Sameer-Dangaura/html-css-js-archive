//-> Infinity
//-> :
//-> Infinity (or -Infinity) is the value JavaScript will return if you calculate a number outside the largest possible number.


let myNumber = 2;
let text = "";  //empty string

while(myNumber != Infinity) {
    myNumber = myNumber * myNumber;
    text = text + myNumber + "<br>";    //concatenating
}

document.getElementById("demo").innerHTML = text;
//-> setting the string to that element whose id="demo" with the help of         .innerHTML .



/*________________________________________________________
Q. How the above while loop is working ? 
And how the text variable is working or holding the string and 
why the values displayed seperately like:
4
16
256 
...? 
why it is not displayed as:
4 16 256 ... eventhough, we are adding the string and number (i.e. text + myNumber) actually concatenating ?
Also, is the text variable assigned to the "document.getElementById("demo").innerHTML" once after the the loop terminated ?
Ans:

The above while loop works as C, C++.

Let me explain the above code and then, you will understand everything:

-> At 1st initialized,
    text as empty string and
    myNumber as number variable holding 2;

-> While loop checks, Is ((myNumber=2) == Infinity) ? No, so

1st iteration: go inside while loop and 
 i) perform: myNumber = myNumber * myNumber;
    i.e. myNumber = 2 * 2;
 ii) concatenate: text = text + myNumber + "<br>";
    i.e. text = "" + 4 + "<br>";

2nd iteration: Is ((myNumber=4) == Infinity) ? No, so again go inside while loop and 
 i) perform: myNumber = 4 * 4;
 ii) concatenate: text = "4 <br>" + 16 + "<br>";
 
3rd iteration: Is ((myNumber=16) == Infinity) ? No, so again go inside while loop and
 i) perform: myNumber = 16 * 16;
 ii) concatenate: text = "4 <br> 16 <br>" + 256 + "<br>";

...

After ((myNumber=Infinity) == Infinity) , true. The while loop terminates.
And after that the text variable's string is assigned to document.getElementById("demo").innerHTML and then it sets the string to that element whose id="demo" with the help of         .innerHTML .


And your question's answer for:
why the values displayed seperately like:
4
16
256 
...? 
why it is not displayed as:
4 16 256 ... eventhough, we are adding the string and number (i.e. text + myNumber) actually concatenating ?
:
is => The values displayed seperately in each line like: 
4 
16
256
..., Because of the <br> tag which is also concatenating with text and myNumber in each loop. The actual reason for why we are not getting outputs as: 4 16 256 is because of <br> tag.


/*________________________________________________________

Q. Is it necessary to use <br> tag inside quotation in js code ?
Ans:

Yes, it is necessary to use <br> tag inside quotation because, if you do not use quotation to outside of <br> tag:
i.e.  text = text + myNumber + <br>;
 then interpreter will treate it as variable and not gonna work of the <br> functionalities.
________________________________________________________*/
