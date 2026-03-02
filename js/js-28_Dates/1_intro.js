//-> JavaScript Date Objects                            (is also introduced in "2_js_type_conversion/8_convertingDateToNumber.js")

//-> :

//-> JavaScript Date Objects let us work with dates:


//-> i) Creating a Date object with the current date and time (based on the system's clock):
const myDate = new Date();

console.log(myDate);    //outputs varies on time
//-> outputs: 2025-03-18T10:21:22.052Z      (which is UTC time)
//-> Since, the actual date was: 2025-03-18  Time 4:06:22 (which is local time)


/*________________________________________________________
Breaking it Down: "2025-03-18T10:21:22.052Z"
----------------
📆 2025-03-18 → Year 2025, Month 03 (March), Day 18

⏰ T10:21:22.052 → The T separates the date from the time

10:21:22.052 → Hours 10, Minutes 21, Seconds 22, Milliseconds 052

🌍 Z → Stands for "Zulu Time" (UTC time, or Coordinated Universal Time)


Example Conversion:
-------------------
If you're in Nepal, which follows UTC+5:45, then:

2025-03-18T10:21:22.052Z (UTC)

In Nepal Time → 2025-03-18T16:06:22.052+05:45

________________________________________________________*/



//-> ii) Creating a Date object with a specific date:
const myDate2 = new Date("2022-03-25");

console.log(myDate2);   //outputs varies on time
//-> outputs: 2022-03-25T00:00:00.000Z

//-> since, we created a date object with a specific date which is in "YYYY-MM-DD" format.
//-> The "YYYY-MM-DD" format is treated as UTC (Coordinated Universal Time).
//-> The time defaults to 00:00:00 (midnight) in UTC.


//________________________________________________________
//-> Note
//-> :
//-> Date objects are static. The "clock" is not "running".

//-> The computer clock is ticking, date objects are not.
//________________________________________________________

