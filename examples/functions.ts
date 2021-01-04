const add = (a : number, b : number) : number => {
    return a + b;  
};

const subtract = (a: number, b: number) : number => {
    return a - b;
}

function divide(a: number, b: number) : number {
    return a / b;
}

const multiply = function(a : number, b: number) : number {
    return a * b;
}

const loggger = (message : string) : void => {
    console.log(message);
}

// Used for errors. Use never!
const throwError = (message: string) : never => {
    throw new Error(message);
}

const todaysWeather = {
    date : new Date(),
    weather: 'sunny'
}

const logWeather = ({ date, weather } : {date : Date, weather : string}) : void => {
    console.log(date);
    console.log(weather);
}

logWeather(todaysWeather);