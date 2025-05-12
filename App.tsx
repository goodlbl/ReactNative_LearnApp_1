// import { StatusBar } from 'expo-status-bar';
import { Button, FlatList, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { useState } from 'react';


export default function App() {

  const [stu, setStu] = useState([
    {id: 1, age: 18},
    {id: 2, age: 18},
    {id: 3, age: 18},
    {id: 4, age: 18},
    {id: 5, age: 18},
    {id: 10, age: 18},
    {id: 20, age: 18},
    {id: 30, age: 18},
    {id: 40, age: 18},
    {id: 50, age: 18},
    {id: 11, age: 18},
    {id: 21, age: 18},
    {id: 31, age: 18},
    {id: 41, age: 18},
    {id: 51, age: 18},
    {id: 12, age: 18},
    {id: 22, age: 18},
    {id: 32, age: 18},
    {id: 42, age: 18},
    {id: 52, age: 18},
    {id: 13, age: 18},
    {id: 23, age: 18},
    {id: 33, age: 18},
    {id: 43, age: 18},
    {id: 53, age: 18},
    {id: 14, age: 18},
    {id: 24, age: 18},
    {id: 34, age: 18},
    {id: 44, age: 18},
    {id: 54, age: 18},
  ]);

  return (
    <View style={styles.container}>
      <Text style={styles.txt}>Open up App.tsx!</Text>
      <FlatList data={stu}
      keyExtractor={item => item.id + ""}
      renderItem={(data) => {
        return (
              <Text style={styles.otxt}>{data.item.id}</Text>
            )
      }}/>
      <FlatList data={stu}
      numColumns={2}
      keyExtractor={item => item.id + ""}
      renderItem={({item}) => {
        return (
              <Text style={styles.itxt}>{item.id}</Text>
            )
      }}/>
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
  },
  itxt: {
    fontSize: 16,
    marginBottom: 10,
    backgroundColor: "pink",
    paddingHorizontal: 30,
    width:40
  }
});
