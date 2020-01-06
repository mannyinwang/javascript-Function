// Biggie Size - Given an array, write a function that changes all positive numbers in the array to the string "big".  Example: makeItBig([-1,3,5,-5]) returns that same array, changed to [-1, "big", "big", -5].
 function makeBig(arr) {
     for(var i = 0; i < arr.length; i++){
         if (arr[i] > 0){
             arr[i] = 'Big';
         }
     }
     return arr;
 }
 console.log(makeBig([10,-3,9,-5]));

//  Print Low, Return High - Create a function that takes in an array of numbers.  The function should print the lowest value in the array, and return the highest value in the array.
function lowHigh(arr){
    low = arr[0];
    high = arr[0];
    for( var i = 0; i < arr.length; i++){
        if (high < arr[i]){
            high = arr[i];
        } else if (low > arr[i]){
            low = arr[i];
        }
    }
    console.log(low);
    return high;
}
console.log(lowHigh([2,6,7,9,1.5,97,1.2]));

// Print One, Return Another - Build a function that takes in an array of numbers.  The function should print the second-to-last value in the array, and return the first odd value in the array.

function prtRtn(arr){
    secondToLast = arr[arr.length-2];
    console.log(secondToLast);
    firstOdd = arr[0];
    for (var i = 0; i < arr.length; i++)
    if (arr[i] % 2 != 0){
        firstOdd = arr[i];
        break;
    }
    return firstOdd;
}
console.log(prtRtn([0,3,2,1,5,8,9,77,22,10]));


// Double Vision - Given an array (similar to saying 'takes in an array'), create a function that returns a new array where each value in the original array has been doubled.  Calling double([1,2,3]) should return [2,4,6] without changing the original array.

function doubleVision(arr){
    var newArr = [];
    for( var i = 0; i < arr.length; i++){
        newArr[i] = arr[i] * arr[i];
    }
    return newArr;
}
console.log(doubleVision([2,4,5,7]));


// Count Positives - Given an array of numbers, create a function to replace the last value with the number of positive values found in the array.  Example, countPositives([-1,1,1,1]) changes the original array to [-1,1,1,3] and returns it.

function countPositives(arr){
    sum = 0;
    for(var i = 0; i < arr.length; i ++){
        if (arr[i] > 0){
            sum +=1;
        }
    }
    arr[arr.length -1] = sum;
    return arr;
}
console.log(countPositives([-1,-5,6,8,9,-12]));


// Evens and Odds - Create a function that accepts an array.  Every time that array has three odd values in a row, print "That's odd!".  Every time the array has three evens in a row, print "Even more so!".

function  evenAndOdd(arr) {

    for(var i = 0; i < arr.length; i++){
        if (arr[i] % 2 != 0 && arr[i+1] % 2 != 0 && arr[i+2] % 2 != 0){
            console.log("That's, odd!")
        } else if (arr[i] % 2 == 0 && arr[i+1] % 2 == 0 && arr[i+2] % 2 == 0){
            console.log("Even more so!");
        }
    }
}
evenAndOdd([1,3,5,8,7,2,10,12]);


// Increment the Seconds - Given an array of numbers arr, add 1 to every other element, specifically those whose index is odd (arr[1], arr[3], arr[5], etc).  Afterward, console.log each array value and return arr.

function  incrementSeconds(arr) {
    for(var i = 0; i < arr.length; i++){
        if (arr[i] % 2 != 0){
            arr[i] = arr[i] * 2;
            console.log(arr[i]);
        } else {
            console.log(arr[i]);
        }
    }
    return arr;
}
console.log(incrementSeconds([1,5,6,8,9,12]));

// Previous Lengths - You are passed an array (similar to saying 'takes in an array' or 'given an array') containing strings.  Working within that same array, replace each string with a number - the length of the string at the previous array index - and return the array.  For example, previousLengths(["hello", "dojo", "awesome"]) should return ["hello", 5, 4]. Hint: Can for loops only go forward?

function previousLength(arr){
    for (var i = arr.length-1; i > 0; i--){
        arr[i] = arr[i-1].length;
    }
    return arr;
}
console.log(previousLength(["hello", "dojo", "awesome", "arrival"]));



// Add Seven - Build a function that accepts an array. Return a new array with all the values of the original, but add 7 to each. Do not alter the original array.  Example, addSeven([1,2,3]) should return [8,9,10] in a new array.

function addSeven(arr){
    newArr = [];
    for (var i = 0; i < arr.length; i++){
        newArr[i] = arr[i] + 7;
    }
    return newArr;
}
console.log(addSeven([1,5,6,8,9,12]));


// verse Array - Given an array, write a function that reverses its values, in-place.  Example: reverse([3,1,6,4,2]) returns the same array, but now contains values reversed like so... [2,4,6,1,3].  Do this without creating an empty temporary array.  (Hint: you'll need to swap values).

function  reverseArray(arr) {
    temp = arr[0];
    temp1 = arr[arr.length-1];
    for(var i = 0; i < (arr.length-1)/2; i++){ 
        arr[i] = arr[arr.length-1-i];
        arr[arr.length-1-i] = temp;
        temp = arr[i+1];
    }
    return arr;

}
console.log(reverseArray([1,2,3,4,5,6]));


// Outlook: Negative - Given an array, create and return a new one containing all the values of the original array, but make them all negative (not simply multiplied by -1). Given [1,-3,5], return [-1,-3,-5].

function outlookNeg(arr) {
    for(var i = 0; i < arr.length; i++){
        if(arr[i] > 0){
            arr[i] = arr[i] * -1;
        }
    }
    return arr;
}
console.log(outlookNeg([1,-3,5]));


// Always Hungry - Create a function that accepts an array, and prints "yummy" each time one of the values is equal to "food".  If no array values are "food", then print "I'm hungry" once.

function alwaysHungry(arr) {
    for(var i = 0; i < arr.length; i++){
        if (arr[i] == "food"){
            console.log("yummy");
        } else {
            console.log("I'm hungry");
        }
    }   
}
alwaysHungry(["food", 1, 3, "food", 10, "rice"])


// Swap Toward the Center - Given an array, swap the first and last values, third and third-to-last values, etc.  Example: swapTowardCenter([true,42,"Ada",2,"pizza"]) turns the array into ["pizza", 42, "Ada", 2, true].  swapTowardCenter([1,2,3,4,5,6]) turns the array into [6,2,4,3,5,1].  No need to return the array this time.

//Question 13
function swapTowardCenter(arr) {
    temp = arr[0];
    for (var i = 0; i < (arr.length -1)/2; i+=2){
        arr[i] = arr[arr.length - 1 -i];
        arr[arr.length-1-i] = temp;
        temp = arr[i+2];
    }
    console.log(arr);
}
swapTowardCenter([1,2,3,4,5]);

// Scale the Array - Given an array arr and a number num, multiply all values in the array arr by the number num, and return the changed array arr.  For example, scaleArray([1,2,3], 3) should return [3,6,9].

function scaleArr(arr,num) {
    for (var i = 0; i < arr.length; i++){
        arr[i] = arr[i] *num;
    }
    return arr;
}
console.log(scaleArr([2,5,3,7,9], 10));





















