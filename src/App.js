import React from 'react';
import './App.css';
import { Navbar } from './components/Navbar';
import { Home } from './components/Home';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => {
  
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <div className='page-container'>
        <div className='content-wrap'>
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/about' component={About} />
            <Route path='/projects' component={Projects} />
            <Route path='/contact' component={Contact} />
            <Route path='*' component={Home} />
          </Switch>
          <Footer />
        </div>
      </div>
    </Router>

  );
};

export default App;
