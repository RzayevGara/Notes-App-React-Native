import {StyleSheet,  ScrollView, Text } from 'react-native'
import React from 'react'
import EmptyNotes from '../components/home/EmptyNotes'

export default function Home() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <EmptyNotes/>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});