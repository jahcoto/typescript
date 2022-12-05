(() => {
  //No hay equivalencia en JS, solo existe en TS
  type Heroe = {
    name: string;
    age?: number;
    powers: number[];
    getName?: () => string;
  };

  let flash: Heroe = {
    name: 'Barry Allen',
    age: 24,
    powers: [1, 2],
    getName() {
      return this.name;
    },
  };

  let superman: Heroe = {
    name: 'Clark Kemp',
    age: 60,
    powers: [3, 4],
    getName() {
      return this.name;
    },
  };
})();
