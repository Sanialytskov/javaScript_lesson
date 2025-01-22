const getMinSquaredNumber = arr => {
    if (!Array.isArray(arr) || arr.length === 0) {
        return null;
    }

    const minAbs = Math.min(...arr.map(num => Math.abs(num)));
    return minAbs ** 2;
};

console.log(getMinSquaredNumber([-4, -2, 7, 1, 9]));

export default getMinSquaredNumber;