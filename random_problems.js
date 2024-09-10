// problem 1

/*function signature/sample */
function calculateTax(income, expenses) {
  if (
    (typeof income !== "number" && typeof expenses !== "number") ||
    expenses > income ||
    expenses < 0 ||
    income < 0
  ) {
    return "Invalid Input";
  }
  const diff = income - expenses;
  let tax = (diff * 20) / 100;
  return tax;
}

// Test 1
// const result = calculateTax(34000, 1753);
// console.log(result);

// Problem 2
/*function signature/sample */

function sendNotification(email) {
  if (email.includes("@") === false) {
    return "Invalid Email";
  }
  const slp = email.split("@");
  const firstName = slp[0];
  const lastName = slp[1];
  const notification = firstName + " sent you an email from " + lastName;
  return notification;
}

// test 2
// const noti = sendNotification('sadia8i@cloud.com');
// console.log(noti);

// Problem 3

/*function signature/sample */
function checkDigitsInName(name) {
  if (typeof name !== "string") {
    return "Invalid Input";
  }
  for (const character of name) {
    if (character >= "0" && character <= "9") {
      return true;
    }
  }
  return false;
}

// Test 3
// const checkName = checkDigitsInName('Raj123');
// console.log(checkName);

// Problem 4

// problem 5

/*function signature/sample */
function waitingTime(waitingTimes, serialNumber) {
  if (Array.isArray(waitingTimes) === false || typeof serialNumber !== 'number') {
    return "Invalid Input";
  }

  let sum = 0;
  let avg = 0;
  let totalWaiting = 0;
  for (const time of waitingTimes) {
    sum = sum + time;
    avg = Math.round(sum / waitingTimes.length);
  totalWaiting = avg * ((serialNumber - 1) - waitingTimes.length);
  }
  return totalWaiting;
}

// Sample Inputs and Outputs
// const time = waitingTime([ 3, 5, 7, 11, 6 ], 10);
// console.log(time); 

// const time2 = waitingTime([13, 2], 6);
// console.log(time2); 

// const time3 = waitingTime([13, 2, 6, 7, 10], 6);
// console.log(time3); 

// const time4 = waitingTime([6], 4);
// console.log(time4); 

// const time5 = waitingTime(7 , 10);
// console.log(time5); 

// const time6 = waitingTime("[6,2]", 9);
// console.log(time6); 

// const time7 = waitingTime([7, 8, 3, 4, 5], "9");
// console.log(time7); 

