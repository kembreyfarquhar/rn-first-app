import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  TextInput,
  Button,
  Keyboard,
  SafeAreaView,
  TouchableWithoutFeedback,
  Platform,
  Image,
  TouchableOpacity
} from "react-native";
import GestureRecognizer from "react-native-swipe-gestures";
import pancakes from "./images/pancakes.jpg";

export default function App() {
  const [recipe, setRecipe] = useState({ title: "Pancakes" });
  const [title, setTitle] = useState(recipe.title);
  const [editingTitle, setEditingTitle] = useState(false);
  const [hiddenEditTitle, setHiddenEditTitle] = useState(true);

  const onSwipeLeft = () => {
    setHiddenEditTitle(false);
  };

  const swipeConfig = {
    velocityThreshold: 0.3,
    directionalOffsetThreshold: 80
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : null}
      style={{ flex: 1 }}
    >
      <SafeAreaView style={styles.container}>
        <TouchableWithoutFeedback
          disabled={!editingTitle}
          onPress={Keyboard.dismiss}
        >
          <View>
            <Image source={pancakes} style={styles.image} />

            {editingTitle ? (
              <View>
                <TextInput
                  onChangeText={title => setTitle(title)}
                  value={title}
                  style={styles.input}
                  autoFocus={true}
                />
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-around"
                  }}
                >
                  <Button
                    title="Cancel"
                    onPress={() => {
                      setEditingTitle(false);
                      setHiddenEditTitle(true);
                    }}
                  />
                  <Button
                    title="Save"
                    onPress={() => {
                      setRecipe({ ...recipe, title });
                      setEditingTitle(false);
                      setHiddenEditTitle(true);
                    }}
                  />
                </View>
              </View>
            ) : (
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between"
                }}
              >
                <View>
                  <GestureRecognizer onSwipeLeft={onSwipeLeft}>
                    <Text style={styles.displayText}>{recipe.title}</Text>
                  </GestureRecognizer>
                </View>

                <View style={{ display: hiddenEditTitle ? "none" : "flex" }}>
                  <TouchableOpacity
                    onPress={() => {
                      setTitle(recipe.title);
                      setEditingTitle(true);
                    }}
                    style={{ backgroundColor: "green", padding: 10 }}
                  >
                    <Text
                      style={{
                        fontSize: 18,
                        fontWeight: "bold",
                        color: "white"
                      }}
                    >
                      Edit
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                paddingVertical: 10,
                borderBottomColor: "grey",
                borderBottomWidth: 1
              }}
            >
              <Text>Katie</Text>
              <Text>45 minutes</Text>
            </View>
            <Text style={{ paddingVertical: 10 }}>Tags</Text>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-evenly",
                paddingBottom: 10,
                borderBottomWidth: 1,
                borderBottomColor: "grey"
              }}
            >
              <Text>Breakfast</Text>
              <Text>Brunch</Text>
              <Text>Sweets</Text>
            </View>
            <Text
              style={{
                padding: 10,
                fontSize: 20,
                backgroundColor: "#047396",
                color: "white",
                fontWeight: "bold",
                marginVertical: 20
              }}
            >
              Ingredients
            </Text>
            <View>
              <View style={styles.ingredientContainer}>
                <View style={styles.ingredient}>
                  <Text>Flour</Text>
                </View>
                <View style={styles.ingredient}>
                  <Text>2 cups</Text>
                </View>
              </View>
              <View style={styles.ingredientContainer}>
                <View style={styles.ingredient}>
                  <Text>Eggs</Text>
                </View>
                <View style={styles.ingredient}>
                  <Text>2, large</Text>
                </View>
              </View>
              <View style={styles.ingredientContainer}>
                <View style={styles.ingredient}>
                  <Text>Baking Powder</Text>
                </View>
                <View style={styles.ingredient}>
                  <Text>1 tsp</Text>
                </View>
              </View>
            </View>
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
    fontSize: 30
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
  image: {
    width: 350,
    height: 250,
    borderRadius: 8
  },
  input: {
    marginTop: 30,
    marginBottom: 10,
    borderColor: "grey",
    borderWidth: 1,
    fontSize: 20,
    padding: 5
  },
  ingredientContainer: {
    flexDirection: "row",
    padding: 10,
    backgroundColor: "darkgrey",
    marginVertical: 8
  },
  ingredient: {
    flex: 1
  }
});
