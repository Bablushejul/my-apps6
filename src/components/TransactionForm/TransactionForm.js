import React, { useState } from "react";
import { uniqueId } from "../utils/util";
//import './TransactionForm.css'

function TransactionForm({ onNewTransaction }) {
  const [nameValue, setNameValue] = useState("");
  const [amountValue, setAmountValue] = useState("");

  const addTransaction = (type, evt) => {
    evt.preventDefault();

    const data = {
      id: uniqueId(),
      name: nameValue,
      amount: parseInt(amountValue),
      type: type,
    };

    onNewTransaction(data);

    setNameValue("");
    setAmountValue("");
  };
  const nameChangeHandler = (e) => setNameValue(e.target.value);
  const priceChangeHandler = (e) => setAmountValue(e.target.value);
  const buttonChangeHandler = (e) => addTransaction("income", e);
  return (
    <div className="form">
      <h2>Add New Transactions</h2>
      <form className="transaction-form">
        <label> Product Name</label>
        <div>
          <input type="text" value={nameValue} onChange={nameChangeHandler} />
        </div>

        <label>Selling Price</label>
        <div>
          <input
            type="number"
            value={amountValue}
            onChange={priceChangeHandler}
          />
        </div>

        <div>
          <button className="income-btn" onClick={buttonChangeHandler}>
            Add Income
          </button>
        </div>
      </form>
    </div>
  );
}

export default TransactionForm;
