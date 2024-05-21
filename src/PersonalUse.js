import { Route, Routes } from "react-router-dom";
import  Navbar from "./PersonalComp/Navbar";
import PersonalHome from './PersonalComp/PersonalHome';
import Calculators from './PersonalComp/Calculators';
import TodoList from './PersonalComp/Todoist';
import ExpenseTracker from './PersonalComp/ExpenseTracker';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<PersonalHome/>} />
        <Route path="/Calculators" element={<Calculators/>} />
        <Route path="/Todo-List" element={<TodoList/>} />
        <Route path="/Expense-Tracker" element={<ExpenseTracker/>} />
      </Routes>
    </div>
  );
}

export default App;