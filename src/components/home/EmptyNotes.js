import {StyleSheet, View, Text } from 'react-native'
import React from 'react'
import EmptyNote from '../../assets/icons/notes-svgrepo-com.svg'

export default function EmptyNotes() {
  return (
    <View style={styles.container}>
      <EmptyNote width={60} height={60} style={{opacity: .8}}/>
      <Text style={styles.text}>No notes here yer</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flex: 1,
    },
    text: {
        marginTop: 20,
        fontSize: 16
    }
  });