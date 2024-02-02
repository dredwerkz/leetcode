interface HashTable {
    [key: number]: number;
}

function twoSumTS(nums: number[], target: number) {
    const hashTable: HashTable = {};

    for (let i: number = 0; i < nums.length; i++) {
        const currentNumber: number = nums[i];

        if (hashTable[target - currentNumber] !== undefined) {
            return [hashTable[target - currentNumber], i];
        }

        hashTable[currentNumber] = i;
    }
}
