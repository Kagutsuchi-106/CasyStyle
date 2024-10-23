import { StyleSheet, Text, View, ScrollView , TouchableOpacity} from 'react-native'
import React from 'react'
import Todo from '@/components/Todo'



const List = () => {
   return (
      <View style={styles.conteiner}>

         <ScrollView>
            <Todo/>
         </ScrollView>

         <TouchableOpacity style={styles.button} onPress={() => alert('Кнопка нажата!')}>
             <Text style={styles.buttonText}>Enroll</Text>
         </TouchableOpacity>
         
      </View>
   )
}

export default List

const styles = StyleSheet.create({
   conteiner: {
      flex: 1,
      width: '100%',
      backgroundColor: 'white',
      borderRadius: 20,
      paddingHorizontal: 16,
   },

   button: {
      position: 'absolute', 
      width: 365,
      left: '50%',
    transform: [{ translateX: -165 },],
      bottom: 0,
      backgroundColor: '#3c89ff',
     alignItems:'center',
      margin:'0 auto',
      borderRadius: 10,
    },
    
    buttonText: {
      fontWeight:'600',
      color: '#fff',
      fontSize: 16,
      lineHeight:50,
    },



})