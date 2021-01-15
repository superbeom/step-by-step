import React, { useState, createContext, useContext } from "react";
import AsyncStorage from "@react-native-community/async-storage";

export const GameContext = createContext([{}, () => {}]);

export const GameProvider = ({ gameInfo: gameInfoProp, children }) => {
  const [gameInfo, setGameInfo] = useState(gameInfoProp);

  /* heart 갯수 -1 업데이트 */
  const minusHeart = async () => {
    try {
      /* Update Heart Info on Screen */
      setGameInfo((curState) => ({
        ...curState,
        heart: curState.heart - 1,
      }));

      /* Store Heart Info to Local */
      await AsyncStorage.setItem("heart", JSON.stringify(gameInfo.heart - 1));
    } catch (error) {
      console.log("Error @minusHeart_GameContext: ", error.message);
    }
  };

  return (
    <GameContext.Provider
      value={{
        gameInfo,
        minusHeart,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export const useGameInfo = () => {
  const { gameInfo } = useContext(GameContext);
  return gameInfo;
};

export const useMinusHeart = () => {
  const { minusHeart } = useContext(GameContext);
  return minusHeart;
};
