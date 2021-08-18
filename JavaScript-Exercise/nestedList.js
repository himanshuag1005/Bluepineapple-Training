/*const arr1 = [0, 1, 2, [3, 4]];
console.log(arr1.flat());

const arr2 = [0, 1, 2, [[[3, 4]]]];
console.log(arr2.flat(2));*/

var salary = [
    ["ABC", 24, 18000],
    ["EFG", 30, 30000],
    ["IJK", 28, 41000],
    ["EFG", 31, 28000],
 ];

function nestedList(arr) {
    let singleList = [];
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            singleList = singleList.concat(nestedList(arr[i]))
        } else
            singleList.push(arr[i]);
    }
    return singleList;
}

console.log(nestedList(salary));


