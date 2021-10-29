// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.
import { test } from '../helpers/test-functions';

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// Example 1:

// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.
// Example 2:

// Input: l1 = [0], l2 = [0]
// Output: [0]
// Example 3:

// Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
// Output: [8,9,9,9,0,0,0,1]

// Constraints:

// The number of nodes in each linked list is in the range [1, 100].
// 0 <= Node.val <= 9
// It is guaranteed that the list represents a number that does not have leading zeros.

// Definition for singly-linked list.
class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}

// Runtime: 124 ms, faster than 89.33% of TypeScript online submissions for Add Two Numbers.
// Memory Usage: 44.7 MB, less than 66.01% of TypeScript online submissions for Add Two Numbers.

// Time Complexity: O(n)
// Space Complexity: O(n)
function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    if (!l1 && !l2) return null;
    if (!l1) return l2;
    if (!l2) return l1;

    let reminder = 0;
    let sum = 0;
    let next: ListNode | null = null;
    let root: ListNode | null = null;

    while (l1 || l2) {
        sum = (l1?.val ?? 0) + (l2?.val ?? 0) + reminder;
        reminder = 0;

        if (sum >= 10) {
            reminder = Math.floor(sum / 10);
            sum %= 10;
        }

        const temp = new ListNode(sum);
        if (next) {
            next.next = temp;
        } else {
            next = temp;
            root = next;
        }

        next = temp;
        l1 = l1?.next ?? null;
        l2 = l2?.next ?? null;
    }

    if (reminder !== 0 && next) {
        next.next = new ListNode(reminder);
    }

    return root;
}

const customTest = (arr1: number[], arr2: number[], resultArr: number[]) => {
    const listFromArr = (arr: number[]) => {
        if (!arr || arr.length === 0) return null;
        const root = new ListNode(arr[0]);
        let next = root;
        for (let i = 1; i < arr.length; i++) {
            next.next = new ListNode(arr[i]);
            next = next.next;
        }
        return root;
    };

    const l1 = listFromArr(arr1);
    const l2 = listFromArr(arr2);
    const result = addTwoNumbers(l1, l2);
    let actual: ListNode | null | undefined = result;
    let expected: ListNode | null = listFromArr(resultArr);
    while (expected) {
        test(actual?.val, expected?.val);
        actual = actual?.next;
        expected = expected.next;
    }
};
customTest([2, 4, 3], [5, 6, 4], [7, 0, 8]);
console.log('\n');
customTest([9, 9, 9, 9, 9, 9, 9], [9, 9, 9, 9], [8, 9, 9, 9, 0, 0, 0, 1]);

console.log('\n');
customTest([2, 4, 3], [5, 6, 4], [7, 0, 8]);

export {};
