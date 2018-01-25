    
import React, { Component } from 'react';
//import { StyleSheet, View, StatusBar } from 'react-native';
import { Router, Scene, Stack } from 'react-native-router-flux';
import Login from './src/pages/Login';
import Signup from './src/pages/Signup';


export default class App extends Component<{}> {
  render() {
    return (
      <Router>
        <Stack key="root" >
          <Scene key="login" component={Login} title="Login" initial hideNavBar={true} />
              <Scene key="register" component={Signup} title="Register" hideNavBar={true} />
             
            </Stack>
      </Router>
     
    );
  }
}
