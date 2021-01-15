import React, { useState, createContext, useContext } from "react";

export const GameContext = createContext([{}, () => {}]);

export const GameProvider = ({ gameInfo: gameInfoProp, children }) => {
  const [gameInfo, setGameInfo] = useState(gameInfoProp);

  console.log("gameInfo: ", gameInfo);

  return (
    <GameContext.Provider
      value={{
        gameInfo,
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
