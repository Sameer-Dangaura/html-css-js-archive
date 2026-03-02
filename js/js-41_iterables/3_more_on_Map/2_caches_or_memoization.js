//-> Real implementation of cache or memoization which is an use case example of Map:

//-> 🔁 Memoization
//-> :
//-> Memoization is an optimization technique where you store the result of a function so you don't compute it again if you get the same input.

/* ✅ Example:
Suppose we have a function that takes a lot of time to execute (i.e. functions time complexity is higher):
_______________________
function slowFunction(n){
    // code...
    // code...
    // code...
}
_______________________

Now if you call slowFunction(1000) many times, it will always recalculate and will cause slower performance.


🔐 Solution: Use a Map to memoize                       */
const cache = new Map();

function memoizedSquare(n){
    if(cache.has(n)){
        return cache.get(n); // return cached value
    }
    else{
        let result = n * n;
        cache.set(n, result); // store result in cache
        return result;
    }
}

console.log(memoizedSquare(10)); // calculates and stores
console.log(memoizedSquare(10)); // returns from cache instantly


//_____________________________________________
//-> If you don't know about Map and it's methods(get, set, has), then do visit "../3_iterating_over_Map.js" .
//_____________________________________________


/*
📦 What is a Cache?
:
A cache is just a way to store data temporarily to avoid repeating work.

In the above example, the Map acts as a cache.


🤔Caches are useful when:

- Function is expensive to run

- Inputs repeat frequently

- You want to speed up performance



⚡️ Why Use Map for This?
Because:

- It allows any type of key (not just strings)

- Keeps order

- Fast .has() and .get() access


*/

