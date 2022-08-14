import {
  ScrollView,
  Text,
  TextInput,
  StyleSheet,
  Pressable,
  Keyboard,
  View,
} from 'react-native';
import React, {useRef, useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {setNotes} from '../redux/reducer/NotesReducer';
import Animated, {
  Easing,
  FadeInDown,
  Layout,
  SlideOutLeft,
} from "react-native-reanimated";

export default function Notes({route}) {
  const data = route.params ? route.params.selectedData : null;

  const inputRef = useRef();
  const dispatch = useDispatch();
  const [text, setText] = useState(data ? data.notes : '');
  const [savedData, setSavedData] = useState(null);
  const [save, setSave] = useState(false)
  const notes = useSelector(state => state.notes.notes);

  useEffect(() => {
    console.log(notes);
  }, [notes]);

  const pressArea = () => {
    inputRef.current.focus();
  };

  const onChangeNote = item => {
    setText(item);
  };

  useEffect(() => {
    Keyboard.addListener('keyboardDidHide', () => {
      Keyboard.dismiss();
    });
  }, []);

  const saveNotes = () => {
    function getCurrentTime() {
      let date = new Date();
      let hh = date.getHours();
      let mm = date.getMinutes();

      hh = hh < 10 ? '0' + hh : hh;
      mm = mm < 10 ? '0' + mm : mm;

      let currTime = hh + ':' + mm;
      return currTime;
    }
    const obj = {
      id: data ? data.id : savedData ? savedData.id : Date.now(),
      notes: text,
      date: getCurrentTime(),
    };
    console.log(obj);
    setSavedData(obj);
    dispatch(setNotes(obj));
    setSave(true)
    setTimeout(()=>{
      setSave(false)
    }, 1500)
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.containerScroll}>
        <Pressable style={styles.pressArea} onPress={pressArea}>
          <TextInput
            ref={inputRef}
            onChangeText={onChangeNote}
            multiline
            autoFocus
            placeholder="Start typing ..."
            placeholderTextColor="grey"
            value={text}
            style={styles.inputText}
          />
        </Pressable>
      </ScrollView>
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
      <Animated.View>
        <Text style={[{display: save?"flex":"none"}, styles.savedText]}>Saved</Text>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
    borderTopColor: '#fff',
    borderTopWidth: 1
  },
  containerScroll:{
    paddingLeft: 10,
    paddingRight: 10,
  },
  pressArea: {
    flex: 1,
  },
  inputText:{
    color: "white"
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
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
    letterSpacing: 2,
  },
  savedText:{
    position: 'absolute',
    bottom: 20,
    alignSelf: 'center',
    color: 'white',
    backgroundColor: "#242424",
    padding: 10,
    borderRadius: 15,
    letterSpacing: 1.5,
    opacity: .8,
    borderColor: "white",
    borderWidth: 1,
  }
});
