import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Modal,
  ImageBackground,
  StatusBar,
} from "react-native";

import { useGameInfo } from "../../context/GameContext";

import {
  CONGRATULATIONS,
  HOLD_ON,
  CHECK_EXIT,
  CANCEL,
  EXIT,
} from "../../constants/strings";

import StartGameScreen from "../Game/StartGameScreen";
import GameScreen from "../Game/GameScreen";
import GameOverScreen from "../Game/GameOverScreen";

import Header from "../../components/Header";

export default () => {
  const { stage, heart } = useGameInfo();
  const [startGame, setStartGame] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [pass, setPass] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const playAgainHandler = () => {
    setGameOver(false);
  };

  const startGameHandler = () => {
    setStartGame(true);
    playAgainHandler();
  };

  const gameOverHandler = (checkPass) => {
    if (checkPass === "fail") {
      setPass(false);

      if (heart > 0) {
        // minusHeart();
      }
    } else {
      setPass(true);
    }

    setGameOver(true);
  };

  const goHomeHandler = () => {
    setStartGame(false);
    setGameOver(false);
  };

  /* 하트 버튼 누름 → 동영상 광고 시청 → 하트 얻음 */
  const getHeart = () => {
    setModalVisible((curState) => !curState);

    return null;
  };

  return (
    <ImageBackground
      style={styles.screen}
      source={require("../../../assets/images/background.png")}
    >
      <StatusBar hidden={true} />
      <Header
        title={
          startGame
            ? stage === 885
              ? gameOver
                ? CONGRATULATIONS
                : `STAGE ${stage}`
              : `STAGE ${stage}`
            : null
        }
        gaming={startGame}
      />

      <View style={styles.body}>
        {startGame ? (
          gameOver ? (
            <GameOverScreen />
          ) : (
            <GameScreen onGoHome={goHomeHandler} onGameOver={gameOverHandler} />
          )
        ) : (
          <StartGameScreen onStartGame={startGameHandler} getHeart={getHeart} />
        )}
      </View>

      <Modal
        animationType="slide"
        visible={modalVisible}
        onRequestClose={() => null}
      >
        <View>
          <Text>HI MODAL!</Text>
        </View>
      </Modal>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  body: {
    flex: 11,
  },
});
