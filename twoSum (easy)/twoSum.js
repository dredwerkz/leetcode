function twoSum(nums, target) {

    const hashTable = {} // Creating a hash table manually rather than a Map()
    
    for (let i = 0; i<nums.length; i++) { // Iterating
     const currentNumber = nums[i]; // Storing the current number inside the array
     
     if (hashTable[target - currentNumber] !== undefined) { // If the difference between currentNumber and the target has been found previously in the loop...
        return [hashTable[target - currentNumber], i]; // Return the indices from hashTable
     }
     
     hashTable[currentNumber] = i // Store the currentNumber as a key with the index as the number
    
    }
    
    }