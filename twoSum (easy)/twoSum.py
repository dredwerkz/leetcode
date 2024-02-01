class Solution(object):
    def twoSum(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: List[int]
        """
        hashTable = {}  # Create a hash table

        for i, currentNumber in enumerate(nums):  # Iterating with index and value - lets use enumerate instead of a counter, too.
            if target - currentNumber in hashTable:  # If we hit bingo in hashTable...
                return [hashTable[target - currentNumber], i]  # ...return the indices!

            hashTable[currentNumber] = i  # Store the current iterated number with its index and move on

        return []  # Return empty list if there's no valid solution