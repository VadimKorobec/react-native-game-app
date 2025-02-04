import { StyleSheet, Text } from "react-native";

import Colors from "../constants/colors";

const InstractionText = ({ children }) => {
  return <Text style={styles.instractionText}>{children}</Text>;
};

export default InstractionText;

const styles = StyleSheet.create({
  instractionText: {
    fontFamily: "open-sans-regular",
    color: Colors.accent500,
    fontSize: 24,
  },
});
