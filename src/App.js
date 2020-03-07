import React from 'react';
import './App.css';
import EmployeeTitleGenerator from './EmployeeTitleGenerator';

function App() {
  return (
    <div className="container">
      <div className="jumbotron">
        <h1 className="text-center">Employee Title Generator</h1>
        <hr className="my-4" />
        <EmployeeTitleGenerator />
      </div>
    </div>
  );
}

export default App;
