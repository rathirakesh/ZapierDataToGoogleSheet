import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';


export default class App extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
      <Text style={styles.text}> Employee Name  </Text>
      <TextInput
             style={styles.inputBox} 
            underlineColorAndroid='rgba(0, 0, 0, 0)' 
            placeholder=" Employee Name" 
            placeholderTextColor='#ffffff'
            keyboardType="email-address"
      />
       <Text style={styles.text}> Employee Id </Text>
      <TextInput
             style={styles.inputBox} 
            underlineColorAndroid='rgba(0, 0, 0, 0)' 
            placeholder="Employee Id" 
            placeholderTextColor='#ffffff'
            keyboardType="email-address"
      />
       <Text style={styles.text}>Mobile Number </Text>
      <TextInput
             style={styles.inputBox} 
            underlineColorAndroid='rgba(0, 0, 0, 0)' 
            placeholder="Mobile Number" 
            placeholderTextColor='#ffffff'
            keyboardType="email-address"
      />
         <TouchableOpacity style={styles.table}>
     <Text style={styles.tableText}>Save
         </Text> 
         </TouchableOpacity>
         
      </View>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: 'center',
    //alignItems: 'center',
    backgroundColor: '#455a64',
    paddingTop: 50
    
  },
  tableText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#ffffff',
    textAlign: 'center',
    padding: 10,
    
          },
          table: {
            backgroundColor: '#1c313a',
            width: 300,
            borderRadius: 25,
            marginVertical: 20,
            alignItems: 'center',
            marginHorizontal: 20
            },
           text: {
              fontSize: 16,
              fontWeight: '500',
              color: '#ffffff',
              //textAlign: 'center',
              marginHorizontal: 20
              
                    },
                     inputBox: {
          width: 300,
          backgroundColor: 'rgba(255, 255, 255, 0.3)',
          //borderRadius: 25,
          paddingHorizontal: 5,
          fontSize: 16,
          color: '#ffffff',
          marginBottom: 30,
          marginTop: 20,
          marginHorizontal: 15
      }, 

  });
