import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux'; 


export default class LoginFrom extends Component<{}> {
  
 
    render() {
    return (
        <View style={styles.container}> 
            <TextInput
             style={styles.inputBox} 
            underlineColorAndroid='rgba(0, 0, 0, 0)' 
            placeholder="Email" 
            placeholderTextColor='#ffffff'
            keyboardType="email-address"
            onSubmitEditing={() => this.password.focus()}
            />
            <TextInput 
             style={styles.inputBox} 
            underlineColorAndroid='rgba(0, 0, 0, 0)' 
            placeholder="Password" 
            secureTextEntry
            placeholderTextColor='#ffffff'
            ref={(input) => this.password = input}
            />
             <TouchableOpacity style={styles.button}>
     <Text style={styles.buttonText} onPress={() => Actions.selecttable()}>Login
         </Text> 
         </TouchableOpacity>
        </View>
    );
}
}

const styles = StyleSheet.create({
    container: {
  flexGrow: 1,
  alignItems: 'center',
  justifyContent: 'center'
      },
      inputBox: {
          width: 300,
          backgroundColor: 'rgba(255, 255, 255, 0.3)',
          borderRadius: 25,
          paddingHorizontal: 20,
          fontSize: 16,
          color: '#ffffff',
          marginVertical: 10
      },
      button: {
        backgroundColor: '#1c313a',
        width: 300,
        borderRadius: 25,
        marginVertical: 10,
        
      },
      buttonText: {
fontSize: 16,
fontWeight: '500',
color: '#ffffff',
textAlign: 'center',
padding: 10,
      }
});
