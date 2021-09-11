//  class là gì?
// 




class VinfastLux {
    engine = 'v1.0';
    color = 'black';
    year = 2020;
    licenceNumber= 12345;

    constructor(engineName, color, year) {
        this.engine = engineName;
        this.color = color;
        this.year = year;
        this.licenceNumber = licenceNumber;
    }

    drive() {}
    honk() {}
    stop() {}
    break() {}
}

const myCar = new VinfastLux('V2.0', 'red', 2018, 25465847);
console.log(myCar)
const alcieCar = new VinfastLux()
console.log(alcieCar)