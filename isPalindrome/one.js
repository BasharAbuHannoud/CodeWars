
function isPalindrome(line) {
  let arr = line.toString().split("");
  let comp = arr.reverse().join("");

  if (comp == line) {
    return true;
  } else {
    return false;
  }
}

// isPalindrome("anna")   ==> true
// isPalindrome("walter") ==> false
// isPalindrome(12321)    ==> true
// isPalindrome(123456)   ==> false