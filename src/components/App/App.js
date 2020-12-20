import './App.css';
import React from 'react';
import Contact from '../Contact/Contact';
import TableSetUp from '../TableSetUp/TableSetUp';
import Wrapper from '../Menu/Menu';
import AboutUs from '../AboutUs/AboutUs';
import Navsbar from '../NavsBar/NavsBar';

function App() {
  return (
    <div className="App">
      <Navsbar></Navsbar>
      <Wrapper></Wrapper>
      <TableSetUp></TableSetUp>
      <AboutUs></AboutUs>
      <Contact></Contact>
    </div>
  );
}

export default App;
