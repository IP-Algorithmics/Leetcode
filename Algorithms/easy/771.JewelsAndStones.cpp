/**
 * Runtime: 4 ms, faster than 64.83% of C++ online submissions for Jewels and
 * Stones. Memory Usage: 8.1 MB, less than 98.75% of C++ online submissions for
 * Jewels and Stones.
 */
#include <algorithm>
#include <iostream>
#include <string>
using namespace std;

class Solution {
 public:
  int countChar(std::string& str, char& c) {
    return std::count(str.begin(), str.end(), c);
  }
  int numJewelsInStones(string J, string S) {
    int sum = 0;
    for (auto c : J) {
      sum += countChar(S, c);
    }
    return sum;
  }
};