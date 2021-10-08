// Given an array of strings words representing an English Dictionary,
// return the longest word in words that can be built one character at a time by other words in words.
import { test } from '../helpers/test-functions';

// If there is more than one possible answer, return the longest word with the smallest lexicographical order.
// If there is no answer, return the empty string.

// Example 1:
// Input: words = ["w","wo","wor","worl","world"]
// Output: "world"
// Explanation: The word "world" can be built one character at a time by "w", "wo", "wor", and "worl".

// Example 2:
// Input: words = ["a","banana","app","appl","ap","apply","apple"]
// Output: "apple"
// Explanation: Both "apply" and "apple" can be built from other words in the dictionary. However, "apple" is lexicographically smaller than "apply".

// Constraints:
// 1 <= words.length <= 1000
// 1 <= words[i].length <= 30
// words[i] consists of lowercase English letters.

// Runtime: 108 ms, faster than 80.00% of TypeScript online submissions for Longest Word in Dictionary.
// Memory Usage: 50.1 MB, less than 20.00% of TypeScript online submissions for Longest Word in Dictionary.

// Time Complexity: O(n * m), where n is the number of words in the dictionary and m is the length of the longest word in the dictionary.
// Space Complexity: O(n * m), where n is the number of words in the dictionary and m is the length of the longest word in the dictionary.
class Node {
    constructor(public value: any, public terminalMarker: boolean = false, public children: Node[] = []) {}
}

class Trie {
    root: Node = new Node(undefined);
    constructor() {}
    buildDict(dictionary: string[]): void {
        for (let word of dictionary) {
            this.nonRecursiveInsert(word, 0, this.root);
        }
    }

    searchLongestWordFromTerminalNodes(node: Node = this.root): string[] {
        let maxArr: string[] = [];
        let sorted = node.children.sort((a, b) => a.value.localeCompare(b.value));
        for (let child of sorted) {
            if (child.terminalMarker) {
                let arr = [child.value, ...this.searchLongestWordFromTerminalNodes(child)];
                if (arr.length > maxArr.length) {
                    maxArr = arr;
                }
            }
        }
        return maxArr;
    }
    private nonRecursiveInsert(word: string, idx: number, node: Node) {
        while (idx < word.length) {
            let currentNode = node.children.find((x) => x.value === word.charAt(idx));
            if (!currentNode) {
                currentNode = new Node(word.charAt(idx), idx === word.length - 1);
                node.children.push(currentNode);
            }

            if (idx === word.length - 1) {
                currentNode.terminalMarker = true;
            }

            node = currentNode;
            idx++;
        }
    }
}
// another solution would be to insert the word into the trie in lexicographical order and on insert check if the character before the last character is a terminal marker.
// if it is, then we can add the word into the trie and mark it as the longest word.
function longestWord(words: string[]): string {
    const dict = new Trie();
    dict.buildDict(words);
    return dict.searchLongestWordFromTerminalNodes().join('');
}

test(longestWord(['w', 'wo', 'wor', 'worl', 'world']), 'world');
test(longestWord(['a', 'banana', 'app', 'appl', 'ap', 'apply', 'apple']), 'apple');

export {};
