# 💰 MERN Expense Tracker App

A full-stack expense tracking application built using the **MERN stack** (MongoDB, Express.js, React.js, Node.js). This app enables **Parents** to assign budgets and monitor their **Children's** spending habits, with role-based access and visual insights.

---

## 🚀 Features

### 🔐 Authentication & Roles
- JWT-based login/signup
- Role selection: Parent or Child
- Protected routes based on role

### 👨‍👧 Parent Capabilities
- Create and manage child accounts
- Assign monthly budgets per category
- View child transaction history and budget usage
- Receive alerts when budgets are exceeded

### 🧒 Child Capabilities
- Add, edit, delete personal transactions
- View assigned budgets and category limits
- Receive alerts when nearing/exceeding limits

### 💸 Transaction Management
- Fields: Title, Amount, Category, Date, Type (Income/Expense)
- CRUD operations

### 📊 Budget Planning
- Category-based budgets
- Usage tracking with color indicators:
  - 🟢 Green: < 70%
  - 🟡 Yellow: 70–90%
  - 🔴 Red: > 90%

### 📈 Dashboard
- Role-based views:
  - Parents: Overview of all children
  - Children: Personal balance and usage
- Visual charts (Pie/Bar)
- Recent transactions table

### 🧩 Extra Features
- Export transactions to CSV (Bonus)
- Responsive design
- Context API for global state

---


---

## ⚙️ Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/Shaswat1234/expense-tracker-app.git
cd expense-tracker-app

cd backend
npm install

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret

npm run dev

cd ../frontend
npm install
npm start

## 🏗️ Directory Structure
