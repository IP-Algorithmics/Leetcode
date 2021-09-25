// Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.
// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000
// For example, 2 is written as II in Roman numeral, just two one's added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.
// Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:
// I can be placed before V (5) and X (10) to make 4 and 9.
// X can be placed before L (50) and C (100) to make 40 and 90.
// C can be placed before D (500) and M (1000) to make 400 and 900.
// Given an integer, convert it to a roman numeral.
import { test } from '../helpers/test-functions';

// Example 1:
// Input: num = 3
// Output: "III"

// Example 2:
// Input: num = 4
// Output: "IV"

// Example 3:
// Input: num = 9
// Output: "IX"

// Example 4:
// Input: num = 58
// Output: "LVIII"
// Explanation: L = 50, V = 5, III = 3.

// Example 5:
// Input: num = 1994
// Output: "MCMXCIV"
// Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.

// Constraints:
// 1 <= num <= 3999

// Runtime: 345 ms, faster than 6.01% of TypeScript online submissions for Integer to Roman.
// Memory Usage: 48.5 MB, less than 5.15% of TypeScript online submissions for Integer to Roman.
function intToRomanObject(num: number): string {
    const pushXTimes = <T>(arr: T[], times: number, value: T) => {
        for (var i = 0; i < times; i++) arr.push(value);
    };
    const alphabet = {
        1: 'I',
        4: 'IV',
        5: 'V',
        9: 'IX',
        10: 'X',
        40: 'XL',
        50: 'L',
        90: 'XC',
        100: 'C',
        400: 'CD',
        500: 'D',
        900: 'CM',
        1000: 'M',
    };
    const keys = Object.keys(alphabet)
        .map((x) => Number(x))
        .sort((a, b) => b - a);

    const romanArr: string[] = [];
    keys.forEach((key) => {
        const times = Math.floor(num / key);
        pushXTimes(romanArr, times, alphabet[key]);
        num = num - key * times;
    });
    return romanArr.join('');
}

// Runtime: 156 ms, faster than 50.21% of TypeScript online submissions for Integer to Roman.
// Memory Usage: 45.9 MB, less than 62.66% of TypeScript online submissions for Integer to Roman.
//Time Complexity: O(n)
//Space Complexity: O(1)
function intToRoman(num: number): string {
    const pushXTimes = <T>(arr: T[], times: number, value: T) => {
        for (var i = 0; i < times; i++) arr.push(value);
    };
    const alphabetKeys = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];
    const alphabetValues = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'];
    let len = alphabetKeys.length;

    const romanArr: string[] = [];
    for (let i = len - 1; i >= 0; i--) {
        const times = Math.floor(num / alphabetKeys[i]);
        pushXTimes(romanArr, times, alphabetValues[i]);
        num = num - alphabetKeys[i] * times;
    }
    return romanArr.join('');
}

test(intToRoman(3), 'III');
test(intToRoman(4), 'IV');
test(intToRoman(9), 'IX');
test(intToRoman(58), 'LVIII');
test(intToRoman(1994), 'MCMXCIV');
test(intToRoman(3999), 'MMMCMXCIX');

export {};
