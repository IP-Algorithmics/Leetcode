/**
 * You're given strings J representing the types of stones that are jewels, and
 * S representing the stones you have. Each character in S is a type of stone
 * you have.
 *
 * You want to know how many of the stones you have are also jewels.
 * The letters in J are guaranteed distinct, and all characters in J and S are
 * letters. Letters are case sensitive, so "a" is considered a different type of
 * stone from "A".
 *
 * Example 1:
 * Input: J = "aA", S = "aAAbbbb"
 * Output: 3
 *
 * Example 2:
 * Input: J = "z", S = "ZZ"
 * Output: 0
 *
 * Note:
 * S and J will consist of letters and have length at most 50.
 * The characters in J are distinct.
 */
#include <algorithm>
#include <iostream>
#include <string>
using namespace std;

/**
 * Runtime: 4 ms, faster than 64.83% of C++ online submissions for Jewels and
 * Stones. Memory Usage: 8.1 MB, less than 98.75% of C++ online submissions for
 * Jewels and Stones.
 */
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