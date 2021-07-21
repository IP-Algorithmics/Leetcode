/**
 * Given an array A of non-negative integers, return an array consisting of all
 * the even elements of A, followed by all the odd elements of A. You may return
 * any answer array that satisfies this condition. Example 1: Input: [3,1,2,4]
 * Output: [2,4,3,1]
 * The outputs [4,2,3,1], [2,4,1,3], and [4,2,1,3] would also be accepted.
 * Note:
 * 1 <= A.length <= 5000
 * 0 <= A[i] <= 5000
 */
#include <algorithm>
#include <iostream>
#include <vector>
using namespace std;

/**
 * Runtime: 24 ms, faster than 97.55% of C++ online submissions for Sort Array
 * By Parity. Memory Usage: 10.2 MB, less than 10.35% of C++ online submissions
 * for Sort Array By Parity.
 */
class Solution {
 public:
  vector<int> sortArrayByParity(vector<int>& A) {
    vector<int> even, odd;
    for (const auto& n : A) {
      if (n % 2 == 0) {
        even.push_back(n);
      } else {
        odd.push_back(n);
      }
    }
    std::move(odd.begin(), odd.end(), back_inserter(even));
    return even;
  }
};

/**
 *
 * Runtime: 28 ms, faster than 76.66% of C++ online submissions for Sort Array
 * By Parity. Memory Usage: 9.5 MB, less than 100.00% of C++ online submissions
 * for Sort Array By Parity.
 */

class Solution {
 public:
  vector<int> sortArrayByParity(vector<int>& A) {
    auto is_even = [](auto e) { return e % 2 == 0; };
    partition(A.begin(), A.end(), is_even);
    return A;
  }
};

/**
 * Runtime: 24 ms, faster than 97.55% of C++ online submissions for Sort Array
 * By Parity. Memory Usage: 9.7 MB, less than 72.41% of C++ online submissions
 * for Sort Array By Parity.
 */
class Solution {
 public:
  vector<int> sortArrayByParity(vector<int>& A) {
    std::sort(A.begin(), A.end(),
              [](auto& a, auto& b) { return a % 2 < b % 2; });
    return A;
  }
};
