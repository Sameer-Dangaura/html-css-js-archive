> Converting Variables to Numbers
:
- There are 3 JavaScript methods that can be used to convert a variable to a number:


  Method	          Description
  -------           ------------

* Number()	        Returns a number converted from its argument.

* parseFloat()	    Parses its argument and returns a floating point number

* parseInt()	    Parses its argument and returns a whole number

______________________________________________________
# The methods above are not     number   methods. They are      global     JavaScript methods.
> Tip: do visit 12_Number.parseFloat().js also.
______________________________________________________


Q. What Does "Parses" Mean in parseFloat() and parseInt()?
An:
- In JavaScript, "parses" means extracting and converting a valid number from a given input (usually a string).

# 1️⃣ parseFloat() – Extracts a Floating-Point Number:
✅ Parses and returns a decimal (floating-point) number.
✅ Stops reading once it encounters an invalid character.

# 2️⃣ parseInt() – Extracts a Whole Number
✅ Parses and returns an integer (whole number).
✅ Stops at the first non-numeric character.
✅ Can handle different number bases (radix).
