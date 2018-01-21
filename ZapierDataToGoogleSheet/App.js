    
import React, { Component } from 'react';
//import { StyleSheet, View, StatusBar } from 'react-native';
import { Router, Scene, Stack } from 'react-native-router-flux';
import Login from './src/pages/Login';
import Signup from './src/pages/Signup';
import SelectTable from './src/pages/SelectTable';
import StudentDetail from './src/pages/StudentDetail';
import EmployeeDetail from './src/pages/EmployeeDetail';

export default class App extends Component<{}> {
  render() {
    return (
      <Router>
        <Stack key="root" >
          <Scene key="login" component={Login} title="Login" initial hideNavBar={true} />
              <Scene key="register" component={Signup} title="Register" hideNavBar={true} />
              <Scene key="selecttable" component={SelectTable} title=" Home" />
              <Scene key="student" component={StudentDetail} title="Student Detail" />
              <Scene key="employee" component={EmployeeDetail} title="Employee Detail" />
            </Stack>
      </Router>
     
    );
  }
}
