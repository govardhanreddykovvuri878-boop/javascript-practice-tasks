// 1 . UserName Formatter
let name = " Govardhan Reddy ";
let formattedName = name.trim().toUpperCase().replace(/\s+/g , "_");
console.log(formattedName);

// 2. Email Validatoe(Basic)
let email = "test@gmail.com";
if (email.includes("@") && email.endsWith(".com")){
console.log("Valid Email");
}else{
    console.log("Invalid Email");
    
}

// 3. Word Counter
let sentence = "javascript is very powerful language";
let wordCount = sentence.trim().split(/\s+/).length;
console.log(wordCount);

// 4. Replace Second word only
let text = "python python developer";
let words = text.split(" ");
if (words.length >= 2){
    words [1] = "javascript";
}
console.log(words.join(" "));

// 5. Password Strength Checker
let password = "Abc12345";
let isStrong = password.length >= 8 &&
/[A-Z]/.test(password) &&
/[a-z]/.test(password) &&
/[0-9]/.test(password);
console.log(isStrong ? "Strong" : "weak");

// 6. Reverse a String
let str = "hello";
let reversed = str.split("").reverse().join("");
console.log(reversed);

// 7. Find DOB
let year = 2000, month = 5, date = 15;
if (month >=1 && month <= 12 && date >= 1 && date <= 31){
    let dob = new Date(year,month-1,date);
    let days = ["Sunday","Monday","Tuesday",
        "Wenesday","Thursday","Friday","Saturday"
    ]
    alert("You were born on" + days [dob.getDay()]);
}else{
    alert("Invalid Date");
} 

// 8. Live Digital Clock
let clock = setInterval(() => {
    let now = new Date();
    console.log(now.toLocaleTimeString());
}, 1000); // every 1 second

// Stop after 5 seconds
setTimeout(() => {
    clearInterval(clock);
    console.log("Clock Stopped ✅");

    // 9. Date Difference Calculator
    let d1 = new Date("2025-03-01");
    let d2 = new Date("2025-03-10");

    let diff = Math.abs(d2 - d1) / (1000 * 60 * 60 * 24);

    console.log( diff, "days");
}, 5000);

// 10. Character Frequency Counter
let str1 = "javascript";
let freq = {};
for (let char of str1) {
    freq[char] = (freq[char] || 0) + 1;
}
console.log(freq);





