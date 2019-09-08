/**
 * Runtime: 0 ms, faster than 100.00% of C++ online submissions for Unique Morse
 * Code Words.
 * Memory Usage: 8.8 MB, less than 100.00% of C++ online submissions
 * for Unique Morse Code Words.
 */
#include <algorithm>
#include <array>
#include <iostream>
#include <string>
#include <unordered_set>
#include <vector>

using namespace std;

class Solution {
 private:
  array<string, 26> morseCode = {
      ".-",   "-...", "-.-.", "-..",  ".",   "..-.", "--.",  "....", "..",
      ".---", "-.-",  ".-..", "--",   "-.",  "---",  ".--.", "--.-", ".-.",
      "...",  "-",    "..-",  "...-", ".--", "-..-", "-.--", "--.."};

 public:
  int uniqueMorseRepresentations(vector<string>& words) {
    unordered_set<string> convertedWords;

    for (auto& str : words) {
      string word;
      for (auto& character : str) {
        word += morseCode[character - 'a'];
      }
      convertedWords.insert(word);
    }
    return convertedWords.size();
  }
};