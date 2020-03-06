var rob = function(nums) {
  if(nums.length == 0) return 0;
  let dp = [];
  dp[0] = 0;
  dp[1] = nums[0];

  for(let i = 2; i <= nums.length; i++){
      dp[i] = Math.max(nums[i - 1] + dp[i - 2], dp[i - 1])
  }
  return Math.max(dp[nums.length - 1], dp[nums.length])
};