(() => {
  type Avenger = {
    name: string;
    age: number;
  };

  const ironman: Avenger = {
    name: 'Iron Man',
    age: 32,
  };

  const captainAmerica: Avenger = {
    name: 'Captain America',
    age: 40,
  };

  const hulk: Avenger = {
    name: 'Hulk',
    age: 50,
  };

  const avengers: Avenger[] = [ironman, captainAmerica, hulk];

  for (const avenger of avengers) {
    console.log(avenger);
  }
})();
