import React, { useState, useEffect, useRef } from "react";
import {
  StyleSheet,
  View,
  Image,
  BackHandler,
  Alert,
  AppState,
} from "react-native";
import { vw, vh } from "react-native-expo-viewport-units";

import colors from "../../constants/colors";

const GameOverScreen = ({}) => {
  return (
    <>
      <View style={styles.screen}>
        <View style={styles.heartContainer}>
          <View style={styles.heartBox}></View>
        </View>
        <View style={styles.imageContainer}></View>
        <View style={styles.buttonContainer}></View>
        <View style={styles.goHomeContainer}></View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  heartContainer: {
    width: "100%",
    marginVertical: vh(2),
  },
  heartBox: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginRight: vw(3),
  },
  imageContainer: {
    width: vh(30),
    height: vh(30),
    borderRadius: vh(30) / 2,
    borderWidth: 3,
    borderColor: colors.whiteColor,
    overflow: "hidden",
    marginVertical: vh(5),
  },
  image: {
    width: "100%",
    height: "100%",
  },
  buttonContainer: {
    flex: 1,
    width: "100%",
    flexDirection: "row",
    marginHorizontal: 30,
    marginVertical: vh(2),
    justifyContent: "space-around",
    alignItems: "center",
  },
  goHomeContainer: {
    flex: 1,
    justifyContent: "flex-end",
  },
});

export default GameOverScreen;
