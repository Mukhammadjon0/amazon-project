import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import ComputerDetail from "./pages/Computers/ComputerDetail";
import Home from "./pages/Home/Home";

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:id" element={<ComputerDetail />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
