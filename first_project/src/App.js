import Expenses from "./Components/Expenses/Expenses";
import "./App.css";

const App = () => {
  const expenses = [
    { title: "Car Insurance", amount: 294.97, date: new Date(2022, 9, 14) },
    { title: "Car Insurance 2", amount: 29.97, date: new Date(2012, 3, 3) },
    { title: "Car Insurance 3", amount: 24.97, date: new Date(2020, 2, 29) },
    { title: "Car Insurance 4", amount: 2294.97, date: new Date(2022, 1, 11) },
  ];

  return (
    <div className="mainDiv">
      <h2>Let's get started!</h2>
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
