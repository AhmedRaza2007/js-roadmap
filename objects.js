const fromName = {
    first: "Ahmed",
    last: "Raza",
    age: 20,
    city: "Karachi",
    favouriteColor: "Black"
}
console.log(fromName);
const myHobbies = {
    hobby1: "Reading Books",
    hobby2: "Traveling",
    hobby3: "Coding",
    hobby4: "Photography",
    hobby5: "Gardening",
    hobby6: "Gaming"
}
console.log(myHobbies);
const myFavoriteMeals = {
    breakfast: "Paratha and Omelette",
    lunch: "Biryani",
    dinner: "white chicken karahi with naan",
    snacks: "Samosas, Pakoras, and Fruit Chaat"
}
console.log(myFavoriteMeals);
const myDreams = {
    dream1: "Become a Successful Developer",
    dream2: "Travel the World",
    dream3: "Start a Tech Company",
    dream4: "Visit Madinah",
    dream5: "Build a Mosque",
    dream6: "Learn Multiple Languages",
    dream7: "Islamic Knowledge",
    dream8: "Quran Memorization",
    dream9: "Perform Umrah",
    dream10: "Perform Hajj"
}
console.log(myDreams);

const myDreamphone = {
    brand: "Apple",
    model: "iPhone 17 Pro Max",
    storage: "1TB",
    color: "Silver",
    camera: "48MP",
    battery: "5000mAh"
}
console.log(myDreamphone);

const fromAge = {
    first: "Sara",
    last: "Khan",
    age: 25,
    city: "Lahore",
    favouriteColor: "Blue"
}
console.log(fromAge);
const myLife = {
    personalInfo: {
        firstName: "Ahmed",
        lastName: "Raza",
        city: "Karachi",
        age: 19
    },

    education: [
        {
            level: "Matric",
            institute: "Government High School Tharushah",
            year: 2025,
            status: "Completed"
        },
        {
            level: "Intermediate",
            institute: "Government College",
            year: 2026,
            status: "In Progress"
        }
    ],

    skills: ["HTML", "CSS", "JavaScript", "GitHub"],

    goals: [
        { title1: "Become a Software Developer" },
        { title2: "Start Own Business" },
        { title3: "Help Parents" },
        { title4: "Perform Umrah" }
    ],

    dailyRoutine: {
        wakeUp: "Fajr",
        study: "3 Hours Coding",
        work: "Practice Projects",
        sleep: "12 AM"
    }
};
console.log(myLife);
const classFriends = [
    {
        first: "Ali",
        last: "Ahmed",
        age: 30,
        city: "Islamabad",
        favouriteColor: "Green"
    },
    {
        first: "Zainab",
        last: "Khalid",
        age: 28,
        city: "Peshawar",
        favouriteColor: "Purple"
    },
    {
        first: "Hassan",
        last: "Javed",
        age: 22,
        city: "Quetta",
        favouriteColor: "Red"
    },
    {
        first: "Ayesha",
        last: "Malik",
        age: 27,
        city: "Faisalabad",
        favouriteColor: "Yellow"
    },
]
console.log(classFriends);

const familyMembers = [
    {
        first: "Muhammad",
        last: "Furqan",
        age: 45,
        city: "Karachi",
        area: "BTk"
    },
    {
        first: "Muhammad",
        last: "Farhan",
        age: 40,
        city: "Karachi",
        area: "Naya Nazimabad"
    },
    {
        first: "Muhammad",
        last: "Shaheem",
        age: 45,
        city: "Karachi",
        area: "Manghopir"
    },
]
console.log(familyMembers);
const cars = [
    {
        brand: "Toyota",
        model: "Corolla",
        year: 2020,
        color: "White",
        price: 4200000,
        isAutomatic: true
    },
    {
        brand: "Honda",
        model: "Civic",
        year: 2019,
        color: "Black",
        price: 5200000,
        isAutomatic: true
    },
    {
        brand: "Suzuki",
        model: "Alto",
        year: 2022,
        color: "Silver",
        price: 2300000,
        isAutomatic: false
    }
];
console.log(cars);
const studentName = {};

studentName.firstName = "Yasir";
studentName.lastName = "Rana";
studentName.age = 17;
studentName.eyeColor = "blue";

const friendName = { Name: "Ali", lastName: "khanzada", age: "18", city: "Tharushah", study: "inter" }
for (const key in friendName) {
    if (key === "city") {
        console.log(friendName[key]);
    }
}

const fullName = { name: "AhmarKhan" }
for (const key in fullName) {
    console.log(fullName[key].toUpperCase());
}

const myDreamphones = {
    brand: "Apple",
    model: "iPhone 17 Pro Max",
    storage: "1TB",
    color: "Silver",
    camera: "48MP",
    battery: "5000mAh"
}
let count = 0;

for (const key in myDreamphones) {
    count++;
}

console.log("Total properties:", count);

const fromNames = {
    first: "Ahmed",
    last: "Raza",
    age: 20,
    city: "Karachi",
    favouriteColor: "Black"
}
for (const key in fromNames) {
    console.log("first value:" + ":" + fromNames[key])
    break;
}
const workarName = {
    first: "Munir",
    last: "Khan",
    age: 24,
    city: "Karachi",
    favouriteColor: "Black"
}
for (const key in workarName) {
  if (key === "lastName") continue;
  console.log(key + ":", workarName[key]);
}
const workarName2 = {
    first: "Zain",
    last: "Khan",
    age: 17,
    city: "Karachi",
    favouriteColor: "Black"
}
for (const key in workarName2) {
  if (key === "age" && workarName2[key] < 18) continue;
  console.log(key + ":", workarName2[key]);
}
const fromAges = {
    first: "Sara",
    last: "Khan",
    age: 25,
    city: "Lahore",
    favouriteColor: "Blue"
}
for (const key in fromAges) {
  if (key === "age") {
    console.log("After 5 years: " + (fromAges[key] + 5));
  }
}
const mydetail = {
        firstName: "Ahmed",
        lastName: "Raza",
        city: "Karachi",
        age: 19

    }
for (const key in friendName) {
  if (key === "study") {
    console.log(friendName[key] + " Passed");
  }
}

// Array section

const amounts = [500, 2500, 6000];

for (let i = 0; i < amounts.length; i++) {
  if (amounts[i] < 1000) {
    console.log("Small Purchase");
  } else if (amounts[i] < 5000) {
    console.log("Medium Purchase");
  } else {
    console.log("Big Purchase");
  }
} 
const scores = [20, 55, 85];

for (let i = 0; i < scores.length; i++) {
  if (scores[i] < 40) {
    console.log("Fail");
  } else if (scores[i] < 70) {
    console.log("Average");
  } else {
    console.log("Excellent");
  }
}
const numbers = [10, 20, 30, 40];

for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}
const names = ["Ali", "Ahmed", "Usman"];

for (let i = 0; i < names.length; i++) {
  console.log(names[i]);
}
const status = [true, false, true];

for (let i = 0; i < status.length; i++) {
  console.log(status[i]);
}
const prices = [500, 1200, 3000];

for (let i = 0; i < prices.length; i++) {
  console.log(prices[i]);
}
const salaries = [15000, 35000, 90000];

for (let i = 0; i < salaries.length; i++) {
  if (salaries[i] < 20000) {
    console.log("Low");
  } else if (salaries[i] < 60000) {
    console.log("Medium");
  } else {
    console.log("High");
  }
}
const cartItems = ["Milk", "Bread", "Eggs", "Butter"];
function countItems(arr) {
  return arr.length;
}
const totalItems = countItems(cartItems);
console.log("Total Items: " + totalItems);
const fruite = ['Apple', 'Banana', 'Mango', 'Orange'];
for (const i = 0; i < fruite.length; i++) {
  console.log(fruite[i]);
}
const baseSalary = 50000;
const bonus = 10000;
function totalSalary(salary, bonusAmount) {
  return salary + bonusAmount;
}
const salaryTotal = totalSalary(baseSalary, bonus);
console.log("Total Salary: " + salaryTotal);