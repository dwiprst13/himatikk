
import React, { createContext, useContext, useState } from "react";

const ScrollContext = createContext();

export const useScroll = () => useContext(ScrollContext);

export const ScrollProvider = ({ children }) => {
  const [scrollPositions, setScrollPositions] = useState({});

  const setScrollPosition = (key, position) => {
    setScrollPositions((prevPositions) => ({
      ...prevPositions,
      [key]: position,
    }));
  };

  const getScrollPosition = (key) => scrollPositions[key] || 0;

  return (
    <ScrollContext.Provider value={{ setScrollPosition, getScrollPosition }}>
      {children}
    </ScrollContext.Provider>
  );
};
