import React, { useState } from 'react';
import './sass/App.scss';
import './sass/menu.scss';
import './sass/components.scss';
import { Switch, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import ContactMe from './pages/ContactMe';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="App">
      <div id="sidebar" style={ sidebarOpen ? { transform: 'translateX(0)' } : { transform: 'translateX(-100%)'}}>
        <img id="sidebar__profilepic"src="/assets/profilepic.jpg" alt="Batkhongor Chagnaa"/>
        <ul className="menu-list">
          <li className="menu-list__item"><Link to="/"><div>Home</div></Link></li>
          <li className="menu-list__item"><Link to="/portfolio"><div>Portfolio</div></Link></li>
          <li className="menu-list__item"><div>Resume</div></li>
          <li className="menu-list__item"><Link to="/contact-me"><div>Contact Me!</div></Link></li>
        </ul>
      </div>
      
      <div id="hamburger-menu" onClick={() => setSidebarOpen(!sidebarOpen)}>
        <span className={sidebarOpen ? 'burger burger-open' : 'burger'}></span>
        <span className={sidebarOpen ? 'burger burger-open' : 'burger'}></span>
        <span className={sidebarOpen ? 'burger burger-open' : 'burger'}></span>
      </div>

      <main id="main">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/portfolio" component={Portfolio} />
            <Route path="/contact-me" component={ContactMe} />
          </Switch>
      </main>
    </div>
  );
}

export default App;
