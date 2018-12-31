function almostIncreasingSequence(sequence: number[]): boolean {
  let guideNumber = 0;
  let removedAmount = 0;
  let isSequential = true;

  for (let i = 0; i < sequence.length + 1; i++) {
    if (sequence[i] > guideNumber && removedAmount < 2) {
      guideNumber = sequence[i];
    } else if (sequence[i] < guideNumber && removedAmount < 2) {
      removedAmount += 1;
    } else if (removedAmount > 1) {
      isSequential = false;
    }
  }

  return isSequential;
}

console.log(almostIncreasingSequence([1, 3, 2, 1]));
console.log(almostIncreasingSequence([1, 3, 2]));
