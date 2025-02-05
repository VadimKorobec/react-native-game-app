import { Platform, StyleSheet, Text } from "react-native";
import Colors from "../constants/colors";

const Title = ({ children }) => {
  return <Text style={styles.title}>{children}</Text>;
};

export default Title;

const styles = StyleSheet.create({
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 24,
    color: Colors.white,
    textAlign: "center",
    borderBottomWidth: Platform.OS === 'ios' ? 1 : 2,
    borderColor: Colors.white,
    paddingBottom: 12,
    maxWidth: "80%",
    width:300,
  },
});
