// Given an m x n grid of characters board and a string word, return true if word exists in the grid.
// The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once.
import { test } from '../helpers/test-functions';

// Example 1:
// Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
// Output: true

// Example 2:
// Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "SEE"
// Output: true

// Example 3:
// Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCB"
// Output: false

// Constraints:
// m == board.length
// n = board[i].length
// 1 <= m, n <= 6
// 1 <= word.length <= 15
// board and word consists of only lowercase and uppercase English letters.
// Follow up: Could you use search pruning to make your solution faster with a larger board?

// Runtime: 571 ms, faster than 48.69% of TypeScript online submissions for Word Search.
// Memory Usage: 40.1 MB, less than 100.00% of TypeScript online submissions for Word Search.

// Time Complexity: O(m*n*word.length)
// Space Complexity: O(m*n)
function exist(board: string[][], word: string): boolean {
    const m = board.length;
    const n = board[0].length;

    // create a visited matrix to track visited cells
    const visited = Array(m)
        .fill(0)
        .map(() => Array(n).fill(false));

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (dfs(board, word, i, j, 0, visited)) {
                return true;
            }
        }
    }

    return false;

    function dfs(board: string[][], word: string, i: number, j: number, letterIdx: number, visited: boolean[][]): boolean {
        if (letterIdx === word.length) {
            return true;
        }

        // if we are out of bounds or the cell is already visited or the character on board is not equal to the current character in the word
        if (i < 0 || i >= m || j < 0 || j >= n || visited[i][j] || board[i][j] !== word[letterIdx]) {
            return false;
        }

        // marked as visited for the next recursive calls
        visited[i][j] = true;

        // check all the possible directions (up, down, left, right)
        const res =
            dfs(board, word, i + 1, j, letterIdx + 1, visited) ||
            dfs(board, word, i - 1, j, letterIdx + 1, visited) ||
            dfs(board, word, i, j + 1, letterIdx + 1, visited) ||
            dfs(board, word, i, j - 1, letterIdx + 1, visited);

        // reset matrix spot to unvisited
        visited[i][j] = false;

        return res;
    }
}

test(
    exist(
        [
            ['A', 'B', 'C', 'E'],
            ['S', 'F', 'C', 'S'],
            ['A', 'D', 'E', 'E'],
        ],
        'ABCCED'
    ),
    true
);
test(
    exist(
        [
            ['A', 'B', 'C', 'E'],
            ['S', 'F', 'C', 'S'],
            ['A', 'D', 'E', 'E'],
        ],
        'SEE'
    ),
    true
);
test(
    exist(
        [
            ['A', 'B', 'C', 'E'],
            ['S', 'F', 'C', 'S'],
            ['A', 'D', 'E', 'E'],
        ],
        'ABCB'
    ),
    false
);

export {};
