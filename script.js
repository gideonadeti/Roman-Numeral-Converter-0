const convertBtn = document.getElementById("convert-btn");
const numberInput = document.getElementById("number");
const resultElement = document.getElementById('output');

const arabicNumbers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
const romanSymbols = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];

// Function to handle the Roman numeral conversion
const convertToRoman = () => {
    const numberInputInt = parseInt(numberInput.value, 10);

    // Validate the input
    if (!isValidInput(numberInputInt)) {
        if (numberInput.value === "") {
            updateResult("Please enter a valid number");
        } else if (numberInputInt <= -1) {
            updateResult("Please enter a number greater than or equal to 1");
        } else if (numberInputInt >= 4000) {
            updateResult("Please enter a number less than or equal to 3999");
        } else {
            updateResult("Please enter a valid number (1-3999)");
        }
        return;
    }

    // Conversion logic
    const romanNumeral = getRomanNumeral(numberInputInt);

    // Clear input then display result
    numberInput.value = "";
    updateResult(`Roman Numeral: ${romanNumeral}`);
};

// Function to validate the input
const isValidInput = input => Number.isInteger(input) && input >= 1 && input <= 3999;

// Function to update the DOM with the result
const updateResult = (result) => {
    resultElement.innerHTML = result;
};

// Function to perform the Roman numeral conversion
const getRomanNumeral = (number, index = 0) => {
    if (number === 0) {
        return "";  // Base case: when the number is fully converted
    }

    if (number >= arabicNumbers[index]) {
        // Subtract the value and append the Roman symbol
        return romanSymbols[index] + getRomanNumeral(number - arabicNumbers[index], index);
    } else {
        // Move to the next index
        return getRomanNumeral(number, index + 1);
    }
};

// Event listener attachment after function definitions
convertBtn.addEventListener("click", convertToRoman);

numberInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        event.preventDefault(); // Prevent form submission and reload of the page.
        convertToRoman();
    }
});
