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
  let counter = arr.length
  for (let i = 0; i < arr.length; i++) {
    starterNum = arr[i];
    // console.log('starter', starterNum)
    for (let j = 0; j < counter - 1; j++) {
      compareNum = arr[j]
      // console.log('compare num', compareNum)
      if (compareNum > starterNum) {
        diffBetween = compareNum - starterNum;
        compareArr.push({
          diff: diffBetween,
          pair: [arr.indexOf(starterNum), arr.indexOf(compareNum)]
        })
      }
    }
    counter = counter - 1;
    console.log('arr', arr)
  }
  console.log(compareArr);
}


stockPicker([17,3,6,9,15,8,6,1,10]);