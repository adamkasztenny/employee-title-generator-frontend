import React from 'react';
import './App.css';
import EmployeeTitleGenerator from './EmployeeTitleGenerator';

function App() {
  return (
    <div class="container">
      <div class="jumbotron">
        <h1 class="text-center">Employee Title Generator</h1>
        <hr class="my-4" />
        <EmployeeTitleGenerator />
      </div>
    </div>
  );
}

export default App;
