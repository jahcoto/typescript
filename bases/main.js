"use strict";
(() => {
    const batman = 'Bruce';
    const superman = 'Clark';
    const existe = false;
    const parejaHeroes = [batman, superman];
    const villano = ['Lex Lutor', 5, true];
    const aliados = ['Mujer Maravilla', 'Acuaman', 'San', 'Flash'];
    const fuerzaFlash = 5;
    const fuerzaSuperman = 100;
    const fuerzaBatman = 1;
    const fuerzaAcuaman = 0;
    function activar_batiseñal() {
        return 'activada';
    }
    function pedir_ayuda() {
        console.log('Auxilio!!!');
    }
    const poder = '100';
    const largoDelPoder = poder.length;
    console.log(largoDelPoder);
})();
const sumar = (a, b) => {
    return a + b;
};
const contar = (heroes) => {
    return heroes.length;
};
const superHeroes = ['Flash', 'Arrow', 'Superman', 'Linterna Verde'];
contar(superHeroes);
const llamarBatman = (llamar = false) => {
    if (llamar) {
        console.log('Batiseñal activada');
    }
};
llamarBatman(true);
const unirheroes = (...personas) => {
    return personas.join(', ');
};
const noHaceNada = (numero, texto, booleano, arreglo) => { };
let noHaceNadaTampoco;
noHaceNadaTampoco = noHaceNada;
(() => {
    const batimovil = {
        carroceria: 'Negra',
        modelo: '6x6',
        antibalas: true,
        pasajeros: 4,
    };
    const bumblebee = {
        carroceria: 'Amarillo con negro',
        modelo: '4x2',
        antibalas: true,
        pasajeros: 4,
        disparar() {
            console.log('Disparando');
        },
    };
    const villanos = [
        {
            nombre: 'Lex Luthor',
            edad: 54,
            mutante: false,
        },
        {
            nombre: 'Erik Magnus Lehnsherr',
            edad: 49,
            mutante: true,
        },
        {
            nombre: 'James Logan',
            edad: undefined,
            mutante: true,
        },
    ];
    const charles = {
        poder: 'psiquico',
        estatura: 1.78,
    };
    const apocalipsis = {
        lider: true,
        miembros: ['Magneto', 'Tormenta', 'Psylocke', 'Angel'],
    };
    console.log(apocalipsis);
    let mystique;
    mystique = charles;
    mystique = apocalipsis;
})();
(() => {
    const fullName = (firstName, lastName, upper = false) => {
        if (upper) {
            return `${firstName} ${lastName || ''}`.toUpperCase();
        }
        else {
            return `${firstName} ${lastName || ''}`;
        }
    };
    const name = fullName('Jonathan', 'Hernandez', true);
    console.log(name);
})();
(() => {
    const fullName = (firstName, lastName) => {
        return `${firstName} ${lastName || ''}`;
    };
    const name = fullName('Jonathan');
    console.log(name);
})();
(() => {
    const fullName = (firstName, lastName) => {
        return `${firstName} ${lastName}`;
    };
    const name = fullName('Jonathan', 'Hernandez');
    console.log(name);
})();
(() => {
    const fullName = (firstName, ...restArgs) => {
        return `${firstName} ${restArgs.join(' ')}`;
    };
    const superman = fullName('Clark', 'Joseph', 'Kent');
    console.log(superman);
})();
(() => {
    const addNumbers = (a, b) => a + b;
    const greet = (name) => `Hola ${name}`;
    const saveTheWorld = () => 'El mundo esta salvado!!!';
    let myFunction;
    myFunction = saveTheWorld;
    console.log(myFunction());
})();
(() => {
    const heroe = 'flash';
    function getName() {
        return heroe;
    }
    const activateBatisignal = () => {
        return 'Batisignal active!!!';
    };
    console.log(activateBatisignal());
})();
(() => {
    let flash = {
        name: 'Barry Allen',
        age: 24,
        powers: ['Super velocidad', 'Viajar en el tiempo'],
    };
    let superman = {
        name: 'Clark Kemp',
        age: 60,
        powers: ['Super velocidad', 'Volar'],
    };
    console.log(flash);
})();
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
    let myCustomVariable = 'Jonathan';
    console.log(myCustomVariable);
    myCustomVariable = 20;
    console.log(myCustomVariable);
    myCustomVariable = {
        name: 'Jonathan',
        age: 20,
        powers: [1, 2, 3],
    };
    console.log(myCustomVariable);
})();
(() => {
    let avenger = 123;
    let exists;
    let power;
    avenger = 'Dr Strange';
    console.log(avenger.charAt(0));
    avenger = 150.2322525;
    console.log(avenger.toFixed(2));
    console.log(exists);
    console.log(power);
})();
(() => {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const villains = ['Omega Rojo', 'Dormammu', 'Duende Verde'];
    villains.forEach(villain => console.log(villain.toUpperCase()));
})();
(() => {
    let isSuperman = true;
    let isBatman = false;
    isSuperman = isBatman ? false : true;
    console.log({ isSuperman }, { isBatman });
})();
(() => {
    let AudioLevel;
    (function (AudioLevel) {
        AudioLevel[AudioLevel["min"] = 1] = "min";
        AudioLevel[AudioLevel["medium"] = 5] = "medium";
        AudioLevel[AudioLevel["max"] = 10] = "max";
    })(AudioLevel || (AudioLevel = {}));
    let currentAudio = AudioLevel.medium;
    console.log(currentAudio);
    console.log(AudioLevel);
})();
(() => {
    const error = (message) => {
        throw new Error(message);
    };
    error('Hubo un error!!!');
})();
(() => {
    let isActive = undefined;
    console.log(isActive);
})();
(() => {
    let avengers = 10;
    console.log(avengers);
    const villians = 20;
    if (avengers < villians) {
        console.log('Estamos en problemas.');
    }
    else {
        console.log('Estamos salvados.');
    }
    avengers = 123;
    console.log({ avengers });
})();
(() => {
    var _a;
    const texto1 = 'Texto 1';
    const texto2 = 'Texto 2';
    const texto3 = `Texto 3`;
    console.log(texto1.toUpperCase());
    console.log(((_a = texto1[10]) === null || _a === void 0 ? void 0 : _a.toUpperCase()) || 'Esta indefinido');
})();
(() => {
    const heroe = ['Dr Strange', 100, true];
    heroe[0] = 'Spirdeman';
    heroe[1] = 50;
    console.log(heroe);
})();
(() => {
    function callBatman() {
        return;
    }
    const callSuperman = () => {
        return;
    };
    const a = callBatman();
    console.log(a);
})();
//# sourceMappingURL=main.js.map