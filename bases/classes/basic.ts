(() => {
  class Avenger {
    //private name: string;
    //public team: string;
    //public realName?: string;
    static avgAge: number = 35;

    constructor(
      private name: string,
      public team: string,
      public realName?: string,
      avgAge = 55,
    ) {
      Avenger.avgAge = avgAge;
    }

    bio() {
      return `${this.name} ${this.team}`;
    }
  }

  const antman: Avenger = new Avenger('Antman', 'Capitan');

  //console.log(antman.bio());
})();
