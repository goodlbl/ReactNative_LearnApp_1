// import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { useState } from 'react';


export default function App() {

  const [num, setNum] = useState<number>(0);
  const [str, setStr] = useState("No Name");

  const forNum = () => {
    setNum(num + 1);
    alert(num);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.ume}>
        <Text>Open up App.tsx to start working on your app!{"\n\n"}</Text>
        <Text>{num}{"\n\n"}</Text>
        <Text>{str}{"\n\n"}</Text>
      </Text>
      <View style={styles.upbutton}>
        <Button title='Up' onPress={() => setNum(num + 1)}/>
        <Button title="Up and on" onPress={() => forNum()}/>
      </View>
      <Text>{"\n\n\n"}</Text>
      <TextInput style={styles.textinput} onChangeText={(value) => setStr(value)}/>
      <TextInput keyboardType='numeric' maxLength={2} style={styles.textinput} onChangeText={(value) => setNum(+value)}/>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ume: {
    textAlign: "center",
    fontSize: 16
  },
  upbutton: {
    backgroundColor: "#bde",
  },
  textinput: {
    backgroundColor: "#eee",
    borderColor: "red",
    borderWidth: 1,
    width: "auto",
    minWidth: 100,
  }
});
