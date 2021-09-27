// Given n non-negative integers a1, a2, ..., an , where each represents a point at coordinate (i, ai).
// n vertical lines are drawn such that the two endpoints of the line i is at (i, ai) and (i, 0). Find two lines, which, together with the x-axis forms a container, such that the container contains the most water.
// Notice that you may not slant the container.
import { test } from '../helpers/test-functions';

// Example 1:
// Input: height = [1,8,6,2,5,4,8,3,7]
// Output: 49
// Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.

// Example 2:
// Input: height = [1,1]
// Output: 1

// Example 3:
// Input: height = [4,3,2,1,4]
// Output: 16

// Example 4:
// Input: height = [1,2,1]
// Output: 2

// Constraints:
// n == height.length
// 2 <= n <= 105
// 0 <= height[i] <= 104

//Time Complexity: O(n^2)
//Space Complexity: O(1)
function maxAreaUnOptimised(height: number[]): number {
    const len = height.length;
    let max = 0;

    for (let i = 0; i < len; i++) {
        for (let j = i + 1; j < len; j++) {
            const newMax = Math.min(height[i], height[j]) * (j - i);
            if (max < newMax) max = newMax;
        }
    }
    return max;
}

// Runtime: 92 ms, faster than 80.85% of TypeScript online submissions for Container With Most Water.
// Memory Usage: 48.8 MB, less than 45.65% of TypeScript online submissions for Container With Most Water.
// Time Complexity: O(n)
// Space Complexity: O(1)
function maxArea(height: number[]): number {
    const len = height.length;
    let left = 0;
    let right = len - 1;
    let max = Math.min(height[left], height[right]) * (right - left);

    while (left < right) {
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
        const newMax = Math.min(height[left], height[right]) * (right - left);
        if (max < newMax) max = newMax;
    }
    return max;
}

test(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]), 49);
test(maxArea([1, 1]), 1);
test(maxArea([1, 2]), 1);
test(maxArea([4, 3, 2, 1, 4]), 16);
test(maxArea([1, 2, 1]), 2);

export {};
