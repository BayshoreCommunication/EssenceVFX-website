"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";

// Define a type for the context state
type AppState = {
  silderIndexValue: number | null;
  setSilderIndexValue: React.Dispatch<React.SetStateAction<string | null>>;
};

// Create the context with a default value (null)
const AppContext = createContext<AppState | undefined>(undefined);

// Create a provider component
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

// Custom hook for easier context access
export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};
