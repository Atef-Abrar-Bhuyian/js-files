function isEven(number) {
  if (number % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(isEven(5));
console.log(isEven(9));
console.log(isEven(12));

function isOdd(number) {
  if (number % 2 === 1) {
    return true;
  }
  return false;
}
console.log(isOdd(12));
console.log(isOdd(9));
