/**
 * 冒泡排序
 * 时间复杂度：O(n2)
 * 空间复杂度：O(1)
 * @type {number[]}
 */

let arr1 = [1, 3, 4, 5, 2, 9, 7, 0];

function bubbleSort(arr) {

    for (let i = 0, len = arr.length; i < len; i++) {

        for (let j = 0; j < len - 1; j++) {

            if (arr[j] > arr[j+1]) {

                [arr[j], arr[j+1]] = [arr[j+1], arr[j]];

            }
        }

    }

}

bubbleSort(arr1)

console.log(arr1)