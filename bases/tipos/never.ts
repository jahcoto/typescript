(() => {
  const error = (message: string): never => {
    throw new Error(message);
  };

  error('Hubo un error!!!');
})();
