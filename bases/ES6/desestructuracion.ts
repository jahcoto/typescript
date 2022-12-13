(() => {
  type Avengers = {
    nick: string;
    ironman: string;
    vision: string;
    activo: boolean;
    poder: number;
  };

  const avengers: Avengers = {
    nick: 'Samuel L. Jackson',
    ironman: 'Robert Downey Jr.',
    vision: 'Paul Bettany',
    activo: true,
    poder: 1500,
  };

  const { poder, vision } = avengers;

  console.log(poder);
  console.log(vision);

  const printAvenger = ({ ironman, ...others }: Avengers) => {
    console.log(ironman, others);
  };

  printAvenger(avengers);

  //desestructuracion de arrays
  const avengersArry = ['Cap. America', 'Ironman', 'Hulk'];

  const [, ironman] = avengersArry;

  console.log({ ironman });
})();
