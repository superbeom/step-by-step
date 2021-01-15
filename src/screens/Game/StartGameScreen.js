import React from "react";
import { StyleSheet, Text, View, Alert, Button } from "react-native";
import { vw, vh } from "react-native-expo-viewport-units";

import colors from "../../constants/colors";

export default ({ onStartGame, getHeart }) => {
  return (
    <View style={styles.screen}>
      <View style={styles.gameInfo}>
        <View style={styles.heartBox}>
          <Button
            style={{ backgroundColor: "lightpink" }}
            onPress={getHeart}
            title="CLICK FOR ME"
          />
        </View>
      </View>

      <View style={styles.gameStartContainer}></View>

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
