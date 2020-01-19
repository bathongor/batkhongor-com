import React, { useState } from 'react';
import './App.scss';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div className="App">
      <div id="sidebar" style={ sidebarOpen ? { transform: 'translateX(0)' } : { transform: 'translateX(-100%)'}}>
      
      </div>
      
      <div id="hamburger-menu" onClick={() => setSidebarOpen(!sidebarOpen)}>
        <span className={sidebarOpen ? 'burger burger-open' : 'burger'}></span>
        <span className={sidebarOpen ? 'burger burger-open' : 'burger'}></span>
        <span className={sidebarOpen ? 'burger burger-open' : 'burger'}></span>
      </div>

      <div id="main">
      
      </div>
    </div>
  );
}

export default App;
