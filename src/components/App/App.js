import './App.css';
import React from 'react';
import TableSetUp from '../TableSetUp/TableSetUp';
import Menu from '../Menu/Menu';
import Navsbar from '../NavsBar/NavsBar';

function App() {
  return (
    <div className="App" style={{ width: 'fit-content', margin:'auto'}}>
      <Navsbar/>
      <Menu/>
      <TableSetUp/>
    </div>
  );
}

export default App;
