import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { Provider } from 'react-redux';
import store from './store';

import LandingPage from './components/LandingPage';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import CreatePerson from './components/person/CreatePerson';
import UpdatePerson from './components/person/UpdatePerson';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Navbar />
            <Route exact path="/" component={LandingPage} />
            <Route exavt path="/person/:id" component={UpdatePerson} />
            <Route exavt path="/createPerson" component={CreatePerson} />
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
