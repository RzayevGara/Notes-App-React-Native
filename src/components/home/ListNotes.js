import {ScrollView, View, Pressable, Text, StyleSheet} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';

export default function ListNotes(props) {
  const data = useSelector(state => state.notes.notes);
  const navigation = props.navigation

  const openNote = (id)=>{
    const selectedData = data.find((item)=>{
      if(item.id===id){
        return item
      }
    })
    console.log(selectedData);
    navigation.navigate('Notes', {selectedData});
  }
  return (
    <View style={styles.container}>
      {data &&
      data.map((item) => (
        <Pressable style={styles.pressBox} key={item.id} onPress={()=>openNote(item.id)}>
          <View style={styles.noteBox}>
            <Text numberOfLines={4} style={styles.boxText}>{item.notes}</Text>
            <Text style={styles.boxText}>{item.date}</Text>
          </View>
        </Pressable>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  pressBox: {
    width: '47%',
    marginTop: 20,
    borderRadius: 15,
    padding: 16,
    backgroundColor: "#242424"
  },
  noteBox: {
    height: 100,
    display: 'flex',
    justifyContent: 'space-between',
  },
  boxText: {
    color: "white"
  }
});
