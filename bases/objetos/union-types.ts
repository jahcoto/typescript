(() => {
  type Heroe = {
    name: string;
    age?: number;
    powers: number[];
    getName?: () => string;
  };

  let myCustomVariable: string | number | Heroe = 'Jonathan';
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
