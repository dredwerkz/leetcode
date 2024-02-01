class Solution(object):
    def removeElement(self, nums, val):
        """
        :type nums: List[int]
        :type val: int
        :rtype: int
        """
        nums[:] = [x for x in nums if x != val] # Using list comprehension to create a new list matching our criteria. nums[:] modifies our original list rather than creating a new one.
        return len(nums)
