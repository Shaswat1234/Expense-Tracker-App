import React, { useState } from 'react';
import axios from '../utils/axios';

const TransactionForm = ({ onAdd }) => {
  const [form, setForm] = useState({
    title: '',
    amount: '',
    category: '',
    date: '',
    type: 'Expense'
  });

  const handleSubmit = async () => {
    const res = await axios.post('/transactions', form);
    onAdd(res.data);
    setForm({ title: '', amount: '', category: '', date: '', type: 'Expense' });
  };

  return (
    <div>
      <input placeholder="Title" value={form.title} onChange={e => setForm({ ...form, title: e.target.value })} />
      <input placeholder="Amount" type="number" value={form.amount} onChange={e => setForm({ ...form, amount: e.target.value })} />
      <input placeholder="Category" value={form.category} onChange={e => setForm({ ...form, category: e.target.value })} />
      <input type="date" value={form.date} onChange={e => setForm({ ...form, date: e.target.value })} />
      <select value={form.type} onChange={e => setForm({ ...form, type: e.target.value })}>
        <option>Expense</option>
        <option>Income</option>
      </select>
      <button onClick={handleSubmit}>Add Transaction</button>
    </div>
  );
};

export default TransactionForm;
