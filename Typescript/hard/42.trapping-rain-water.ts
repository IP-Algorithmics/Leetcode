// Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.
import { test } from '../helpers/test-functions';

// Example 1:
// Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
// Output: 6
// Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped.

// Example 2:
// Input: height = [4,2,0,3,2,5]
// Output: 9

// Constraints:
// n == height.length
// 1 <= n <= 2 * 104
// 0 <= height[i] <= 105

// We calculate the maximum height of each 2 steps from right to left and then from left to right
// Then we compare the two maximum heights of each point and we subtract the difference from the current height of that point
// The difference is the amount of water that can be trapped at each step (the minimum is defaulted to 0)

// Runtime: 92 ms, faster than 56.34% of TypeScript online submissions for Trapping Rain Water.
// Memory Usage: 41.5 MB, less than 27.82% of TypeScript online submissions for Trapping Rain Water.

// Time Complexity: O(n)
// Space Complexity: O(n)
function trapDynamic(height: number[]): number {
    const len = height.length;
    const highestRight: number[] = new Array(len).fill(0);
    const highestLeft: number[] = new Array(len).fill(0);
    highestLeft[0] = height[0];

    let depth = 0;

    for (let i = len - 2; i >= -1; i--) {
        highestRight[i] = Math.max(highestRight[i + 1], height[i + 1]);
    }

    for (let i = 1; i < len; i++) {
        highestLeft[i] = Math.max(highestLeft[i - 1], height[i - 1]);
        depth += Math.max(0, Math.min(highestLeft[i], highestRight[i]) - height[i]);
    }
    return depth;
}

// We have 2 pivots that we move, one from left to right and one from right to left
// We keep track of the maximum height of each pivot
// Depending on which pivot is taller, we will move the shorter one, if the next position of the pivot is smaller then we add the difference in heights
// If the next position of the pivot is taller, we will reset the pivot to that position
// Doing this for both of the pivots will ensure that we each time have the maximum amount of water trapped

// Runtime: 84 ms, faster than 82.81% of TypeScript online submissions for Trapping Rain Water.
// Memory Usage: 41.1 MB, less than 55.79% of TypeScript online submissions for Trapping Rain Water.
// Time Complexity: O(n)
// Space Complexity: O(1)
function trap(height: number[]): number {
    let left = 0;
    let right = height.length - 1;
    let answer = 0;
    let leftMax = 0;
    let rightMax = 0;

    while (left < right) {
        if (height[left] < height[right]) {
            if (height[left] >= leftMax) {
                leftMax = height[left];
            } else {
                answer += leftMax - height[left];
            }
            left++;
        } else {
            if (height[right] >= rightMax) {
                rightMax = height[right];
            } else {
                answer += rightMax - height[right];
            }
            right--;
        }
    }
    return answer;
}

test(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]), 6);
test(trap([4, 2, 0, 3, 2, 5]), 9);

export {};
