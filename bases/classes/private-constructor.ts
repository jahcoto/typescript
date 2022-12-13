(() => {
  class Apocalipsis {
    static instance: Apocalipsis;

    private constructor(public name: string) {}

    static callApocalipsis(name: string): Apocalipsis {
      if (!Apocalipsis.instance) {
        Apocalipsis.instance = new Apocalipsis(name);
      }
      return Apocalipsis.instance;
    }

    changeName(newName: string): void {
      this.name = newName;
    }
  }

  const apocalipsis = Apocalipsis.callApocalipsis('Apocalipsis');
  const apocalipsis2 = Apocalipsis.callApocalipsis('Apocalipsis2');
  const apocalipsis3 = Apocalipsis.callApocalipsis('Apocalipsis3');

  apocalipsis.changeName('New Apocalipsis');
  //const apocalipsis: Apocalipsis = new Apocalipsis('Apocalipsis');

  //console.log(apocalipsis, apocalipsis2, apocalipsis3);
})();
