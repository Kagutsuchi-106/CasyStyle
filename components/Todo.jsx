import { StyleSheet, Text, View, } from 'react-native'
import React from 'react'
import Checkbox from 'expo-checkbox'
import { useState } from 'react';





const initialServices = [
   { id: '1', name: 'Haircut', price: 30, duration: '90 minutes', selected: false },
   { id: '2', name: 'Moustache and beard', price: 15, duration: '60 minutes', selected: false },
   { id: '3', name: 'Manicure', price: 20, duration: '45 minutes', selected: false },
   { id: '4', name: 'Eyelash extensions', price: 30, duration: '60 minutes', selected: false },
   { id: '5', name: 'Eyebrow lamination', price: 15, duration: '60 minutes', selected: false },
 ];


const Todo = () => {

   const [services, setServices] = useState(initialServices);

   const toggleSelection = (id) => {
     const updatedServices = services.map((service) =>
       service.id === id ? { ...service, selected: !service.selected } : service
     );
     setServices(updatedServices);
   };
 
   return (
     <View style={styles.container}>
       {services.map((service) => (
         <View key={service.id} style={styles.list_element}>
           <View style={styles.conteiner_checkbox}>
             <Checkbox
               value={service.selected}
               onValueChange={() => toggleSelection(service.id)}
               color={service.selected ? '#3379de' : undefined}
               style={styles.checkbox}
             />
           </View>

           <View style={styles.information}>

             <View style={styles.todo_text}>
               <Text>{service.name}</Text>
               <Text style={styles.todo_duration}>{service.duration}</Text>
             </View>

             <View >
               <Text style={styles.todo_price}>{service.price} $</Text>
             </View>
             
           </View>
         </View>
       ))}
     </View>
   );
}

export default Todo

const styles = StyleSheet.create({
   list_element: {
      paddingTop: 25,
      width: '100%',
      backgroundColor: 'white',
      justifyContent:'center',
      flexDirection: 'row',
      borderBottomLeftRadius: 30,
      borderBottomRightRadius: 30,
      height: 90,
   },

   conteiner_checkbox: {
      alignItems: 'flex-start',
      width: 1,
   },

   information: {
      marginLeft: 35,
      width: '90%',
      borderBottomColor: '#dddee0',
      borderBottomWidth: 2,
   },

   todo_text: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom:5,
   },

   todo_price:{
         fontWeight:'700',

   },

   todo_duration:{
         color:'#656972',


   },

   checkbox:{
      width:24,
      height:24,
      backgroundColor:'white',
      borderColor:'#c2cde9',
      color:'#3379de',
      borderRadius:5,
   },
})