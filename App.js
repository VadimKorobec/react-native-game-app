import { useState } from "react";

import { ImageBackground, SafeAreaView, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";

import GameScreen from "./screens/GameScreen";
import StartGameScreen from "./screens/StartGameScreen";

export default function App() {
  const [userNumber, setUserNumber] = useState(null);
  const [showGameScreen, setShowGameScreen] = useState(false);

  const handleToggleGameScreen = () => {
    setShowGameScreen((prevState) => !prevState);
  };

  const handleSelectNumber = (number) => {
    setUserNumber(number);
  };

  return (
    <LinearGradient colors={["#4e0329", "#ddb52f"]} style={styles.rootScreen}>
      <StatusBar style="light" />
      <ImageBackground
        source={require("./assets/images/background.png")}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}
      >
        {showGameScreen ? (
          <SafeAreaView style={styles.rootScreen}>
            <GameScreen onToggle={handleToggleGameScreen} />
          </SafeAreaView>
        ) : (
          <SafeAreaView style={styles.rootScreen}>
            <StartGameScreen
              onToggle={handleToggleGameScreen}
              onSelectNumber={handleSelectNumber}
            />
          </SafeAreaView>
        )}
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15,
  },
});
