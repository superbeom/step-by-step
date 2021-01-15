import React from "react";
import {
  FontAwesome,
  FontAwesome5,
  MaterialCommunityIcons,
  Entypo,
} from "@expo/vector-icons";
import { vw, vh, vmax } from "react-native-expo-viewport-units";

import colors from "../constants/colors";

export const HEART = (
  <MaterialCommunityIcons
    name="cards-heart"
    size={vmax(7)}
    color={colors.redColor}
  />
);

export const FLAG = (
  <FontAwesome5
    name="flag-checkered"
    size={vmax(6)}
    color={colors.primaryColor}
  />
);
