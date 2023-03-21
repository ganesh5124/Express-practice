const carMakers = ['ford', 'toyota'];
const dates = [new Date(), new Date()];

const carByMale: string[][] = [];

const mod = carMakers[0];
const myCar = carMakers.pop();

carMakers.map((car: string): string => {
    return car.toUpperCase();
})

const importantDates = [new Date(), 'hello', 78];


const drink = {
    color: 'brown',
    carbonated: true,
    sugar: 40,
    summar(): string {
        return `Some summaery ${this.sugar}`
    }
}
type Drink = [string, boolean, number]
const pepsi: [string, number, boolean, null] = ['brown', 40, true, null];

const sprite: Drink = ['clear', false, 45];

const oldCivic = {
    name: 'civic',
    year: 2000,
    broken: true
};

interface Vehicle {
    name: string,
    year: number,

}



const printVehicle = (vehicle: Vehicle): void => {

    console.log(vehicle.year);

}

printVehicle(oldCivic);







