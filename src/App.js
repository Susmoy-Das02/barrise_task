import { Route, Routes } from "react-router-dom";
import "./App.css";
import EmployeeDetails from "./Component/EmployeeDetails";
import EmployeeList from "./Component/EmployeeList";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<EmployeeList />}></Route>
          <Route path="/:first_name" element={<EmployeeDetails />}></Route>
      </Routes>
    </div>
  );
}

export default App;
