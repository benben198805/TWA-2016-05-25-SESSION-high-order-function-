inputs = [
    {
        barcode: 'ITEM000000',
        name: '可口可乐',
        unit: '瓶',
        price: 3.00

    },
    {
        barcode: 'ITEM000001',
        name: '雪碧',
        unit: '瓶',
        price: 3.50
    },
    {
        barcode: 'ITEM000004',
        name: '电池',
        unit: '个',
        price: 2.00
    }
];

function output(array) {
    var output = "";
    for (var index = 0; index < array.length; index++) {
        for (key in array[index]) {
            output += key + ":" + array[index][key] + ",";
        }
        output += "\n";
    }
    console.log(output);
}

function compare(value1, value2) {
    if (value1.price < value2.price) {
        return -1;
    } else if (value1.price > value2.price) {
        return 1
    } else {
        return 0;
    }
}

output(inputs.sort(compare));