/**

Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.

Example 1:
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Output: Because nums[0] + nums[1] == 9, we return [0, 1].

Example 2:
Input: nums = [3,2,4], target = 6
Output: [1,2]

Example 3:
Input: nums = [3,3], target = 6
Output: [0,1]

Constraints:
2 <= nums.length <= 104
-109 <= nums[i] <= 109
-109 <= target <= 109
Only one valid answer exists.
*/
import { test } from '../helpers/test-functions';

// Runtime: 100 ms, faster than 57.55% of TypeScript online submissions for Two Sum.
// Memory Usage: 41.4 MB, less than 44.27% of TypeScript online submissions for Two Sum.
function twoSum1(nums: number[], target: number): number[] {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
    return [];
}

//Runtime: 84 ms, faster than 82.69% of TypeScript online submissions for Two Sum.
// Memory Usage: 42.2 MB, less than 12.23% of TypeScript online submissions for Two Sum.
function twoSum2(nums: number[], target: number): number[] {
    const length = nums.length;
    const numsObj = {};
    nums.forEach((x, idx) => (numsObj[x] = idx));

    for (let i = 0; i < length; i++) {
        if (numsObj[target - nums[i]] && numsObj[target - nums[i]] !== i) {
            return [i, numsObj[target - nums[i]]];
        }
    }
    return [];
}

//Runtime: 124 ms, faster than 39.88% of TypeScript online submissions for Two Sum.
// Memory Usage: 41.2 MB, less than 51.72% of TypeScript online submissions for Two Sum.
function twoSum(nums: number[], target: number): number[] {
    const length = nums.length;
    for (let i = 0; i < length; i++) {
        for (let j = i + 1; j < length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
    return [];
}

test(twoSum([3, 2, 4], 6), [1, 2]);
test(twoSum([2, 7, 11, 15], 9), [0, 1]);
test(twoSum([3, 3], 6), [0, 1]);
test(twoSum([1, 3, 4, 2], 6), [2, 3]);

export {};
