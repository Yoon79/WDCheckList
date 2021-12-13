import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./screens/Login.js";
import TodoList from "./screens/TodoList.js";
import SignUp from "./screens/SignUp.js";
import { initializeApp } from "firebase/app";
import { getFirestore, setDoc, doc } from "firebase/firestore";
import { getDatabase, ref, set } from "firebase/database";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyA8DNG2fpxVPOTrCM_yFoRezQSClE8Nl58",
  authDomain: "justdoit-ecb64.firebaseapp.com",
  databaseURL:
    "https://justdoit-ecb64-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "justdoit-ecb64",
  storageBucket: "justdoit-ecb64.appspot.com",
  messagingSenderId: "1067416702625",
  appId: "1:1067416702625:web:b89400047690b53f1caae0",
};

initializeApp(firebaseConfig);

function storeHighScore(userId, score) {
  const db = getDatabase();
  const reference = ref(db, "users/" + userId);
  set(reference, {
    highscore: score,
  });
}

// setupHighscoreListener(userId) {const db = getDatabase();
//   const reference = ref(db, 'users/' + userId);
//   onValue(reference, (snapshot) => {
//     const highscore = snapshot.val().highscore;
//     console.log("New high score: " + highscore);
//   });
// }

const Stack = createNativeStackNavigator();

export default function App() {
  // storeHighScore("test1", 1000);

  return (
    <NavigationContainer>
      <Stack.Navigator mode="modal">
        <Stack.Screen
          name="Home"
          component={Login}
          options={{
            title: "Just Do it",
            headerStyle: {
              backgroundColor: "#f4511e",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
        <Stack.Screen name="TodoList" component={TodoList} />
        <Stack.Screen name="SignUp" component={SignUp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
