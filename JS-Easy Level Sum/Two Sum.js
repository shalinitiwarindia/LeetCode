 var twoSum = function(nums, target) {
     let bag = {};
    for (let i = 0; i < nums.length; i++) {
        let number = target - nums[i];
         if (number in bag) {
            return [bag[number], i];
        }

        bag[nums[i]] = i;
    }
}; 
