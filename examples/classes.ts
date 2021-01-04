class Vehicle {
  constructor(color : string) {}
  
}

class Car extends Vehicle {

  constructor(public wheels : number, color : string) { super(color);}


  drive(): void  {
    console.log('hello hello: ');
  }

  honk(): void {
    console.log('teste');
  }
}


const car = new Car(4, 'red');

car.drive();