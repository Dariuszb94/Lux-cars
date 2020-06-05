import React from 'react';
import './App.css';
import Header from './Components/Header';
import Menu from './Components/Menu';
import Home from './Components/Home';
import Offers from './Components/Offers';
import Offer from './Components/Offer';
import About from './Components/About';
import {Footer} from './Components/Footer';
import {Finance} from './Components/Finance';
import Contact from './Components/Contact';
import FavouriteList from './Components/FavouriteList';
import {Route,Switch} from "react-router-dom";

function App() {
  return (
    <React.Fragment>
      <Header/>
      <Menu/>
      <Switch >
        <Route exact path="/Lux-cars" component={Home} />
        <Route path="/Offers" component={Offers} />
        <Route path="/Offer" component={Offer} />
        <Route path="/About" component={About} />
        <Route path="/Finance" component={Finance} />
        <Route path="/Contact" component={Contact} />
        <Route path="/FavouriteList" component={FavouriteList} />
        <Route component={Home} />
      </Switch>
      <Footer/>
    </React.Fragment>
  );
}

export default App;
