(() => {
  class Avenger {
    name;
    power;

    constructor(name = 'No Name', power = 0) {
      this.name = name;
      this.power = power;
    }
  }

  class flyingAvenger extends Avenger {
    flying;

    constructor(name, power) {
      super(name, power);
      this.flying = true;
    }
  }

  const hulk = new Avenger('Hulk', 45);
  const falcon = new flyingAvenger('Falcon', 25);

  console.log(hulk, falcon);
})();
