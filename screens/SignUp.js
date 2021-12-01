import * as React from "react";
import {
  TextInput,
  View,
  Button,
  SafeAreaView,
  StyleSheet,
} from "react-native";
import Constants from "expo-constants";

const SignUp = ({ navigation, route }) => {
  const [text, onChangeText] = React.useState(null);
  const [number, onChangeNumber] = React.useState(null);
  // const Separator = () => <View style={styles.separator} />;
  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        placeholder="User Name"
        value={text}
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        placeholder="Email"
        value={text}
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="Password"
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="Re-enter Password"
        keyboardType="numeric"
      />

      <View style={styles.fixToText}>
        <Button
          title="Let's go!"
          onPress={() => navigation.navigate("TodoList")}
        />
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
    marginHorizontal: 16,
    justifyContent: "center",
  },
  title: {
    textAlign: "center",
    marginVertical: 8,
  },
  fixToText: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: "#737373",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  buttonSize: {
    margin: 10,
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
  },
});

export default SignUp;
