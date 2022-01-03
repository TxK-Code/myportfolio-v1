import "./App.scss";
import Index from "./Components/Index";
import NavBar from "./Components/NavBar/Navbar";

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Index />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
