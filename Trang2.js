import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";
import React from 'react';
const Trang2 =()=> {
  return (
    <LinearGradient
     // colors={['#C7F4F6','#00CCF9']}
     colors={["#fff", "#fff", "rgba(6, 204, 249, 1)"]}
      style={styles.mau}>
         <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      
      
    </View>
      </LinearGradient>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    alignItems: 'center',
    justifyContent: 'center',
  },
  mau :{
    flex: 2,
  },
});
export default Trang2;
