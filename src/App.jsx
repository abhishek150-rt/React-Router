import React from "react";
import Home from "./Home";
import About from "./About";
import Service from "./Service";
import Contact from "./Contact";
import WebDev from "./WebDev";
import FrontDev from "./FrontDev";
import Search from "./Search";
import { Switch, Route,Redirect } from "react-router-dom";
const App = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={()=><Home name="Home Page"/>}/>
        <Route exact path="/about" render={()=><About name="About me page. "/>}/>
        <Route exact path="/service" component={Service}/>
        <Route exact path="/service/:name/" component={WebDev}/>
        <Route exact path="/service/:name/:subname" component={FrontDev}/>
        <Route exact path="/contact" component={Contact}/>
        <Route exact path="/search" component={Search}/>
        <Redirect to="/"></Redirect>
      </Switch>
    </>
  );
};

export default App;
