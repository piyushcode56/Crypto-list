import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Coin from "./pages/Coin/Coin";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <div className="App">
     <Navbar/>
     <Routes>
      <Route path="/crypto-list"  element={<Home/>}/>
      <Route path="/coin/:coinId"  element={<Coin/>}/>
     </Routes>
     <Footer/>
    </div>
  );
}

export default App;
