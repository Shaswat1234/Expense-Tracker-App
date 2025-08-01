# MERN Expense Tracker App

This is a complete expense tracking application built with the **MERN stack** (MongoDB, Express.js, React.js, Node.js). The app allows **Parents** to set budgets and track their **Children's** spending habits. It features role-based access and visual insights.

---

## Features

### Authentication & Roles
- JWT-based login and signup
- Role selection: Parent or Child
- Protected routes based on role

### Parent Capabilities
- Create and manage child accounts
- Assign monthly budgets for each category
- View child transaction history and budget usage
- Receive alerts when budgets are exceeded

### Child Capabilities
- Add, edit, and delete personal transactions
- View assigned budgets and category limits
- Get alerts when nearing or exceeding limits

### Transaction Management
- Fields: Title, Amount, Category, Date, Type (Income/Expense)
- CRUD operations

### Budget Planning
- Budgets based on categories
- Usage tracking with color indicators:
  - Green: less than 70%
  - Yellow: 70 to 90%
  - Red: more than 90%

### Dashboard
- Role-based views:
  - Parents: Overview of all children
  - Children: Personal balance and usage
- Visual charts (Pie and Bar)
- Recent transactions table

### Extra Features
- Export transactions to CSV (Bonus)
- Responsive design
- Context API for global state

---

## Installation & Setup

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

## Directory Structure
```
