import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Placetostay from "./Components/Placetostay";
import { AppProvider } from "./Context/AppContext";
import Footer from "./Footer/Footer";
import Navbar from "./Navbar/Navbar";

function App() {
  return (
    <>
    <AppProvider>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/placetostay" element={<Placetostay />} />
      </Routes>
      <Footer />
    </AppProvider>
     
    </>
  );
}

export default App;
