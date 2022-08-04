import {Pressable, StyleSheet, ScrollView, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import EmptyNotes from '../components/home/EmptyNotes';
import ListNotes from '../components/home/ListNotes';
import PlusIcon from '../assets/icons/plus-svgrepo-com.svg';
import {useDispatch, useSelector} from 'react-redux';
import {useIsFocused} from '@react-navigation/native';

export default function Home({navigation}) {
  const notes = useSelector(state => state.notes.notes);
  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused) {
      console.log(notes);
    }
  });

  const addNotes = () => {
    navigation.navigate('Notes');
  };

  return (
    <View style={styles.container}>
      <ScrollView showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false} contentContainerStyle={{display: notes.length===0?1 :"none",display: "flex", justifyContent: notes.length===0?"center": "flex-start" }}>
        {notes.length === 0 ? <EmptyNotes /> : <ListNotes navigation={navigation}/>}
      </ScrollView>

      <Pressable
        onPress={addNotes}
        style={({pressed}) => [
          {
            transform: [{scale: pressed ? 0.9 : 1}],
          },
          styles.addButton,
        ]}>
        <PlusIcon fill="white" width={30} height={30} />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
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
