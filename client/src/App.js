import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";
import Home from "./pages/home";
import Packs from "./pages/packs";
import './App.css';

function App() {
  return (
    <Router>
      <div className='container'>
        <Header/>
        <div className="body_wrap"> 
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          {/* <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route> */}
          <Route path="/" exact="true">
            <Home />
          </Route>
          <Route path="/packs">
            <Packs />
          </Route>
        </Switch> </div>
        
        
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
