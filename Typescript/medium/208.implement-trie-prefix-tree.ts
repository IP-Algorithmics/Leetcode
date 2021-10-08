// A trie (pronounced as "try") or prefix tree is a tree data structure used to efficiently store and retrieve keys in a dataset of strings.
// There are various applications of this data structure, such as autocomplete and spellchecker.
import { test } from '../helpers/test-functions';

// Implement the Trie class:

// Trie() Initializes the trie object.
// void insert(String word) Inserts the string word into the trie.
// boolean search(String word) Returns true if the string word is in the trie (i.e., was inserted before), and false otherwise.
// boolean startsWith(String prefix) Returns true if there is a previously inserted string word that has the prefix prefix, and false otherwise.

// Example 1:
// Input
// ["Trie", "insert", "search", "search", "startsWith", "insert", "search"]
// [[], ["apple"], ["apple"], ["app"], ["app"], ["app"], ["app"]]
// Output
// [null, null, true, false, true, null, true]

// Explanation
// Trie trie = new Trie();
// trie.insert("apple");
// trie.search("apple");   // return True
// trie.search("app");     // return False
// trie.startsWith("app"); // return True
// trie.insert("app");
// trie.search("app");     // return True

// Constraints:
// 1 <= word.length, prefix.length <= 2000
// word and prefix consist only of lowercase English letters.
// At most 3 * 104 calls in total will be made to insert, search, and startsWith.

// Recursive solution
// Runtime: 224 ms, faster than 57.38% of TypeScript online submissions for Implement Trie (Prefix Tree).
// Memory Usage: 58.4 MB, less than 36.89% of TypeScript online submissions for Implement Trie (Prefix Tree).

// Sequential solution
// Runtime: 204 ms, faster than 87.70% of TypeScript online submissions for Implement Trie (Prefix Tree).
// Memory Usage: 56.4 MB, less than 76.23% of TypeScript online submissions for Implement Trie (Prefix Tree).
// Time Complexity: O(n) for all operations.
// Space Complexity: O(n) for all operations.
class Node {
    constructor(public value: any, public terminalMarker: boolean = false, public children: Node[] = []) {}
}

class Trie {
    root: Node = new Node(undefined);
    constructor() {}

    insert(word: string): void {
        // this.recursiveInsert(word, 0, this.root);
        this.nonRecursiveInsert(word, 0, this.root);
    }

    search(word: string): boolean {
        // return this.recursiveSearch(word, 0, this.root);
        return this.nonRecursiveSearch(word, 0, this.root);
    }

    startsWith(prefix: string): boolean {
        // return this.recursiveSearch(prefix, 0, this.root, false);
        return this.nonRecursiveSearch(prefix, 0, this.root, false);
    }

    private recursiveInsert(word: string, idx: number, node: Node) {
        if (idx === word.length) return;

        let currentNode = node.children.find((x) => x.value === word.charAt(idx));
        if (!currentNode) {
            currentNode = new Node(word.charAt(idx), idx === word.length - 1);
            node.children.push(currentNode);
        }

        if (idx === word.length - 1) {
            currentNode.terminalMarker = true;
        }

        this.recursiveInsert(word, idx + 1, currentNode);
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

    private recursiveSearch(word: string, idx: number, node: Node, checkTerminalMarker: boolean = true) {
        if (checkTerminalMarker) {
            if (idx === word.length && node.terminalMarker) return true;
        } else {
            if (idx === word.length) return true;
        }

        let currentNode = node.children.find((x) => x.value === word.charAt(idx));
        if (!currentNode) {
            return false;
        }

        return this.recursiveSearch(word, idx + 1, currentNode, checkTerminalMarker);
    }

    private nonRecursiveSearch(word: string, idx: number, node: Node, checkTerminalMarker: boolean = true) {
        while (idx <= word.length) {
            if (checkTerminalMarker) {
                if (idx === word.length && node.terminalMarker) return true;
            } else {
                if (idx === word.length) return true;
            }

            let currentNode = node.children.find((x) => x.value === word.charAt(idx));
            if (!currentNode) {
                return false;
            }

            node = currentNode;
            idx++;
        }
        return false;
    }
}

// Test
const trie = new Trie();
trie.insert('apple');
test(trie.search('apple'), true); // return True
test(trie.search('app'), false); // return False
test(trie.startsWith('app'), true); // return True
trie.insert('app');
test(trie.search('app'), true); // return True

export {};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
