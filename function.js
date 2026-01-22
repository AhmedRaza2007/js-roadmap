let pocket = 200;
let extra = 100;
function totalMoney(pocketAmount, extraAmount) {
  return pocketAmount + extraAmount;
}
let moneyResult = totalMoney(pocket, extra);
console.log("Total Money: " + moneyResult);

let firstName = "Ahmed";
let lastName = "Raza";
function makeFullName(fName, lName) {
  return fName + " " + lName;
}
let fullName = makeFullName(firstName, lastName);
console.log("Full Name: " + fullName);

let currentAge = 15;
function futureAge(age) {
  return age + 5;
}
let newAge = futureAge(currentAge);
console.log("Age after 5 years: " + newAge);

let milkPrice = 120;
let breadPrice = 80;
function totalBill(price1, price2) {
  return price1 + price2;
}
let bill = totalBill(milkPrice, breadPrice);
console.log("Total Bill: " + bill);

let oldMessages = 3;
let newMessages = 2;
function totalMessages(oldMsg, newMsg) {
  return oldMsg + newMsg;
}
let allMessages = totalMessages(oldMessages, newMessages);
console.log("Total Messages: " + allMessages);

let englishMarks = 65;
let mathMarks = 70;
function totalMarks(eng, math) {
  return eng + math;
}
let marksTotal = totalMarks(englishMarks, mathMarks);
console.log("Total Marks: " + marksTotal);

let baseSalary = 30000;
let bonus = 5000;
function totalSalary(base, bonusAmount) {
  return base + bonusAmount;
}
let salaryTotal = totalSalary(baseSalary, bonus);
console.log("Total Salary: " + salaryTotal);

let oldBalance = 250;
let recharge = 100;
function newBalance(balance, rechargeAmount) {
  return balance + rechargeAmount;
}
let finalBalance = newBalance(oldBalance, recharge);
console.log("New Balance: " + finalBalance);

let morningSteps = 3000;
let eveningSteps = 4000;
function totalSteps(morning, evening) {
  return morning + evening;
}
let stepsToday = totalSteps(morningSteps, eveningSteps);
console.log("Total Steps: " + stepsToday);

let presentDays = 18;
let extraClass = 1;
function totalAttendance(present, extra) {
  return present + extra;
}
let attendanceTotal = totalAttendance(presentDays, extraClass);
console.log("Total Attendance: " + attendanceTotal);

let attendance = 14;
function checkAttendance(days) {
  if (days >= 15) {
    return "Allowed in Class";
  } else {
    return "Not Allowed in Class";
  }
}
console.log(checkAttendance(attendance));

let subjects = ["English", "Math", "Science"];

function printSubjects(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log("Subject: " + arr[i]);
  }
}
printSubjects(subjects);

let marksArray = [60, 70, 80];
function totalFromArray(arr) {
  return arr[0] + arr[1] + arr[2];
}
let total = totalFromArray(marksArray);
console.log("Total Marks: " + total);

let cartItems = ["Milk", "Bread", "Eggs", "Butter"];
function countItems(arr) {
  return arr.length;
}
let totalItems = countItems(cartItems);
console.log("Total Items: " + totalItems);
