/**
 * For a given string tell me whether it has even numbers of character or not 
 */

// String Types Parameter
function evenSizedString(str){
    const size = str.length;
    if( str.length % 2 ===0){
        console.log(str,"Is Even Sized");
    }
    else{
        console.log(str,"Is not Even Sized");
    }
}

evenSizedString("Chittagong");


// Boolean types parameter
function doubleOrTripple(number, doDouble){
    if(doDouble){
        const result = number * 2;
        return result;
    }
    else{
        const result = number * 3;
        return result;
    }
}

console.log(doubleOrTripple(12, true));
console.log(doubleOrTripple(10, false));


// Array types Parameter

function numberOfElements(numbers){
    const totalLength = numbers.length;
    return totalLength;
}

console.log(numberOfElements([12,52,31,96,4,5]));


// object types parameter
function getAge(x){
    const age = x.age;
    return age;
}

let person = {
    age: 25,
    married: true,
    office: 'Dhaka',
}

console.log(getAge(person));