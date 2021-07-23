// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']'
// Determine if the input string is valid.

import { test } from '../helpers/test-functions';

// An input string is valid if:
// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.

// Example 1:
// Input: s = "()"
// Output: true

// Example 2:
// Input: s = "()[]{}"
// Output: true

// Example 3:
// Input: s = "(]"
// Output: false

// Example 4:
// Input: s = "([)]"
// Output: false

// Example 5:
// Input: s = "{[]}"
// Output: true

// Constraints:
// 1 <= s.length <= 104
// s consists of parentheses only '()[]{}'.

// Runtime: 72 ms, faster than 96.32% of TypeScript online submissions for Valid Parentheses.
// Memory Usage: 40.4 MB, less than 70.68% of TypeScript online submissions for Valid Parentheses.
// Time Complexity: O(N)
// Space Complexity: O(N)

function isValid(s: string): boolean {
    const stack: string[] = [];
    const open = ['(', '{', '['];
    const pairs = {
        '(': ')',
        '{': '}',
        '[': ']',
    };
    const length = s.length;
    for (let i = 0; i < length; i++) {
        if (open.includes(s[i])) {
            stack.push(s[i]);
        } else {
            if (!stack.length) return false;
            const toMatch = stack.pop();
            if (toMatch && pairs[toMatch] !== s[i]) return false;
        }
    }

    return !stack.length;
}

test(isValid(''), true);
test(isValid('()'), true);
test(isValid('()[]{}'), true);
test(isValid('(]'), false);
test(isValid('([)]'), false);
test(isValid('{[]}'), true);
test(isValid('[(]'), false);
test(isValid('[{()}]'), true);
test(isValid('[{()}]{}'), true);
test(isValid('[{()}]{}[{()}]'), true);
test(isValid('[{()}]{}[{()}]{}'), true);
test(isValid('[{()}]{}[{()}]{}[{()}]'), true);
test(isValid('[{()}]{}[{()}]{}[{()}]{}'), true);
test(isValid('[{()}]{}[{()}]{}[{()}]{}[{()}]'), true);
test(isValid('[{()}]{}[{()}]{}[{()}]{}[{()}]{}'), true);
test(isValid('[{()}]{}[{()}]{}[{()}]{}[{()}]{}[{()}]'), true);
export {};
