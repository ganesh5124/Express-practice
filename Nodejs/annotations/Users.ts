class Vehicle {

    constructor(public color: string){}

    public drive(): void {
        console.log("Consoled");
    }
    honk() : void {
        console.log("Beep Beep");
    }
}

class Car extends Vehicle {
    constructor(public wheels:number, public color: string){
        super('red');
    }
}

const vehicle = new Vehicle("orange");
console.log(vehicle.color);

vehicle.drive();
vehicle.honk();

const car  = new Car(89, "orange");
car.drive();
car.honk();