import React, { useState, useEffect } from "react";
import Expense from "../Expense/Expense";
import TransactionForm from "../TransactionForm/TransactionForm";
import TransactionHistory from "../Transaction/TransactionHistory";
import { uniqueId } from "../utils/util";
import './ExpenseTracker.css'

// Aggregator component/container component

const transactionData = [
  { id: uniqueId, name: "salary", amount: 30000, type: "income" },
];

function ExpenseTracker() {
  const [income, setIncome] = useState(0);
  
  const [transactions, setTransactions] = useState(transactionData);

  const saveState = () => {
    localStorage.setItem("expenseTrackerState", JSON.stringify(transactions));
  };

  const calculateExpenses = () => {
    let income = 0;

    transactions.forEach((data) => {
      if (data.type === "income") {
        income += data.amount;
      }
    });

    saveState();

    setIncome(income);
  };

  const handleAddNewTransaction = (item) => {
    let newTransactions = [...transactions, item];
    setTransactions(newTransactions);
  };

  const handleDeleteTransaction = (id) => {
    const newTransactions = transactions.filter((item) => item.id !== id);
    setTransactions(newTransactions);
  };

  useEffect(() => {
    calculateExpenses();
  });

  return (
    <div className="expense-tracker">
      <h1>Expense Tracker</h1>
      <Expense income={income} />
      <TransactionHistory
        transactions={transactions}
        onDeleteTransaction={handleDeleteTransaction}
      />
      <TransactionForm onNewTransaction={handleAddNewTransaction} />
    </div>
  );
}

export default ExpenseTracker;
