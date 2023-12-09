/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import { Songs } from "../constants/songData";

export const SongList = createContext();

export const SongContext = ({ children }) => {
  const [list, setList] = useState([...Songs]);

  const [currentSong, setCurrentSong] = useState();

  return (
    <SongList.Provider value={{ list, setList, currentSong, setCurrentSong }}>
      {children}
    </SongList.Provider>
  );
};
