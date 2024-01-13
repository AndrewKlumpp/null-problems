function minValue(nums) {
  if (nums.length === 0) {
    return null;
  }
  let lowestNum = nums[0];
  for (let i = 0; i < nums.length; i++) {

    if (nums[i] < lowestNum) {
      lowestNum = nums[i];
    }
  }
  return lowestNum;
}

console.log(minValue([4, 6, 3, 5, 2, 4])); // 2
console.log(minValue([-2, -3, -7, 3 ])); // -7
console.log(minValue([])); // null
