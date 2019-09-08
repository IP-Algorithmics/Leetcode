/**
 * Runtime: 4 ms, faster than 49.15% of C++ online submissions for ToLowerCase.
 * Memory Usage: 8.1 MB, less than 94.87% of C++ online submissions for
 * ToLowerCase.
 */
#include <algorithm>
#include <iostream>
#include <string>
using namespace std;

class Solution {
 public:
  string toLowerCase(string str) {
    for (auto& character : str) {
      character = tolower(character);
    }
    return str;
  }
};