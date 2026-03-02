/*
> JavaScript Iterators
:
The iterator protocol defines how to produce a sequence of values from an object.

An object becomes an iterator when it implements a next() method.

The next() method must return an object with two properties:

- value (the next value)
- done (true or false)

* value	- The value returned by the iterator
(Can be omitted if done is true)

* done - true if the iterator has completed
        false if the iterator has produced a new value

Note
----
Technically, iterables must implement the Symbol.iterator method.

String, Array, TypedArray, Map and Set are all iterables, because their prototype objects have a Symbol.iterator method.

*/


//-> Let's understand it slow and simple🤗, because JavaScript iterators and iterables can be a confusing topic at first. Here's a calm, beginner-friendly breakdown:
/*
🔁 What is an Iterator?
:
An iterator is an object that gives you items one at a time from a collection (like an array or a string).

Think of an iterator like a remote control for a playlist 🎵🎼—every time you press next(), it gives you the next song (or says the playlist is over).


📦 Iterator Format
:
An iterator must have a next() method. Each time you call next(), it returns an object like this:
_____________________
{
  value: "something", // the next item
  done: false         // true if all items are done
}
_____________________
When done is true, it means there’s nothing left to iterate.                                                */


//-> 🧪 Simple Example (Manual Iterator) or (Home made iterator):
function createIterator(arr){
    let index = 0;

    //-> return an object(i.e.{keys:values})
    return {
        next: function(){
            if(index < arr.length){
                //-> if true, return below object
                return {
                    value: arr[index++],
                    done: false
                };
            }
            else{
                //-> else, return below object
                return {
                    done: true
                };
            }
        }
    };
}

//-> Using the iterator:
const myIterator = createIterator(["apple", "banana", "grapes"]);


console.log(myIterator.next()); 
//->outputs: { value: 'apple', done: false }

console.log(myIterator.next());
//->outputs: { value: 'banana', done: false }

console.log(myIterator.next());
//->outputs: { value: 'grapes', done: false }

console.log(myIterator.next());
//->outputs: { done: true }


/*___________________________________________
Q. 🤔🤔Actually I'm confused with This createIterator Function. I don't get it we are creating an object from a function (i.e.createIterator()) and each time we call a next() function it is giving next element of an array incrementing   index   variable even though the   index   variable is not declared as static variable as it is in C++ 

Ans:
----
ChatGPT said:
Ah, great question! And you're not alone — this part confuses a lot of people, especially if you come from C or C++, where you're used to concepts like static variables inside functions. But don’t worry — let’s slow it down and clear up this mystery.


✅ First: The confusion
You're wondering:

"How does index remember its value every time next() is called, even though it’s not static?"

💡 The answer is: Closures

JavaScript has something called a closure, which means:
    Inner functions (like next()) remember the variables from the function they were created in, even after that outer function has finished running.


🌰 Think of it like this (nutshell):
When you do:
_____________________________
const myIterator = createIterator(["a", "b", "c"]);     
//-> createIterator() function called and returns to the iterator(i.e.myIterator variable). Actually a createIterator() function returns an object so myIterator variable becomes an object i.e. an iterator object.
_____________________________

JavaScript:

- Runs createIterator(), which declares index = 0.

- Then returns an object with a next() method that uses index.

- That next() method keeps a reference to index, even though createIterator() has finished running!


🧠 Memory-wise:
It’s like JavaScript says:

“Hey, this next() function needs index to work, so I’ll keep index around for it, even if everything else is gone.”

This is the 💪power of closures.


🔁 So Every Time You Do:
__________________
myIterator.next();
__________________
You're calling the same next() function, and it remembers the index because of the closure.


🎯 Real-world analogy:
Imagine you give someone a secret box (that's next()), and inside the box is a number (that's index = 0).

Every time they open the box and press the button (next()), the number goes up by 1.

Even though the box is now outside your room (createIterator() finished), it still remembers what number it had last time.


✅ Final Thoughts
So even though we didn’t use static, JavaScript closures achieve the same result: "remembering variables" across calls.

_________________________________________________*/


//-> The problem with above home made iterator is:

//-> It does not support the JavaScript for..of statement.
/*
🔁 What is an Iterable?
:
An iterable is something you can use in a for...of loop.
To be iterable, the object must have a method named [Symbol.iterator]() that returns an iterator.

📌 Arrays, Strings, Maps, Sets—all have            [Symbol.iterator]() built-in.                                            */
/*

A JavaScript iterable is an object that has a       Symbol.iterator .

The   Symbol.iterator   is a function that returns a   next() function.

An iterable can be iterated over with the code:        for (const x of iterable) { }                                                     */
//_____________________________________________
//-> Example: Behind the Scenes of for...of
const myArray = ["a", "b", "c"];

//-> Using the iterator
const myIterator1 = myArray[Symbol.iterator]();

console.log(myIterator1.next()); 
//->outputs: { value: 'a', done: false }

console.log(myIterator1.next());
//->outputs: { value: 'b', done: false }

console.log(myIterator1.next());
//->outputs: { value: 'c', done: false }

console.log(myIterator1.next());
//->outputs: { value: undefined, done: true }
//___________________________________________

/*
So when you do:
___________________________
for (let item of myArray) {
  console.log(item);
}
___________________________
JavaScript internally uses this iterator.


*/



//____________________________________________
//-> Now do visit w3schools JS iterators...
//____________________________________________




/*__________________________________________

-> Q. What is this line doing : 
const myIterator = createIterator(["apple", "banana", "grapes"]);


ChatGPT said:
Great question!

This line:
_____________________________________________________
const myIterator = createIterator(["apple", "banana", "grapes"]);
_____________________________________________________
is doing two main things:


1. Calling the createIterator() function
:
You're passing the array ["apple", "banana", "grapes"] as an argument to the function. i.e. passing an array as arguments, (array is passed as a reference pointing to index-0) .

So now inside createIterator(arr),   arr (i.e. array)   becomes ["apple", "banana", "grapes"].


2. Receiving the iterator object
:
The function createIterator() returns an object that looks like this:

________________________________________
{
  next: function() {
    // returns { value: ..., done: ... }
  }
}
________________________________________
That object is stored in the variable myIterator.

So now, myIterator is an object with a next() method — calling myIterator.next() gives you the next item in the array.


🎯 Final Meaning
_____________________________________________________
const myIterator = createIterator(["apple", "banana", "grapes"]);
_____________________________________________________
Means:
“Create an iterator over this array, and store it in the variable myIterator, so I can manually go through its elements one at a time using .next().”


*/

