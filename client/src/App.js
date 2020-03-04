import React from 'react';
import Nav from "./components/Nav"; 
import './App.css';
import Jumbotron from './components/Jumbotron';
import Saved from "./pages/Saved"; 

function App() {
  return (
    <div>
      <Nav />
      <Jumbotron />
      <Saved />

      
    </div>
    
  );
}

export default App;
