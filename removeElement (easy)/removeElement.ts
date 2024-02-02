function removeElementTS(nums: number[], val: number): number {
    let k: number = 0; // Setting up variable we'll use to determine both the index we want to edit and the count of non-matching integers
for (let i: number = 0; i < nums.length; i++) {
    // Standard loop tied to array length

    if (nums[i] != val) {
        // If the integer does not match val...
        nums[k++] = nums[i]; // ...we use k's value to pull the non-matching integer to the 'front' of the array, overwriting any matching integers
    }
} // Loop's over and the non-matching integers are all pulled through to the front, with the trailing integers being irrelevant. k is an accurate count of (nums.length - instances of val)
return k;
};