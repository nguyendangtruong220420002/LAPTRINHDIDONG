import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image , Button, Alert, TextInput} from 'react-native';
import React from 'react';
const Trang3 =()=> {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
    <Image style={styles.logo}
    source={require("./../../../LTDD/GD/PNG/okhoa.jpg")}></Image>
    <Text style={styles.text1}>   FORGET PASSWORD </Text>
    <Text style={styles.text3}>Provide your accounts email for which you want to reset your password</Text>
    <View style={styles.growp}>
      <Image style={styles.imgTextInput}
      source={require("./../../../LTDD/GD/PNG/hopthu.jpg")}>

      </Image>
    <TextInput style={styles.input}
    placeholder=' Email'></TextInput>
    </View>
    <View  style={styles.growpbutton}>
       <Button style={styles.button}
          title='LOGIN'
            color='#ff6600'
          onPress={ ()=> navigation.navigate('Login')}
       ></Button>
    </View>
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
    top:100,
    left:120,
    borderBlockColor:2,
  },
  text1: {
    width:250,
    height:15,
    top:115,
    left:115,
    fontSize:30,
    fontWeight:'bold',
  
  },
 
  text3: {
    width:298,
    height:36,
    top:200,
    left:50,
    fontSize:14,
    fontWeight:'bold'
  },
  growpbutton:{
    top: 280,
    left:20,
    width:350,
    height:0,
  },
  imgTextInput:
  {
    width: 24, 
    height: 24, 
    marginRight: 10,
    top : 35,
    left:20,
  },
  input :{
    width:350,
    height:45,
    fontSize: 20,
    borderWidth: 1,
    borderColor:'black',
    backgroundColor: '#C4C4C4',
    paddingLeft:40,
    borderRadius: 1,
  },
  growp: {
    top:240,
    left:20,
  },
});
export default Trang3;