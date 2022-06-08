const removeFromArray = function(...args) {
    const arrays = args[0]
    return arrays.filter(array => !args.includes(array))
};

// Do not edit below this line
module.exports = removeFromArray;