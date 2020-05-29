import React from 'react';
import './App.css';
import Header from './Components/Header';
import Menu from './Components/Menu';
import Home from './Components/Home';
import Offers from './Components/Offers';
import Offer from './Components/Offer';
import {
    Route,
    Switch
  } from "react-router-dom";

function App() {
  return (
    <div>
      <Header/>
      <Menu/>
      <Switch >
      <Route exact path="/Lux-cars" component={Home} />
      <Route path="/offers" component={Offers} />
      <Route path="/Offer" component={Offer} />
      </Switch>
    </div>
  );
}

export default App;
