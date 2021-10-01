import { test } from '../helpers/test-functions';

// Given two strings text1 and text2, return the length of their longest common subsequence. If there is no common subsequence, return 0.
// A subsequence of a string is a new string generated from the original string with some characters (can be none) deleted without changing the relative order of the remaining characters.
// For example, "ace" is a subsequence of "abcde".
// A common subsequence of two strings is a subsequence that is common to both strings.

// Example 1:
// Input: text1 = "abcde", text2 = "ace"
// Output: 3
// Explanation: The longest common subsequence is "ace" and its length is 3.

// Example 2:
// Input: text1 = "abc", text2 = "abc"
// Output: 3
// Explanation: The longest common subsequence is "abc" and its length is 3.

// Example 3:
// Input: text1 = "abc", text2 = "def"
// Output: 0
// Explanation: There is no such common subsequence, so the result is 0.

// Constraints:
// 1 <= text1.length, text2.length <= 1000
// text1 and text2 consist of only lowercase English characters.

// Explanation
// Find the longest substring that is common to both strings. You can remove characters from the string but you have to keep the same order.
// The approach used is dynamic programming.

// Runtime: 185 ms, faster than 31.48% of TypeScript online submissions for Longest Common Subsequence.
// Memory Usage: 49.3 MB, less than 75.93% of TypeScript online submissions for Longest Common Subsequence.

// Time Complexity: O(N*M)
// Space Complexity: O(N*M)
function longestCommonSubsequence(text1: string, text2: string): number {
    const m = text1.length;
    const n = text2.length;

    // fill the matrix with 0 values. add another additional value that will hold the maximum value.
    const dp: number[][] = Array(m + 1)
        .fill(0)
        .map(() => Array(n + 1).fill(0));

    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            // at each step if the characters match, save in the current position the new maximum (previous step + 1)
            if (text1[i - 1] === text2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
            } else {
                // save the maximum value of the previous row or column
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
            }
        }
    }
    return dp[m][n];
}

test(longestCommonSubsequence('abcde', 'ace'), 3);
test(longestCommonSubsequence('abc', 'abc'), 3);
test(longestCommonSubsequence('abc', 'def'), 0);

export {};
