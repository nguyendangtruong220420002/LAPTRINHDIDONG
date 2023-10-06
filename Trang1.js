import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image , Button, Alert } from 'react-native';
import React from 'react';
const Trang1 =()=> {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
    
    <Image style={styles.logo}
    source={{uri: 'https://saigon24gio.files.wordpress.com/2016/09/mau-thiet-ke-logo-hinh-tron-6.png'}}></Image>
    <Text style={styles.text1}>        GROW        YOUR BUSINESS </Text>
    <Text style={styles.text3}>We will help you to grow your business using online server</Text>
    <View style={styles.button}>
       <Button 
          title='LOGIN'
          color='#ff6600'
          onPress={ ()=> navigation.navigate('Login')}
       ></Button>
       <Button
          title=" SIGN UP"
          color='#ff6600'
          onPress ={ () => { Alert.alert('Ban co chac chonj SIGN UP khong');
         }}
       /> 
    </View>
    <Text style={styles.text4}
    onPress={ ()=> Alert.alert()} >HOW WE WORK ?</Text>
    <View style={styles.mau}>
    </View>
    </View> 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e6faff',
   
  },
  mau: {
    width: 400,
    height:90,
    top:330,
    backgroundColor: '#33adff',
  },
  logo: {
    width: 150,
    height:150,
    top:110,
    left:120,
    backgroundColor: 'black',
    borderBlockColor:2
  },
  text1: {
    width:250,
    height:15,
    top:150,
    left:86,
    fontSize:25,
    fontWeight:'bold',
  
  },
 
  text3: {
    width:320,
    height:36,
    top:250,
    left:29,
    fontSize:15,
    fontWeight:'bold'
  },
  button: {
    width:400,
    top: 300,
    flexDirection: 'row',
    justifyContent:'space-around',
    alignItems: 'center'
  },
  text4:{
    width:250,
    height:15,
    top:325,
    left:125,
    fontSize:15,
    fontWeight:'bold',
  }
});
export default Trang1;