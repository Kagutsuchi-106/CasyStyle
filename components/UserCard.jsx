import { StyleSheet, Text, View , Image} from 'react-native'
import React from 'react'

const UserCard = () => {
  return (
    <View style={styles.conteiner}>

        <Image 
         source={require('@/assets/images/ava.png')} 
         style={styles.image}/>

         <Text style={styles.text}>Jane Orlova</Text>

         <View style={styles.links}>
            <Image 
            source={require('@/assets/images/watsapp.png')} 
            style={styles.links_image}/>
            
            <Image 
            source={require('@/assets/images/viber.png')} 
            style={styles.links_image}/>
        </View>
    </View>
  )
}

export default UserCard

const styles = StyleSheet.create({
   conteiner:{
     
     marginBottom:25,
     paddingHorizontal:16,
     alignItems:'center',
     width:'100%',
     justifyContent:'center',
   },

   image:{
      height:70,
      width:70,
      borderRadius:50,
      marginBottom:15,
   },

   text:{
      fontSize:18,
      fontWeight:'500',
      marginBottom:28,

   },
   links:{
      flexDirection:'row',
      width:137,
      justifyContent:'space-between',
     
   },

   links_image:{
      width:50,
      height:50,
      borderRadius:10,
   },

})