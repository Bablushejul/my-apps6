import React from "react";

function TransactionHistory({ transactions, onDeleteTransaction }) {
    const deleteButtonChangeHandler=(props)=>{
        props.onDeleteTransaction()
        //() => onDeleteTransaction(data.id)
    }
  return (
    <div>
      <h2>Transaction History</h2>
      <ul className="transactions">
        {transactions.map((data) => (
          <li key={data.id}>
            <div>
              {data.name}

              <span>--${data.amount} </span>
              <button onClick={deleteButtonChangeHandler}>x</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TransactionHistory;
