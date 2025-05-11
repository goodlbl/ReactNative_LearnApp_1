// import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';


export default function App() {

  const [num, setNum] = useState<number>(0);
  const [str, setStr] = useState({
    name: "Friend",
    age: 25,
  });

  const forNum = () => {
    setNum(num + 1);
    alert(num);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.ume}>
        <Text>Open up App.tsx to start working on your app!{"\n\n"}</Text>
        <Text>{num}{"\n\n"}</Text>  
        <Text>{str.name}</Text>
      </Text>
      <View style={styles.upbutton}>
        <Button title='Up' onPress={() => setNum(num + 1)}/>
        <Button title="Up and on" onPress={() => forNum()}/>
      </View>
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
    backgroundColor: "#bde"
  }
});
