
import { StyleSheet, View,Text,ScrollView,Image,TextInput,Platform,Pressable,StatusBar,TouchableOpacity} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';

const  OpenSlotComponent = ({ navigation }) => {

  const [activatedToken, setActivatedToken] = useState(null);
  const [tokens, setTokens] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]); // Array of tokens
  const chunkArray = (arr, chunkSize) => {
    return Array.from({ length: Math.ceil(arr.length / chunkSize) }, (_, index) =>
      arr.slice(index * chunkSize, index * chunkSize + chunkSize)
    );
  };

  const tokenRows = chunkArray(tokens, 2);

    const [tokenActivated, setTokenActivated] = useState(false);

    const GoNext = (token) => {
      setActivatedToken(token);
    };
  
    const GoMoveActive = () => {
      setTokens(tokens.filter((token) => token !== activatedToken));
      setActivatedToken(null);
      navigation.navigate('ActiveSlot');
    };
  
    
  
    const GoCancel = () => {
      setActivatedToken(null);
    };




  


    function GoHome(){
        navigation.navigate('Home');
       }
       function GoRequest(){
        navigation.navigate('Request');
       }
       function GoOpenSlot(){
        navigation.navigate('OpenSlot');
       }
       function GoActiveSlot(){
        navigation.navigate('ActiveSlot');
       }


   return(
    <View style={styles.allhomecontainer}>  
    <StatusBar style="auto"></StatusBar>
         <View style={styles.container}>
             <Image style={styles.imageAlign} source={require('./assets/Logo.png')}/>
             <Text style={styles.textAlign} >Valet Partner</Text>
             <Image style={styles.logimgalign} source={require('./assets/loginpic.png')}/>
         </View>
         <View style={styles.tokenCenterAlign}>
             <TextInput placeholder='Available Tokens , Active Tokens..' style={styles.tokenInputAlign} ></TextInput>
             <Ionicons name="search" size={24} color="black" style={styles.searchIcon} />
         </View>

         <ScrollView>  
            <View>
                        <View style={styles.allpatalign}>
                                    <View>
                                    <Text style={styles.Openfirsttxt1}>Open Token</Text>
                                    </View>
                            {!activatedToken && (
                                    <View>
                                          {tokenRows.map((row, rowIndex) => (
                                             <View style={styles.allReq} key={rowIndex}>
                                                  {row.map((token, index) => (
                                                        <View style={styles.allReq1} key={index}>
                                                            <View style={styles.GonextAlign2}>
                                                              <Text style={styles.GonextAlign2txt11}>Token</Text>
                                                              <Text style={styles.GonextAlign2txt2}>{token}</Text>
                                                            </View>

                                                              <TouchableOpacity style={styles.Qrbtntxtall} onPress={() => GoNext(token)} >
                                                                    <Text style={styles.Qrbtntxt}>Activate </Text>
                                                              </TouchableOpacity>
                                                          </View>
                                                     ))}
                                                </View>
                                           ))}
                                  </View>
                             )} 
                           {activatedToken   && (
                                <View >
                                    <View style={styles.GonextAlign1}>
                                        <View style={styles.GonextAlign2}>
                                             <Text style={styles.GonextAligntxt11}>Token</Text>
                                             <Text style={styles.GonextAligntxt2}>{activatedToken}</Text>
                                         </View>
                                         <View style={styles.goFormtextalign}>
                                             <Text style={styles.GonextAligntxt1}>Vehicle No:</Text>
                                         </View>
                                         <View style={styles.ActiveInputALign}>
                                            
                                            <TextInput placeholder='Vehicle No:' style={styles.ActiveInput} ></TextInput>
                                         </View>
                                         <View style={styles.goFormtextalign}>
                                             <Text style={styles.GonextAligntxt1}>Owner:</Text>
                                         </View>
                                         <View style={styles.ActiveInputALign}>
                                            <TextInput placeholder='Owner:' style={styles.ActiveInput} ></TextInput>
                                         </View>
                                         <View style={styles.goFormtextalign}>
                                             <Text style={styles.GonextAligntxt1}>Mobile No:</Text>
                                         </View>
                                         <View style={styles.ActiveInputALign}>
                                            <TextInput placeholder='Mobile No:' style={styles.ActiveInput} ></TextInput>
                                         </View>
                                         <View style={styles.GoFormbtnalign}>
                                                 <TouchableOpacity style={styles.GoFormbtn} onPress={GoMoveActive} >
                                                       <Text style={styles.GoFormbtntxt}>Activate</Text>
                                                </TouchableOpacity>
                                               <TouchableOpacity style={styles.GoFormbtn} onPress={GoCancel}>
                                                        <Text style={styles.GoFormbtntxt}>Cancel</Text>
                                                 </TouchableOpacity>
                                        </View>  
                                    </View>
                                   
                            </View>
                             )}
                        </View>
              
            </View>           
         </ScrollView>

         <View style={styles.footer}>
                  
                  <View style={styles.footButton1}>
                      <TouchableOpacity style={styles.logbutton12} onPress={GoHome}>
                           <Ionicons name="home" size={24} style={styles.normalIcon} />
                           <Text style={styles.normaltext}>All</Text>
                       </TouchableOpacity>
                  </View >
               
              <View style={styles.footButton1}>
                      <TouchableOpacity style={styles.logbutton12} onPress={GoRequest}>
                           <Ionicons name="alarm" size={24}  style={styles.normalIcon} />
                           <Text style={styles.normaltext}>Requests</Text>
                      </TouchableOpacity>
              </View> 
              <View style={styles.footButton1}>
                      <TouchableOpacity style={styles.logbutton12} onPress={GoOpenSlot}>
                            <Ionicons name="open" size={24}  style={styles.colorIcon} />
                              <Text style={styles.colortext}>Open Slot</Text>
                      </TouchableOpacity>
              </View> 
              <View style={styles.footButton1}>
                      <TouchableOpacity style={styles.logbutton12} onPress={GoActiveSlot}>
                              <Ionicons name="checkmark-circle" size={24}  style={styles.normalIcon} />
                              <Text style={styles.normaltext}>Active Slot</Text>
                      </TouchableOpacity>
              </View>                
          </View>
 </View>
   );

}


const styles = StyleSheet.create({
    allhomecontainer:{
      flex:1,
    },
    container: {
        backgroundColor: "#FF9901",
        width:"100%",
        height:65,
        flexDirection: 'row',
        alignItems:'center'
      
      },
      imageAlign: {
        width:45,
        height:45,
        marginLeft:10,
      },
      textAlign:{
        marginLeft:'auto',
        marginRight:-120,
        color:" rgba(0, 0, 0, 0.66)",
        fontSize: 20,
        fontWeight: 'normal',
      },
      logimgalign:{
        marginLeft:'auto',
        marginRight:20,
        width:40,
        height:40,
        zIndex:1
      },

      tokenCenterAlign:{
          display:'flex',
          justifyContent:'center',
          alignItems:'center'
      },

      tokenInputAlign:{
        borderWidth:1,
        borderColor:"#ccc",
        width:"90%",
        backgroundColor:"white",
        borderRadius:15,
        textAlign:"left",
        fontSize:15,
        paddingVertical: 13,
        paddingLeft:20,
        marginTop:10,
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
      searchIcon: {
        position: 'absolute',
        right: 40, 
        top: '60%',
        transform: [{ translateY: -12 }],
      },
      footer:{
        position: 'relative',
        bottom: 0,
        backgroundColor:'white' ,
        width:'100%',
        height:'auto',
        flexDirection: 'row',
        alignItems:'center',
        paddingLeft:5,
        paddingRight:10,
        paddingBottom:10,
        paddingTop:5,
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
      footButton1:{
        width:'25%',
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
      },
      logbutton12:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
      },

      normaltext:{
        fontSize: 15,
        fontWeight: "600",
        fontStyle: "normal",
        lineHeight: 15,
        color: "#727871"
      },
      colortext:{
        fontSize: 16,
        fontWeight: "700",
        fontStyle: "normal",
        lineHeight: 16,
        color: "#FF9901"
      },
      normalIcon:{ 
        color: "#727871",
       },
       colorIcon:{
         color: "#FF9901"
       },

      allpatalign:{
        paddingLeft:20,
        paddingRight:20,
        paddingTop:20,
      },

      Openfirsttxt1:{
        color: '#000',
        fontSize: 24,
        fontWeight: '700',
        marginBottom:30
      },
      OpenCount:{
        color: '#727871',
        fontSize: 20,
        fontWeight: '700',
       paddingBottom:20
      },
      allReq:{
        width:'100%',
        flexDirection:'row',
        justifyContent:'space-around'
      },
      allReq1:{
        backgroundColor:'white',
        borderRadius:15,
        width:'45%',
        height:180,
        marginBottom:30,
        padding:10,
        alignItems:"center",
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
      GonextAlign2:{
        alignItems:'center',
        
      },
      GonextAlign2txt2:{
        borderRadius: 6,
         borderWidth:2,
         borderColor:'#FF9901',
         color: '#FF9901',
         fontSize: 45,
         textAlign:'center',
         paddingLeft:15,
         paddingRight:15,

         marginTop:5
      },
   
    
  
    GonextAlign2txt11:{
      color: 'rgba(0, 0, 0, 0.73)',
      fontSize: 18,
      fontWeight: '700',
      textAlign:'center',
      marginTop:5
  },




    Qrbtntxtall:{
        marginTop:15
    },
    Qrbtntxt:{
       
        backgroundColor: '#FF9901',
        color:'white',
        paddingLeft:20,
        paddingRight:20,
        paddingTop:8,
        paddingBottom:8,
        borderRadius:6,
        width:'80%',
        textAlign:'center',
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
    GonextAlign1:{
     
        width:'100%',
        display:"flex",
        alignItems:'center',
        justifyContent:'center',
     
    },

      GonextAligntxt2:{
        borderRadius: 6,
         borderWidth:2,
         borderColor:'#FF9901',
         color: '#FF9901',
         fontSize: 45,
         textAlign:'center',
         paddingLeft:15,
         paddingRight:15
      },
   
    
    GonextAligntxt1:{
        color: 'rgba(0, 0, 0, 0.73)',
        fontSize: 15,
        fontWeight: '700',
    },
 
    GonextAligntxt11:{
      color: 'rgba(0, 0, 0, 0.73)',
      fontSize: 15,
      fontWeight: '700',
      textAlign:'center'
  },



    ActiveInputALign:{
        width:'100%',
        borderRadius: 10,
        backgroundColor: 'rgba(114, 120, 113, 0.07)',
        height:50,
        paddingTop:10,
        paddingBottom:10,
        paddingLeft:10,
        paddingRight:10,
        color: '#727871',
        fontSize: 15,
        fontWeight: '400',
      
    },
    goFormtextalign:{
         width:'100%',
         marginTop:20,
         marginLeft:10,
         marginBottom:10,

    },
    GoFormbtnalign:{
        marginTop:10,
        width:'100%',
    },
    GoFormbtn:{
        width:'100%',
        backgroundColor: '#FF9901',
        height:50,
        display:"flex",
        alignItems:'center',
        justifyContent:'center',
        marginTop:10,
        borderRadius:10
        
    },
    GoFormbtntxt:{
        color: '#FFF',
        fontSize: 15,
        fontWeight:'700'
    }
});






module.exports = OpenSlotComponent;