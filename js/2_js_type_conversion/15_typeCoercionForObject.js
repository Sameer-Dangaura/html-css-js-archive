//-> Type Coercion for Objects
//-> :
//->  In JavaScript, objects can undergo type coercion when they are used in contexts that expect primitive values like strings or numbers.

//-> This coercion typically involves invoking specific methods or performing conversions based on the object's internal representation.


const myContainer = {
    height : 4,
    width : 2,
    valueOf : function(){
        return this.height * this.width;
    }
};

//-> Here,  valueOf   is a function name of myContainer object,
//-> which returns 8 (as 4*2 = 8)  as it is invoked.

const num = 12;
console.log(num + myContainer); //outputs: 20



//-> In the above example, we can see that the addition of the variable   num   and object    myContainer    is returned as 20 which is correct,
//-> It is because of the   valueOf()    method in the object  'myContainer'  which returned 8.

//-> In case the value of method is not present in the object,  NaN is returned.