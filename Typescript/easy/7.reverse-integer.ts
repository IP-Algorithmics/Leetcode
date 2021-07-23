// Given a signed 32-bit integer x, return x with its digits reversed.
// If reversing x causes the value to go outside the signed 32-bit integer range [-2^31, 2^31 - 1], then return 0.
// Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

import { test } from '../helpers/test-functions';

// Example 1:
// Input: x = 123
// Output: 321

// Example 2:
// Input: x = -123
// Output: -321

// Example 3:
// Input: x = 120
// Output: 21

// Example 4:
// Input: x = 0
// Output: 0

// Constraints:
// -231 <= x <= 231 - 1

// Runtime: 96 ms, faster than 71.07% of TypeScript online submissions for Reverse Integer.
// Memory Usage: 40.6 MB, less than 62.64% of TypeScript online submissions for Reverse Integer.
// Time Complexity: O(log(x)). There are roughly log10(x) digits in x
// Space Complexity: O(1)
function reverse(x: number): number {
    let result = 0;
    let min = -(2 ** 31);
    let max = 2 ** 31 - 1;
    let sign = x < 0 ? -1 : 1;
    x = Math.abs(x);
    while (x > 0) {
        const digit = x % 10;
        if (result > max / 10 || (result > max / 10 && digit > 7) || result < min / 10 || (result < min / 10 && digit > 8)) {
            return 0;
        }
        result = result * 10 + digit;
        x = Math.floor(x / 10);
    }
    return result * sign;
}

test(reverse(123), 321);
test(reverse(-123), -321);
test(reverse(120), 21);
test(reverse(0), 0);
export {};
