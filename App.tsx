// import { StatusBar } from 'expo-status-bar';
import { Button, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { useState } from 'react';


export default function App() {

  const [stu, setStu] = useState([
    {id: 1, age: 18},
    {id: 2, age: 18},
    {id: 3, age: 18},
    {id: 4, age: 18},
    {id: 5, age: 18},
  ]);

  return (
    <View style={styles.container}>
      <Text style={styles.txt}>Open up App.tsx!</Text>
      <ScrollView>
        {
          stu.map(item => {
            return (
              <Text style={styles.otxt} key={item.id}>{item.id}</Text>
            )
          })
        }
      </ScrollView>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    flex: 1,
    backgroundColor: '#fff'
  },
  txt: {
    fontSize: 20,
  },
  otxt: {
    fontSize: 16,
    marginBottom: 10,
    backgroundColor: "cyan",
  }
});
