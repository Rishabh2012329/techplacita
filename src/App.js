import React from 'react';
import Header from './Layout/Header'
import NavBar from './Layout/NavBar'
import Home from './Components/Home'

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Header/>
      <Home/>
    </div>
  );
}

export default App;
