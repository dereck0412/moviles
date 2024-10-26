import React from "react";
import { StyleSheet, Text, View } from 'react-native';

const InfoScreen = () => {
    console.log('HomeScreen renderizado')
    return (
      <View style={{
        flex:1,
        backgroundColor:'#e7e7e7',
        justifyContent: 'center',
        alignItems:'center'
      }}>
        <Text>HomeScreen</Text>
      </View>
    );
  };

  export default InfoScreen;