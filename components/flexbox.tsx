import { Text, View, StyleSheet} from "react-native";

const FlexBox = () => {
    return (
        <View style={styles.container}>
            <View style={styles.i1}>
                <Text>Ik 1</Text>
            </View>

            <View style={styles.i2}>
                <Text>Ik 2</Text>
            </View>

            <View style={styles.i3}>
                <Text>Ik 3</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "red"
  },
  i1: {
    backgroundColor: "pink",
    padding: 20,
    width: 120
  },
  i2: {
    backgroundColor: "cyan",
    padding: 20,
    height: 70
  },
  i3: {
    backgroundColor: "yellow",
    padding: 20,
    height: 100
  },
});

export default FlexBox