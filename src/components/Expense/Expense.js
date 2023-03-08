import React from "react";

function Expense({ income }) {
  return (
    <div>
      <h2>Your Balance</h2>
      <div className="balance-val">${income}</div>
    </div>
  );
}

export default Expense;
