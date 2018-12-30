function allLongestStrings(inputArray: string[]): string[] {
  let largestStringLength = 0;
  let largestStringArray = [];
  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i].length > largestStringLength)
      largestStringLength = inputArray[i].length;
  }

  inputArray.forEach(string => {
    string.length === largestStringLength
      ? largestStringArray.push(string)
      : "";
  });

  return largestStringArray;
}

console.log(allLongestStrings(["aba", "aa", "ad", "vcd", "aba"]));
