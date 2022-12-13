"use strict";
(() => {
    let flash = {
        name: 'Barry Allen',
        age: 24,
        powers: [1, 2],
        getName() {
            return this.name;
        },
    };
    let superman = {
        name: 'Clark Kemp',
        age: 60,
        powers: [3, 4],
        getName() {
            return this.name;
        },
    };
})();
(() => {
    class Mutant {
        mutantPower(power) {
            return power.toString();
        }
        constructor(name, realName, age, power) {
            this.name = name;
            this.realName = realName;
            this.age = age;
        }
    }
    const Wolverine = new Mutant('Wolverine', 'Logan', 30, 30);
    Wolverine.mutantPower(10);
    console.log(Wolverine);
})();
(() => {
    const client = {
        name: 'John',
        age: 30,
        address: {
            id: 1,
            zip: '12345',
            city: 'New York',
        },
        getAddress(id) {
            if (this.address.id === id) {
                return `${this.address.zip} ${this.address.city}`;
            }
            else {
                return 'Address no valida';
            }
        },
    };
})();
(() => {
    let addNumbersFunction;
    addNumbersFunction = (num1, num2) => {
        return num1 + num2;
    };
})();
//# sourceMappingURL=main.js.map