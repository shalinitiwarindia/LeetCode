/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 */
var FindSumPairs = function(nums1, nums2) {
    this.nums1 = nums1;
    this.nums2 = nums2;

    this.n2Counts = this.nums2.reduce((s, c) => {
        s[c] = (s[c] ?? 0) + 1;
        return s;
    }, []);
    
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
FindSumPairs.prototype.add = function(index, val) {
    const n2 = this.nums2[index];
    this.nums2[index] = n2 + val;
    this.n2Counts[n2]--;
    this.n2Counts[n2 + val] = (this.n2Counts[n2 + val] ?? 0) + 1;
};

/** 
 * @param {number} tot
 * @return {number}
 */
FindSumPairs.prototype.count = function(tot) {
    let result = 0;
    for(let n of this.nums1) {
        if(n < tot) {
            result += (this.n2Counts[tot - n] ?? 0);
        }
    }

    return result;
};

/** 
 * Your FindSumPairs object will be instantiated and called as such:
 * var obj = new FindSumPairs(nums1, nums2)
 * obj.add(index,val)
 * var param_2 = obj.count(tot)
 */
