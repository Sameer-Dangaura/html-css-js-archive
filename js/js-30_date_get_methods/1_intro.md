# For this chapter, At 1st make sure you have visited "js-28_Dates".

and then,

> Do visit: w3schools.




__________________________________________________________
Q. Why it is displaying 5 hour on web browser, even we are creating a date object by specifying particular date without providing time :
 const d = new Date("2021-03-25");
 document.getElementById("demo").innerHTML = d.getHours();

Ans:
----

ChatGPT said:

Good observation! The reason why d.getHours() outputs 5 in the browser when you create a date using "2021-03-25" is due to time zone differences.


📌 Why Does This Happen?
:

1. JavaScript Parses Date Strings as UTC (Midnight 00:00 UTC)

- When you create a Date object using only a date string:
____________________________________
javascript code:
----------------
const d = new Date("2021-03-25");
____________________________________

- JavaScript assumes the time is midnight (00:00:00) in UTC (Coordinated Universal Time).

- Internally, this means:
-----------------------------------
2021-03-25T00:00:00.000Z  (Z = UTC)
-----------------------------------


2. Browser Converts UTC Time to Your Local Time Zone

# If you are in Nepal Time (GMT+5:45), the browser converts the UTC time to your local time:

- 00:00 UTC  →  05:45 in Nepal Time
- Since .getHours() returns the local time's hour, it displays 5 (not 0).



# And same thing will happen with minutes also.  i.e. you gonna see minutes as 45 .  


> These UTC and time format, meanings, difference from Nepal is disscussed in "js-28_Dates".
__________________________________________________________




Q. When to use Date.now() and when to use getTime() ?
Ans: 

Both Date.now() and getTime() are used to get the current timestamp in milliseconds, but they are used in slightly different scenarios:

1. Date.now()
:
- Use it when you only need the timestamp (milliseconds since January 1, 1970).
- It is a static method, so you call it directly on the Date object.
- Faster and more concise.


2. getTime()
:
- Used on an instance of a Date object.
- Requires creating a Date object first.


# Which one should you use?
:
- Prefer Date.now() when you need the current timestamp.

- Use getTime() when dealing with a specific date object.

__________________________________________________________




> UTC methods use UTC time (Coordinated Universal Time).

> UTC time is the same as GMT (Greenwich Mean Time).


