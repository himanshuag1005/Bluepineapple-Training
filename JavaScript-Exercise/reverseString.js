function reverseString(str){

    if(!str || str.length < 2) {
        return 'Not valid'; 
    }

    var newStr = "";
    for(var i=str.length-1; i>=0; i--){
        newStr += str[i];
    }
    return newStr;
}

console.log(reverseString("Hello World"));