/**
 * Runtime: 4 ms, faster than 54.13% of C++ online submissions for Defanging an
 * IP Address. Memory Usage: 8.2 MB, less than 100.00% of C++ online submissions
 * for Defanging an IP Address.
 *
 * Given a valid (IPv4) IP address, return a defanged version of that IP
 * address. A defanged IP address replaces every period "." with "[.]".
 *
 * Example 1:
 * Input: address = "1.1.1.1"
 * Output: "1[.]1[.]1[.]1"
 *
 * Example 2:
 * Input: address = "255.100.50.0"
 * Output: "255[.]100[.]50[.]0"
 *
 * Constraints:
 * The given address is a valid IPv4 address.
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