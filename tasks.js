// Spread & Rest Operator
// 1
let t1 = [...[10,20],...[30,40],50];
console.log(t1);

//2
let original = [1,2,3];
let clone = [...original];
clone.push(4);
console.log(original,clone);

// 3
let obj1 = {salary : 40000};
let obj2 = {salary : 50000};
console.log({...obj1,...obj2}); // obj2 overrides

//4
function sumAll (...nums){
    return nums.reduce((a,b)=>(a+b),0);
}
console.log(sumAll(1,2,3,4));

// 5
function restFn(a,b,...rest){
    console.log(rest);
    
}restFn(1,2,3,4,5);

// Destructuring
// 6
let arr1 = [5,10,15,20];
let [a1,a2,a3,a4] = arr1;
console.log(a1,a4);

// 7
let x = 10, y = 20;
[x,y] = [y,x];
console.log(x,y);

// 8
let nested = [1,[2,[3,[4]]]];
let [b1,[b2,[b3,[b4]]]] = nested;
console.log(b4);

// 9
let user = {
    name : "John",
    age : 25
}
let{name:userName,age} = user;
console.log(userName,age);

// 10
let {city = "Hyerabad"} = {};
console.log(city);

// Basic Array Operations
// 11
let arr2 = [1,2,3,4,5];
arr2.push(6,7);
console.log(arr2);

// 12
let arr3 = [1,2,3,4,5];
let last3 = arr3.pop();
console.log(last3,arr3);

// 13
let arr6 = [1,2,3,4];
arr6.shift();
console.log(arr6);

// 14
let arr4 = [1,2,3];
arr4.unshift(0);
console.log(arr4);

// 15
let arr5 = [1,2,3,4,5,6];
arr5.splice(2,2);
console.log(arr5);

// Slice / Splice / Flat
// 16
let arr7 = [1000,2000,3000,4000,5000,6000];
let sliceval = arr7.slice(3,6);
console.log(sliceval);

// 17
let arr8 = [1,2,3,4,5];
arr8.splice(2,2,8,9);
console.log(arr8);

// 18
let arr9 = [1,[2,[3,[4]]]];
console.log(arr9.flat(Infinity));

// 19

console.log([1,[2,[3]]].flat());

// 20
let arr10 = [1,2,3,4];
arr10.splice(3,0,5,6);
console.log(arr10);
 
// Searching & Checking
// 21
let arr11 = [1,2,5,100,4];
let checkval = arr11.includes(100);
console.log(checkval);

// 22
let arr12 = [1,2,3,4,5];
let ind = arr12.indexOf(3,2);
console.log(ind);

// 23 
let arr13 = [1,5,3,5,2];
let last = arr13.lastIndexOf(5);
console.log(last);

// 24
let arr14 = [1,2,3,4];
let every = arr14.every((c,i,t)=>{
    return i>=0;

})
console.log(every);

// 25
let arr15 = [1,3,67,4];
let someVal = arr15.some((c,i,t)=>{
    return c>50;
})
console.log(someVal);

// 26
console.log([10,5,100,1].sort((a,b) => (a-b)));

// 27
console.log([10,5,100,1].sort((a,b)=>(b-a)));

// 28
let emp = [{
    name : "A",salary : 30000},
    {name : "B",salary : 10000
}];
console.log(emp.sort((a,b)=>a.salary-b.salary));

// 29
let arr16 = [1,2,3];
arr16.reverse();
console.log(arr16);

// 30
console.log([1033,2,46].sort()); // By defaut sort(),does not sort numbers numerically.It converts numbers to strings and sorts like text.

//Higher order Functins forEach
// 31
let arr17 = [1,2,3,4];
arr17.forEach(n => console.log(n));

//32
let res = [1,2,3].forEach(n=>n*2);
console.log(res); // Undefined - Because forEach doesn't return values.

// Map
// 33
let res1 = [1,2,3].map(n=>n*2);
console.log(res1);

// Filter
//36
let emp1 = [{
    name : "A", salary : 30000},
    {name : "B", salary : 40000},
    {name : "C", salary : 10000}];
let result = emp1.filter(e=>e.salary > 10000);
console.log(result);

// 37
let arr18 = [1,2,3,4,5,6,7];
let resVal = arr18.filter(e=>e % 2 == 0);
console.log(resVal);

//38
console.log(["hello","hi","nice"].filter(s=>s.length>2));

// Find
// 39
let arr19 = [10,60,30];
let val=arr19.find(n=>n>50);
console.log(val);

 // 40
 let emp3 = [{
    name : "a",salary : 100000},
    {name : "b",salary : 200000}
 ];
 let empval = emp3.find(e=>e.salary<200000);
 console.log(empval);
 
 //Reduce
 // 41
 let sum = [10,20,30];
 let sumVal  = sum.reduce((a,b)=>(a+b));
 console.log(sumVal);

 // 42
 console.log(sum.reduce((a,b)=>(a>b?a:b)));

 // 43
 let count = [1,2,3];
 let countVal = count.reduce((a,b) => a + 1 , 0);
 console.log(countVal);

 // 44
console.log(["a","b"].reduce((o,v,i)=>{o[i]=v;return o},{}));

// 45
console.log(emp1.reduce((s,e)=>s+e.salary,0));

// Conversion
// 46
let arr20 = [1,2,3];
let stringVal = arr20.toString();
console.log(stringVal);

// 47
console.log(arr20.join("-"));

//48
console.log(("1,2,3").split(","));

// 49
let arr21 = [1,[2,[3]]];
let nestedArr = arr21.flat(Infinity).join(",");
console.log(nestedArr);

// 50
console.log(["hello","world"].join(","));

// Bonus
// 51
let cart =[{price : 200},{price : 100}];
let totalVal = cart.reduce((a,b)=> a + b .price , 0);
console.log(totalVal);
 
// 52
console.log(cart.filter((p) => p.price<500));

// 53
console.log(["apple","banana"]
.filter(i=>i.includes("a")));


// 54
console.log([...new Set([1,2,2,3])]);


// 55
let grouped=emp1.reduce((acc,e)=>{
 let key=e.salary>20000?"high":"low";
 (acc[key]=acc[key]||[]).push(e);
 return acc;
},{});
console.log(grouped);











 
 
 
 
 
 
 






 














 























