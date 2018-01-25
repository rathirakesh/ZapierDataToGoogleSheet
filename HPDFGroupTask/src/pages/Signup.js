import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Actions } from 'react-native-router-flux'; 
//import Logo from '../components/Logo';
import SignUpForm from './SignUpForm';

export default class Signup extends Component<{}> {
   
  render() {
    return (
        <View style={styles.container}> 
         
           <SignUpForm />
           <View style={styles.signup}>
               <Text style={styles.signupText}> Already have an account? </Text>
                 
            <Text style={styles.signupButton} onPress={() => Actions.login()} >Sign in</Text>
                 
                </View>
           
        </View>
    );
}
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#455a64',
     flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    },
    signup: {
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 20,
        flexDirection: 'row'
    },
    signupText: {
        color: 'rgba(255, 255, 255, 0.7)',
        fontSize: 16
    },
    signupButton: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: '500'
    }
});
