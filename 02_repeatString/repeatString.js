const repeatString = function(string, num) {
    let i = 1
    if(num === 0 || string === "") {
        return ""
    } else if(num < 0) {
        return "ERROR"
    }

    while (i < num) {
        string += "hey"
        i++
    }
    return string
};

// Do not edit below this line
module.exports = repeatString;
