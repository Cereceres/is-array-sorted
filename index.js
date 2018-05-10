module.exports = function isSorted(array) {
    if (array.length <= 2) return true;

    let sortedBy = null;

    for(let i = 0; i < array.length - 1; i++) {
        if (array[i] === array[i + 1] && !sortedBy) continue;

        if (array[i] > array[i + 1] && !sortedBy) sortedBy = 'desc';

        if (array[i] < array[i + 1] && !sortedBy) sortedBy = 'asc';

        if (array[i] < array[i + 1] && sortedBy && sortedBy !== 'asc') return false;

        if (array[i] > array[i + 1] && sortedBy && sortedBy !== 'desc') return false;
    }
    return true;
};
