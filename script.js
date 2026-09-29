// ==========================================
// SpendWise - JavaScript Foundation
// ==========================================

// 1. STORE APPLICATION DATA

// Variable for the user's budget
let budget = 0;

// Variable for the user's total expenses
let totalExpenses = 0;

// Array for storing individual expenses
let expenses = [];


// ==========================================
// 2. REUSABLE FUNCTIONS
// ==========================================

// Function to calculate the total of all expenses
function calculateTotalExpenses(expenseList) {
    let total = 0;

    for (let expense of expenseList) {
        total += expense;
    }

    return total;
}


// Function to calculate the remaining balance
function calculateRemainingBalance(budgetAmount, expenseAmount) {
    return budgetAmount - expenseAmount;
}


// Function to display the budget information in the console
function displayBudgetSummary() {
    totalExpenses = calculateTotalExpenses(expenses);

    let remainingBalance = calculateRemainingBalance(
        budget,
        totalExpenses
    );

    console.log("========== SpendWise Budget Summary ==========");
    console.log("Budget: KSh " + budget.toFixed(2));
    console.log("Total Expenses: KSh " + totalExpenses.toFixed(2));
    console.log("Remaining Balance: KSh " + remainingBalance.toFixed(2));
    console.log("==============================================");
}


// ==========================================
// 3. COLLECT USER INPUT
// ==========================================

// Ask the user to enter their budget
let budgetInput = prompt("Enter your total budget in KSh:");


// Convert the input from text to a number
budget = Number(budgetInput);


// Ask the user for the number of expenses
let expenseCountInput = prompt("How many expenses do you want to enter?");


// Convert the number of expenses to a number
let expenseCount = Number(expenseCountInput);


// Collect each expense from the user
for (let i = 1; i <= expenseCount; i++) {

    let expenseInput = prompt(
        "Enter the amount for expense " + i + " in KSh:"
    );

    let expenseAmount = Number(expenseInput);

    expenses.push(expenseAmount);
}


// ==========================================
// 4. PERFORM CALCULATIONS AND DISPLAY RESULTS
// ==========================================

displayBudgetSummary();


// ==========================================
// 5. CONFIRM JAVASCRIPT LOADED SUCCESSFULLY
// ==========================================

console.log("SpendWise JavaScript loaded successfully.");s