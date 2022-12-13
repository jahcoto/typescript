(() => {
  interface Xmen {
    name: string;
    realName: string;
    mutantPower(power: number): string;
  }

  interface Human {
    age: number;
  }

  class Mutant implements Xmen, Human {
    public name: string;
    public realName: string;
    public age: number;
    public mutantPower(power: number): string {
      return power.toString();
    }

    constructor(name: string, realName: string, age: number, power: number) {
      this.name = name;
      this.realName = realName;
      this.age = age;
    }
  }

  const Wolverine = new Mutant('Wolverine', 'Logan', 30, 30);
  Wolverine.mutantPower(10);
  console.log(Wolverine);
})();
