let totalBalance = 0;

function addExpense() {
    let desc = document.getElementById("description").value;
    let amount = document.getElementById("amount").value;

    if (desc === "" || amount === "") {
        alert("Please fill all fields.");
        return;
    }

    amount = Number(amount);
    totalBalance -= amount;

    document.getElementById("balance").innerText = "₹" + totalBalance;

    let li = document.createElement("li");
    li.innerHTML = `
        ${desc} - ₹${amount}
        <button class="delete-btn" onclick="deleteExpense(this, ${amount})">Delete</button>
    `;

    document.getElementById("expense-list").appendChild(li);

    document.getElementById("description").value = "";
    document.getElementById("amount").value = "";
}

function deleteExpense(button, amount) {
    totalBalance += amount;

    document.getElementById("balance").innerText = "₹" + totalBalance;

    button.parentElement.remove();
}
