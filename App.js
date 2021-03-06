import { Routes, Route } from "react-router-dom";
import { Home } from "./components/Home/Home";
import { About } from "./components/About/About";
import { NewDecision } from "./components/NewDecision/NewDecision";


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<NewDecision />} />
        <Route path="/about" element={<About />} />
      </Routes>      
    </div>
  );
}

export default App;
