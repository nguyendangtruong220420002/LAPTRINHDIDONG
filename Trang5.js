import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image , Button, Alert, TextInput} from 'react-native';
import React from 'react';
const Trang5 =()=> {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
    <Text style={styles.text1}>  LOGIN </Text>
    <Text style={styles.text2}>When you agree to terms and conditions</Text>
    <Text style={styles.text2}>#For got your password?</Text>
    <Text style={styles.text2}>#Or login with</Text>
    <View style={styles.growp}>
    <TextInput style={styles.input1}
    placeholder=' Email'></TextInput>
     <TextInput style={styles.input2}
    placeholder=' Password'></TextInput>
    </View>
    <View  style={styles.growpbutton}>
       <Button style={styles.button}
          title='LOGIN'
            color='#ff6600'
          onPress={ ()=> navigation.navigate('Login')}
       ></Button>
       <View style={styles.img}> 
        <Image style={styles.imgfa}
        source={require("./../../../LTDD/GD/PNG/facebook.png")}>
        </Image>
        <Image style={styles.imgfa}
        source={require("./../../../LTDD/GD/PNG/zalo.png")}>
        </Image>
        <Image style={styles.imgfa}
        source={require("./../../../LTDD/GD/PNG/zing.png")}>
        </Image>
       </View>
    </View>
    </View> 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e6fffa',

  },
  imgfa: {
    width: 120,
    height:50,
    top:140,
    borderBlockColor:2,
  },
  img: {
    flexDirection:'row'
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
    width:298,
    height:30,
    top:450,
    left:50,
    fontSize:11,
    fontWeight:'bold',
    textAlign :'center',
  },
 
  growpbutton:{
    top: 160,
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
    marginTop: 40,
  },
  
  growp: {
    top:100,
    left:20,
  },
});
export default Trang5;