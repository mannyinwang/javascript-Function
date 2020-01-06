// //Challenge 1
// var words = ["pea", "pod", "ram", "rod"];
// // console.log(words);
// // words.push("poke");
// console.log(words);

// for (var i = 0; i < words.length; i++){
//      words[i] = words[i+1];
// }
// console.log(words);

// //Challenge 2
// function printNum(x) {
//     for (var i = 1; i<=x;  i++)
//     console.log(i);
// }
// printNum(7);

// // Challenge 3
// function printNum2(x){
//     if (x < 0 ){
//         console.log("Not cool dude give me a positive number");
//     } else{
//         for( var i = 1; i <= x; i++){
//             console.log(i);
//         }
//     }
// }
// printNum2(10);


var myArr =["Manny", 17, true, function(){console.log("Forever 21!")}, "Emeryville", "Fresh"];
myArr.length; // to get the length of the array
myArr[3](); // To call the function in an array

// Object
var myObj = {
    name : "Manny",
    age : 32,
    likesfood : true,
    location : "Emeryville",
    nickname: "Fresh"
}

// // challenge 4
// function makeDinner(ing1, ing2, minutes){
//     console.log("mixing in: ", ing1);
//     if (ing2 == "Hot Sauce"){
//         console.log("Spicy");
//         if (minutes > 90 ){
//             console.log("slow and low");
//         }
//     } else {
//         console.log("mild");
//     }
// }
// // Infinite loop


// Excercise 2 - Fix the Code so that we avoid the previous error.
// challenge 1
function thisLengthThatNumber(num1, num2) {
    var newArr = [];
    newArr.length = num1;
    for (var i = 0; i < newArr.length; i++) {
      newArr[i] = num2;
    }
    return newArr;
}
console.log(thisLengthThatNumber(3, 4)); // expect: [4,4,4]
console.log(thisLengthThatNumber(2, 2)); // expect: [2,2]


// // challenge 2 - Fix the code so that the given array has each
// // of its values shifted one position to the right and return it.
// // Example: given [1,2,3] return [1,1,2,3]

function shiftRight(arr) {
    for (var i = arr.length; i > 0; i--) {
      arr[i] = arr[i-1];
    }
    return arr;
}
var b = shiftRight([1,2,3]);
console.log(b);


function oddities(num1, num2, str){
    var sum = num1+num2;
    if (num1 < 0 & num2 < 0){
        console.log("Someone Needs a pep talk");
    } else if (num1 == num2){
        console.log("Quite the pair")
    } else if (sum % 2 !=0 ){
        console.log(str);
    } else if (sum % 2 == 0) {
        console.log("None shall pass");
    } else {
        console.log("goodbye")
    }
}
oddities(2 ,4, "Mannay");
oddities(2,2, "Same");
oddities(-3,-4, "play");
oddities(2,3,"Relax odd numbers");