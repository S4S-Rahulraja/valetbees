
import { StyleSheet, View,Text,ScrollView,Image,TextInput,Platform,Pressable,StatusBar,TouchableOpacity} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';

const  RequestComponent = ({ navigation }) => {

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

       const [isOnProcess, setIsOnProcess] = useState(false);

       const handleNewRequestClick = () => {
         setIsOnProcess(false);
       };
     
       const handleOnProcessClick = () => {
         setIsOnProcess(true);
       };


   return(
    <View style={styles.allhomecontainer}>  
           <StatusBar style="auto"></StatusBar>
                <View style={styles.container}>
                    <Image style={styles.imageAlign} source={require('./assets/Logo.png')}/>
                    <Text style={styles.textAlign} >Valet Partner</Text>
                    <Image style={styles.logimgalign} source={require('./assets/loginpic.png')}/>
                </View>
                <View style={styles.RequestHeaderAlign} > 
                                <TouchableOpacity onPress={handleNewRequestClick}  style={[isOnProcess ? styles.RequestHeaderBtn2 :  styles.RequestHeaderBtn1 ,]}>
                                      <Text style={[isOnProcess ? styles.RequestHeaderBtntxt2 :  styles.RequestHeaderBtntxt1 ,]}>New Requests</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={handleOnProcessClick}  style={[isOnProcess ? styles.RequestHeaderBtn1 :  styles.RequestHeaderBtn2 ,]}>
                                      <Text style={[isOnProcess ? styles.RequestHeaderBtntxt1 :  styles.RequestHeaderBtntxt2 ,]} >On Process</Text>
                                </TouchableOpacity>
                </View>
                <View style={styles.tokenCenterAlign}>
                    <TextInput placeholder='Available Tokens , Active Tokens..' style={styles.tokenInputAlign} ></TextInput>
                    <Ionicons name="search" size={24} color="black" style={styles.searchIcon} />
                </View>

                <ScrollView>
                   <View style={styles.allpatalign}>
                   {!isOnProcess   && (
                        <View>
                              <View style={styles.allReq1}>
                                  <View style={styles.allReq2}>
                                        <View style={styles.topColorBack}>
                                            <Text style={styles.TopTextId}>Token</Text>
                                            <Text style={styles.TopTextId2}>1</Text>
                                        </View>
                                        <View style={styles.bottomAlign1}>
                                              <View style={styles.container3}>
                                                    <View style={styles.activedetails1} >
                                                          <Text style={styles.activebox2text} >Vehicle No:</Text>
                                                          <Text style={styles.activebox2text1} >TN 63 AR 2007</Text>
                                                    </View>
                                                    <View style={styles.activedetails1} >
                                                          <Text style={styles.activebox2text} >Owner :</Text>
                                                          <Text style={styles.activebox2text1} >John Doe</Text>
                                                    </View>
                                                    <View style={styles.activedetails1} >
                                                            <Text style={styles.activebox2text} >Mobile No: </Text>
                                                            <Text style={styles.activebox2text1} >6383698932</Text>
                                                    </View>
                                                    <View style={styles.activedetails1} >
                                                            <Text style={styles.activebox2text} >In Time: </Text>
                                                            <Text style={styles.activebox2text1} >9.20</Text>
                                                    </View>
                                        </View>
                                    </View>
                                  </View>
                                  <View >
                                      <TouchableOpacity style={styles.allReq3} >
                                            <Text style={styles.allReq3btntext}>Accept</Text>
                                      </TouchableOpacity>
                                  </View>
                              </View>  
                        </View>
                      )}
                        {isOnProcess   && (
                        <View>
 <View style={styles.allReq1}>
                                  <View style={styles.allReq2}>
                                        <View style={styles.topColorBack}>
                                            <Text style={styles.TopTextId}>Token</Text>
                                            <Text style={styles.TopTextId2}>4</Text>
                                        </View>
                                        <View style={styles.bottomAlign1}>
                                              <View style={styles.container3}>
                                                    <View style={styles.activedetails1} >
                                                          <Text style={styles.activebox2text} >Vehicle No:</Text>
                                                          <Text style={styles.activebox2text1} >TN 63 AR 2007</Text>
                                                    </View>
                                                    <View style={styles.activedetails1} >
                                                          <Text style={styles.activebox2text} >Owner :</Text>
                                                          <Text style={styles.activebox2text1} >John Doe</Text>
                                                    </View>
                                                    <View style={styles.activedetails1} >
                                                            <Text style={styles.activebox2text} >Mobile No: </Text>
                                                            <Text style={styles.activebox2text1} >6383698932</Text>
                                                    </View>
                                                    <View style={styles.activedetails1} >
                                                            <Text style={styles.activebox2text} >In Time: </Text>
                                                            <Text style={styles.activebox2text1} >9.20</Text>
                                                    </View>
                                        </View>
                                    </View>
                                  </View>
                                  <View >
                                      <TouchableOpacity style={styles.allReq3} >
                                            <Text style={styles.allReq3btntext}>Done</Text>
                                      </TouchableOpacity>
                                  </View>
                              </View>  
                        </View>
                        )}
                    </View>
                </ScrollView>

                <View style={styles.footer}>
                  
                  <View style={styles.footButton1}>
                      <TouchableOpacity style={styles.logbutton12} onPress={GoHome}>
                           <Ionicons name="home" size={24} color="#FF9901" style={styles.normalIcon} />
                           <Text style={styles.normaltext}>All</Text>
                       </TouchableOpacity>
                  </View >
               
              <View style={styles.footButton1}>
                      <TouchableOpacity style={styles.logbutton12} onPress={GoRequest}>
                           <Ionicons name="alarm" size={24} color="#FF9901" style={styles.colorIcon} />
                           <Text style={styles.colortext}>Requests</Text>
                      </TouchableOpacity>
              </View> 
              <View style={styles.footButton1}>
                      <TouchableOpacity style={styles.logbutton12} onPress={GoOpenSlot}>
                            <Ionicons name="open" size={24} color="#FF9901" style={styles.normalIcon} />
                              <Text style={styles.normaltext}>Open Slot</Text>
                      </TouchableOpacity>
              </View> 
              <View style={styles.footButton1}>
                      <TouchableOpacity style={styles.logbutton12} onPress={GoActiveSlot}>
                              <Ionicons name="checkmark-circle" size={24} color="#FF9901" style={styles.normalIcon} />
                              <Text style={styles.normaltext}>Active Slot</Text>
                      </TouchableOpacity>
              </View>                
          </View>
     </View>
   )

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
      RequestHeaderAlign:{
        width:'100%',
        flexDirection:'row'
      },
      RequestHeaderBtn1:{
        borderColor:'#FF9901',
        borderWidth:1,
        backgroundColor: '#FF8A00',
        width:'50%',
        height:60,
        alignItems:'center',
        justifyContent:'center'
      },
      RequestHeaderBtn2:{
        borderColor:'rgba(0, 0, 0, 0.31)',
        borderWidth:1,
        backgroundColor: 'white',
        width:'50%',
        height:60,
        alignItems:'center',
        justifyContent:'center'
      },
      RequestHeaderBtntxt1:{
        color:'white',
        fontSize:16,
        fontWeight:'700'
      },
      RequestHeaderBtntxt2:{
        color:'black',
        fontSize:16,
        fontWeight:'700'
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
            shadowRadius: 6,
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
      
      OpenCount:{
        color: '#727871',
        fontSize: 20,
        fontWeight: '700',
       paddingBottom:20
      },

      allReq1:{
        backgroundColor:'white',
        borderRadius:10,
        width:'100%',
        height:180,
        marginTop:15,
        marginBottom:15,
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

      allReq2:{
        flexDirection:'row',
        alignItems:'center',
        paddingLeft:15,
      },
      allReq3:{ 
        backgroundColor:'#FF9901',
        color:'white',
        width:'100%',
        height:40,
        borderBottomLeftRadius:10,
        borderBottomRightRadius:10,
        alignItems:'center',
        justifyContent:'center'
      },

      allReq3btntext:{
        fontSize:16,
        color:'white',
        fontWeight:'700'
      },

      topColorBack:{
     
        width:'20%',
        display:'flex',
        alignItems:'center',
        justifyContent:'center'
      },
      TopTextId2:{
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
      TopTextId:{
        fontSize:15,
        fontWeight:'bold',
         color:'rgba(0, 0, 0, 0.73)',
      }
      ,bottomAlign1:{
          padding:30,
          alignItems:'center',
          height:140,
          flexDirection:'row'
      },
   
      container3:{
        width:'100%',
      },
      activedetails1:{
        flexDirection:'row',
        alignItems:"center"
      },
      activebox2text:{
        flexDirection:'column',
        justifyContent:'flex-end',
        width:'35%',
        textAlign:'left',
        padding:5,
      fontSize: 15,
      fontWeight: "700",
      color: "#000000BF"
      },
      activebox2text1:{
      marginLeft:10,
      fontSize: 15,
      fontWeight: "700",
      color: "#727871",
      },

    });





module.exports = RequestComponent;