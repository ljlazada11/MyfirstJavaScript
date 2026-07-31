const numTxt = document.getElementById("num");
const numbersTxt = document.getElementById("numbers");
const sumTxt = document.getElementById("sum");
const highestTxt = document.getElementById("highest");
const lowestTxt = document.getElementById("lowest");

let numbers = [];

function insertNumber() {

    if (numTxt.value !== "") {

        numbers.push(parseInt(numTxt.value));

        let output = "";
        let sum = 0;
        let highest = numbers[0];
        let lowest = numbers[0];

        for (let i = 0; i < numbers.length; i++) {

            output += numbers[i] + "<br>";

            sum += numbers[i];

            if (numbers[i] > highest) {
                highest = numbers[i];
            }

            if (numbers[i] < lowest) {
                lowest = numbers[i];
            }
        }

        numbersTxt.innerHTML = output;
        sumTxt.innerHTML = sum;
        highestTxt.innerHTML = highest;
        lowestTxt.innerHTML = lowest;

        numTxt.value = "";
    }
}

function deleteAll() {

    numbers = [];

    numTxt.value = "";
    numbersTxt.innerHTML = "";
    sumTxt.innerHTML = "";
    highestTxt.innerHTML = "";
    lowestTxt.innerHTML = "";
}