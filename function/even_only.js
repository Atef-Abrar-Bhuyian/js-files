/**
 * Give me a function that only return the even numbers
 * return the sum of even numbers
 */

function sumOfEven(x){
    let sum = 0;
    for(const number of x){
        if (number % 2 === 0){
            sum = sum + number;
        }
    }
    return sum;
}

const allnumbers = [1,2,3,4,5,6,7,8,9];
const totalSum = sumOfEven(allnumbers);

console.log(totalSum , '1st one');

// Give only even numbers but in array


function findEvenNumbers(x){
    let evenNumbers= [];
    for(const number of x){
        if(number % 2 ===0){
            evenNumbers.push(number);
        }
    }
    return evenNumbers;
}

const numbers = [1,2,3,4,5,6,7,8,9];

const evenNumberArray = findEvenNumbers(numbers);

console.log("Even Numbers In an Array: ", evenNumberArray);