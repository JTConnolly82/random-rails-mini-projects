// > stock_picker([17,3,6,9,15,8,6,1,10])
//   => [1,4]  # for a profit of $15 - $3 == $12

let stockPicker = (arr) => {
  // go over each number
  // from each number, go over the remaining nums
  // if the num is less than the ones coming after it, find nextNum - num
  // if nextNum - num > 0 save this pairing
  // as loop continues if a nextNum - num is > the saved pairing, replace the pairing
  // after going over all possibilities, return pair of indices ex. [1, 4] 
  let starterNum;
  let compareNum;
  let compareArr = [];
  for (let i = 0; i < arr.length; i++) {
    starterNum = arr[i];
    // console.log('starter', starterNum)
    for (let j = 1; j < arr.length; j++) {
      compareNum = arr[j]
      // console.log('compare num', compareNum)
      if (compareNum > starterNum) {
        diffBetween = compareNum - starterNum;
        if (arr.indexOf(starterNum) < arr.indexOf(compareNum)) {
        compareArr.push({
          diff: diffBetween,
          pair: [arr.indexOf(starterNum), arr.indexOf(compareNum)]
        })
       }
      }
    }
  }
  let sortedCompareArr = compareArr.sort((objA, objB) => {
    return objA.diff - objB.diff
  })
  let lastElement = sortedCompareArr[sortedCompareArr.length - 1]
  let resultingPairs = sortedCompareArr.filter((obj) => {
    return obj.diff === lastElement.diff;
  })
  let finalReturnArr = [];
  for (let i = 0; i < resultingPairs.length; i++) {
    finalReturnArr.push(resultingPairs[i].pair)
  }
  return finalReturnArr;
}


console.log(stockPicker([17,3,6,9,15,8,6,1,13]));


