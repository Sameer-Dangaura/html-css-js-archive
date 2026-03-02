//Here we gonna defined user defined boolean function. like in C++: bool attack(int a[], int row, int n){}
 
/* In JS: trying to implement like C++,
_______________________________________
Boolean function IsIncluded(){
    if(condition){return true;}
    else{return false;}
}
_______________________________________
                                        */
//-> but, there is nothing syntax like that in JS.



//-> We just define a simple function of JS and just return true and false as per your requirements:

//-> Example:
function IsGreaterThan18( num ) {
    if(num > 18){
        return true;
    }
    return false;
}

console.log( IsGreaterThan18(19) ); //outputs: true
console.log( IsGreaterThan18(17) ); //outputs: false

