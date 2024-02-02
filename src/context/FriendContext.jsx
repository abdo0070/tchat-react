import { createContext, useState } from "react";

export const FreindsContext = createContext();

export function FreindProvidor({ children }) {
  const [freinds, setFreinds] = useState();
  const updateFreinds = (fl) => {
    setFreinds(fl);
  };
  return (
    <FreindsContext.Provider value={{freinds, updateFreinds}}>
      {children}
    </FreindsContext.Provider>
  );
}

