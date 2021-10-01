// Given a string s, find the length of the longest substring without repeating characters.
import { test } from '../helpers/test-functions';

// Example 1:
// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.

// Example 2:
// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.

// Example 3:
// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

// Example 4:
// Input: s = ""
// Output: 0

// Constraints:
// 0 <= s.length <= 5 * 104
// s consists of English letters, digits, symbols and spaces.

// Explanation:
// We create a set to hold the seen chars, a starting and ending index for the substring found so far.
// We iterate through the string, if the current char is not in the set, we add it to the set and increment the end index.
// If the current char is in the set, we remove it from the set and increment the start index.

// Runtime: 96 ms, faster than 94.49% of TypeScript online submissions for Longest Substring Without Repeating Characters.
// Memory Usage: 44.1 MB, less than 73.69% of TypeScript online submissions for Longest Substring Without Repeating Characters.

// Time Complexity: O(n)
// Space Complexity: O(n)
function lengthOfLongestSubstring(s: string): number {
    const len: number = s.length;
    let max: number = 0;
    let strStartIdx: number = 0;
    let strEndIdx: number = 0;
    const set: Set<string> = new Set();

    while (strStartIdx < len && strEndIdx < len) {
        if (!set.has(s[strEndIdx])) {
            set.add(s[strEndIdx]);
            strEndIdx++;
            const newMax = strEndIdx - strStartIdx;
            max = max >= newMax ? max : newMax;
        } else {
            set.delete(s[strStartIdx]);
            strStartIdx++;
        }
    }

    return max;
}

test(lengthOfLongestSubstring('abcabcbb'), 3);
test(lengthOfLongestSubstring('bbbbb'), 1);
test(lengthOfLongestSubstring('pwwkew'), 3);
test(lengthOfLongestSubstring(''), 0);
test(lengthOfLongestSubstring('au'), 2);
test(lengthOfLongestSubstring('dvdf'), 3);
test(lengthOfLongestSubstring('ababbabb'), 2);

export {};
