import React from "react";
import { StyleSheet, Text, View, Alert, Button } from "react-native";
import { vw, vh } from "react-native-expo-viewport-units";

import { useGameInfo } from "../../context/GameContext";

import colors from "../../constants/colors";
import { CURRENT_STAGE, COMING_SOON, CANCEL } from "../../constants/strings";

import Card from "../../components/Card";
import StartButton from "../../components/StartButton";
import Heart from "../../components/Heart";

export default ({ onStartGame, getHeart }) => {
  const { stage, heart, gameEnd } = useGameInfo();

  return (
    <View style={styles.screen}>
      <View style={styles.gameInfo}>
        <Card style={styles.card}>
          {gameEnd ? (
            <View style={styles.cardBox}>{FLAG}</View>
          ) : (
            <View style={styles.cardBox}>
              <Text style={styles.cardText}>{CURRENT_STAGE}</Text>
              <Text style={[styles.cardText, { marginTop: vh(1) }]}>
                {stage}
              </Text>
            </View>
          )}
        </Card>

        <View style={styles.heartBox}>
          <Heart onPress={getHeart} numOfHeart={heart} disabled={gameEnd} />
        </View>
      </View>

      <View style={styles.gameStartContainer}>
        <StartButton
          onPress={onStartGame}
          update={gameEnd}
          enoughHeart={heart > 0 ?? false}
        />
      </View>

      <View style={styles.buttonContainer}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  gameInfo: {
    flex: 1,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  card: {
    width: "50%",
    height: vh(13),
    justifyContent: "space-around",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.7,
    shadowRadius: 6,
    elevation: 10,
    shadowColor: colors.slateGrayColor,
  },
  cardBox: {
    alignItems: "center",
  },
  cardText: {
    fontSize: vw(5.5),
    fontWeight: "700",
    color: colors.accentColor,
  },
  heartBox: {
    width: "50%",
    height: vh(13),
    alignItems: "flex-end",
    flex: 1,
    justifyContent: "center",
  },
  arrowBox: {
    alignItems: "flex-start",
    width: "45%",
  },
  gameStartContainer: {
    flex: 1,
    justifyContent: "center",
  },
  buttonContainer: {
    flex: 1,
    width: "100%",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    marginRight: vw(10),
  },
});
