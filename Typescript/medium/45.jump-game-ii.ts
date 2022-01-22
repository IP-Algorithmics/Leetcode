import { test } from '../helpers/test-functions';

// Given an array of non-negative integers nums, you are initially positioned at the first index of the array.
// Each element in the array represents your maximum jump length at that position.
// Your goal is to reach the last index in the minimum number of jumps.
// You can assume that you can always reach the last index.

// Example 1:
// Input: nums = [2,3,1,1,4]
// Output: 2
// Explanation: The minimum number of jumps to reach the last index is 2. Jump 1 step from index 0 to 1, then 3 steps to the last index.

// Example 2:
// Input: nums = [2,3,0,1,4]
// Output: 2

// Constraints:
// 1 <= nums.length <= 104
// 0 <= nums[i] <= 1000

function jump(nums: number[]): number {
    let jumps = 0;
    let maxReach = 0;
    let currentReach = 0;
    for (let i = 0; i < nums.length - 1; i++) {
        currentReach = Math.max(currentReach, i + nums[i]);
        if (i === maxReach) {
            jumps++;
            maxReach = currentReach;
            if (maxReach >= nums.length - 1) {
                return jumps;
            }
        }
    }
    return jumps;
}

test(jump([2, 3, 1, 1, 4]), 2);
test(jump([2, 3, 0, 1, 4]), 2);
test(jump([10, 3, 0, 1, 4]), 1);
test(jump([1, 1, 1, 1, 1]), 4);

export {};
