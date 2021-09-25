// Implement strStr().
// Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.
import { test } from '../helpers/test-functions';

// Clarification:
// What should we return when needle is an empty string? This is a great question to ask during an interview.
// For the purpose of this problem, we will return 0 when needle is an empty string. This is consistent to C's strstr() and Java's indexOf().

// Example 1:
// Input: haystack = "hello", needle = "ll"
// Output: 2

// Example 2:
// Input: haystack = "aaaaa", needle = "bba"
// Output: -1

// Example 3:
// Input: haystack = "", needle = ""
// Output: 0

// Constraints:
// 0 <= haystack.length, needle.length <= 5 * 104
// haystack and needle consist of only lower-case English characters.

// return the first position of the str2 in str1
// Runtime: 146 ms, faster than 45.83% of TypeScript online submissions for Implement strStr().
// Memory Usage: 40.2 MB, less than 92.98% of TypeScript online submissions for Implement strStr().
// Time Complexity: O(n)
// Space Complexity: O(1)
function strStr(haystack: string, needle: string): number {
    if (!needle) return 0;
    if (!haystack || needle.length > haystack.length) return -1;

    const len = haystack.length;
    const needleLen = needle.length;
    const maxLen = len - needleLen + 1;

    for (let i = 0; i < maxLen; i++) {
        if (haystack.substr(i, needleLen) === needle) {
            return i;
        }
    }

    return -1;
}

test(strStr('hello', 'll'), 2);
test(strStr('aaaaa', 'bba'), -1);
test(strStr('', ''), 0);
test(strStr('', 'a'), -1);

export {};
