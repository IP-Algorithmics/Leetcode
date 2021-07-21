/**
 * Given an array of integers A sorted in non-decreasing order, return an array
 * of the squares of each number, also in sorted non-decreasing order.
 *
 * Example 1:
 * Input: [-4,-1,0,3,10]
 * Output: [0,1,9,16,100]
 *
 * Example 2:
 * Input: [-7,-3,2,3,11]
 * Output: [4,9,9,49,121]
 *
 * Note:
 * 1 <= A.length <= 10000
 * -10000 <= A[i] <= 10000
 * A is sorted in non-decreasing order.
 */
#include <algorithm>
#include <iostream>
#include <vector>
using namespace std;

/**
 * Runtime: 116 ms, faster than 51.12% of C++ online submissions for Squares of
 * a Sorted Array. Memory Usage: 13.3 MB, less than 98.65% of C++ online
 * submissions for Squares of a Sorted Array.
 */
class Solution {
 public:
  vector<int> sortedSquares(vector<int>& A) {
    for (auto& element : A) {
      element *= element;
    }
    sort(A.begin(), A.end());
    return A;
  }
};