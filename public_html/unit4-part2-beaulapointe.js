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

let largest = Number(numberList[0]);

for (i = 1; i < numberList.length; i++) {
    if (Number(numberList[i]) > largest) {
        largest = Number(numberList[i]);
    }
}

let sum = 0;

for (i = 0; i < numberList.length; i++) {
    sum = sum + Number(numberList[i]);
}

let average = sum / numberList.length;

document.write("The lowest number is " + smallest + "<br>");
document.write("The highest number is " + largest + "<br>");
document.write("The total is " + sum + "<br>");
document.write("The mean is " + average);

