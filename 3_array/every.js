inputs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(inputs);

var resultEvery = inputs.every(function (item) {
    return (item > 5);
});
console.log("is every element > 5 ? " + resultEvery);

var resultSome = inputs.some(function (item) {
    return (item > 5);
});
console.log("is some element > 5 ? " + resultSome);


var resultFilter = inputs.filter(function (item) {
    return (item > 5);
});
console.log("element > 5 : " + resultFilter);

var resultForEach = [];
inputs.forEach(function (item,index,array) {
    resultForEach.push(++item);
    // array[index]=++item;
});
console.log("all element add 1 :" + resultForEach);


var resultMap = inputs.map(function (item) {
    return item * item;
});
console.log("all element's quadratic :" + resultMap);