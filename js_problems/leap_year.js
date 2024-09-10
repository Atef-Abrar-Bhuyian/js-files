/**
 * year will be a leap year if the year is divided by 4
 *
 * those year that  is not divisible by 100, if the year is divisible by 4: then it will be a leap year.
 */

function checkLeapYear(x) {
  if (x % 100 !== 0 && x % 4 === 0) {
    const result = x + " Leap Year";
    return result;
  }

  else if (x % 100 === 0 && x % 400 === 0) {
    const result = x + " Leap Year";
    return result; 
  }

  else {
    const result = x + " is Not Leap Year";
    return result;
  }
}

const isLipi = checkLeapYear(2100);
const isLipi2 = checkLeapYear(2400);
const isLipi3 = checkLeapYear(1900);
const isLipi4 = checkLeapYear(2052);

console.log(isLipi);
console.log(isLipi2);
console.log(isLipi3);
console.log(isLipi4);
