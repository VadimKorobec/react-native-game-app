import { Alert, StyleSheet, TextInput, View } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import { useState } from "react";
import Colors from "../constants/colors";

const StartGameScreen = ({ onToggle,onSelectNumber }) => {
  const [enteredNumber, setEnteredNumber] = useState("");

  const handleInput = (value) => {
    setEnteredNumber(value);
  };

  const handleConfirmInput = () => {
    const number = parseInt(enteredNumber);
    if (
      isNaN(number) ||
      number < 1 ||
      number > 99 ||
      (enteredNumber.length > 1 && enteredNumber[0] === "0")
    ) {
      return Alert.alert("Invalid Number!", "Please enter a valid number", [
        { text: "Okay", style: "destructive", onPress: handleResetInput },
      ]);
    }
    onSelectNumber(number)
    handleResetInput();
    onToggle();
  };

  const handleResetInput = () => {
    setEnteredNumber("");
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.numberInput}
        maxLength={2}
        keyboardType="number-pad"
        onChangeText={handleInput}
        value={enteredNumber}
      />
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={handleResetInput}>Reset</PrimaryButton>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={handleConfirmInput}>Confirm</PrimaryButton>
        </View>
      </View>
    </View>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 100,
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: Colors.primary800,
    borderRadius: 8,
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 2,
    color: Colors.accent500,
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center",
    paddingVertical: 0,
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
});
