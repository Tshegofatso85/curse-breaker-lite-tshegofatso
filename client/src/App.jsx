import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";

import Home from "./pages/Home";
import Diagnosis from "./pages/Diagnosis";
import Solution from "./pages/Solution";

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/diagnosis" element={<Diagnosis />} />
        <Route path="/solution" element={<Solution />} />
      </Routes>
    </>
  );
}

export default App;
