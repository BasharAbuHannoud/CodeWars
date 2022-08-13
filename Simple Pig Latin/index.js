function pigIt(str) {
  const splitStr = str.split(" ");

  const convertedString = [];

  splitStr.forEach((items, i) => {
    let regExp = /\p{P}/gu;
    let foundPunc = regExp.test(items);

    const arrChar = items.split("");

    if (foundPunc) {
      convertedString.push(items);
    } else {
      arrChar.forEach((char, j) => {
        let firstChar;

        firstChar = arrChar[0];

        if (j == arrChar.length - 1) {
          arrChar.shift();

          arrChar[arrChar.length] = firstChar + "ay";
          convertedString.push(arrChar.join(""));
        }
      });
    }
  });

  return convertedString.join(" ");
}
