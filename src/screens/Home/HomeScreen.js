import React, { useState } from "react";
import { StyleSheet, Text, View, Modal } from "react-native";

import { useGameInfo } from "../../context/GameContext";

import StartGameScreen from "../Game/StartGameScreen";

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
    <>
      <StartGameScreen onStartGame={startGameHandler} getHeart={getHeart} />

      <Modal
        animationType="slide"
        visible={modalVisible}
        onRequestClose={() => null}
      >
        <View>
          <Text>HI MODAL!</Text>
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({});
