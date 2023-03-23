//Challenge 2

function major(nums) {
  let obj = {};

  for(let i = 0; i < nums.length; i++){
    if(obj[nums[i]]){
      obj[nums[i]]++
    }else {
      obj[nums[i]] = 1
    }
  }

  let max = 0;
  let result = 0;
  for(let i in obj){
    if(obj[i] > 0){
      max = obj[i];
      result = i;
    }
  }
  return result;
}

console.log(major([2,2,1,1,1,2,2]))
console.log(major([3,2,3]))
console.log(major([3,5,5,5,3]))