import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux'; 

export default class App extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
      <Text style={styles.text}> Select Table </Text>
         <TouchableOpacity style={styles.table}>
     <Text style={styles.tableText} onPress={() => Actions.student()}>Student Detail 
         </Text> 
         </TouchableOpacity>
         <TouchableOpacity style={styles.table}>
     <Text style={styles.tableText} onPress={() => Actions.employee()}>Employee Detail
         </Text> 
         </TouchableOpacity>
      </View>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#455a64',
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
            marginVertical: 10,
            },
           text: {
              fontSize: 16,
              fontWeight: '500',
              color: '#ffffff',
              textAlign: 'center',
              padding: 40,
                    }
  });
