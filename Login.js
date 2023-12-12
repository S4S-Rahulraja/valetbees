
import { StyleSheet, Text, View,Image ,Platform,TextInput,TouchableOpacity,Alert} from 'react-native';
import { useState } from 'react';




const  LoginComponent = ({ navigation }) => {
  





    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    function handleLogin(){
        const validUsername = '@admin';
        const validPassword = '123';

        if (username === validUsername && password === validPassword) {

          navigation.navigate('Home');
        } else {
          
          Alert.alert('Invalid Credentials', 'Please enter valid username or email and password.');
        }
    }

    return (
        <View style={styles.allcontainer}>
         
               <View style={styles.container}>
                  <Image style={styles.imageAlign} source={require('./assets/Logo.png')}/>
               </View>
               <View style={styles.textAlign}>
                   <Text style={styles.textAlign1}>Valet <Text style={styles.textAlign2}>Bee's</Text></Text> 
               </View>
              <View style={styles.common}>
                   <View style={styles.login}>
                         <Text style={styles.logtext}>Login</Text>
                         <View style={styles.common}>
                               <TextInput placeholder='Username or Email' value={username} onChangeText={setUsername} style={styles.textinputalign} ></TextInput> 
                         </View>   
                         <View style={styles.common}>
                               <TextInput placeholder='Password' style={styles.textinputalign} value={password} onChangeText={setPassword} secureTextEntry></TextInput> 
                         </View> 
                         <View style={styles.common}>
                               <TouchableOpacity style={styles.logbutton} onPress={handleLogin}>
                                   <Text style={styles.logbuttonText}>Click me</Text>
                               </TouchableOpacity>  
                         </View>
                   </View>
              </View>
              <View style={styles.finallogback}></View>
        </View>
     
       );
}

const styles = StyleSheet.create({
    common:{
      display:'flex',
      alignItems:'center',
      justifyContent:'center',
    },
    allcontainer: {
       flex:1
    },
    container: {
      backgroundColor: "#FF9901",
      width:"100%",
      height:56,
      display:'flex',
      alignItems:'center',
      justifyContent:'center',
    },
    imageAlign: {
      width:40,
      height:40
    },
    textAlign:{
      display:'flex',
      alignItems:'center',
      justifyContent:'center',
      marginTop:50,
  
    },
    textAlign1:{
       color:'#FF9901',
       fontSize:30,
       fontWeight:'bold',
       
  
    },
    textAlign2:{
      color:'black',
    },
  
    login:{
      marginTop:50,
       width:"90%",
       height:350,
       backgroundColor:"white",
       borderRadius: 35,
       padding:15,
       ...Platform.select({
        ios: {
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 0 },
          shadowOpacity: 0.5,
          shadowRadius: 20,
        },
        android: {
          elevation: 20,
        },
      }),
    },
    logtext:{
      color: "#727871",
      fontSize: 24,
      fontWeight: "bold",
      marginTop:10,
      marginLeft:20
    },
    textinputalign:{
      borderWidth:1,
      borderColor:"#ccc",
      width:"90%",
      backgroundColor:"white",
      borderRadius:26,
      textAlign:"center",
      fontSize:15,
      paddingVertical: 13,
      marginTop:30,
      ...Platform.select({
        ios: {
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 0 },
          shadowOpacity: 0.5,
          shadowRadius: 3,
        },
        android: {
          elevation: 6,
        },
      }),
     },
  
     logbutton: {
      width: '60%', 
      borderRadius: 30,
      backgroundColor: '#FF9901', 
      paddingVertical: 13,
      alignItems: 'center',
      marginTop:30
     },
     logbuttonText: {
      color: 'white', 
      fontSize: 16,
      fontWeight: 'bold',
     },
    
     finallogback:{
      borderTopLeftRadius: 50,
      backgroundColor: "#FF9901",
      borderTopRightRadius:50,
      width:"100%",
      height:800,
      position:'relative',
      bottom:0,
      top:-200,
      zIndex:-1
     }
  
  });


module.exports = LoginComponent;