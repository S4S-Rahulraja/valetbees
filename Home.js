
import { StyleSheet, View,Text,ScrollView,Image,TextInput,Platform,Pressable,StatusBar,TouchableOpacity,FlatList,Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const { height,width}=Dimensions.get('window')

const  HomeComponent = ({ navigation }) => {


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

    return (
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
                    <View style={styles.allpatalign}>
                        <View style={styles.ReqPenAlign1}>
                            <Text style={styles.allReqtext1}>Requests Pending</Text>
                            <TouchableOpacity onPress={GoRequest}>
                                <Text style={styles.allReqtext2}>View all</Text>
                            </TouchableOpacity>
                           
                        </View>
                        <View>
                              <FlatList data={[1,2,6,7]} horizontal showsHorizontalScrollIndicator={false} renderItem={({item,index})=>{
                                    return(
                                      <View style={styles.slideAlign1}>
                                            <View style={ styles.slideAlign2} >  
                                                  <View style={styles.GonextAlign2}>
                                                              <Text style={styles.GonextAlign2txt11}>Token</Text>
                                                              <Text style={styles.GonextAlign2txt2}>{item}</Text>
                                                    </View>

                                                              <TouchableOpacity style={styles.Qrbtntxtall} onPress={GoRequest} >
                                                                    <Text style={styles.Qrbtntxt}>Accept </Text>
                                                              </TouchableOpacity>
                                            </View>
                                     </View>
                                )}} />
                        </View>
                      
        
                      
                          <View style={styles.ReqPenAlign1}>
                              <Text style={styles.allReqtext1}>Active Token</Text>
                              <TouchableOpacity onPress={GoActiveSlot}>
                                  <Text style={styles.allReqtext2}>View all</Text>
                              </TouchableOpacity>
                          </View>
                   
                          <View style={styles.ActiveCard1}>
                                  <View style={styles.ActiveRow1}>
                                      <Text style={styles.ActiveRowCardtxt1}>3</Text>
                                  </View>
                                  <View style={styles.ActiveRow2}>
                                      <Text style={styles.ActiveRowCardtxt2}>TN 63 AB 1692</Text>
                                  </View>
                                  <TouchableOpacity onPress={GoActiveSlot} style={styles.ActiveRow3}>
                                        <Ionicons name="chevron-forward-outline" size={64} color="white"   />  
                                  </TouchableOpacity>
                          </View>
                          <View style={styles.ActiveCard1}>
                                  <View style={styles.ActiveRow1}>
                                      <Text style={styles.ActiveRowCardtxt1}>4</Text>
                                  </View>
                                  <View style={styles.ActiveRow2}>
                                      <Text style={styles.ActiveRowCardtxt2}>TN 63 AB 1692</Text>
                                  </View>
                                  <TouchableOpacity onPress={GoActiveSlot} style={styles.ActiveRow3}>
                                        <Ionicons name="chevron-forward-outline" size={64} color="white"   />  
                                  </TouchableOpacity>
                          </View>
                          
                          <View style={styles.ReqPenAlign1}>
                              <Text style={styles.allReqtext1}>Open Token</Text>
                             <TouchableOpacity onPress={GoOpenSlot}>
                                  <Text style={styles.allReqtext2}>View all</Text>
                              </TouchableOpacity>
                          </View>
                          <View>
                              <FlatList data={[5,8,9,10]} horizontal showsHorizontalScrollIndicator={false} renderItem={({item,index})=>{
                                    return(
                                      <View style={styles.slideAlign1}>
                                            <View style={ styles.slideAlign2} >  
                                                  <View style={styles.GonextAlign2}>
                                                              <Text style={styles.GonextAlign2txt11}>Token</Text>
                                                              <Text style={styles.GonextAlign2txt2}>{item}</Text>
                                                    </View>

                                                              <TouchableOpacity style={styles.Qrbtntxtall} onPress={GoOpenSlot}>
                                                                    <Text style={styles.Qrbtntxt}>Activate </Text>
                                                              </TouchableOpacity>
                                            </View>
                                     </View>
                                )}} />
                        </View>
                   
                   </View>
                </ScrollView>

                <View style={styles.footer}>
                  
                        <View style={styles.footButton1}>
                            <TouchableOpacity style={styles.logbutton12} onPress={GoHome}>
                                 <Ionicons name="home" size={24}  style={styles.colorIcon} />
                                 <Text style={styles.colortext}>All</Text>
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
                                  <Ionicons name="open" size={24}  style={styles.normalIcon} />
                                    <Text style={styles.normaltext}>Open Slot</Text>
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
    )
}


const styles = StyleSheet.create({
        
        ActiveCard1:{
          borderRadius: 10,
          borderWidth:1,
          borderColor:'#E9E9E9',
          backgroundColor: '#FFF',
          width:'100%',
          height:75,
          marginTop:20,
          flexDirection:'row',
          alignItems:'center',
          ...Platform.select({
            ios: {
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 0 },
              shadowOpacity: 0.5,
              shadowRadius: 6,
            },
            android: {
              elevation:6,
            },
          }),

        },
        ActiveRow1:{
          width:'25%',
          alignItems:'center',
          justifyContent:'center'
        },
        ActiveRow2:{
          width:'50%',
          alignItems:'center',
          justifyContent:'center'
        },

        ActiveRow3:{
          width:'25%',
          backgroundColor:'#FF8A00',
          height:'100%',
          borderTopRightRadius: 10,
          borderBottomRightRadius: 10,
          alignItems:'center',
          justifyContent:'center'
        },
        ActiveRowCardtxt2:{ 
            color:'#727871',
      },
      ActiveRowCardtxt1:{
        borderRadius: 6,
        borderWidth:2,
        borderColor:'#FF9901',
        color: '#FF9901',
        fontSize: 40,
        textAlign:'center',
        paddingLeft:15,
        paddingRight:15,
      },


         slideAlign1:{
          width:width-220,
          height:height/3.5,
         justifyContent:'center',
          alignItems:'center',

         },
         slideAlign2:{
             width:'95%',
             backgroundColor:'white',
             borderRadius:15,
            height:180,
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

      },
  






      allReqtext1:{
        fontSize:24,
        fontWeight:'bold',
        width:'70%'
      },
      allReqtext2:{
      fontSize:16, 
      color: '#FF8A00',
      fontWeight:'600',
      },
      ReqPenAlign1:{
        width:'100%',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingLeft:10,
        paddingRight:10,
        marginTop:30
       
      },

      allReq1:{
        backgroundColor:'white',
        borderRadius:15,
        width:'45%',
        height:180,
        marginTop:30,
        marginBottom:20,
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
});



module.exports = HomeComponent;