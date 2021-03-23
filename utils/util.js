
/**
 * Module exports.
 */

exports.util = {
    float2int(val) {
        return val | 0;
    },
    swap(items, leftIndex, rightIndex) {
        var temp = items[leftIndex];
        items[leftIndex] = items[rightIndex];
        items[rightIndex] = temp;
    },
    partition(items, left, right) {
        var pivot   = items[Math.floor((right + left) / 2)],
            i       = left,
            j       = right;
        while (i <= j) {
            while (items[i] < pivot) {
                i++;
            }
            while (items[j] > pivot) {
                j--;
            }
            if (i <= j) {
                this.swap(items, i, j);
                i++;
                j--;
            }
        }
        return i;
    }
}