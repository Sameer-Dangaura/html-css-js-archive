//--------------------------------------------------------
//-> In w3schools, there was not a function which finds the both minmum and maximum in a single one. But, here I tried by myself to find the minimum and maximum in a single function.

//-> Actually, when we try to return value more than one from a function then, there arises question:
//-> Q. How to return value more than one from a function?
/*-> Ans:
         We can do these things: 
    i) we can print those values to that function.
    ii) we can return an array or a object from that function. 
    iii) we can set the values to the structure which are global.

    These above ways are mine thinking approach which I have learned from C and C++. I haven't learn or tried these things in JavaScript yet.
*/
//--------------------------------------------------------


//-> JavaScript Array Minimum and Maximux Method
//-> :
//-> Actually, here we gonna use the naive approach to find the minimum and maximum in a single function.

//-> This function loops through an array comparing each value with the lowest value to find lowest and with the highest value to find highest :


const NumberList = [8, 6, 9, 2, 5];

Min_Max_find(NumberList);   //Since, we are passing an argument an array. So, it become Function call having pass by reference as an argument. 



function Min_Max_find( numberlist ) {//numberlist is parameter which gonna accept reference of NumberList as numberlist = NumberList .

    let min = numberlist[0];    //setting index 0 value as minimum

    let max = numberlist[0];    //setting index 0 value as maximum

    for(let i=1; i<numberlist.length; i++){
        if(min > numberlist[i]){
            min = numberlist[i];
        }
        if(max < numberlist[i]){
            max = numberlist[i];
        }
    }

    console.log("Mininum value:", min);
    console.log("Maximum value:", max);
}



//________________________________________________________

//-> Another way:

const BoxList = [8, 6, 9, 2, 5];

const MinMax = MinMax_find(BoxList);   //function call 
console.log(MinMax);    //outputs: [ 2, 9 ]

console.log("Minimum value:", MinMax[0]);   
//-> outputs: Minimum value: 2
console.log("Maximum value:", MinMax[1]);
//outputs: Maximum value: 9



//Function definition which is accepting parameter(actually here, we gonna accept the parameter as an reference of an arrya i.e. BoxList) and returning value(actually here, we are returning value as an reference of an array i.e. tempArray)
function MinMax_find( boxlist ) {

    let min = boxlist[0];    //setting index 0 value as minimum

    let max = boxlist[0];    //setting index 0 value as maximum

    for(let i=1; i<boxlist.length; i++){
        if(min > boxlist[i]){
            min = boxlist[i];
        }
        if(max < boxlist[i]){
            max = boxlist[i];
        }
    }

    const tempArray = [];
    tempArray.push(min);
    tempArray.push(max);

    return tempArray;
}


