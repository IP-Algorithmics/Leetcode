// Given an integer array arr, and an integer target, return the number of tuples i, j, k such that i < j < k and arr[i] + arr[j] + arr[k] == target.
// As the answer can be very large, return it modulo 10^9 + 7.

// Example 1:
// Input: arr = [1,1,2,2,3,3,4,4,5,5], target = 8
// Output: 20
// Explanation:
// Enumerating by the values (arr[i], arr[j], arr[k]):
// (1, 2, 5) occurs 8 times;
// (1, 3, 4) occurs 8 times;
// (2, 2, 4) occurs 2 times;
// (2, 3, 3) occurs 2 times.

// Example 2:
// Input: arr = [1,1,2,2,2,2], target = 5
// Output: 12
// Explanation:
// arr[i] = 1, arr[j] = arr[k] = 2 occurs 12 times:
// We choose one 1 from [1,1] in 2 ways,
// and two 2s from [2,2,2,2] in 6 ways.

// Constraints:
// 3 <= arr.length <= 3000
// 0 <= arr[i] <= 100
// 0 <= target <= 300

import { test } from '../helpers/test-functions';

// Runtime: 88 ms, faster than 100.00% of TypeScript online submissions for 3Sum With Multiplicity.
// Memory Usage: 41.5 MB, less than 100.00% of TypeScript online submissions for 3Sum With Multiplicity.
// Time Complexity: O(n^2)
// Space Complexity: O(n)
function threeSumMulti(arr: number[], target: number): number {
    const length = arr.length;
    let answer = 0;

    // get the counts of each number in the array
    arr.sort((a, b) => a - b);
    const uniqueItemsCounter = new Map();
    for (let i = 0; i < length; i++) {
        uniqueItemsCounter.set(arr[i], (uniqueItemsCounter.get(arr[i]) ?? 0) + 1);
    }

    const uniqueKeys = Array.from(uniqueItemsCounter.keys());
    const uniqueKeysLength = uniqueKeys.length;

    for (let idx = 0; idx < uniqueKeysLength; ++idx) {
        let x = uniqueKeys[idx];
        let remainingTarget = target - x;

        let leftIdx = idx;
        let rightIdx = uniqueKeysLength - 1;

        while (leftIdx <= rightIdx) {
            let y = uniqueKeys[leftIdx];
            let z = uniqueKeys[rightIdx];

            if (y + z < remainingTarget) {
                leftIdx++;
            } else if (y + z > remainingTarget) {
                rightIdx--;
            } else {
                // # x+y+z === remainingTarget, now calc the size of the contribution
                if (idx < leftIdx && leftIdx < rightIdx) {
                    // combinations of 3 different numbers
                    answer += uniqueItemsCounter.get(x) * uniqueItemsCounter.get(y) * uniqueItemsCounter.get(z);
                } else if (idx == leftIdx && leftIdx < rightIdx) {
                    // combinations of 3 different numbers and where 1 is the same number
                    answer += ((uniqueItemsCounter.get(x) * (uniqueItemsCounter.get(x) - 1)) / 2) * uniqueItemsCounter.get(z);
                } else if (idx < leftIdx && leftIdx == rightIdx) {
                    // combinations of 3 different numbers and where 2 are the same number
                    answer += (uniqueItemsCounter.get(x) * uniqueItemsCounter.get(y) * (uniqueItemsCounter.get(y) - 1)) / 2;
                } else {
                    // combinations of 3 identical numbers
                    // i == j == k
                    answer += (uniqueItemsCounter.get(x) * (uniqueItemsCounter.get(x) - 1) * (uniqueItemsCounter.get(x) - 2)) / 6;
                }

                answer %= 1e9 + 7;
                leftIdx++;
                rightIdx--;
            }
        }
    }

    return answer;
}

test(threeSumMulti([1, 1, 2, 2, 2, 2], 5), 12);
test(threeSumMulti([1, 1, 2, 2, 3, 3, 4, 4, 5, 5], 8), 20);
export {};
