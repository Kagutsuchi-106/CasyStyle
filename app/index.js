import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Navbar from '@/components/navbar'
import UserCard from '@/components/UserCard'
import List from '@/components/List'
const index = () => {
  return (
    <View style={styles.conteiner}>
      <Navbar />
      <UserCard />
      <List />
    </View>
  )
}

export default index


const styles = StyleSheet.create({
  conteiner: {
    flex: 1,
    width: '100%',
    backgroundColor: '#E8F4FF',
    justifyContent: "flex-start",
    alignItems: 'center',
  }

})