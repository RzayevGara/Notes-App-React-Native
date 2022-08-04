import {
  ScrollView,
  Text,
  TextInput,
  StyleSheet,
  Pressable,
  Keyboard,
} from 'react-native';
import React, {useRef, useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {setNotes} from '../redux/reducer/NotesReducer';

export default function Notes({route}) {
  const data = route.params? route.params.selectedData : null

  const inputRef = useRef();
  const dispatch = useDispatch();
  const [keyboardStatus, setKeyboardStatus] = useState(null);
  const [text, setText] = useState(data?data.notes:"");
  const [savedData, setSavedData] = useState(null)
  const notes = useSelector(state => state.notes.notes);
  useEffect(()=>{
    console.log(notes)

  }, [notes])
  const pressArea = () => {
    if (!keyboardStatus) {
      inputRef.current.focus();
    }
  };

  const onChangeNote = item => {
    setText(item);
  };

  useEffect(() => {
    Keyboard.addListener('keyboardDidShow', () => {
      setKeyboardStatus(true);
    });
    Keyboard.addListener('keyboardDidHide', () => {
      setKeyboardStatus(false);
      Keyboard.dismiss();

    });
  }, []);

  const saveNotes = ()=>{
    function getCurrentTime(){
      let date = new Date();
      let hh = date.getHours();
      let mm = date.getMinutes();
  
      hh = hh < 10 ? '0'+hh : hh; 
      mm = mm < 10 ? '0'+mm : mm;
  
      curr_time = hh+':'+mm;
      return curr_time;
    }
      const obj = {
        id: data?data.id:savedData?savedData.id:Date.now(),
        notes: text,
        date: getCurrentTime()
      }
      console.log(obj)
      setSavedData(obj)
      dispatch(setNotes(obj))
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Pressable style={styles.pressArea} onPress={pressArea}>
        <TextInput
          ref={inputRef}
          onChangeText={onChangeNote}
          multiline
          autoFocus
          placeholder="Start typing"
          value={text}
        />
        <Pressable
          onPress={saveNotes}
          style={({pressed}) => [
            {
              transform: [{scale: pressed ? 0.9 : 1}],
            },
            styles.addButton,
          ]}>
            <Text style={styles.buttonText}>Save</Text>
        </Pressable>
      </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 10,
    paddingRight: 10,
    flex: 1,
  },
  pressArea: {
    flex: 1,
  },
  addButton: {
    position: 'absolute',
    width: 80,
    height: 50,
    right: 20,
    bottom: 20,
    backgroundColor: '#FFC75F',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
    letterSpacing: 2
  }
});
