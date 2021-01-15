import React from "react";
import { StyleSheet, View } from "react-native";

import colors from "../constants/colors";

export default (props) => {
  return (
    <View style={{ ...styles.card, ...props.style }}>{props.children}</View>
  );
};

const styles = StyleSheet.create({
  card: {
    shadowColor: colors.blackColor,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.26,
    shadowRadius: 6,
    elevation: 6,
    backgroundColor: colors.whiteColor,
    padding: 20,
    borderRadius: 10,
  },
});
