import { test } from '../helpers/test-functions';

// Given a sorted array of distinct integers and a target value, return the index if the target is found.
// If not, return the index where it would be if it were inserted in order.
// You must write an algorithm with O(log n) runtime complexity.

// Example 1:
// Input: nums = [1,3,5,6], target = 5
// Output: 2

// Example 2:
// Input: nums = [1,3,5,6], target = 2
// Output: 1

// Example 3:
// Input: nums = [1,3,5,6], target = 7
// Output: 4

// Example 4:
// Input: nums = [1,3,5,6], target = 0
// Output: 0

// Example 5:
// Input: nums = [1], target = 0
// Output: 0

// Constraints:
// 1 <= nums.length <= 104
// -104 <= nums[i] <= 104
// nums contains distinct values sorted in ascending order.
// -104 <= target <= 104

// Runtime: 78 ms, faster than 70.46% of TypeScript online submissions for Search Insert Position.
// Memory Usage: 40.4 MB, less than 71.93% of TypeScript online submissions for Search Insert Position.

//Time Complexity: O(log(n/2))
//Space Complexity: O(1)
function searchInsertSequential(nums: number[], target: number): number {
    const len = nums.length;
    let idx = Math.floor(len / 2);
    while (idx >= 0 && idx < len) {
        if (nums[idx] === target) {
            return idx;
        }
        if (nums[idx] > target) {
            if (idx - 1 === -1 || nums[idx - 1] < target) {
                return idx;
            }

            idx--;
        }
        if (nums[idx] < target) {
            if (idx + 1 === len || nums[idx + 1] > target) {
                return idx + 1;
            }
            idx++;
        }
    }
    return idx;
}

// Runtime: 85 ms, faster than 38.53% of TypeScript online submissions for Search Insert Position.
// Memory Usage: 40.1 MB, less than 87.71% of TypeScript online submissions for Search Insert Position.
// Time Complexity: O(log(n))
// Space Complexity: O(log(n))
function searchInsert(nums: number[], target: number): number {
    const len = nums.length;
    let mid = Math.floor(len / 2);
    if (nums[mid] === target) return mid;
    if (len === 0) return 0;
    if (len === 1) return nums[0] > target ? 0 : 1;
    if (nums[mid] > target) return searchInsert(nums.slice(0, mid), target);
    if (nums[mid] < target) return searchInsert(nums.slice(mid, len), target) + mid;
    return mid;
}

test(searchInsert([1, 3, 5, 6], 5), 2);
test(searchInsert([1, 3, 5, 6], 2), 1);
test(searchInsert([1, 3, 5, 6], 7), 4);
test(searchInsert([1, 3, 5, 6], 0), 0);
test(searchInsert([1], 0), 0);
test(searchInsert([1], 2), 1);
test(searchInsert([1], 1), 0);
test(searchInsert([], 1), 0);

export {};
