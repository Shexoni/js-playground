function findMaxNumber(arr) {
  maxNumber = 0;
  for (let i = 0; i < arr.length; i++) {
    if (maxNumber < arr[i]) {
      maxNumber = arr[i];
    }
  }
  return maxNumber;
}

module.exports = findMaxNumber;
