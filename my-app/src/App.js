import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';
import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import Navbar from "./Navbar";
import Home from "./Pages/Home"
import Calendar from "./Pages/Calendar"
import Bands from "./Pages/Bands"
import Jams from "./Pages/Jams"
import Shops from "./Pages/Shops"
import Teachers from "./Pages/Teachers"
import Venues from "./Pages/Venues"
import Data from "./Pages/Data"

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/Home" element={<Home />}/>
          <Route path="/Calendar" element={<Calendar />}/>
          <Route path="/Bands" element={<Bands />}/>
          <Route path="/Venues" element={<Venues />}/>
          <Route path="/Shops" element={<Shops />}/>
          <Route path="/Jams" element={<Jams />}/>
          <Route path="/Teachers" element={<Teachers />}/>
        </Routes>
      </div>
    </>
  );
}
export default App;