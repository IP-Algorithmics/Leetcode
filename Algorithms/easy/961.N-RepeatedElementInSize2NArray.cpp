/**
 * In a array A of size 2N, there are N+1 unique elements, and exactly one of
 * these elements is repeated N times. Return the element repeated N times.
 *
 * Example 1:
 * Input: [1,2,3,3]
 * Output: 3
 *
 * Example 2:
 * Input: [2,1,2,5,3,2]
 * Output: 2
 *
 * Example 3:
 * Input: [5,1,5,2,5,3,5,4]
 * Output: 5
 *
 * Note:
 * 4 <= A.length <= 10000
 * 0 <= A[i] < 10000
 * A.length is even
 */
#include <algorithm>
#include <iostream>
#include <map>
#include <string>
#include <unordered_set>
#include <vector>

using namespace std;
/**
 * Runtime: 44 ms, faster than 54.37% of C++ online submissions for N-Repeated
 * Element in Size 2N Array. Memory Usage: 10.7 MB, less than 70.00% of C++
 * online submissions for N-Repeated Element in Size 2N Array.
 */
class Solution {
 public:
  int repeatedNTimes(vector<int>& A) {
    for (auto& element : A) {
      if (count(A.begin(), A.end(), element) != 1) {
        return element;
      }
    }
    return 0;
  }
};

/**
 * Runtime: 44 ms, faster than 54.37% of C++ online submissions for N-Repeated
 * Element in Size 2N Array.
 *
 * Memory Usage: 10.9 MB, less than 10.00% of C++ online submissions for
 * N-Repeated Element in Size 2N Array.
 */
class Solution {
 public:
  int repeatedNTimes(vector<int>& A) {
    unordered_set<string> setA;
    for (auto& element : A) {
      if (!setA.insert(to_string(element)).second) {
        return element;
      }
    }
    return 0;
  }
};