import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  TouchableOpacity,
  TextInput,
  Button,
  Keyboard,
  SafeAreaView,
  TouchableWithoutFeedback,
  Platform
} from "react-native";

export default function App() {
  const [adjectives, setAdjectives] = useState([
    "happy",
    "beautiful",
    "strong",
    "capable",
    "whole"
  ]);
  const [displayText, setDisplayText] = useState(adjectives[0]);
  const [inputText, setInputText] = useState("");

  function buttonPress() {
    let index = adjectives.indexOf(displayText);
    if (index === adjectives.length - 1) {
      index = -1;
    }
    setDisplayText(adjectives[index + 1]);
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : null}
      style={{ flex: 1 }}
    >
      <SafeAreaView style={styles.container}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={{ alignItems: "center" }}>
            <Text style={styles.displayText}>I am {displayText}!</Text>
            <TouchableOpacity onPress={buttonPress}>
              <View behavior="padding" style={styles.button}>
                <Text>Next -></Text>
              </View>
            </TouchableOpacity>
            <Text>You, my darling, are all of these things and more.</Text>
            <TextInput
              placeholder="Add an adjective"
              onChangeText={text => setInputText(text)}
              value={inputText}
              style={styles.input}
            />
            <Button
              title="Submit"
              onPress={() => {
                adjectives.push(inputText);
                setInputText("");
              }}
            />
          </View>
        </TouchableWithoutFeedback>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  displayText: {
    fontSize: 50
  },
  button: {
    backgroundColor: "salmon",
    marginTop: 20,
    marginBottom: 40,
    padding: 10,
    borderRadius: 5,
    shadowColor: "black",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.5
  },
  input: {
    marginTop: 30,
    marginBottom: 10
  }
});
