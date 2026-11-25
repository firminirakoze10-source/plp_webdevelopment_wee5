// SpendWise Interactive Budget Tracker

// ------------------------------
// Variables
// ------------------------------

let budget = 0;

// Array used to store multiple expense records
let expenses = [];


// ------------------------------
// Select HTML Elements
// ------------------------------

const budgetForm = document.getElementById("budgetForm");
const budgetInput = document.getElementById("budgetInput");

const expenseForm = document.getElementById("expenseForm");
const expenseName = document.getElementById("expenseName");
const expenseAmount = document.getElementById("expenseAmount");
const expenseCategory = document.getElementById("expenseCategory");

const totalBudget = document.getElementById("totalBudget");
const totalExpenses = document.getElementById("totalExpenses");
const remainingBalance = document.getElementById("remainingBalance");

const budgetMessage = document.getElementById("budgetMessage");
const expenseList = document.getElementById("expenseList");


// ------------------------------
// Set Budget
// ------------------------------

budgetForm.addEventListener("submit", function(event) {

    event.preventDefault();

    budget = Number(budgetInput.value);

    updateDashboard();

    budgetInput.value = "";
});


// ------------------------------
// Add Expense
// ------------------------------

expenseForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = expenseName.value.trim();
    const amount = Number(expenseAmount.value);
    const category = expenseCategory.value;

    if (name === "" || amount <= 0 || category === "") {
        alert("Please enter valid expense information.");
        return;
    }

    // Create an expense object
    const expense = {
        name: name,
        amount: amount,
        category: category
    };

    // Store the expense inside the array
    expenses.push(expense);

    // Update the dashboard and expense list
    updateDashboard();
    displayExpenses();

    // Clear the form
    expenseForm.reset();
});


// ------------------------------
// Calculate Total Expenses
// ------------------------------

function calculateTotalExpenses() {

    let total = 0;

    // Loop through every expense record
    expenses.forEach(function(expense) {
        total += expense.amount;
    });

    return total;
}


// ------------------------------
// Update Dashboard
// ------------------------------

function updateDashboard() {

    const total = calculateTotalExpenses();
    const remaining = budget - total;

    // Update dashboard values
    totalBudget.textContent = `KSh ${budget.toFixed(2)}`;
    totalExpenses.textContent = `KSh ${total.toFixed(2)}`;
    remainingBalance.textContent = `KSh ${remaining.toFixed(2)}`;


    // ------------------------------
    // Decision Making
    // ------------------------------

    if (budget === 0) {

        budgetMessage.textContent = "Please set a budget to start tracking your spending.";

    } else if (remaining < 0) {

        budgetMessage.textContent =
            "Warning: You have exceeded your budget.";

    } else if (remaining === 0) {

        budgetMessage.textContent =
            "Your budget has been fully used.";

    } else if (total > budget * 0.8) {

        budgetMessage.textContent =
            "Caution: You have used more than 80% of your budget.";

    } else {

        budgetMessage.textContent =
            "Good job! You are within your budget.";
    }
}


// ------------------------------
// Display Expenses
// ------------------------------

function displayExpenses() {

    // Clear the current list
    expenseList.innerHTML = "";

    // Check whether there are expenses
    if (expenses.length === 0) {

        expenseList.innerHTML =
            '<p class="empty-message">No expenses added yet.</p>';

        return;
    }


    // Loop through the expense array
    expenses.forEach(function(expense, index) {

        const expenseItem = document.createElement("div");

        expenseItem.classList.add("expense-item");

        expenseItem.innerHTML = `
            <div class="expense-details">
                <h3>${expense.name}</h3>
                <p>Category: ${expense.category}</p>
            </div>

            <div>
                <span class="expense-amount">
                    KSh ${expense.amount.toFixed(2)}
                </span>

                <button
                    class="delete-button"
                    onclick="deleteExpense(${index})">
                    Delete
                </button>
            </div>
        `;

        expenseList.appendChild(expenseItem);
    });
}


// ------------------------------
// Delete Expense
// ------------------------------

function deleteExpense(index) {

    expenses.splice(index, 1);

    updateDashboard();
    displayExpenses();
}


// ------------------------------
// Initial Dashboard Display
// ------------------------------

updateDashboard();
displayExpenses();