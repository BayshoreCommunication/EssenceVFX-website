"use client";
import React, { createContext, ReactNode, useContext, useState } from "react";

import { getNumberFromStorage } from "@/utils/storage";

type AppState = {
  silderIndexValue: number;
  setSilderIndexValue: React.Dispatch<React.SetStateAction<number>>;
};

const AppContext = createContext<AppState | undefined>(undefined);

type AppProviderProps = {
  children: ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => {
  const [silderIndexValue, setSilderIndexValue] = useState<number>(() => {
    return getNumberFromStorage("sliderIndexValue", 0);
  });

  return (
    <AppContext.Provider value={{ silderIndexValue, setSilderIndexValue }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);

  if (context === undefined) {
    throw new Error("useAppContext must be used within an AppProvider");
  }

  return context;
};
