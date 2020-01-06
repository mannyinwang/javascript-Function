// WARMUPS
// Build a function that prints the numbers // from 1 to 50


oneToFifty();


// Build a function that prints the numbers from 1 to a given number


oneToGiven(30);





// MEDIUM HEAT
/* 
Build a function that prints the numbers
from 10 to 1 and also prints whether the
number is even or odd
10 even
9 odd
8 even...
*/


goBackwards();





// HIGH HEAT - FizzBuzz
/* 
Build a function that goes from 1 to a given number and prints the following...
"Fizz" if the number is divisible by 3
"Buzz" if the number is divisible by 5
"FizzBuzz" if the number is divisible by both
Otherwise print just the number itself
*/


fizzBuzz(25);





// ADVANCED NINJAS
/* 
Array: Rotate
Implement rotateArr(arr, shiftBy) that accepts array and offset. Shift arr ’s values to the right by that amount. 
‘Wrap - around’ any values that shift off array’s end to the other side, so that no data is lost.
Operate in-place: given([1, 2, 3], 1), change the array to[3, 1, 2].
Don’t use built-in functions.
    Second: allow negative shiftBy(shift L, not R).
    Third: minimize memory usage.With no new array, handle arrays / shiftBy s in the millions.
    Fourth: minimize the touches of each element.
*/


console.log(rotateArr([1, 2, 3, 4, 5], 1));



/* 
Array: Filter Range
Alan is good at breaking secret codes. One method is to eliminate values that lie within a specific known range.
Given arr and values min and max, retain only the array values between min and max.
Work in -place: return the array you are given, with values in original order.
No built-in array functions.
*/


console.log(filterRange([3, 23, 5, 15, 7, 2, 12], 4, 15));