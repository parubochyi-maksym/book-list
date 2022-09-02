import Dashboard from "./pages/dashboard/Dashboard";
import AddBook from "./pages/addBook/AddBook";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="addbook" element={<AddBook />} />
    </Routes>
  );
}

export default App;
