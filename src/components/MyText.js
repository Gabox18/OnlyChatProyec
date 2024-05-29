import * as React from "react";
import { Text, StyleSheet } from "react-native";
import { Colors } from "../../constants/colors";

export default function MyText({ children, type = "body" }) {
  return <Text style={styles[type]}>{children}</Text>;
}

const styles = StyleSheet.create({
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: Colors.primary,
  },
  body: {
    fontSize: 18,
    color: Colors.dark,
  },
  caption: {
    fontSize: 14,
    color: Colors.dark,
  },
});