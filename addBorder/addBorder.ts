function addBorder(picture: string[]): string[] {
  let asterisk = "*";
  let asterisks = "";
  let asterisksLength = picture[0].length + 2;

  for (let i = 0; i < asterisksLength; i++) {
    asterisks = asterisks + asterisk;
  }

  for (let i = 0; i < picture.length; i++) {
    picture[i] = `${asterisk}${picture[i]}${asterisk}`;
  }
  picture.push(asterisks);
  picture.unshift(asterisks);
  return picture;
}

console.log(addBorder(["abc", "ded"]));
