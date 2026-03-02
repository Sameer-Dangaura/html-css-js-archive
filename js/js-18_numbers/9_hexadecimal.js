//-> Hexadecimal
//-> :
//-> JavaScript interprets numeric constants as hexadecimal if they are preceded by 0x.

let myVariable = 0xFF;   //it is in hexadecimal
console.log(myVariable);    //outputs: 255 , interpreter interpreted to decimal. (i.e. automatic conversion happened to decimal)



/*________________________________________________________

Q. Is 0xFF = 255 ?

ChatGPT said:
Yes, 0xFF (hexadecimal) is equal to 255 in decimal.

Here's why:

0xFF is a hexadecimal number.
In decimal, hexadecimal F represents 15.
0xFF means:
(𝐹×16^1)+(𝐹×16^0)
=(15×16)+(15×1)
=240+15
=255

So, 0xFF = 255 in decimal. 🚀

/*________________________________________________________

Tip: 
 Never write a number with a leading zero (like 07).
 Some JavaScript versions interpret numbers as octal if they are written with a leading zero.
________________________________________________________*/





//-> By default, JavaScript displays numbers as base 10 decimals.

//-> But you can use the,
//->      toString(radix)      method to output numbers from base 2 to base 36.

//->    toString(radix)    method converts the number into a string representation of that number in the specified base.

//____________________________________________________
//-> Hexadecimal is base 16. Decimal is base 10. Octal is base 8. Binary is base 2.
//____________________________________________________



let num1 = 255; //By default, it is a decimal value.
console.log(num1);  //outputs: 255
console.log(typeof num1);   //outputs: number


//-> At 1st let's see, Using toString() Without a Base or radix                                             (Already done in "2_js_type_conversion/11_explicitConversionToString.js" also):

let num2 = num1.toString(); 
console.log(num2);  
//-> outputs: '255' , (Default is base 10)  
console.log(typeof num2);   //outputs: string



//-> Now, let's see examples of Different Bases:

//-> i) Binary (base 2):
console.log(num1.toString(2));  //outputs: '11111111'
console.log(typeof num1.toString(2));   //outputs: string

//-> ii) Octal (base 8):
console.log(num1.toString(8));  //outputs: '377'
console.log(typeof num1.toString(8));   //outputs: string 

//-> iii) Decimal (base 10):
console.log(num1.toString(10)); //outputs: '255'
console.log(typeof num1.toString(10)); //outputs: string


//-> iv) Hexadecimal (base 16):
console.log(num1.toString(16)); //outputs: 'ff'
console.log(typeof num1.toString(16)); //outputs: string
console.log((10).toString(16)); //outputs: 'a'
//-> Hexadecimal uses the symbols 0–9 to represent values 0–9, and A–F to represent values 10–15.


//-> v) Base 36 (Maximum Supported):
console.log(num1.toString(36)); //outputs: '73'
console.log(typeof num1.toString(36)); //string: string
console.log((10).toString(36)); //outputs: 'a'
//-> (Base 36 uses numbers 0-9 and letters a-z.)
