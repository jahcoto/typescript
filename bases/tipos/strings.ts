(() => {
  const texto1: string = 'Texto 1';
  const texto2: string = 'Texto 2';
  const texto3: string = `Texto 3`;

  console.log(texto1.toUpperCase());

  console.log(texto1[10]?.toUpperCase() || 'Esta indefinido');
})();
