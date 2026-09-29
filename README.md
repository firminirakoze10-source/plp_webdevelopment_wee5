SpendWise - JavaScript Foundation

Project Description

SpendWise is a personal budgeting application designed to help users understand their budget, expenses, and remaining balance.

This week's development adds JavaScript functionality to the existing SpendWise project. The JavaScript allows the application to collect budgeting information from the user, process expense data, perform calculations, and display the results in the browser console.

JavaScript Concepts Implemented

The project demonstrates several JavaScript concepts, including:

- Variables
- Data types
- Arrays
- User input
- Number conversion
- Arithmetic calculations
- Functions
- For loops
- Console output

How Variables Are Used

Variables are used to store important budgeting information.

For example:

- "budget" stores the user's total budget.
- "totalExpenses" stores the total amount spent.
- "expenses" stores individual expense amounts.

These variables allow the application to store and process information while it is running.

How User Input Is Collected

The application uses JavaScript's "prompt()" function to collect information from the user.

The user is asked to enter:

1. Their total budget.
2. The number of expenses they want to enter.
3. The amount of each expense.

The "Number()" function is then used to convert the input from text into numbers so that calculations can be performed.

How Calculations Are Performed

SpendWise calculates the total expenses by adding all expense amounts together.

It then calculates the remaining balance using:

Remaining Balance = Budget - Total Expenses

For example, if the budget is KSh 10,000 and total expenses are KSh 1,000, the remaining balance is KSh 9,000.

How Functions Organize the Code

Functions are used to organize the application's logic into reusable sections.

The project includes:

- "calculateTotalExpenses()" - calculates the total amount of all expenses.
- "calculateRemainingBalance()" - calculates the amount remaining after expenses.
- "displayBudgetSummary()" - displays the budget information in the browser console.

Using functions makes the JavaScript code easier to read, organize, and reuse.

Project Files

- "index.html" - contains the structure of the SpendWise webpage.
- "style.css" - contains the styling for the webpage.
- "script.js" - contains the JavaScript functionality.
- "README.md" - explains the project and the JavaScript concepts implemented.

Testing

The application was tested in the browser using Live Server.

The JavaScript successfully collects budget and expense information, performs the required calculations, and displays the results in the browser console.