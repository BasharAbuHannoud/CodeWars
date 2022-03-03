/*
Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

It should remove all values from list a, which are present in list b keeping their order.*/

function arrayDiff(a, b) {
  return a.filter((elem) => {
    return b.indexOf(elem) === -1;
  });
}

/*
  Example :

  arrayDiff([1,2],[1]) == [2]
  arrayDiff([1,2,2,2,3],[2]) == [1,3]
  */
