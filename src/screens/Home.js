import {Pressable, StyleSheet, ScrollView, Text} from 'react-native';
import React from 'react';
import EmptyNotes from '../components/home/EmptyNotes';
import PlusIcon from '../assets/icons/plus-svgrepo-com.svg';

export default function Home({navigation}) {
  const addNotes = () => {
    navigation.navigate('Notes')
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <EmptyNotes />
      <Pressable
        onPress={addNotes}
        style={({pressed}) => [
          {
            transform: [{ scale: pressed ? .9 : 1 }],
          },
          styles.addButton,
        ]}>
        <PlusIcon fill="white" width={30} height={30} />
      </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  addButton: {
    position: 'absolute',
    width: 60,
    height: 60,
    right: 20,
    bottom: 20,
    backgroundColor: '#FFC75F',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    transition: "10s"
  },
});
