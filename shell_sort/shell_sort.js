/*
* 希尔排序
* 最坏时间复杂度：根据步长的序列不同而不同。已知最好的：o(n log^2 n)
* 最优时间复杂度：O(n)
* 平均时间复杂度：根据步长序列的不同而不同
* 最坏空间复杂度：O(n)
* */

function shell_sort(arr, length) {

    let gap = length / 2;

    while(gap >= 1) {

        /*
        * 实际上就是把插入排序i的初始值换成了步长
        * */
        for (let i = gap, len = arr.length; i < len; i++) {

            for (let j = i; j >= gap; j -= gap) {

                if (arr[j] < arr[j - gap]) {

                    let temp = arr[j];
                    arr[j] = arr[j-gap];
                    arr[j-gap] = temp;

                }

            }

        }

        gap = parseInt(gap/2);

    }

    return arr;
}

const arr = [93, 42, 37, 24, 1, 3];

console.log(shell_sort(arr, arr.length));