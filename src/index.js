// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (typeof matrix == "undefined" || matrix.length == 0) {
        return [];
    } else {
        for (let i = 1; i < matrix.length; i = i + 2) {
            matrix[i] = matrix[i].reverse();
        }
        matrix = matrix.join(",");
        matrix = matrix.split(",");
        for (let i = 0; i < matrix.length; i++) {
            matrix[i] = Number(matrix[i]);
        }
        return matrix;
    }
};
