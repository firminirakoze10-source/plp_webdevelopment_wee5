# SpendWise - Budget & Expense Tracker

SpendWise is a simple budgeting and expense tracking web application built using HTML, CSS, and JavaScript.

## Week 6: Make SpendWise Interactive

This week, SpendWise was improved by adding JavaScript functionality that allows users to set a budget, add expenses, view expense records, delete expenses, and receive feedback about their spending.

## Improvements Made This Week

The following improvements were made:

- Added JavaScript functionality to the application.
- Added a budget input form.
- Added an expense input form.
- Added an array to store multiple expense records.
- Added loops to process expense records.
- Added conditional statements for budget decisions.
- Added DOM manipulation to update dashboard information.
- Added event listeners for user interactions.
- Added the ability to delete expenses.
- Added automatic calculation of total expenses and remaining balance.

## How Conditionals Are Used

Conditional statements are used to evaluate the user's budgeting situation.

For example, SpendWise checks whether:

- The user has set a budget.
- The user has exceeded the budget.
- The budget has been completely used.
- The user has used more than 80% of the budget.
- The user is still within the budget.

The application then displays an appropriate message to the user.

## How Arrays Are Used

An array called `expenses` is used to store multiple expense records.

Each expense is stored as an object containing:

- Expense name
- Amount
- Category

For example:

```javascript
let expenses = [];

expenses.push({
    name: "Lunch",
    amount: 300,
    category: "Food"
});

This allows the application to manage multiple expenses instead of using separate variables for every expense.

How Loops Are Used

A "forEach()" loop is used to process the expense records stored in the array.

The loop calculates the total amount spent and also displays each expense on the webpage.

This makes it possible to process multiple records efficiently.

How the DOM Is Updated

DOM manipulation is used to update information directly on the webpage.

JavaScript updates:

- Total Budget
- Total Expenses
- Remaining Balance
- Budget feedback
- Expense records

For example:

totalExpenses.textContent = `KSh ${total.toFixed(2)}`;

This changes the information displayed on the webpage without requiring the user to refresh the page.

How User Interactions Are Handled

Event listeners are used to respond to user actions.

The application listens for form submissions when users:

- Set their budget.
- Add an expense.

The application also provides buttons for deleting expense records.

For example:

expenseForm.addEventListener("submit", function(event) {
    event.preventDefault();
});

This allows JavaScript to process the user's action and update the application.

How Everything Is Connected

The application follows this flow:

1. The user enters a budget or expense.
2. An event listener detects the user's action.
3. JavaScript processes the input.
4. Expense information is stored in the "expenses" array.
5. Loops process the stored records.
6. Calculations determine the total expenses and remaining balance.
7. Conditional statements evaluate the budget situation.
8. DOM manipulation updates the dashboard and expense list.

This creates a clear connection between user actions, JavaScript logic, stored data, and the webpage.

Challenges Encountered and Solutions

One challenge was making sure that the dashboard updated whenever a new expense was added or deleted.

This was solved by creating reusable functions such as "updateDashboard()" and "displayExpenses()" and calling them whenever the expense data changes.

Another challenge was calculating the total of multiple expenses. This was solved by using a "forEach()" loop to process every expense stored in the array.

Technologies Used

- HTML
- CSS
- JavaScript
- Git
- GitHub

Conclusion

SpendWise is now an interactive budgeting application that demonstrates decision making, arrays, loops, DOM manipulation, and event handling using JavaScript.

:::

### What to do in VS Code now

1. Open your **SpendWise** folder.
2. Open `index.html` → replace its contents → **Save**.
3. Open `style.css` → replace its contents → **Save**.
4. Open `script.js` → replace its contents → **Save**.
5. Open `README.md` → replace/update it with the version above → **Save**.
6. Open `index.html` with **Live Server**.
7. Test setting a budget.
8. Add several expenses.
9. Try deleting an expense.
10. Check that **Total Expenses** and **Remaining Balance** change automatically.
11. Test what happens when expenses go above the budget.

This implementation covers **decision making + arrays + loops + DOM manipulation + event listeners + the complete user-action-to-dashboard flow**, which are the core requirements of the assignment.