import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image , Button, Alert, TextInput} from 'react-native';
import React from 'react';
const Trang4 =()=> {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
    <Text style={styles.text1}> CODE</Text>
    <Text style={styles.text2}>   VERIFICATION </Text>
    <Text style={styles.text3}>Enter ontime password sent on ++849092605798</Text>
    <View style={styles.growp}>
    <TextInput style={styles.input1}
    ></TextInput>
    <TextInput style={styles.input2}
    ></TextInput>
    <TextInput style={styles.input3}
    ></TextInput>
    <TextInput style={styles.input4}
    ></TextInput>
    <TextInput style={styles.input5}
    ></TextInput>
    <TextInput style={styles.input6}
    ></TextInput>
    <TextInput style={styles.input7}
    ></TextInput>
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
    height:100,
    top:400,
    backgroundColor: '#33adff',
  },
  text1: {
    width: 200,
    height:70,
    top:10,
    left:100,
    fontSize:70,
    borderBlockColor:2,
    fontWeight:'bold',
  
  },
  text2: {
    width:150,
    height:15,
    top:150,
    left:118,
    fontSize:20,
    fontWeight:'bold',
  },
  text3: {
    width:340 ,
    height:36,
    top:250,
    left:30,
    fontSize:17,
    fontWeight:'bold',
    textAlign: 'center',
  },
  growpbutton:{
    top: 350,
    left:20,
    width:350,
    height:0,
    
  },

  input1 :{
    width:50,
    height:50,
    fontSize: 20,
    borderWidth: 1,
    borderColor:'black',
    paddingLeft:20,
    borderRadius: 1,
  },
  input2 :{
    width:50,
    height:50,
    fontSize: 20,
    borderWidth: 1,
    borderColor:'black',
    paddingLeft:20,
    borderRadius: 1,
  },
  input3 :{
    width:50,
    height:50,
    fontSize: 20,
    borderWidth: 1,
    borderColor:'black',
    paddingLeft:20,
    borderRadius: 1,
  },
  input4 :{
    width:50,
    height:50,
    fontSize: 20,
    borderWidth: 1,
    borderColor:'black',
    paddingLeft:20,
    borderRadius: 1,
  },
  input5 :{
    width:50,
    height:50,
    fontSize: 20,
    borderWidth: 1,
    borderColor:'black',
    paddingLeft:20,
    borderRadius: 1,
  },
  input6 :{
    width:50,
    height:50,
    fontSize: 20,
    borderWidth: 1,
    borderColor:'black',
    paddingLeft:20,
    borderRadius: 1,
  },
  growp: {
    top:280,
    left:40,
    flexDirection: 'row',
  },
});
export default Trang4;