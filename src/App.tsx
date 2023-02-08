import "./App.css";
import UserDetails from "./components/UserDetails";
import ApiTable from "./components/ApiTable";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<UserDetails />} />
          <Route path="/apipage" element={<ApiTable />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
