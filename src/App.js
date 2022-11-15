import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Placetostay from "./Components/Placetostay";
import Footer from "./Footer/Footer";
import Navbar from "./Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/placetostay" element={<Placetostay />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
