let arr;

function initArray(n) {
  arr = new Array(n);
}

function fillArray(min,max) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = Math.floor(Math.random() * (max - min + 1)) + min;
    }
}

function replaceArray() {
    for (let i = 0 ; i < arr.length; i++)
        if (arr[i] < 0)
            arr[i] = 0;
}

function addToArray(val, n) {
    let temp = [];
    let count = n;
    for (let i = 0; i < arr.length; i++) {
        temp.push(arr[i]);
        if (arr[i] == 0) {
            count--;
            if (count == 0) {
                temp.push(-1);
                count = n;
            }
        }
    }
    arr = temp;
}

function printArray() {
    console.log(arr);
}

initArray(5);
fillArray(-100, 100);
printArray();
replaceArray();
printArray();
addToArray(-1, 2);
printArray();