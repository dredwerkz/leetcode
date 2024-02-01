/*

Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The order of the elements may be changed. Then return the number of elements in nums which are not equal to val.

Consider the number of elements in nums which are not equal to val be k, to get accepted, you need to do the following things:

Change the array nums such that the first k elements of nums contain the elements which are not equal to val. The remaining elements of nums are not important as well as the size of nums.
Return k.

*/

/** First Solution: */
// My other idea was to build an object containing all values and their indices and slice them all in one go.

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */

var removeElement = function (nums, val) {
    while (nums.indexOf(val) > -1) {
        // if val exists within nums, the indexOf method will return the index of an integer we want to remove.
        nums.splice(nums.indexOf(val), 1); // Using the index we splice the entry, mutating nums allowing us to...
    } // ...run the while loop again, re-running the indexOf method to see if more occurences of val exist.

    return nums.length; // Once the while condition is false, we return "k".
};

/** Second Solution: */

var removeElement = function (nums, val) {
    let k = 0; // Setting up variable we'll use to determine both the index we want to edit and the count of non-matching integers
    for (let i = 0; i < nums.length; i++) {
        // Standard loop tied to array length

        if (nums[i] != val) {
            // If the integer does not match val...
            nums[k++] = nums[i]; // ...we use k's value to pull the non-matching integer to the 'front' of the array, overwriting any matching integers
        }
    } // Loop's over and the non-matching integers are all pulled through to the front, with the trailing integers being irrelevant. k is an accurate count of (nums.length - instances of val)
    return k;
};
