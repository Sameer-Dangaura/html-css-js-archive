//-> Flattening an Array
//-> :
//-> Flattening an array is the process of reducing the dimensionality of an array.

//-> Flattening is useful when you want to convert a multi-dimensional array into a one-dimensional array.

//________________________________________________________

//-> JavaScript Array flat()
//-> :
//-> ES2019 Introduced the Array flat() method.

//-> The flat() method creates a new array with sub-array elements concatenated to a specified depth.

const fruitsBox = [["Apple",150], ["Banana",60], ["PineApple",400]];

const newFruitsBox = fruitsBox.flat();
console.log(newFruitsBox);  
//-> outputs: [ 'Apple', 150, 'Banana', 60, 'PineApple', 400 ]
