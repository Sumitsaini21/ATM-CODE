let pin = "";
let balance = 0;
let currentAction = "";

function displayMessage(message) {
    document.getElementById('screen').innerHTML = `<p>${message}</p>`;
}

function showInputSection() {
    document.getElementById('inputSection').style.display = 'flex';
}

function hideInputSection() {
    document.getElementById('inputSection').style.display = 'none';
}

function submitInput() {
    const input = document.getElementById('inputField').value;
    document.getElementById('inputField').value = "";  // Clear the input field
    processInput(input);
}

function processInput(input) {
    switch (currentAction) {
        case "generatePin":
            pin = input;
            balance = parseFloat(prompt("Enter your initial balance:"));
            displayMessage(`PIN set successfully. Balance: $${balance}`);
            break;
        case "changePin":
            if (input === pin) {
                pin = prompt("Enter your new PIN:");
                displayMessage("PIN changed successfully.");
            } else {
                displayMessage("Incorrect PIN. Try again.");
            }
            break;
        case "balanceInquiry":
            displayMessage(`Your balance is $${balance}`);
            break;
        case "withdraw":
            if (input === pin) {
                const amount = parseFloat(prompt("Enter the amount to withdraw:"));
                if (balance >= amount) {
                    balance -= amount;
                    displayMessage(`Withdrawal successful. New balance: $${balance}`);
                } else {
                    displayMessage("Insufficient funds.");
                }
            } else {
                displayMessage("Incorrect PIN.");
            }
            break;
    }
    hideInputSection();
    currentAction = "";
}

function generatePin() {
    displayMessage("Enter your new PIN:");
    currentAction = "generatePin";
    showInputSection();
}

function changePin() {
    displayMessage("Enter your current PIN:");
    currentAction = "changePin";
    showInputSection();
}

function balanceInquiry() {
    currentAction = "balanceInquiry";
    processInput("");
}

function withdraw() {
    displayMessage("Enter your PIN:");
    currentAction = "withdraw";
    showInputSection();
}

function exitAtm() {
    displayMessage("Thank you for using our ATM service.");
    hideInputSection();
}