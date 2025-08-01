import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import axios from '../utils/axios';
import TransactionForm from '../components/TransactionForm';
import BudgetCard from '../components/BudgetCard';

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  const [transactions, setTransactions] = useState([]);
  const [budgets, setBudgets] = useState([]);

  useEffect(() => {
    axios.get('/transactions').then(res => setTransactions(res.data));
    if (user.role === 'Child') {
      axios.get(`/budgets/${user._id}`).then(res => setBudgets(res.data));
    }
  }, [user]);

  return (
    <div>
      <h2>Welcome, {user.name}</h2>
      {user.role === 'Parent' ? (
        <div>
          <h3>Parent Dashboard</h3>
          {/* Add child management and budget assignment */}
        </div>
      ) : (
        <div>
          <h3>Child Dashboard</h3>
          <TransactionForm onAdd={tx => setTransactions([...transactions, tx])} />
          {budgets.map(b => <BudgetCard key={b._id} budget={b} transactions={transactions} />)}
        </div>
      )}
    </div>
  );
};

export default Dashboard;
