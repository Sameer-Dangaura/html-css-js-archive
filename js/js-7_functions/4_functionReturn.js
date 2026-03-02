//-> Function Return
//-> :


//-> Calculation of area of house:

let myArea = myHouse(20, 12);   
//-> Here, in above line function call is successfully done. Because of function hoisting (Since, we were invoked the function before function defination).

console.log(myArea);    //outputs: 240

function myHouse( length, breadth) {
    return length * breadth;
}
