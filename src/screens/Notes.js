import {ScrollView, Text, TextInput, StyleSheet, BackHandler, Pressable, Keyboard} from 'react-native';
import React, {useRef, useEffect, useState} from 'react';

export default function Notes() {
  const inputRef = useRef()
  const [keyboardStatus, setKeyboardStatus] = useState(false);

  const pressArea = ()=>{
    if(!keyboardStatus){
      inputRef.current.focus()
    }
  }

  // BackHandler.addEventListener('hardwareBackPress', function () {
  //   console.log("first")
  // });

  useEffect(() => {
    Keyboard.addListener("keyboardDidShow", () => {
      setKeyboardStatus(true);
    });
    Keyboard.addListener("keyboardDidHide", () => {
      setKeyboardStatus(false);
     Keyboard.dismiss() 
    });
  }, []);


  return (
    <ScrollView  contentContainerStyle={styles.container}>
      <Pressable style={styles.pressArea} onPress={pressArea}>
        <TextInput
          ref={inputRef}
          // style={styles.input}
          // onChangeText={onChangeNumber}
          multiline
          autoFocus
          placeholder="Start typing"
          // keyboardType="numeric"
        />
      </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 10,
    paddingRight: 10,
    flex: 1
  },
  pressArea: {
      flex: 1,
  },
});