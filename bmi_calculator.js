let weight= 49; // kg
const height= 167.64; // m

const bmi = weight / (height**2);
console.log(bmi);

bmi<18.5 ? console.log("you are underweight") : bmi >= 18.5 && bmi <=24.9 ? console.log("you are normal.") : bmi >=25 && bmi <= 29.9 ? console.log("you are overweight.") : console.log("you are obese.");

