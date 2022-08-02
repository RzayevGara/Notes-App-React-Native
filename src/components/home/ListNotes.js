import { ScrollView, View, Pressable,  Text , StyleSheet} from 'react-native'
import React from 'react'

export default function ListNotes(props) {
    const data = props.data
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {
        data.map((item, index)=>(
            <Pressable key={item.id}>
                <View style={styles.noteBox}>
                    <Text>{item.notes}</Text>
                    <Text>{item.date}</Text>
                </View>
            </Pressable>
        ))
      }
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
    },
    noteBox: {
        width: "45%",

    }
  });
  