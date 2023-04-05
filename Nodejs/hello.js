// const data  = {
// //     name: 'Ganesh',
// //     Age:23,
// //     qualification:{
// //         highSchool :80,
// //         intermediate: 88,
// //         graduation: 77
// //     }
// // }

// // module.exports =  data;



// let promise = new Promise((function(resolve,reject){
//     resolve("hello world");
//     reject("Error occoured")
// })).then((value)=>{
//     console.log(value);
// })



// const nums = [1, 4, 5, 67, 8];

// function check(num) {
//     return num > 5;
// }

// let checkNumbers = nums.filter(check);

// console.log(checkNumbers);

const arr = [{ name: 'ram', age: 18 },
             { name: 'ganesh', age: 22 }, 
             { name: 'rakesh', age: 25 }, 
             { name: 'om', age: 46 }, 
             { name: 'sadik', age: 30 }, 
             { name: 'asim', age: 32 }, 
             { name: 'harsh', age: 15 }];

            //  age>18 

// const resultantArray = arr.map((item)=>{
//     //  console.log(item.age>18);
//     console.log("item",item.age>18);
// });

// for(item of arr ){
//     console.log(item.age>18);
//     let name = item.name;


// }

// let emptyArray =[];
// arr.forEach((el)=>{
//    const name = el.name;
//    console.log(name.sort());

// });

// console.log(emptyArray);

// for (let i = 0; i < emptyArray.length; i++) {
//     if(emptyArray[i]>18){
//         console.log(emptyArray[i]);
//     }   
// }

// let sortAge = arr.sort(function(p1,p2){
//     return p1.name -p2.name
// });

// console.log(sortAge);

let age = 365;

const years = age/365;
const weeks = (age % 365) / 7;
console.log("years", Math.floor(years));

console.log("weeks",Math.floor(weeks));
