import React, { useState, useEffect } from "react";
import AsyncStorage from "@react-native-community/async-storage";

import { GameProvider } from "./src/context/GameContext";

import AppStack from "./src/stacks/AppStack";

import Loader from "./src/components/Loader";

export default () => {
  const [loaded, setLoaded] = useState(false);
  const [gameInfo, setGameInfo] = useState({});

  const preLoad = async () => {
    try {
      /* Load Cache */
      const storageStage = JSON.parse(await AsyncStorage.getItem("stage"));
      const storageHorizontalNum = JSON.parse(
        await AsyncStorage.getItem("horizontalNum")
      );
      const storageHeart = JSON.parse(await AsyncStorage.getItem("heart"));
      const storageGameEnd = JSON.parse(await AsyncStorage.getItem("gameEnd"));

      if (storageStage && storageHorizontalNum) {
        /* Store Game Info to Game Screen */
        setGameInfo((curState) => ({
          stage: storageStage,
          horizontalNum: storageHorizontalNum,
          heart: storageHeart,
          gameEnd: storageGameEnd,
        }));
      } else {
        const newStage = 1;
        const newHorizontalNum = 2;
        const newHeart = 5;
        const newGameEnd = false;

        /* Store Game Info to Local */
        await AsyncStorage.setItem("stage", JSON.stringify(newStage));
        await AsyncStorage.setItem(
          "horizontalNum",
          JSON.stringify(newHorizontalNum)
        );
        await AsyncStorage.setItem("heart", JSON.stringify(newHeart));
        await AsyncStorage.setItem("gameEnd", JSON.stringify(newGameEnd));

        /* Store Game Info to Game Screen */
        setGameInfo((curState) => ({
          stage: newStage,
          horizontalNum: newHorizontalNum,
          heart: newHeart,
          gameEnd: newGameEnd,
        }));
      }

      /* Set State */
      setLoaded(true);
    } catch (error) {
      console.log("Error @preLoad_App: ", error.message);
    }
  };

  useEffect(() => {
    preLoad();
  }, []);

  return loaded ? (
    <GameProvider gameInfo={gameInfo}>
      <AppStack />
    </GameProvider>
  ) : (
    <Loader />
  );
};
