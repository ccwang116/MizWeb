var filter;
var ans = []

function twotwo(a, b, target) {
    if (a + b == target) {
        return [a, b]
    } else {
        return false
    }
}

var twoSum = function (nums, target) {
    filter = nums.filter(el => el < target)

    for (let i = 0; i < nums.length; i++) {
        for (let j = 1; j < nums.length; j++) {
            const element = nums[j];
            let result = twotwo(nums[i], nums[i + j], target)
            if (result) {
                return ([i,i+j])
                break
            } else {
                continue
            }
        }
    }


};
console.log(twoSum([8,3,5,6,7,9], 17))
// console.log(ans)
