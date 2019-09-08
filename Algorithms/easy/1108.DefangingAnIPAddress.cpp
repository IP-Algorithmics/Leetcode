/**
 * Runtime: 4 ms, faster than 54.13% of C++ online submissions for Defanging an
 * IP Address. Memory Usage: 8.2 MB, less than 100.00% of C++ online submissions
 * for Defanging an IP Address.
 */
#include <algorithm>
#include <iostream>
#include <string>
using namespace std;

class Solution {
 public:
  void replaceAll(std::string& str, std::string str_find,
                  std::string str_replace) {
    size_t index = 0;
    while (true) {
      index = str.find(str_find, index);
      if (index == std::string::npos) break;
      str.replace(index, str_find.length(), str_replace);
      index += str_replace.length();
    }
  }
  string defangIPaddr(string address) {
    replaceAll(address, ".", "[.]");
    return address;
  }
};