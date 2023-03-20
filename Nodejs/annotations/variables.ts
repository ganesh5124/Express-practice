// Type Annotations
// Arrays
let colors: string[] = ['red', 'green','blue'];
let date: Date = new Date();


class Car {
    title:"hey"
}
let car :Car = new Car();
car.title


// classes
let point : { x:number, y:number} ={
    x:3,
    y:4
}

const logNumber : (i:number)=> void = (i:number)=>{
    console.log(i);
}

// void is basically return type

// when to use annotations
// 1) Function that return the 'any type

const json = {"x":10,"y":20};

// const coordinates : { x:number, y:number} = JSON.stringify(json);
// console.log(coordinates);

const add = (a:number, b:number):number | boolean | void | string =>{
    if(a>b){
        return true;
    }else{
        return false;
    }
}

function divide(a:number, b:number){
    return a/b;
}

function multiply(a:number, b:number){
    return a*b;
}

