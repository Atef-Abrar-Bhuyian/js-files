// Function's basic structure


// function name(){

// }    

const number = 45;


// Function declare
function fanOffKor(){
    console.log("Bosha theke uthe fan off kor");
    console.log("Pani niye aai");
    console.log("Thank you");
}

// Call the function
fanOffKor();

// Function declare
function brushTeeth(){
    console.log("Pick up the brush");
    console.log("proper way te koro");
    console.log("jaa iccha koro");
}

// Call the function

brushTeeth();   


// two number's sum with function
function sum(x,y){
    // Here x,y is parameter
    const result=x+y;
    return result;
}

const total = sum(100,200);
console.log(total);



// Math Square Problem fix with function

function square(x){
    const result= x*x;
    return result; 
}
console.log(square(4))
// const squareResult = square(5);
// console.log(squareResult);



// sum problem fix with function parameter

function add(x,y){
    const sum= x+y;
    console.log(sum);
}

add(5,6);
add(65,6);
add(96,98);
add(96,4);