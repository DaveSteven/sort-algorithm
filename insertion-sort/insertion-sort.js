/*
* 插入排序
* 最坏时间复杂度：O(n*n)
* 最优时间复杂度：O(n)
* 平均时间复杂度：O(n*n)
* 最坏空间复杂度：O(1)
* */

function insertion_sort(arr) {

    for (let i = 0, len = arr.length; i <= len; i++) {

        for (let j = i; j >= 0; j--) {

            if (arr[j+1] < arr[j]) {

                let temp = arr[j+1];
                arr[j+1] = arr[j];
                arr[j] = temp;
                // [arr[j+1], arr[j]] = [arr[j], arr[j+1]];

            }

        }

    }

    return arr;
}

const arr = [2, 3, 5, 4, 0, 1, 9, 8, 10, 18, 15, 14, 13, 12];

console.log(insertion_sort(arr));