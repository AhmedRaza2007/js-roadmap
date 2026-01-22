// for loop example
// Teacher ko pata hai ke 10 students hain aur woh attendance check karna chahta hai, is liye for loop use kiya jaata hai
for (let i = 1; i <= 10; i++) {
  console.log("Checking student " + i);
}
// Hum for loop ka istemal karte hain kyun ke humein students ki exact tadaad maloom hoti hai.

// while loop example
// Hum while loop is liye use karte hain kyun ke humein nahi pata hota ke battery 100% hone mein kitna time lagega.
let battery = 20;
while (battery < 100) {
  console.log("Charging... Battery at " + battery + "%");
  battery += 10;
}
// Hum while loop is liye use karte hain kyun ke humein nahi pata hota ke yeh kitni dafa chalega.
//short: Jab repetitions ki tadaad pehle se maloom ho to for loop use kiya jata hai, aur jab repetitions condition par depend karti hon to while loop use kiya jata hai.

for (let i = 1; i <= 5; i++){
  if (i === 5) {
    break;
  }
  console.log(i)
}

const text = "   JavaScript is Fun and Fun   ";

// length
console.log("Length:", text.length);

// String [ ] (index)
console.log("Character at index 4:", text[4]);

// slice()
console.log("Slice (0,10):", text.slice(0, 10));

// substring()
console.log("Substring (4,14):", text.substring(4, 14));

// toUpperCase()
console.log("Uppercase:", text.toUpperCase());

// toLowerCase()
console.log("Lowercase:", text.toLowerCase());

//replace()
console.log("Replace first 'Fun':", text.replace("Fun", "Awesome"));

// replaceAll()
console.log("Replace all 'Fun':", text.replaceAll("Fun", "Awesome"));

// split()
let words = text.split(" ");
console.log("Split into array:", words);

//trim()
console.log("Trim:", text.trim());

// trimStart()
console.log("Trim Start:", text.trimStart());

// trimEnd()
console.log("Trim End:", text.trimEnd());
