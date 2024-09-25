import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Component/Navbar';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Services from './Pages/Services';
import Portfolio from './Pages/Portfolio';
import Form from './Pages/Form';
import Hallcard from './Hallcard';
import Hallcard2 from './Hallcard2';
import HallChoosing from './HallChoosing';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/form" element={<Form />} />
          <Route path ="/hall-list1" element = {<Hallcard/>}/>
          <Route path ="/hall-list2" element = {<Hallcard2/>}></Route>
          <Route path ="/hall-choosing" element = {<HallChoosing/>}></Route>
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
