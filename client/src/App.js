import React from 'react';
import './App.css';
import RSNav from './components/NavbarToggler'
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home'
import Algorithms from './components/Algorithms'
import DataStructures from './components/DataStructures'
import TimeAndSpaceComplexity from './components/TimeAndSpaceComplexity'
import Exercises from './components/Exercises'
import Resources from './components/Resources'
import Contact from './components/Contact'


function App() {

  return (
    
    <BrowserRouter>
    <div>
    <RSNav />
        <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/algorithms'>
          <Algorithms />
        </Route>
        <Route exact path='/data-structures'>
          <DataStructures />
        </Route>
        <Route exact path='/time&space-complexity'>
          <TimeAndSpaceComplexity />
        </Route>
        <Route exact path='/exercises'>
          <Exercises />
        </Route>
        <Route exact path='/resources'>
          <Resources />
        </Route>
        <Route exact path='/contact'>
          <Contact />
        </Route>
        </Switch>
        
      </div>
    </BrowserRouter>
  );
}

export default App;
