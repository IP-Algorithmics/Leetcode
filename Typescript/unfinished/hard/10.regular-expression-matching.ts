// Given an input string s and a pattern p, implement regular expression matching with support for '.' and '*' where:
// '.' Matches any single character.​​​​
// '*' Matches zero or more of the preceding element.
// The matching should cover the entire input string (not partial).
import { test } from '../helpers/test-functions';

// Example 1:
// Input: s = "aa", p = "a"
// Output: false
// Explanation: "a" does not match the entire string "aa".

// Example 2:
// Input: s = "aa", p = "a*"
// Output: true
// Explanation: '*' means zero or more of the preceding element, 'a'. Therefore, by repeating 'a' once, it becomes "aa".

// Example 3:
// Input: s = "ab", p = ".*"
// Output: true
// Explanation: ".*" means "zero or more (*) of any character (.)".

// Example 4:
// Input: s = "aab", p = "c*a*b"
// Output: true
// Explanation: c can be repeated 0 times, a can be repeated 1 time. Therefore, it matches "aab".

// Example 5:
// Input: s = "mississippi", p = "mis*is*p*."
// Output: false

// Constraints:
// 1 <= s.length <= 20
// 1 <= p.length <= 30
// s contains only lowercase English letters.
// p contains only lowercase English letters, '.', and '*'.
// It is guaranteed for each appearance of the character '*', there will be a previous valid character to match.

function isMatch(s: string, p: string): boolean {
    // matches pattern on a reversed string with reversed pattern because the pattern matching is done from the end to the beginning
    const isMatchingReverse = (s: string[], p: string[], patternIdx: number = 0, stringIdx: number = 0): boolean => {
        while (stringIdx < s.length && patternIdx < p.length) {
            if (p[patternIdx] === '*') {
                // can the pattern be solved if the <char>* is not present
                if (isMatchingReverse(s, p, patternIdx + 2, stringIdx)) return true;

                while (stringIdx < s.length && (p[patternIdx + 1] === '.' || s[stringIdx] === p[patternIdx + 1])) {
                    stringIdx++;
                }

                // if the next letter after * is the same as before * we can skip it as <char>* can match 0 times.
                let nextPatternIdx = patternIdx + 2;
                if (p[patternIdx] === p[nextPatternIdx]) {
                    nextPatternIdx++;
                }

                patternIdx = nextPatternIdx;
                continue;
            }

            if (p[patternIdx] === '.' || p[patternIdx] === s[stringIdx]) {
                patternIdx++;
                stringIdx++;
            } else {
                break;
            }
        }

        if (patternIdx !== p.length) {
            while (patternIdx < p.length && p[patternIdx] === '*') {
                patternIdx += 2;
            }
        }

        return patternIdx === p.length && stringIdx === s.length;
    };

    const isMatching = (s: string[], p: string[], patternIdx: number = 0, stringIdx: number = 0) => {
        while (stringIdx < s.length && patternIdx < p.length) {
            if (patternIdx + 1 < p.length && p[patternIdx + 1] === '*') {
                // can the pattern be solved if the <char>* is not present
                if (isMatchingReverse(s, p, patternIdx + 2, stringIdx)) return true;

                while (stringIdx < s.length && (p[patternIdx] === '.' || s[stringIdx] === p[patternIdx])) {
                    stringIdx++;
                }

                // if the next letter after * is the same as before * we can skip it as <char>* can match 0 times.
                let nextPatternIdx = patternIdx + 2;
                if (p[patternIdx] === p[nextPatternIdx]) {
                    nextPatternIdx++;
                }

                patternIdx = nextPatternIdx;
                continue;
            }

            if (p[patternIdx] === '.' || p[patternIdx] === s[stringIdx]) {
                patternIdx++;
                stringIdx++;
            } else {
                break;
            }
        }

        // skip <char>* patterns that can be empty
        if (patternIdx !== p.length) {
            while (patternIdx < p.length && p[patternIdx] !== '*' && p[patternIdx + 1] === '*') {
                patternIdx += 2;
            }
        }

        return patternIdx === p.length && stringIdx === s.length;
    };

    return isMatching(s.split(''), p.split('')) || isMatchingReverse(s.split('').reverse(), p.split('').reverse());
}

// function isMatch(s: string, p: string): boolean {
//     let patternIdx = 0;
//     let stringIdx = 0;

//     while (stringIdx < s.length) {
//         if (patternIdx + 1 < p.length && p[patternIdx + 1] === '*') {
//             // can the pattern be solved if the <char>* is not present
//             if (isMatch(s.substr(stringIdx), p.substr(patternIdx + 2))) return true;

//             while (stringIdx < s.length && (p[patternIdx] === '.' || s[stringIdx] === p[patternIdx])) {
//                 stringIdx++;
//             }

//             // if the next letter after * is the same as before * we can skip it as <char>* can match 0 times.
//             let nextPatternIdx = patternIdx + 2;
//             if (p[patternIdx] === p[nextPatternIdx]) {
//                 nextPatternIdx++;
//             }

//             patternIdx = nextPatternIdx;
//             continue;
//         }

//         if (p[patternIdx] === '.' || p[patternIdx] === s[stringIdx]) {
//             patternIdx++;
//             stringIdx++;
//         } else {
//             break;
//         }
//     }
//     return patternIdx === p.length && stringIdx === s.length;
// }

test(isMatch('aa', 'a'), false);
test(isMatch('aa', 'a*'), true);
test(isMatch('ab', '.*'), true);
test(isMatch('aab', 'c*a*b'), true);
test(isMatch('mississippi', 'mis*is*p*.'), false);
test(isMatch('a', 'a*'), true);
test(isMatch('a', 'a.'), false);
test(isMatch('a', 'a*.'), true);
test(isMatch('a', 'a*a'), true);
test(isMatch('aaa', 'a*a'), true);
test(isMatch('aaa', 'ab*a*c*a'), true);
test(isMatch('ab', '.*..c*'), true);
test(isMatch('abcdede', 'ab.*de'), true);

export {};
