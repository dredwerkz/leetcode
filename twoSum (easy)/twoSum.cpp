#include <vector>
#include <unordered_map>

class Solution {
public:
std::vector<int> twoSum(std::vector<int>& nums, int target) {
    std::unordered_map<int, int> hashTable; // Using std library's unordered_map and naming it hashTable as an equivalent to our map object in JS

    for (int i = 0; i < nums.size(); ++i) { // standard iterator
        int currentNumber = nums[i];

        auto iterator = hashTable.find(target - currentNumber); // Check if iterator exists within our hash table already
        if (iterator != hashTable.end()) { // if iterator != hashTable.end() that implies that hashTable.find() found the key, and that iterator points to the key-value pair we need
            return {iterator->second, i}; // Return the solution indices
        }

        hashTable[currentNumber] = i; // Store currentNumber with its index into our hashTable before moving on in the loop.
    }

    return {}; // Return an empty vector if no solution is found
}
};