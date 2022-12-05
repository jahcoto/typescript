(() => {
  const addNumbers = (a: number, b: number): number => a + b;
  const greet = (name: string): string => `Hola ${name}`;
  const saveTheWorld = () => 'El mundo esta salvado!!!';

  //let myFunction: (number1: number, number2: number) => number;

  //myFunction = 10;
  //console.log(myFunction);

  //let myFunction: (number1: number, number2: number) => number;
  //myFunction = addNumbers;
  //console.log(myFunction(1, 2));

  //let myFunction: (name: string) => string;
  //myFunction = greet;
  //console.log(myFunction('Jonathan'));

  let myFunction: () => void;
  myFunction = saveTheWorld;
  console.log(myFunction());
})();
