import React, { useEffect, useState } from "react";
import { StyleSheet, View, Alert, BackHandler } from "react-native";
import { vw, vh } from "react-native-expo-viewport-units";

import { useGameInfo, useMinusHeart } from "../../context/GameContext";

import { checkTime } from "../../utils/checkSomething";
import { CHECK_GO_HOME, CANCEL, GO_HOME } from "../../constants/strings";

import Heart from "../../components/Heart";
import Timer from "../../components/Timer";

export default ({ onGoHome, onGameOver }) => {
  const { stage, heart } = useGameInfo();
  const minusHeart = useMinusHeart();
  const [showAnswer, setShowAnswer] = useState(true);
  const [clickedBomb, setClickedBomb] = useState(false);

  /* 처음에 정답 보여 주는 시간 2/3초 간 정답 보여 주기 & heart 갯수 -1 */
  const showAnswerForHint = () => {
    setShowAnswer(true);

    const timeForShowAnswer = checkTime(stage) * 0.6;

    setTimeout(() => setShowAnswer(false), timeForShowAnswer);

    if (heart > 0) {
      minusHeart();
    }
  };

  return (
    <View style={styles.screen}>
      {/* BODY */}
      <View style={styles.body}>
        <View style={styles.infoContainer}>
          <View style={styles.timerContainer}>
            <Timer
              onGameOver={onGameOver}
              numOfHeart={heart}
              showAnswerForHint={showAnswerForHint}
              showAnswer={showAnswer}
              stage={stage}
              clickedBomb={clickedBomb}
            />
          </View>
          <View style={styles.heartContainer}>
            <Heart onPress={() => null} numOfHeart={heart} disabled={true} />
          </View>
        </View>
      </View>

      {/* FOOTER */}
      <View style={styles.footer}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
  },
  body: {
    flex: 5,
    width: "100%",
    marginTop: vh(10),
  },
  infoContainer: {
    width: "100%",
    flexDirection: "row",
    position: "absolute",
    top: -80,
  },
  heartContainer: {
    alignItems: "flex-end",
    marginRight: vw(3),
  },
  timerContainer: {
    flex: 1,
  },
  footer: {
    flex: 1,
    justifyContent: "flex-end",
  },
});
