function deleteNth(arr, n) {
  let noOccurrences = [];

  arr.reduce((acc, item) => {
    acc[item] ? acc[item]++ : (acc[item] = 1);

    if (acc[item] <= n)  noOccurrences.push(item);

    return acc;
  }, {});

  return noOccurrences;
}

/*

deleteNth([20,37,20,21], 1), [20,37,21]

*/
