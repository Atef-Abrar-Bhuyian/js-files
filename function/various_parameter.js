/**
 * For a given string tell me whether it has even numbers of character or not 
 */

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
