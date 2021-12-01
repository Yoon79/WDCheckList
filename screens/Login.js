import * as React from "react";
import {
  Text,
  TextInput,
  View,
  Button,
  SafeAreaView,
  StyleSheet,
  Alert,
} from "react-native";
import Constants from "expo-constants";

const Login = ({ navigation, route }) => {
  const [text, onChangeText] = React.useState(null);
  const [number, onChangeNumber] = React.useState(null);
  // const Separator = () => <View style={styles.separator} />;
  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        placeholder="username or email"
        value={text}
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="password"
        keyboardType="numeric"
      />
      <View>
        <View style={styles.fixToText}>
          <Button
            title="Login"
            onPress={() => navigation.navigate("TodoList")}
          />
          <Button
            title="SignUp"
            onPress={() => navigation.navigate("SignUp")}
          />
          <Button
            title="Press me"
            color="#f194ff"
            onPress={() => Alert.alert("Button with adjusted color pressed")}
          />
        </View>
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

export default Login;
// function Login({ navigation, route }) {
//   // React.useEffect(() => {
//   //   if (route.params?.post) {
//   //     // Post updated, do something with `route.params.post`
//   //     // For example, send the post to the server
//   //   }
//   // }, [route.params?.post]);

//   return (
//     <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
//       <Button
//         title="Create post"
//         onPress={() => navigation.navigate("CreatePost")}
//       />
//       {/* <Text style={{ margin: 10 }}>Post: {route.params?.post}</Text> */}
//     </View>
//   );
// }
