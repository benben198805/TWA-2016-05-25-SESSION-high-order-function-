function firstAdd(value1,value2,fn,arg)
{
    return fn(value1,arg)+fn(value2,arg);
}
console.log(firstAdd(1,4,Math.sqrt,2));
console.log(firstAdd(1,4,Math.pow,2));



function secondAdd(value1,value2,fn)
{
    return fn(value1)+fn(value2);
}
console.log(secondAdd(-1,2,Math.abs));
console.log(secondAdd(-1,2,function(arg){return 1/arg;}));



