import React, { useState } from "react";
import { StyleSheet, Text, View, Modal, ImageBackground } from "react-native";

import { useGameInfo } from "../../context/GameContext";

import StartGameScreen from "../Game/StartGameScreen";
import GameOverScreen from "../Game/GameOverScreen";

export default () => {
  const gameInfo = useGameInfo();
  const [startGame, setStartGame] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const playAgainHandler = () => {
    setGameOver(false);
  };

  const startGameHandler = () => {
    setStartGame(true);
    playAgainHandler();
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
      <View style={styles.body}>
        {startGame ? (
          gameOver ? (
            <GameOverScreen />
          ) : null
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
