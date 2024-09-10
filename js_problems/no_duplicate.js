/**
 * array has some duplicate elements
 */


const biriyaniKhor = ['abul','abul','abul','kabul','kabul','kabul','babul','babul','babul'];
const numbers = [1,1,2,2,9,9];

let unique = [];
function noDupli(x){
    for(const y of x){
        if(unique.includes(y) === false){
            unique.push(y)
        }
    }
    return unique;
}

const lastArray = noDupli(numbers);

console.log(lastArray);

