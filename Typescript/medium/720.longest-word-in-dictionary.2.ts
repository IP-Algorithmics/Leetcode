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

// Runtime: 132 ms, faster than 80.00% of TypeScript online submissions for Longest Word in Dictionary.
// Memory Usage: 48.7 MB, less than 20.00% of TypeScript online submissions for Longest Word in Dictionary.

// Time Complexity: O(n * m), where n is the number of words in the dictionary and m is the length of the longest word in the dictionary.
// Space Complexity: O(n * m), where n is the number of words in the dictionary and m is the length of the longest word in the dictionary.
class Node {
    constructor(public value: any, public terminalMarker: boolean = false, public children: Node[] = []) {}
}

class Trie {
    root: Node = new Node(undefined, true);
    constructor() {}
    buildDictWithInsertionLimit(dictionary: string[]) {
        let lastWord: string = '';
        let sorted = dictionary.sort((a, b) => a.localeCompare(b));
        for (let word of sorted) {
            const str = this.insertOnlyWordsDifferentByOneLetter(word, 0, this.root);
            if (str && str.length > lastWord.length) {
                lastWord = str;
            }
        }
        return lastWord;
    }

    private insertOnlyWordsDifferentByOneLetter(word: string, idx: number, node: Node) {
        while (idx < word.length && node) {
            let currentNode = node.children.find((x) => x.value === word.charAt(idx));
            if (!currentNode && idx === word.length - 1 && node.terminalMarker) {
                currentNode = new Node(word.charAt(idx), idx === word.length - 1);
                node.children.push(currentNode);
                return word;
            }

            if (currentNode) {
                if (idx === word.length - 1) {
                    currentNode.terminalMarker = true;
                }
                if (node) {
                    node = currentNode;
                    idx++;
                }
            } else {
                return '';
            }
        }
    }
}

function longestWord(words: string[]): string {
    const dict = new Trie();
    return dict.buildDictWithInsertionLimit(words);
}

test(longestWord(['w', 'wo', 'wor', 'worl', 'world']), 'world');
test(longestWord(['a', 'banana', 'app', 'appl', 'ap', 'apply', 'apple']), 'apple');

export {};
