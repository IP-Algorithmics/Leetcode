// Implement pow(x, n), which calculates x raised to the power n (i.e., x^n).
import { test } from '../helpers/test-functions';

// Example 1:

// Input: x = 2.00000, n = 10
// Output: 1024.00000
// Example 2:

// Input: x = 2.10000, n = 3
// Output: 9.26100
// Example 3:

// Input: x = 2.00000, n = -2
// Output: 0.25000
// Explanation: 2^-2 = 1/22 = 1/4 = 0.25

// Constraints:

// -100.0 < x < 100.0
// -2^31 <= n <= 2^31-1
// -10^4 <= x^n <= 10^4

function myPow(x: number, n: number): number {
    if (!n) return 1;
    if (n < 0) return 1 / myPow(x, -n);
    if (n % 2) return x * myPow(x, n - 1);
    return myPow(x * x, n / 2);
}

test(myPow(2.0, 10), 1024.0);
test(myPow(2.1, 3), 9.261);
test(myPow(2.0, -2), 0.25);
test(myPow(1.0, -20000000), 1);

export {};
