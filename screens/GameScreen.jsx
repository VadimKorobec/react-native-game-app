import { Button, StyleSheet, Text, View } from "react-native";

const GameScreen = ({ onToggle }) => {
  return (
    <View style={styles.gameScreenContainer}>
      <Text style={styles.title}>Opponent's Guess</Text>
      <View>
        <Text>Higher or Lower ?</Text>
      </View>
      <View></View>
      <Button title="Close Game Screen" onPress={onToggle} />
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  gameScreenContainer: {
    flex: 1,
    padding: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#ddb52f",
    textAlign: "center",
  },
});
