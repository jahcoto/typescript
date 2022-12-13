(() => {
  class Avenger {
    constructor(public name: string, public realName: string) {
      console.log('Constructor cargado!!!');
    }

    private getFullName() {
      return `${this.name} ${this.realName}`;
    }
  }

  class Xmen extends Avenger {
    constructor(
      public name: string,
      public realName: string,
      public isMutant: boolean,
    ) {
      super(name, realName);
    }

    get fullName(): string {
      return `${this.name} ${this.realName}`;
    }

    set fullName(value: string) {
      this.name = value;
    }

    getFullNameXmen() {
      //console.log(super.getFullName());
    }
  }
  //const wolverine = new Xmen('Wolverine', 'Logan', true);

  //wolverine.fullName = 'Jonathan';

  //console.log(wolverine.fullName);
})();
