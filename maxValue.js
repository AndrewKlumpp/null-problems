function maxValue(nums) {
  if (nums.length === 0) {
    return null;
  }
  let highestNum = nums[0];
  for (let i = 0; i < nums.length; i++) {

    if (nums[i] > highestNum) {
      highestNum = nums[i];
    }
  }
  return highestNum;
}

console.log(maxValue([4, 6, 3, 5, 42, 4])); // 42
console.log(maxValue([-2, -3, -7, 3 ])); // 3
console.log(maxValue([])); // null
