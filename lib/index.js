"use strict";

/**
 * regexSort
 * Sort an array of strings using regex patterns.
 *
 * @name regexSort
 * @function
 * @param {Array} list An array of strings.
 * @param {Array} patterns An array of regular expressions used in sorting.
 * @returns {Array} A new array containing the sorted elements.
 */
module.exports = function regexSort (list, patterns) {
    function presetIndex(input) {
        for (var i = 0; i < patterns.length; ++i) {
            if (patterns[i].test(input)) {
                return i;
            }
        }
        return Infinity;
    }

    let indexes = list.map(c => ({
        input: c,
        index: presetIndex(c)
    }));

    indexes.sort(
        (a, b) => a.index < b.index ? -1 : 1
    );

    return indexes.map(c => c.input);
};
