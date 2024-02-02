#include <vector>
#include <algorithm>

class Solution
{
public:
    int removeElement(std::vector<int> &nums, int val)
    { // Using vector over array, so no index based storage.

        auto newEnd = std::remove(nums.begin(), nums.end(), val);
        // Using the standard library remove function, using the begin() and end() functions to select the whole vector, and using val as the argument to move the arguments we don't want to remove to the front of the range.
        // Elements equal to val are left in the unspecified section of the range
        // auto uses the expression to determine type
        // newEnd is an *iterator* pointing to the new logical end of the range after remove has finished. The new end marks the point where the elements we want to keep finishes, and the elements matching val begin.

        nums.erase(newEnd, nums.end());
        // The erase method finally actually removes the integers we don't want in our vector.
        // using newEnd as the iterator that points to the end of the integers we want to keep, and nums.end() to point to the actual end of the vector, we erase everything from newEnd up to but not including the end() sentinel

        return nums.size();
        // Return the number of elements within nums
    }
};