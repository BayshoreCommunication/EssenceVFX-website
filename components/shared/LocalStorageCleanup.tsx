"use client";

import { useEffect } from "react";

import { initializeCleanup } from "@/utils/cleanup";

const LocalStorageCleanup = () => {
  useEffect(() => {
    // Run cleanup immediately
    initializeCleanup();

    // Also run cleanup after a short delay to catch any data that might be set during initialization
    const timeoutId = setTimeout(() => {
      initializeCleanup();
    }, 100);

    // Run cleanup when the component mounts and when the window gains focus
    const handleFocus = () => {
      initializeCleanup();
    };

    window.addEventListener("focus", handleFocus);

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener("focus", handleFocus);
    };
  }, []);

  return null; // This component doesn't render anything
};

export default LocalStorageCleanup;
