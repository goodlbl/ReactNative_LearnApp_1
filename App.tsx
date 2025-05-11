// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';


export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <Text style={{color: "pink",
      fontSize: 30,
      borderWidth: 1
      }}>Kia con buom vang</Text>
      <View>
        <Text style={styles.hello}>Tai sao the?</Text>
        <Text style={styles.hello}>
          <Text>hai{"\n"}</Text>
          <Text>ko hai</Text>
        </Text>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#9f9',
    alignItems: 'center',
    justifyContent: 'center',
  },
  hello: {
    color: "red",
    fontSize: 25,
    fontWeight: "bold",
    textAlign:"center"
  },
});
