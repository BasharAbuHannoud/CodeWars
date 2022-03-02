function spinWords(string) {
  let arr = string.split(" ");
  let final = [];


  for (e of arr) {
    if (e.length < 5) {
      final.push(e);
    }
    if (e.length >= 5) {
      let reverseWord = e.split("").reverse().join("");

      final.push(reverseWord);
    }
  }

  return final.join(' ')
}

//spinWords("Welcome")
//spinWords( "Hey fellow warriors" )