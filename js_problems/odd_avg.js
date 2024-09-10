// function takes an array as parameter 
// give me the avg of the odd numbers in the array

function oddAvg(numbers){
    const odd = [];
    let sum = 0;
    let avg= 0;
    for(const number of numbers){
        if(number % 2 !==0){
            odd.push(number);
            sum = sum + number;
            avg = sum / odd.length;
            
        }
    }
    console.log('Odd numbers are: ',odd);
    return avg;
}

const giveArray = oddAvg([1,2,3,4,5,6]);

console.log('Avg of the odd numbers :',giveArray);