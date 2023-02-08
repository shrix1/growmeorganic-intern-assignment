import "./App.css";
import UserDetails from "./components/UserDetails";
import ApiTable from "./components/ApiTable";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/apipage" element={<UserDetails />} />
          <Route path="/" element={<ApiTable />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
