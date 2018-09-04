/**
 * 快速排序
 * 时间复杂度：O(n log n)
 * 空间复杂度：O(log n)
 * @param arr
 * @param left
 * @param right
 */

function quickSort(arr, left, right) {

    if (left >= right) {
        return;
    }

    const TEMP = arr[left];  // 基准值
    let l = left;           // 左侧下标
    let r = right;          // 右侧下标

    while(r > l) {
        // 从右向左查找小于TEMP的值
        while(r > l && arr[r] >= TEMP) {
            r--;
        }

        // 从左向右查找比TEMP大的值
        while(r > l && arr[l] <= TEMP) {
            l++;
        }

        [arr[l], arr[r]] = [arr[r], arr[l]];
    }

    // 交换基准值
    [arr[left], arr[l]] = [arr[l], arr[left]];

    arguments.callee(arr, left, l - 1);
    arguments.callee(arr, l + 1, right);

}

let arr1 = [2, 1, 3, 5, 4];

quickSort(arr1, 0, arr1.length - 1);

console.log(arr1);