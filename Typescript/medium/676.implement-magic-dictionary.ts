// Design a data structure that is initialized with a list of different words. Provided a string, you should determine if you can change exactly one character in this string to match any word in the data structure.
import { test } from '../helpers/test-functions';

// Implement the MagicDictionary class:

// MagicDictionary() Initializes the object.
// void buildDict(String[] dictionary) Sets the data structure with an array of distinct strings dictionary.
// bool search(String searchWord) Returns true if you can change exactly one character in searchWord to match any string in the data structure, otherwise returns false.

// Example 1:
// Input
// ["MagicDictionary", "buildDict", "search", "search", "search", "search"]
// [[], [["hello", "leetcode"]], ["hello"], ["hhllo"], ["hell"], ["leetcoded"]]
// Output
// [null, null, false, true, false, false]

// Explanation
// MagicDictionary magicDictionary = new MagicDictionary();
// magicDictionary.buildDict(["hello", "leetcode"]);
// magicDictionary.search("hello"); // return False
// magicDictionary.search("hhllo"); // We can change the second 'h' to 'e' to match "hello" so we return True
// magicDictionary.search("hell"); // return False
// magicDictionary.search("leetcoded"); // return False

// Constraints:
// 1 <= dictionary.length <= 100
// 1 <= dictionary[i].length <= 100
// dictionary[i] consists of only lower-case English letters.
// All the strings in dictionary are distinct.
// 1 <= searchWord.length <= 100
// searchWord consists of only lower-case English letters.
// buildDict will be called only once before search.
// At most 100 calls will be made to search.

// Runtime: 140 ms, faster than 100.00% of TypeScript online submissions for Implement Magic Dictionary.
// Memory Usage: 48.8 MB, less than 100.00% of TypeScript online submissions for Implement Magic Dictionary.

// Time Complexity: O(n * m), where n is the number of words in the dictionary and m is the length of the longest word.
// Space Complexity: O(n), the space used by the dictionary.
class Node {
    constructor(public value: any, public terminalMarker: boolean = false, public children: Node[] = []) {}
}

class MagicDictionary {
    root: Node = new Node(undefined);

    constructor() {}

    buildDict(dictionary: string[]): void {
        for (let word of dictionary) {
            this.nonRecursiveInsert(word, 0, this.root);
        }
    }

    search(searchWord: string): boolean {
        return this.recursiveSearch(searchWord, 0, this.root);
    }

    // trie insert
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

    private recursiveSearch(word: string, idx: number, node: Node, skippedLetter: boolean = false): boolean {
        // we match only words with 1 letter difference, perfect matches are considered invalid in this problem
        if (idx === word.length) {
            return skippedLetter && node.terminalMarker;
        }

        // instead of finding a match we will try all possibilities ( backtracking would be a better approach )
        return node.children.some((x) => {
            let currentNode = x.value === word.charAt(idx) ? x : null;
            if (skippedLetter && !currentNode) return false;
            const hasSkippedLetter = skippedLetter || !currentNode;
            return this.recursiveSearch(word, idx + 1, x, hasSkippedLetter);
        });
    }
}

const magicDictionary = new MagicDictionary();
magicDictionary.buildDict(['hello', 'leetcode']);
test(magicDictionary.search('hello'), false); // return False
test(magicDictionary.search('hhllo'), true); // We can change the second 'h' to 'e' to match "hello" so we return True
test(magicDictionary.search('hell'), false); // return False
test(magicDictionary.search('leetcoded'), false); // return False

const magicDictionary2 = new MagicDictionary();
magicDictionary2.buildDict(['hello', 'hallo', 'leetcode']);
test(magicDictionary2.search('hello'), true); // return False
test(magicDictionary2.search('hhllo'), true); // We can change the second 'h' to 'e' to match "hello" so we return True
test(magicDictionary2.search('hell'), false); // return False
test(magicDictionary2.search('leetcoded'), false); // return False

export {};

/**
 * Your MagicDictionary object will be instantiated and called as such:
 * var obj = new MagicDictionary()
 * obj.buildDict(dictionary)
 * var param_2 = obj.search(searchWord)
 */
