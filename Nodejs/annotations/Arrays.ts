const carMakers = ['ford','toyota'];
const dates = [new Date(), new Date()];

const carByMale:string[][] = [];

const mod = carMakers[0];
const myCar = carMakers.pop();

carMakers.map((car:string): string => { 
    return car.toUpperCase();
})

const importantDates = [new Date(), 'hello',78];