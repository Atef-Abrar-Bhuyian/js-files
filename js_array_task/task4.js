// Q.
// 4. Checking if it's an Array
// Instructions:

// Create different variables, each containing either an array or a non-array value.

// Now use isArray to check if each variable is an array.

// Print a message to the console indicating whether each variable is an array or not.


const number = [10, 20, 30];

const nullArray = [];

const notArray = '[12, 20, 30]';

if (Array.isArray(number) == 1){
    console.log("Array");
}

else{
    console.log("Not Array");
}

if(Array.isArray(nullArray)== 1){
    console.log("Array");
}

else{
    console.log("Not Array");
}
if(Array.isArray(notArray)== 1){
    console.log("Array");
}

else{
    console.log("Not Array");
}