// Given an array nums of n integers and an integer target, find three integers in nums such that the sum is closest to target.
// Return the sum of the three integers. You may assume that each input would have exactly one solution.

import { test } from '../helpers/test-functions';

// Example 1:
// Input: nums = [-1,2,1,-4], target = 1
// Output: 2
// Explanation: The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).
// Constraints:
// 3 <= nums.length <= 10^3
// -10^3 <= nums[i] <= 10^3
// -10^4 <= target <= 10^4

// Runtime: 80 ms, faster than 96.25% of TypeScript online submissions for 3Sum Closest.
// Memory Usage: 41 MB, less than 52.50% of TypeScript online submissions for 3Sum Closest.
//O(n^2)
function threeSumClosest(nums: number[], target: number): number {
    nums.sort((a, b) => a - b);
    let minDiff = Number.MAX_VALUE;
    let result = 0;
    for (let i = 0; i < nums.length - 2; i++) {
        let left = i + 1;
        let right = nums.length - 1;
        while (left < right) {
            let sum = nums[i] + nums[left] + nums[right];
            let diff = Math.abs(target - sum);
            if (diff < minDiff) {
                minDiff = diff;
                result = sum;
            }
            if (sum < target) {
                left++;
            } else if (sum > target) {
                right--;
            } else {
                return sum;
            }
        }
    }
    return result;
}

test(threeSumClosest([-1, 2, 1, -4], 1), 2);

export {};
