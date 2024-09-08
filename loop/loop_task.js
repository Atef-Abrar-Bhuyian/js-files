// // give me the list numbers between 1 to 30 divisible by 5

// for (let i=1 ; i<=30; i++){
//     if(i%5 === 0){
//         console.log(i);
//     }
// }


// // give me the list numbers between 1 to 30 divisible by 5 or 3

// for (let i=1 ; i<=30; i++){
//     if(i%5 === 0 || i % 3 === 0){
//         console.log(i);
//     }
// }


// // give me the list numbers between 1 to 30 divisible by 5 and 3


// for (let i=1 ; i<=30; i++){
//     if(i%5 === 0 && i % 3 === 0){
//         console.log('both: ',i);
//     }
// }



// give me the sum of numbers from 1 to 20 that are divisible by 3

let total= 0;

for(let i =1; i <= 20; i++){
    if(i%3===0){
        total += i;
    }
}
console.log('Total of the number:',total);