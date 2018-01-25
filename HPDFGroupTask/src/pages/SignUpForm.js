import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';


export default class SignUpForm extends Component<{}> {
  
 
    render() {
    return (
        <View style={styles.container}> 
         
            <TextInput
             style={styles.inputBox} 
            underlineColorAndroid='rgba(0, 0, 0, 0)' 
            placeholder="Full Name" 
            placeholderTextColor='#ffffff'
            keyboardType="email-address"
            onSubmitEditing={() => this.age.focus()}
            />
            <TextInput
             style={styles.inputBox} 
            underlineColorAndroid='rgba(0, 0, 0, 0)' 
            placeholder="Age" 
            placeholderTextColor='#ffffff'
            keyboardType="email-address"
            onSubmitEditing={() => this.email.focus()}
            ref={(input) => this.age = input}
            />
            <TextInput
             style={styles.inputBox} 
            underlineColorAndroid='rgba(0, 0, 0, 0)' 
            placeholder="Email" 
            placeholderTextColor='#ffffff'
            keyboardType="email-address"
            onSubmitEditing={() => this.password.focus()}
            ref={(input) => this.email = input}
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
     <Text style={styles.buttonText}> Signup
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
  justifyContent: 'center',
  paddingTop: 50
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
