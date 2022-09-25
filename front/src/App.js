import "./App.scss";
import Index from "./Components/Index";
import NavBar from "./Components/NavBar/Navbar";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Index />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
