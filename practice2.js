// function fiftyNumbers(){
//     for(var i = 1; i <= 50; i++){
//         console.log(i);
//     }
// }
// // fiftyNumbers();

// function givenNumber(x){
//     for(var i = 1; i<=x; i++){
//         console.log(i);
//     }
// }
// // givenNumber(5);


// function reversePrint(){
//     for(var i = 10; i > 0; i--){
//         if( i % 2 == 0){
//             console.log(i, "Even");
//         } else {
//             console.log(i, "Odd;")
//         }
//     }
// }
// // reversePrint();


// function fizzBuzz(x){
//     for(var i = 1; i <= x; i++){
//         if (i % 5 == 0 & i % 3 == 0){
//             console.log("FizzBuzz");
//         } else if (i % 5 == 0){
//             console.log("Buzz");
//         } else if (i % 3 == 0){
//             console.log("Fizz");
//         } else {
//             console.log(i);
//         }
//     }
// }

// // fizzBuzz(33);


// function rotateArr(arr, switchBy){
//     var temp = arr[arr.length-1];
//     for (var i = 0; i< switchBy; i++){
//         for(j = arr.length-1; j >= 1; j--){
//             arr[j] = arr[j-1];
//         }
//         arr[0] = temp;
//         temp = arr[arr.length-1];
//     }
//     console.log(arr);
//     return arr;
// }


// rotateArr([3,6,9,7], 3);

// //Filter Range

// function filRange(arr, max, min){
//     for( var i = 0; i < arr.length; i++){
//         if( arr[i] >= min && arr[i] <= max){
//             arr.pop();
//         }

//     }
// }


// function filterRange(arr, min, max){
//     for(var index = 0; index < arr.length; index++){

//         if(!(arr[index] >= min && arr[index] <= max)){
//             for(var ii = index; ii < arr.length; ii++){
//                 arr[ii] = arr[ii+1]; 
//             }
//             arr.pop();
//             //index--;
//         }

//     }

//     return arr;
// }

// console.log(filterRange([3, 23, 5, 15, 7, 2, 12,19,44,94,134,665,2,5,7,324,435], 4, 15));

var z = 10;
function a(){
    var z = 15;
    console.log(z);
    return z;
}
z = a();
console.log(z);











