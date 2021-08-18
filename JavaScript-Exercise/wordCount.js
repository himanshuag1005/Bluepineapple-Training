function wordCount(str) {
    if (str.length === 0) {
        return {};
    } 
    var output = {};
    var strArr = str.split(" ")

    for (var i=0; i < strArr.length; i++) {
        var word = strArr[i];
        if (output[word] === undefined) {
            output[word] = 1;
        } else {
            output[word] += 1;
        }
    }
    return output;
    }
    console.log(wordCount("geeks for geeks"));