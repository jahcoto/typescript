(() => {
  interface addTwoNumbers {
    (num1: number, num2: number): number;
  }

  let addNumbersFunction: addTwoNumbers;

  addNumbersFunction = (num1: number, num2: number) => {
    return num1 + num2;
  };
})();
