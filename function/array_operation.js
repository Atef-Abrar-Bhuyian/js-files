/**
 * object: Write a function to give me the sum of all numbers in an array
 * step 1: declare a function
 * step 2: call check function whether the function is called properly or not
 * step 3: Set a Parameter(s)
 *  step 4: Pass the parameter(s), check the parameter is passed in a proper way
 * stef 5: Do the function task (step by step)
 */

function sumOfNumbers(number) {
    let sum = 0;
    for (const num of number){
        console.log(num);
        sum = sum + num;
    }
    return sum;
}

const nums=[12,65,85,49];

const sum = sumOfNumbers(nums);

console.log("Sum of All Numbers Is:", sum);
