import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';


export default class Logo extends Component<{}> {
  render() {
    return (
        <View style={styles.container}> 
            <Image
     style={{ width: 150, height: 70 }}
     source={require('../images/hasura.png')} 
            />
        <Text style={styles.logoText}> Welcome to My app </Text>
        </View>
    );
}
}

const styles = StyleSheet.create({
    container: {
  flexGrow: 1,
  alignItems: 'center',
  justifyContent: 'flex-end'
      },
      logoText: {
          fontSize: 18,
          marginVertical: 10,
          color: 'rgba(255, 255, 255, 0.7)'
      }
});
