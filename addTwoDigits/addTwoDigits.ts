function addTwoDigits(n: any): number {
  let total = 0;
  n = n.toString();
  n.split();

  return parseInt(n[0]) + parseInt(n[1]);
}

console.log(addTwoDigits(29));
