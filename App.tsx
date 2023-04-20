import React from 'react';
import {View, StyleSheet,Text,Image,ScrollView} from 'react-native';

const Border = () => {
 return (
   <View style={styles.container}>
      <ScrollView contentInsetAdjustmentBehavior="automatic" 
      style={{width:'100%',height:'100%'}}>

    <View style={styles.toptop}>
      <Image source={require('./menuIcon.png')} style={styles.menuIcon}/>
      <Image source={require('./image211.png')} style={styles.image}/>
      </View>
      <View style={styles.frame4408}>
        
      <Image source={require('./search.png')} style={styles.searchIconTop}/>
      <Image source={require('./favorite.png')} style={styles.heart}/>
      <Image source={require('./account_circle.png')} style={styles.account}/>


      </View>


      <View style={styles.top}>
      <Text style={styles.vid}>Videos</Text> 
      <Text style={styles.art}>Article</Text> 

        <Text style={styles.fav}>Favorites</Text> 
        <View style={styles.middle}>
          <Image source={require('./search.png')} style={styles.searchIcon}/>
        </View>


      </View>
      <Image source={require('./image210.png')} style={styles.image210}/>
      <Text style={styles.soup}>Vegetable Bone Marrow Soup</Text> 
      <Image source={require('./image10.png')} style={styles.image10_1}/>
      <Image source={require('./image10.png')} style={styles.image10_2}/>
      <Image source={require('./image10.png')} style={styles.image10_3}/>
      <Image source={require('./image10.png')} style={styles.image10_4}/>

    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />    
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />    
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
   
  </ScrollView>
   </View>
   
 );
};

export default Border;
const logo = {
  url:require('./image10.png'),
  width: 64,
  height: 64,
};

const styles = StyleSheet.create({
  
  container: {
    
    flex: 1,
    flexWrap:'wrap',
    backgroundColor: 'white',
    paddingTop: 0,
    position:'absolute',
    left:'0%',
    right:'0%',
    top:'0%',
    bottom:'0%',
  },
  frame4408:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    position:'absolute',
    width:120,
    height:24,
    right:16.71,
    top:18,
    backgroundColor:'white',
  },
  menuIcon: {
    width: 17,
    height: 16.41,
    marginTop:19.7,
    position:'absolute',
    left: '4.27%',
    right: '91.2%',
    top: '1.15%',
    bottom: '97.89%',

  },
  image: {
    width: 30,
    height: 31,
    position:'absolute',
    marginTop:13,
    marginLeft:55,
  },
  heart: {
    width: 20,
    height: 18.35,
    position:'absolute',
    left: '41.67%',
    right: '41.67%',
    top: '11.04%',
    bottom: '12.5%',


  },
  account: {
    width: 20,
    height: 20,
    position:'absolute',
    left: '81.67%',
    right: '1.67%',
    top: '8.33%',
    bottom: '8.33%',

  },
  searchIconTop: {
    width: 18,
    height: 18,
    position:'absolute',
    left: '2.5%',
    right: '82.5%',
    top: '12.5%',
    bottom: '12.5%',

  },
  toptop: {
    position:'absolute',
    height:56,
    left:'0%',
    right:'0%',
    top:'0%',
    bottom:'96.73%',
    backgroundColor:'white',

  },
  top: {
    position:'absolute',
    left:0,
    right:0,
    height:181,
    top:56,
    backgroundColor: '#06CEA8',
  },
  fav:{   
    position:'absolute',
    fontStyle:"normal",
    fontFamily:'Roboto',
    fontWeight:700,
    fontSize: 45,
    color: 'white',
    height:69,
    width:191,
    marginVertical: 10,
    marginTop:20,
    marginLeft:92,
    textArea:'center',
  },
  recipe:{   
    position:'absolute',
    fontStyle:"normal",
    fontFamily:'Roboto',
    fontWeight:500,
    fontSize: 20,
    color: '#16266E',
    marginTop:200,
    marginLeft:20,
    textArea:'center',
    textDecorationLine:'underline',
  },
  vid:{   
    position:'absolute',
    fontStyle:"normal",
    fontFamily:'Roboto',
    fontWeight:500,
    fontSize: 20,
    color: 'black',
    marginTop:200,
    marginLeft:172,
    textArea:'center',
  },
  art:{   
    position:'absolute',
    fontStyle:"normal",
    fontFamily:'Roboto',
    fontWeight:500,
    fontSize: 20,
    color: 'black',
    marginTop:200,
    marginLeft:286,
    textArea:'center',
  },

    middle: {
      display:'flex',
      flexDirection:'row',
      alignItems:'center',
      position:'absolute',

      width:335,
      height:42,
      borderRadius:35,
      left:20,
      top:105,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'black'
  },
  searchIcon: {
    width: 18,
    height: 18,
    position:'absolute',
    left:'5.07%',
    right:'89.55%',
    top:'28.57%',
    bottom:'28.57%',
  },
  image210: {
    width: 343,
    height: 259,
    position:'absolute',
    marginLeft:19,
    marginTop:324,
    borderRadius:25,

  },
  soup:{   
    position:'absolute',
    fontStyle:"normal",
    fontFamily:'Roboto',
    fontWeight:600,
    fontSize: 20,
    color: '#333133',
    marginTop:593,
    marginLeft:0,
    display:'flex',
  },
  image10_1: {
    width: 158,
    height: 112,
    position:'absolute',
    marginLeft:4,
    marginTop:621,
    borderRadius:25,
    display:'flex',

  },  image10_2: {
    width: 158,
    height: 112,
    position:'absolute',
    marginLeft:184,
    marginTop:621,
    borderRadius:25,

  },  image10_3: {
    width: 158,
    height: 112,
    position:'absolute',
    marginLeft:4,
    marginTop:803,
    borderRadius:25,

  },  image10_4: {
    width: 158,
    height: 112,
    position:'absolute',
    marginLeft:184,
    marginTop:803,
    borderRadius:25,

  },
 });
 