import './App.css';
import React from 'react';
import TableSetUp from '../TableSetUp/TableSetUp';
import Menu from '../Menu/Menu';
import Navbar from '../NavBar/NavsBar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className="Menu"><Menu/></div>
      <TableSetUp/>
    </div>
  );
}

export default App;
