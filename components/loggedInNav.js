import React, {Component} from 'react';
import Login from './login';
import Accounts from './accounts';
import Expenses from './expenses'
import {Router,Scene} from 'react-native-router-flux';
const App = ()=>{
  return(
               <Router>
               <Scene key='root' hideNavBar>
               <Scene
               key="login"
               component={Login}
             
               />
               <Scene
               key="accounts"
               component={Accounts}
               initial
               />
               
               <Scene
               key="expenses"
               component={Expenses}
              
               />
              
               </Scene>
               </Router>
               );
        };

export default App;