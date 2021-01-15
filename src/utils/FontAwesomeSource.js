import React from "react";
import {
  FontAwesome,
  FontAwesome5,
  MaterialCommunityIcons,
  Entypo,
} from "@expo/vector-icons";
import { vw, vh, vmax } from "react-native-expo-viewport-units";

import colors from "../constants/colors";

export const HOME = (
  <Entypo name={"home"} size={vw(6.5)} color={colors.whiteColor} />
);

export const TROPHY = (
  <Entypo name={"trophy"} size={vw(6.5)} color={colors.whiteColor} />
);

export const HEART = (
  <MaterialCommunityIcons
    name="cards-heart"
    size={vmax(7)}
    color={colors.redColor}
  />
);

export const ARROW_UP = (
  <Entypo name="arrow-up" size={vh(6)} color={colors.whiteColor} />
);

export const ARROW_RIGHT = (
  <Entypo name="arrow-right" size={vh(6)} color={colors.whiteColor} />
);

export const FLAG = (
  <FontAwesome5
    name="flag-checkered"
    size={vmax(6)}
    color={colors.primaryColor}
  />
);

export const STOP_WATCH = (
  <Entypo name="stopwatch" size={vh(3.5)} color={colors.accentColor} />
);

export const BAN = (
  <FontAwesome name="ban" size={vh(3.5)} color={colors.accentColor} />
);

export const EYE = (
  <MaterialCommunityIcons name="eye" size={vh(4)} color={colors.accentColor} />
);
