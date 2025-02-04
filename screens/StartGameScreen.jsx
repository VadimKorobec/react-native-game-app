import { useState } from "react";
import { Alert, StyleSheet, TextInput, View } from "react-native";

import PrimaryButton from "../components/PrimaryButton";
import Title from "../components/Title";
import Colors from "../constants/colors";
import Card from "../components/Card";
import InstractionText from "../components/InstractionText";

const StartGameScreen = ({ onSelectNumber }) => {
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
    onSelectNumber(number);
    handleResetInput();
  };

  const handleResetInput = () => {
    setEnteredNumber("");
  };

  return (
    <View style={styles.rootContainer}>
      <Title>Guess My Number</Title>
      <Card>
        <InstractionText style={styles.inputText}>
          Enter your Number
        </InstractionText>
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
      </Card>
    </View>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginTop: 100,
    paddingHorizontal: 16,
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
