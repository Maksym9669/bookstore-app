import "./App.css";
import Home from "./pages/Home";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import DetailsPage from "./pages/DetailsPage";
import MainLayout from "./pages/MainLayout";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/books/main" element={<MainLayout />} />
          <Route path="/books/details/:id" element={<DetailsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
