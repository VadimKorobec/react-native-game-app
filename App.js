import { useState } from "react";

import { ImageBackground, SafeAreaView, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";

import GameScreen from "./screens/GameScreen";
import StartGameScreen from "./screens/StartGameScreen";
import Colors from "./constants/colors";
import GameOverScreen from "./screens/GameOverScreen";

export default function App() {
  const [userNumber, setUserNumber] = useState(null);
  const [gameIsOver, setGameIsOver] = useState(false);

  const handleSelectNumber = (number) => {
    setUserNumber(number);
  };

  const handleGameOver = () => {
    setGameIsOver(prevState => !prevState )
  }

  let screen = <StartGameScreen onSelectNumber={handleSelectNumber} />;

  if (userNumber) {
    screen = <GameScreen userNumber={userNumber} onGameOver={handleGameOver}  />;
  }

  if (gameIsOver) {
    screen = <GameOverScreen/>
  }

  return (
    <LinearGradient
      colors={[Colors.primary700, Colors.accent500]}
      style={styles.rootScreen}
    >
      <StatusBar style="light" />
      <ImageBackground
        source={require("./assets/images/background.png")}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
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
