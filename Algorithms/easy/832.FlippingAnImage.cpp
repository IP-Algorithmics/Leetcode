/**
 * Runtime: 12 ms, faster than 70.48% of C++ online submissions for Flipping an
 * Image. Memory Usage: 9.2 MB, less than 100.00% of C++ online submissions for
 * Flipping an Image.
 */
#include <algorithm>
#include <iostream>
#include <vector>

using namespace std;

class Solution {
 public:
  vector<vector<int>> flipAndInvertImage(vector<vector<int>>& A) {
    for (auto& row : A) {
      reverse(row.begin(), row.end());
      for (auto& num : row) {
        num = num ^ 1;
      }
    }
    return A;
  }
};