import { Outlet } from "react-router-dom";
import Footer from "./Footer/Footer";


function App() {
  return (
    <>
      <h1> App Compssssonent </h1>
      <Outlet />
      <Footer />
    </>
  );
}

export default App;