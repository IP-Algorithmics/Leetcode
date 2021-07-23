// Write a function to find the longest common prefix string amongst an array of strings.
// If there is no common prefix, return an empty string "".

import { test } from '../helpers/test-functions';

// Example 1:
// Input: strs = ["flower","flow","flight"]
// Output: "fl"

// Example 2:
// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

// Constraints:
// 1 <= strs.length <= 200
// 0 <= strs[i].length <= 200
// strs[i] consists of only lower-case English letters.

// Runtime: 68 ms, faster than 99.62% of TypeScript online submissions for Longest Common Prefix.
// Memory Usage: 40.9 MB, less than 58.13% of TypeScript online submissions for Longest Common Prefix.
// Time complexity : O(S) , where S is the sum of all characters in all strings
// Space Complexity: O(1)
function longestCommonPrefix(strs: string[]): string {
    let result = '';
    const lengthOfFirstString = strs[0].length;

    for (let i = 0; i < lengthOfFirstString; i++) {
        let char = strs[0][i];

        if (strs.some((str) => !str[i] || str[i] !== char)) {
            return result;
        }
        result += char;
    }

    return result;
}

test(longestCommonPrefix(['flower', 'flow', 'flight']), 'fl');
test(longestCommonPrefix(['dog', 'racecar', 'car']), '');
test(longestCommonPrefix(['aa', 'a']), 'a');
test(longestCommonPrefix(['aa', 'aab', 'a']), 'a');

export {};
