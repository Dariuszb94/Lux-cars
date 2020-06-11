import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Header from "./Components/Header/Header";
import Menu from "./Components/Menu/Menu";
import Home from "./Components/Home/Home";
import Offers from "./Components/Offers/Offers";
import Offer from "./Components/Offer/Offer";
import About from "./Components/About/About";
import Footer from "./Components/Footer/Footer";
import Finance from "./Components/Finance/Finance";
import Contact from "./Components/Contact/Contact";
import FavouriteList from "./Components/FavouriteList/FavouriteList";

function App() {
  return (
    <>
      <Header />
      <Menu />
      <Switch>
        <Route exact path="/Lux-cars" component={Home} />
        <Route path="/Offers" component={Offers} />
        <Route path="/Offer" component={Offer} />
        <Route path="/About" component={About} />
        <Route path="/Finance" component={Finance} />
        <Route path="/Contact" component={Contact} />
        <Route path="/FavouriteList" component={FavouriteList} />
        <Route component={Home} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
