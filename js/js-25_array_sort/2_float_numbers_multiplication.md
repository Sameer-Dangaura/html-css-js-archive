# Actually while working in "2_Math.random().js", I get confused with multiplication of   Math.random() * 11 . By thinking that how this multiplication gonna work and how it gonna generate 10.

> Here, we gonna understand how the float numbers(rational numbers) gets multiplied                        :

- Since, Math.random() generates the values between 0 and 1. e.g: 0.2695057925220569, 0.9695057925220569, 0.6295057925220569, 0.5695057925220569, etc.

And when we do multiplication like   Math.random() * 11  the operation happens like that: 

-> e.g-1: Suppose, 
Math.random() = 0.2695057925220569 ~ 0.26                 i.e. 2.6/10 or, 26/100
Then,
26/100 * 11  = (26 * 11) / 100  =  286 / 100  = 2.86

-> e.g-2: Suppose, 
Math.random() = 0.9695057925220569 ~ 0.96                i.e. 9.6/10 or, 96/100
Then,
96/100 * 11  = (96 * 11) / 100  =  1056 / 100  = 10.56

and so on...


# and when we use     Math.random() * 11      inside      Math.floor() 
- e.g-1 gives Math.floor(2.86) => 2
- e.g-2 gives Math.floor(10.56) => 10
and so on...

