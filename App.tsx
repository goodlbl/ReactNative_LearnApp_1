// import { StatusBar } from 'expo-status-bar';
import { Button, FlatList, Keyboard, Pressable, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import { useState } from 'react';
import { Alert } from 'react-native';

interface ITd {
  id: number;
  name: string
}

const ran = () => {return Math.floor(Math.random()*(99999-10000+1) + 10000)}

export default function App() {

  const [td, setTd] = useState("");
  const [ltd, setLtd] = useState<ITd[]>([]);

  const deleteTd = (id: number) => {
    const newTd = ltd.filter(item => item.id !== id);
    setLtd(newTd);
  };

  const handleAddTd = () => {
    if (!td) {
      Alert.alert("Error in todo", "Toang roi", [
        {text: "Oke", onPress: ()=>console.log("Oke")},
        {text: "Toang", onPress: ()=>console.log("Toang")}
      ]);
      return;
    }
    else {
      setLtd([...ltd, {id:ran(), name:td}]); 
    }
    setTd("");
  }

  return (
    <TouchableWithoutFeedback
      onPress={()=>Keyboard.dismiss()}>
        
      <View style={styles.container}>

        {/* header */}
        <Text id={"header"} style={styles.header}>Todo app</Text>

        {/* form */}
        <View style={styles.form}>
          <TextInput
            style={styles.textinput}
            onChangeText={(value) => setTd(value)}
          />
          <Button
            title="Add work"
            onPress={() => handleAddTd()}
          />
        </View>

        {/* list todo */}
        <View style={styles.body}>
          <Text>Todo now: {td}</Text>
          <Text>Todo list:</Text>
          <FlatList
            data={ltd}
            keyExtractor={item => item.id + ""}
            renderItem={({item}) => {
              return (
                /* <TouchableOpacity onPress={() => deleteTd(item.id)}>
                  <Text style={styles.fl}>{item.name}</Text>
                </TouchableOpacity> */
                <Pressable style={({pressed}) => ({opacity: pressed ? 0.5 : 1})} onPress={() => deleteTd(item.id)}>
                  <Text style={styles.fl}>{item.name}</Text>
                </Pressable>
              )
            }}
          />
        </View>

      </View>
    </TouchableWithoutFeedback>
  );
}


const styles = StyleSheet.create({
  header: {
    backgroundColor: '#bfb',
    fontSize: 50,
    textAlign: "center",
    paddingHorizontal: 30
  },
  container: {
    paddingTop: 50,
    flex: 1,
    backgroundColor: '#fff',
  },
  form: {
    paddingTop: 20,
  },
  textinput: {
    borderColor: "black",
    borderWidth: 2,
    backgroundColor: "#fdd",
    paddingHorizontal: 5
  },
  body: {
  },
  fl: {
    paddingInlineEnd: 10,
    backgroundColor: "#fef",
    fontSize: 15,
    borderColor: "red",
    borderWidth: 2
  }
});
