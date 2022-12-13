(() => {
  abstract class Mutante {
    constructor(public name: string, public realName: string) {}
  }

  class Xmen extends Mutante {
    salvarMundo() {
      return 'Mundo a salvo!';
    }
  }
  class Villain extends Mutante {
    conquistarMundo() {
      return 'Mundo conquistado!';
    }
  }

  const wolverine = new Xmen('Wolverine', 'Logan');
  const magneto = new Villain('Magneto', 'Magnus');

  //console.log(wolverine.salvarMundo());
  //console.log(magneto.conquistarMundo());

  const printName = (personaje: Mutante) => {
    console.log(personaje.name);
    console.log(personaje.realName);
  };

  //printName(wolverine);
  //printName(magneto);
})();
