// problem 1

/*function signature/sample */
function calculateTax(income, expenses) {
  if (
    typeof income !== "number" ||
    typeof expenses !== "number" ||
    expenses > income ||
    expenses < 0 ||
    income < 0
  ) {
    return "Invalid Input";
  }
  const tax = (income - expenses) * .20;
  return tax;
}

// Test 1
const result = calculateTax(5000, 1500);
console.log(result);

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

function calculateFinalScore(obj) {
  if (typeof obj !== "object") {
    return "Invalid Input";
  }

  let totalMarks = obj.testScore + obj.schoolGrade;

  if (obj.isFFamily) {
    totalMarks = totalMarks + 20;
  }

  if (totalMarks >= 80) {
    return true;
  } else {
    return false;
  }
}

const person = {
  name: "Rajib",
  testScore: 45,
  schoolGrade: 25,
  isFFamily: true,
};
console.log(calculateFinalScore(person));

const person2 = {
  name: "Rajib",
  testScore: 45,
  schoolGrade: 25,
  isFFamily: false,
};
console.log(calculateFinalScore(person2));

const person3 = "hello";

console.log(calculateFinalScore(person3));

const person4 = {
  name: "Rajib",
  testScore: 15,
  schoolGrade: 25,
  isFFamily: true,
};
console.log(calculateFinalScore(person4));

// problem 5

/*function signature/sample */
function waitingTime(waitingTimes, serialNumber) {
  if (
    Array.isArray(waitingTimes) === false ||
    typeof serialNumber !== "number"
  ) {
    return "Invalid Input";
  }

  let sum = 0;
  let avg = 0;
  let totalWaiting = 0;
  for (const time of waitingTimes) {
    sum = sum + time;
    avg = Math.round(sum / waitingTimes.length);
    totalWaiting = avg * (serialNumber - 1 - waitingTimes.length);
  }
  return totalWaiting;
}

// Sample Inputs and Outputs
// const time = waitingTime([ 3, 5, 7, 11, 6 ], 10);
// console.log(time);
