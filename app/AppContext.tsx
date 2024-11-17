"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";

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
    const savedValue = Number(localStorage.getItem("sliderIndexValue"));
    return savedValue !== null ? Number(savedValue) : 0;
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
