/**
 * bMath.js: Top-level include defining BetterMath.
 *
 * (C) 2021 Norbert Norbix Grudzien
 * MIT LICENCE
 */

'use strict';


const { util } = require('./utils/util.js');


exports.bMath = {
    random(min, max) {
        if (typeof min === 'undefined') min = 0;
        else min = util.float2int(min);
        if (typeof max === 'undefined') max = 100;
        else max = util.float2int(max);

        if (!isNaN(min) && !isNaN(max))
            return Math.floor(Math.random() * (max - min + 1)) + min;
        else return 'NaN';
    },
    randomFloat(min, max, limit) {
        if (typeof limit === 'undefined')
            limit = 2;
        else if (limit > 100 || limit < 0)
            limit = 2;
        else util.float2int(limit);
        if (!isNaN(min) && !isNaN(max))
            return (Math.random() * (max - min) + min).toFixed(limit);
        else return 'NaN';
    },
    randomString(array) {
        //
    },
    quickSort(items, left, right) {
        var index;
        if (items.length > 1) {
            index = util.partition(items, left, right); 
            if (left < index - 1) {
                this.quickSort(items, left, index - 1);
            }
            if (index < right) {
                this.quickSort(items, index, right);
            }
        }
        return items;
    }
}

