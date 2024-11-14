"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";

type AppState = {
  silderIndexValue: number | null;
  setSilderIndexValue: React.Dispatch<React.SetStateAction<number | null>>;
};

const AppContext = createContext<AppState | undefined>(undefined);

type AppProviderProps = {
  children: ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => {
  const [silderIndexValue, setSilderIndexValue] = useState<number | null>(0);

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
