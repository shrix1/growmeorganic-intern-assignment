import "./App.css";
import UserDetails from "./components/UserDetails";
import ApiTable from "./components/ApiTable";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PageNotFound from "./components/PageNotFound";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {/* Task 1 vite and React TS */}
          {/* Task 2 */}
          <Route path="/" element={<UserDetails />} />
          {/* Task 3 */}
          <Route path="/apipage" element={<ApiTable />} />
          {/* 404 page*/}
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
