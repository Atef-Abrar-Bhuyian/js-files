const sentence = 'I am learning web development';

// for of method
let reverse = '';
for (const letter of sentence){
    // console.log(letter);
    reverse =letter + reverse;
}
console.log(reverse);

// for loop method
let rev='';
for (let i=0; i< sentence.length; i++){
    let letter=sentence[i];
    rev = letter + rev;
}
console.log(rev);

