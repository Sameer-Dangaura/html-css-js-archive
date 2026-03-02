//-> JavaScript Array Spread (...)                      (is also introduced in "js-25_array_sort/1_intro.md". So, make sure you 1st visit there.)
//-> :
//-> The ... operator expands an iterable (like an array) into more elements:

const q1 = ["Jan", "Feb", "Mar"];
const q2 = ["Apr", "May", "Jun"];
const q3 = ["Jul", "Aug", "Sep"];
const q4 = ["Aug", "Nov", "Dec"];

const spreadedArray1 = [...q1, ...q2, ...q3, ...q4];
const spreadedArray2 = [...q4, ...q3, ...q2, ...q1];

// console.log(spreadedArray1);
// /* outputs: 
// [
//   'Jan', 'Feb', 'Mar',
//   'Apr', 'May', 'Jun',
//   'Jul', 'Aug', 'Sep',
//   'Aug', 'Nov', 'Dec'
// ]
// */

// console.log(spreadedArray2);
// /* outputs: 
// [
//   'Aug', 'Nov', 'Dec',
//   'Jul', 'Aug', 'Sep',
//   'Apr', 'May', 'Jun',
//   'Jan', 'Feb', 'Mar'
// ]
// */


//________________________________________________________

//-> Getting dirty hands with spread operator:

const spreadedArray3 = [...q1];
console.log(spreadedArray3);
/* outputs: 
[ 'Jan', 'Feb', 'Mar' ]
*/

const spreadedArray4 = [...["Jan", "Feb", "Mar"]];
console.log(spreadedArray4);
/* outputs: 
[ 'Jan', 'Feb', 'Mar' ]
*/

const spreadedArray5 = [...["Jan"]];
console.log(spreadedArray5);
/* outputs: 
[ 'Jan' ]
*/

const spreadedArray6 = [..."Jan"];//spreading a string
console.log(spreadedArray6);
/* outputs; 
[ 'J', 'a', 'n' ]
*/


//--------------------------------------------------
//-> From my observation, I found that we can create an array from string by using three methods: 

//-> i) By using split() method                         (which is done in "js-15_string_methods/3_converting_string_to_array.js")

//-> ii) By using Array.from() method                   (which is done in "5_Array.from().js")

//-> iii) By using spread(...) method                   (which is done in your current script file)

//--------------------------------------------------


