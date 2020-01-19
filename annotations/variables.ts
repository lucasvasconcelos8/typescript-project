let apples : number = 5;
let speed : string = 'fast';
let hasName : boolean = true;

let nothingMuch : null = null;
let nothing : undefined = undefined;

// built in objects
let now : Date = new Date();

let colors : string[] = ['blue', 'red', 'green'];

let myNumbers : number[] = [1,2,3];
let truths : boolean[] = [true, true];

// Classes
class Car {

}

let car : Car = new Car();

// object literal
let point : { x : number; y: number; } = {
    x : 10,
    y : 20
} 

// Function
const logNumber : (i : number) => void = (i : number) => {
    console.log(i);
}

// When to use Annotation
// 1) Functions that returns the any type
const json = '{"x": 10, "y" : 20}';
const coordinates : {x : number; y : number;} = JSON.parse(json);
console.log(coordinates); // {x :10, y:20};

// 2) When initialized later
let words = ['red', 'green', 'blue'];

// 3) Variables whose type cannot be inferred correctly
let numbers = [-1, -10, 12];
let numberAboveZero : boolean | number = false;

for(let i = 0; i < numbers.length; i++){
    if(numbers[i] > 0){
        numberAboveZero = numbers[i];
    }
}