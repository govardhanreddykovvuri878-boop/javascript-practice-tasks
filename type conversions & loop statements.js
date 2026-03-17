// Task 1
let num = Number(prompt("Enter your number :-"));
result = num + 10;
console.log("Your number is :-" , result);

// Task 2
let num1 = Number(prompt("Enter first number :-"));
let num2 = Number(prompt("Enter second number :-"));
console.log("Your number is :-" ,num1 + num2 );

// Task 3
let userinput = prompt("Enter any number");
console.log("Your user input value is :-",Boolean(userinput));

// Task 4
let num4 = Number("123");
console.log("Result :-",num4 * 5);

// Task 5
console.log(Number(true));
console.log(Number(false));

// Task 6
let stringinput = prompt("Enter any string");
console.log(Boolean(stringinput));

// Task 7
let a = (Number("100"));
let b = (Number("50"));
console.log("Difference is :-",a - b);

// Task 8
console.log(Number());
console.log(Number(undefined));
console.log(Number(""));

// Task 9
let c = ("10");
let d = (20);
console.log("Result is :-",c + d); // Result is 1020, because "10"is a string, so javascript performs string concatenation instead of addition. 

// Task 10
let num5 = Number("25");
if(num5 >= 20){
    console.log("Greater than 20");
    
}else{
    console.log("Not Greater than 20");
}

// Task 11
let age = Number(prompt("Enter your age :-"));
if (age >= 18){
    console.log("Eligible to vote");
    
}else{
    console.log("Not Eligible to vote");
    
}

// Task 12
let num6 = Number(prompt("Enter a number"));
if (num6 >= 0){
    console.log("Positive");
    
}else{
    console.log("Negative");
    
}

// Task 13
let num7 = Number(prompt("Enter a number"));
if (num7 % 2 == 0){
    console.log("Given number is even");
    
}else{
    console.log("Given number is odd");
    
}

// Task 14
let num8 = Number(prompt("Enter 1st number"));
let num9 = Number(prompt("Enter 2nd number"));
let num10 = Number(prompt("Enter 3rd number"));
if (num8 > num9 && num8 >10){
    console.log("Largest Number is :-",num8);
    
}else if (num9 > num8 && num9 > num10){
    console.log("Largest Number is :-",num9);
    } else {
        console.log("Largest Number is :-",num10);
        
    }

    // Task 15
    let temp = Number(prompt("Enter your temperature"));
    if (temp > 35){
        console.log("Hot Day");
        
    } else if (temp < 20){
        console.log("Cold Day");
        
    }else {
        console.log("Normal Weather");
        
    }

    // Task 16
    let stumarks = Number(prompt("Enter your marks"));
    if(stumarks >= 35){
        console.log("You are passed");
        
    }else{
        console.log("you are failed");
        
    }

    // Task 17
    let username = prompt("Enter your username");
    let password = prompt("Enter your password");
    if(username === "trainer" && password === "1234"){
        console.log("Login Succesful");
        
    }else{
        console.log("Login Failed");
        
    }

    // Task 18
    let year = Number(prompt("Enter a year"));
    if(year % 4 === 0){
        console.log("Leap year");
        
    }else{
        console.log("Not a Leap year");
        
    }

    // Task 19
    let time = Number(prompt("Enter time in 24hours :-"));
    if(time >=5 && time < 12){
        console.log("Good Morning");
        
    } else if (time >= 12 && time < 17) {
        console.log("Good Afternoon");
        
    } else if(time >= 17 && time < 21) {
        console.log("Good Evening");
        
    } else{
        console.log("Good Night");
        
    }

    // Task 20
    let salary = Number(prompt("Enter your salary"));
    if(salary >= 50000){
        console.log("Tax is : 20%");
        
    } else if(salary >= 3000){
        console.log("Tax is : 10%");
        
    } else{
        console.log("No Tax");
        
    }

    // Task 21
    for (let i = 1; i <= 10; i++){
    console.log(i);
    }

    // Task 22
    for (let i = 10; i >= 1; i--){
        console.log(i);
        
                               
    }

    // Task 23
    for(let i = 1; i<=50; i++){
        if(i%2 === 0)
            console.log(i);
            
    }

    // Task 24
    for(let i = 1; i <= 50; i++){
        if(i % 2 !== 0);
        console.log(i);
        
    }
    
    // Task 25
    let num11 = 5;
    for(let i = 1; i <= 10; i++){
        console.log(num11 * i);
        
    }

    // Task 26
    let sum = 0;
    for(let i = 1; i <= 100; i++){
        sum += i;
        console.log("Sum:-",sum);
        
    }

    // Task 27
    let num12 = 5;
    let fact = 1;
    for (let i = 1; i <= num12; i++){
        fact * i;
    }
    console.log("Factorial is :-",fact);

    // Task 28
    let count = 0;
    for (let i = 1; i<=100; i++){
        if (i % 5 === 0)
            count++;
    }
    console.log("Count :-",count);

    // Task 29
    for (let i = 1; i <= 10; i++){
        console.log(i * i);
        
    }

    // Task 30
    let num13 = 1234;
    let revere = 0;
    while (num13 > 0){
        let digit = num13 % 10;
        revere = revere * 10 + digit;
        num13 = Math.floor(num13/10);
    }
    console.log("Reversed",revere);

    // Task 31
    let fruits = ["apple","banana","orange"]
    for (let fruit of fruits){
        console.log(fruit);
        
    }

    // Task 32
    let arr1 = [2,45,33,25,6,8,9];
    console.log(arr1.length);

    
    // Task 33
    let arr = [2,4,6,13,35];
    let largest = arr[0];
    for(let num14 of arr){
        if (num14 > largest){
            largest = num14;
        }
    } 
    console.log(largest);
    
    // Task 34
    let arr2 = [2,5,8,11,20];
    let sum1 = 0;
    for (let num15 of arr2){
        sum1 += num15;
        console.log(sum1);
        
    }   

    // Task 35
let arr3 = [2, 5, 8, 11, 20];

for (let num of arr3) {
    if (num % 2 === 0) {
        console.log(num);
    }
}


// Task 36
let obj1 = {
    name: "John",
    age: 25,
    city: "Chennai"
};

for (let key in obj1) {
    console.log(key + ": " + obj1[key]);
}


// Task 37
let obj2 = {
    name: "John",
    age: 25,
    city: "Chennai"
};

let count1 = 0;

for (let key in obj2) {
    count1++;
}

console.log(count1);


// Task 38
let obj3 = {
    name: "John",
    age: 25,
    city: "Chennai"
};

if ("salary" in obj3) {
    console.log("Salary exists");
} else {
    console.log("Salary not found");
}


// Task 39
let obj4 = {
    name: "John",
    age: 25,
    city: "Chennai"
};

for (let key in obj4) {
    console.log(obj4[key]);
}


// Task 40
let employee = {
    name: "John",
    role: "Developer",
    salary: 50000
};

for (let key in employee) {
    console.log(key + ": " + employee[key]);
}

    
    
    





















 
