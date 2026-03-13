// Task 1 : var Variable Practice
var age = 22;
console.log(age);
age = 23;
console.log(age);

// Task 2 : let Variable Practice
let name = "Govardhan";
console.log(name);
name = "Reddy";
console.log(name);

// Task 3 : const Variable Practice
const birthyear = 2003;
console.log(birthyear);
// birthyear = 2002; // This will cause an error because const cannot be changed

// Task 4 : var Re-declaration
var value = 10;
console.log(value);
var value = 20;
console.log(value);

// Task 5 : let Re-declaration
let message = "Hello";
console.log(message);
// let message = "Hi"; // This will get SynatxError as the let cannot be redeclared

// Task 6 : console.log() Practice
console.log("Govardhan");
console.log(22);
console.log("Kadapa");
console.log(100);
console.log("JavaScript is fun");

// Task 7 : alert() Practice
alert("Welcome to JavaScript");

// Task 8 : confirm() Practice
let message2 =confirm("Do you like coding ?");
console.log(message2);

// Task 9 : prompt() Practice
let userName = prompt("What is your name ?");
console.log(userName);

// Task 10 : consle.warn() Practice
console.warn("This is a warning");

// Task 11 : console.error() Practice
console.error("This is an error");

// Task 12 : console.clear() Practice
console.log("This will be cleared");
console.clear();

// Task 13 : document.writeln() pactice
document.writeln("Hello! This text is written on the webpage.");

// Task 14 : userName Colletion
let user = prompt("Enter your Name");
alert("Hello" + user);
console.log(user);

// Task 15 : Age Collection
let userAge = prompt("Enter your Age");
console.log(userAge);
document.writeln("Your age is : " + userAge);

// Task 16 : Breakfast Cofirmaton
const Breakfast = confirm("Have you had your breakfast");
console.log(Breakfast);

// Task 17 : Simple variable Creation
var city = "Mumbai";
let country = "India";
const planet = "Earth";
console.log(city);
console.log(country);
console.log(planet);

// Task 18 : Variable Re-use Practice
let value3 = 5;
console.log(value3);
value3 = 10;
console.log(value3);
value3 = 15;
console.log(value3);

// Task 19 : Multiple console methods
console.log("This is a normal message");
console.warn("This is a warning");
console.error("This is an Error");

// Task 20 : User Deatils Collection
const username = prompt("Enter Your Name");
let userage = prompt("Enter your Age");
var question = confirm("Are You a Student ?");
console.log(username);
console.log(userage);
console.log(question);
alert("Welcome");

// Task 21 : Simple Welcome Program
console.clear();
alert("Hello!");
let NAME = prompt("Enter Your Name");
alert("Welcome" + NAME);
document.writeln(NAME);

// Task 22 : Variable Inside Bolck
{
    var a = 100;
    let b = 200;
    const c = 300;
}
    console.log(a);
    //console.log(b); // Reference Error : b is not defined
    //console.log(c); // Reference Error : c is not defined

    // Task 23 : Simple Number Storage
    var num1 = 10;
    let num2 = 20;
    const num3 = 30;
    console.log(num1);
    console.log(num2);
    console.log(num3);

    // Task 24 : User Response Logger
    let que = confirm("Do you like JavaScript ?");
    console.log(que);
    console.warn(que);
    console.error(que);

    // Task 25 : Name Display on Webpage
    let USERNAME = prompt("Enter your name");
    document.writeln("Your name is : " + USERNAME);
    console.log(USERNAME);

    // Task 26 : Age Displays with all the Methods
    let USERAGE = prompt("Enter your age");
    alert(USERAGE);
    console.log(USERAGE);
    document.writeln(USERAGE);

    // Task 27 : var vs let Comparison
    {
        var d = 10;
        let e = 20;
    }
    console.log(d); //works
    // console.log(e); // error

    // Task 28 : Simple confirmation
    let ageCheck = confirm("Are you 18+ ?");
    if (ageCheck) {
        console.log("Adult");

    }else{
        console.warn("Minor");
    }

    // Task 29 : Variable Re-initialization
    var x = "Apple";
    x = "Banana";
    let y = "car";
    y = "Bike";
    console.log(x);
    console.log(y);

    //Task 30 : Complete Basic Practice
    console.clear();
    alert("Practice Start");
    const name1 = prompt("Enter your name");
    let AGE1 = prompt("Enter your age");
    var concern = confirm("Are you happy ?");
    console.log(name1);
    console.log(AGE1);
    console.log(concern);
    alert("Practice End");
    document.writeln("Thank You");
