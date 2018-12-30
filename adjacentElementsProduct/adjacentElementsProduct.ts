function adjacentElementsProduct(inputArray: number[]): any {
  let firstArray = [];
  let secondArray = [];
  let finalArray = [];
  let highestValue = 0;

  for (let i = 0; i < inputArray.length; i++) {
    if (i % 2 === 0) {
      firstArray.push(inputArray[i]);
    } else {
      secondArray.push(inputArray[i]);
    }
  }
  for (let i = 0; i < secondArray.length; i++) {
    finalArray.push(firstArray[i] * secondArray[i]);
    if (finalArray[i] > highestValue) {
      highestValue = finalArray[i];
    }
  }

  return highestValue;
}

console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]));
console.log(adjacentElementsProduct([7, 2, -3, -10, 7, 0]));
