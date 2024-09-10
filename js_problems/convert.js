// Feet to inch
// 12 inch 1 feet


function inchToFeet(inch){
    const feet = inch / 12;
    return feet;
}

const inch = inchToFeet(75);
console.log(inch);

function inchToFeet2(inch){
    const feetFraction = inch / 12;
    const feetNumber = parseInt(feetFraction);
    const feetInch = inch % 12;
    // console.log(feetNumber, "Feet", feetInch, "Inch");
    const result = feetNumber + " Feet " + feetInch  + " inch."
    return result;
}



const inch2 = inchToFeet2(75);
console.log(inch2);