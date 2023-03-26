function oddAndEvenNumber(arr) {
    let arrNum = [0, 0, 0];

    for (let i = 0; i < arr.length; i++) {
        if ((arr[i] === 0) || (typeof (arr[i]) != 'number')) {
            arrNum[0]++;
        } else {
            if (arr[i] % 2 === 0) {
                arrNum[1]++;
            } else {
                arrNum[2]++;
            }
        }
    }

    return arrNum;
}


let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'd', null, 'e'];

let arrNum = oddAndEvenNumber(arr);

console.log("Even is " + arrNum[1]++);
console.log("Odd is " + arrNum[2]);
console.log("Other is " + arrNum[0]);