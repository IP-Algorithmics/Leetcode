// Given an integer x, return true if x is palindrome integer.
// An integer is a palindrome when it reads the same backward as forward.
// For example, 121 is palindrome while 123 is not.

import { test } from '../helpers/test-functions';

// Example 1:
// Input: x = 121
// Output: true

// Example 2:
// Input: x = -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.

// Example 3:
// Input: x = 10
// Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.

// Example 4:
// Input: x = -101
// Output: false

// Constraints:
// -231 <= x <= 231 - 1

// Runtime: 188 ms, faster than 77.27% of TypeScript online submissions for Palindrome Number.
// Memory Usage: 48.3 MB, less than 90.68% of TypeScript online submissions for Palindrome Number.
// Time Complexity: O(log(x)). There are roughly log10(x) digits in x
// Space Complexity: O(1)
function isPalindrome(x: number): boolean {
    if (x >= 0 && x < 10) return true;
    if (x < 0 || x % 10 === 0) return false;

    let reverse = 0;
    let temp = x;
    while (temp > 0) {
        const digit = temp % 10;
        reverse = reverse * 10 + digit;
        temp = Math.floor(temp / 10);
    }
    return x === reverse;
}

test(isPalindrome(121), true);
test(isPalindrome(-121), false);
test(isPalindrome(10), false);
test(isPalindrome(-101), false);
test(isPalindrome(0), true);
test(isPalindrome(123), false);
test(isPalindrome(123321), true);

export {};
