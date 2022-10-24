import Expenses from "./Components/Expenses/Expenses";
import NewExpense from "./Components/NewExpense/NewExpense";
import "./App.css";
import { useState } from "react";

const INITIAL_EXPENSES = [
  {
    id: "1",
    title: "Car Insurance",
    amount: 5.12,
    date: new Date(2020, 9, 14),
  },
  { id: "2", title: "TV Shows", amount: 33.67, date: new Date(2021, 3, 3) },
  { id: "3", title: "Iron plate", amount: 14.84, date: new Date(2022, 2, 29) },
  { id: "4", title: "Mushrooms", amount: 156.34, date: new Date(2019, 1, 11) },
];

const App = () => {
  const [expenses, setExpenses] = useState(INITIAL_EXPENSES);

  const addExpenseHandler = (newExpense) => {
    setExpenses((prevExpenses) => {
      return [newExpense, ...prevExpenses];
    });
  };

  return (
    <div className="mainDiv">
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
