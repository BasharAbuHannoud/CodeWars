/*Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

Your task is to write a function maskify, which changes all but the last four characters into '#'.*/

function maskify(cc) {

  let crypto = [];

  let arrCC = cc.split("");
  for (let i = 0; i < arrCC.length; i++) {
    if (arrCC.length < 4) {
      return cc;
    }

    if (
      i == arrCC.length - 4 ||
      i == arrCC.length - 3 ||
      i == arrCC.length - 2 ||
      i == arrCC.length - 1
    ) {
      crypto.push(arrCC[i]);
    } else {
      crypto.push("#");
    }
  }

  return crypto.join("");
}

/*
      maskify("4556364607935616") == "############5616"
maskify(     "64607935616") ==      "#######5616"
maskify(               "1") ==                "1"
maskify(                "") ==                 ""
maskify("Nananananananananananananananana Batman!")
 */
