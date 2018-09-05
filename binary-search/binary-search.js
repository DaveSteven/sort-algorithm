/*
*
* 二分查找算法
* 在有序数组中查找某一特定元素
* 最坏时间复杂度：O(log n)
* 最优时间复杂度：O(1)
* 平均时间复杂度O(log n)
* 最坏空间复杂度：迭代 O(1)，递归O(log n)
*
* */

// 迭代版本
function binary_search(arr, left, right, target) {

    let mid = 0;

    while(left <= right) {

        mid = parseInt((left + right) / 2);

        if (arr[mid] < target) {

            left = mid + 1;

        } else if (arr[mid] > target) {

            right = mid - 1;

        } else {

            return mid;

        }

    }

    return -1;

}

const arr = [1, 2, 3, 4, 5, 6, 7];

console.log(binary_search(arr,  0, arr.length - 1, 3));

// 递归版本
function binary_search(arr, left, right, target) {

    if (left > right) {

        return -1;

    }

    let mid = parseInt((left + right) / 2);

    if (arr[mid] < target) {

        return arguments.callee(arr, mid + 1, right, target);

    } else if (arr[mid] > target) {

        return arguments.callee(arr, left, mid - 1, target);

    }

    return mid;

}

const arr = [1, 2, 3, 4, 5, 6, 7];

console.log(binary_search(arr,  0, arr.length - 1, 3));