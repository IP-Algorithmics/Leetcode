// The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)
// P   A   H   N
// A P L S I I G
// Y   I   R
// And then read line by line: "PAHNAPLSIIGYIR"
// Write the code that will take a string and make this conversion given a number of rows:
// string convert(string s, int numRows);
import { test } from '../helpers/test-functions';

// Example 1:
// Input: s = "PAYPALISHIRING", numRows = 3
// Output: "PAHNAPLSIIGYIR"

// Example 2:
// Input: s = "PAYPALISHIRING", numRows = 4
// Output: "PINALSIGYAHRPI"
// Explanation:
// P     I    N
// A   L S  I G
// Y A   H R
// P     I

// Example 3:
// Input: s = "A", numRows = 1
// Output: "A"

// Constraints:
// 1 <= s.length <= 1000
// s consists of English letters (lower-case and upper-case), ',' and '.'.
// 1 <= numRows <= 1000

// Runtime: 112 ms, faster than 56.50% of TypeScript online submissions for ZigZag Conversion.
// Memory Usage: 43.5 MB, less than 87.61% of TypeScript online submissions for ZigZag Conversion.

// Time Complexity: O(n)
// Space Complexity: O(n)
function convertString(s: string, numRows: number): string {
    if (numRows === 1) {
        return s;
    }

    const arr = new Array(numRows).fill('');
    const len = s.length;
    let row = 0;
    let goingDown = false;

    for (let i = 0; i < len; i++) {
        arr[row] += s[i];

        if (row === 0 || row === numRows - 1) {
            goingDown = !goingDown;
        }

        row += goingDown ? 1 : -1;
    }

    return arr.join('');
}

// Runtime: 124 ms, faster than 46.22% of TypeScript online submissions for ZigZag Conversion.
// Memory Usage: 45.4 MB, less than 40.48% of TypeScript online submissions for ZigZag Conversion.
function convert(s: string, numRows: number): string {
    if (numRows === 1) {
        return s;
    }

    const arr = new Array(numRows);
    const len = s.length;
    let row = 0;
    let goingDown = false;

    for (let i = 0; i < len; i++) {
        if (arr[row] === undefined) {
            arr[row] = [];
        }
        arr[row].push(s[i]);

        if (row === 0 || row === numRows - 1) {
            goingDown = !goingDown;
        }

        row += goingDown ? 1 : -1;
    }

    return arr.flat().join('');
}

test(convert('PAYPALISHIRING', 3), 'PAHNAPLSIIGYIR');
test(convert('PAYPALISHIRING', 4), 'PINALSIGYAHRPI');
test(convert('A', 1), 'A');
test(convert('AB', 1), 'AB');

export {};
