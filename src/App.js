import React from 'react';
import styled from 'styled-components';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Sidebar from './components/Sidebar';
import Overview from './pages/Overview';
import Home from './pages/Home';

import Login from './pages/Login';

import {ReportsOne, ReportsTwo, ReportsThree} from './pages/Reports';

import './App.css';

function App() {
  return (
      <AppWrapper> 
        <Sidebar />
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/overview' exact component={Overview}/>
          <Route path='/reports/2021' exact component={ReportsOne}/>
          <Route path='/reports/2020' exact component={ReportsTwo}/>
          <Route path='/reports/2019' exact component={ReportsThree}/>
          <Route path='/login' exact component={Login}/>

        </Switch>
      </AppWrapper>
  );
}

const AppWrapper = styled(Router)`

`;

export default App;
