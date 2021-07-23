// Merge two sorted linked lists and return it as a sorted list.
// The list should be made by splicing together the nodes of the first two lists.

import { test } from '../helpers/test-functions';

// Example 1:
// Input: l1 = [1,2,4], l2 = [1,3,4]
// Output: [1,1,2,3,4,4]

// Example 2:
// Input: l1 = [], l2 = []
// Output: []

// Example 3:
// Input: l1 = [], l2 = [0]
// Output: [0]

// Constraints:
// The number of nodes in both lists is in the range [0, 50].
// -100 <= Node.val <= 100
// Both l1 and l2 are sorted in non-decreasing order.

//  Definition for singly-linked list.
class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}

// Runtime: 88 ms, faster than 82.59% of TypeScript online submissions for Merge Two Sorted Lists.
// Memory Usage: 40.9 MB, less than 65.57% of TypeScript online submissions for Merge Two Sorted Lists.
// Time Complexity: O(n)
// Space Complexity: O(n)
function mergeTwoLists(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    if (l1 === null) return l2;
    if (l2 === null) return l1;

    let rootNode: ListNode;
    if (l1.val > l2.val) {
        rootNode = new ListNode(l2.val);
        l2 = l2.next;
    } else {
        rootNode = new ListNode(l1.val);
        l1 = l1.next;
    }

    let current = rootNode;
    while (l1 || l2) {
        if (l1 && l2) {
            if (l1.val > l2.val) {
                current.next = l2;
                l2 = l2.next;
            } else {
                current.next = l1;
                l1 = l1.next;
            }
        } else if (l1 && l2 === null) {
            current.next = l1;
            l1 = l1.next;
        } else if (l1 === null && l2) {
            current.next = l2;
            l2 = l2.next;
        }
        if (current.next) current = current.next;
    }
    return rootNode;
}

// Runtime: 84 ms, faster than 93.81% of TypeScript online submissions for Merge Two Sorted Lists.
// Memory Usage: 41 MB, less than 46.81% of TypeScript online submissions for Merge Two Sorted Lists.
// Time Complexity: O(l1 + l2) => O(n)
// Space Complexity: O(1)
function mergeTwoListsRecursive(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    if (l1 === null) return l2;
    if (l2 === null) return l1;

    if (l1.val < l2.val) {
        l1.next = mergeTwoListsRecursive(l1.next, l2);
        return l1;
    } else {
        l2.next = mergeTwoListsRecursive(l1, l2.next);
        return l2;
    }
}
const arrayToLinkedList = (array: number[]) => {
    if (array.length === 0) return null;
    const root = new ListNode(array[0]);
    let current = root;
    for (let i = 1; i < array.length; i++) {
        current.next = new ListNode(array[i]);
        current = current.next;
    }
    return root;
};

const linkedListToArray = (l: ListNode | null) => {
    let array: number[] = [];
    while (l !== null) {
        array.push(l.val);
        l = l.next;
    }
    return array;
};

test(linkedListToArray(mergeTwoLists(arrayToLinkedList([1, 2, 4]), arrayToLinkedList([1, 3, 4]))), [1, 1, 2, 3, 4, 4]);
test(linkedListToArray(mergeTwoLists(arrayToLinkedList([]), arrayToLinkedList([]))), []);
test(linkedListToArray(mergeTwoLists(arrayToLinkedList([1]), arrayToLinkedList([]))), [1]);
export {};
