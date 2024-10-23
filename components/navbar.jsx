import { StyleSheet, Image, View, Text } from 'react-native'
import React from 'react'

const Navbar = () => {
   return (
      <View style={styles.conteiner}>
         <Image 
         source={require('@/assets/images/avatar.png')} 
         style={styles.logo}/>
         <View style={styles.current_language}><Text style={styles.current_language_Text}>EN</Text></View>

      </View>
   )
}

export default Navbar


const styles = StyleSheet.create({
   conteiner:{
     marginTop: 42,
     paddingHorizontal:16,
     marginBottom:24,   
     flexDirection:'row',
     width:'100%',
     justifyContent:'space-between'

   },

   logo:{
      width:64,
      height:45,

   },

   current_language:{
      width:45,
      height:45,
      backgroundColor:'#eaf3fe',
      justifyContent:'center',
      alignItems:'center',
      borderRadius:50,
      borderColor:'#dbe7f3',
      borderWidth:1,
   },
   
   current_language_Text:{
      fontWeight:'500',
      color:'#348cfb',
   },




})