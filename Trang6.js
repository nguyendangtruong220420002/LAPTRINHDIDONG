import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image , Button, Alert, TextInput} from 'react-native';
import RadioButtonGroup,{RadioButtonItem } from 'expo-radio-button';
import React, {useState} from 'react';

const Trang6 =()=> {
    const [current, setCurrent] = useState("test");
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
    <Text style={styles.text1}>  REGISTER </Text>
    <Text style={styles.text2}>When you agree to terms and conditions</Text>
    <View style={styles.growp}>
    <TextInput style={styles.input1}
    placeholder=' Name'></TextInput>
     <TextInput style={styles.input2}
    placeholder=' Phone'></TextInput>
    <TextInput style={styles.input2}
    placeholder=' Email'></TextInput>
    <TextInput style={styles.input2}
    placeholder=' Password'></TextInput>
    <TextInput style={styles.input2}
    placeholder=' Birthday'></TextInput>
    </View>
    <View style={styles.radio}
     >
      <RadioButtonGroup 
        selected={current}
        onSelected={(value) => setCurrent(value)}
        radioBackground="green"
      >
        <RadioButtonItem style={styles.male}
         value="test2" label="Male" />
         
        <RadioButtonItem  style={styles.female}
          value="test" label="Female"
        />
      </RadioButtonGroup>
    </View>

    <View  style={styles.growpbutton}>
       <Button style={styles.button}
          title=' REGISTER'
            color='#ff6600'
          onPress={ ()=> navigation.navigate('Login')}
       ></Button> 
    </View>
    </View> 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e6fffa',
  },
  radio:{
    marginTop: 110,
    alignItems:"center"
   
    
  },
  male:{
  },
  female:{
  },
  imgfa: {
    width: 120,
    height:50,
    top:140,
    borderBlockColor:2,
  },
  
  text1: {
    width:360,
    height:15,
    top:80,
    textAlign:'center',
    fontSize:30,
    fontWeight:'bold',
  
  },
  text2: {
    width:300,
    height:30,
    top:600,
    left:50,
    fontSize:11,
    fontWeight:'bold',
    textAlign :'center',
  },
 
  growpbutton:{
    top: 30,
    left:20,
    width:350,
    height:0,
  },
  
  input1 :{
    width:350,
    height:50,
    fontSize: 15,
    borderColor:'black',
    backgroundColor: '#99ffeb',
    paddingLeft:40,
    borderRadius: 5,
  },
  input2 :{
    width:350,
    height:50,
    fontSize: 15,
    borderColor:'black',
    backgroundColor: '#99ffeb',
    paddingLeft:40,
    borderRadius: 1,
    marginTop: 20,
  },
  
  growp: {
    top:100,
    left:20,
  },
});
export default Trang6;