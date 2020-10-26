/* 
 * ask the user to enter 20 numbers
 * find the lowest, the highest, the total, and the average of the numbers
 */
let numberList = [];

for (i = 1; i <= 20; i++) {
    numberList.push(prompt("Enter number " + i + ": "));
}

let smallest = Number(numberList[0]);

for (i = 1; i < numberList.length; i++) {
    if (Number(numberList[i]) < smallest) {
        smallest = Number(numberList[i]);
    }
}


