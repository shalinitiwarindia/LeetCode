/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    if (!list1) return list2; // If one list is empty, return the other
    if (!list2) return list1;

    // Ensure list1 starts with the smaller head value
    if (list1.val > list2.val) {
        [list1, list2] = [list2, list1];
    }

    let head = list1;

    while (list1 && list2) {
        let temp = null;
        while (list1 && list1.val <= list2.val) {
            temp = list1;
            list1 = list1.next;
        }
        // Link temp node (end of list1 segment) to list2's smaller node
        temp.next = list2;
        // Swap list1 and list2
        [list1, list2] = [list2, list1];
    }

    return head;
};
