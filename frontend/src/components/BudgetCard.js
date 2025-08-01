import React from 'react';

const BudgetCard = ({ budget, transactions }) => {
  const used = transactions
    .filter(tx => tx.category === budget.category && tx.type === 'Expense')
    .reduce((sum, tx) => sum + tx.amount, 0);

  const percent = (used / budget.limit) * 100;
  const color = percent < 70 ? 'green' : percent < 90 ? 'yellow' : 'red';

  return (
    <div style={{ border: `2px solid ${color}`, padding: '10px', margin: '10px' }}>
      <h4>{budget.category}</h4>
      <p>Used: ₹{used} / ₹{budget.limit}</p>
      <p style={{ color }}>Usage: {percent.toFixed(1)}%</p>
    </div>
  );
};

export default BudgetCard;
