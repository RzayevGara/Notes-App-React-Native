import {Pressable, StyleSheet, ScrollView, Text} from 'react-native';
import React, {useEffect} from 'react';
import EmptyNotes from '../components/home/EmptyNotes';
import ListNotes from '../components/home/ListNotes'
import PlusIcon from '../assets/icons/plus-svgrepo-com.svg';
import { useDispatch, useSelector } from 'react-redux';
import { useIsFocused } from '@react-navigation/native';

export default function Home({navigation}) {

  const notes = useSelector((state)=>state.notes.notes)
  const isFocused = useIsFocused();

  useEffect(()=>{
    if(isFocused){
      console.log(notes)
    }
  })

  const addNotes = () => {
    navigation.navigate('Notes')
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>

      {
        notes.length===0 ?
        <EmptyNotes />
        :
        <ListNotes data={notes}/>
      }

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
  },
});
