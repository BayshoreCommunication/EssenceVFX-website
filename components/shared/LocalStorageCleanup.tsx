"use client";

import { initializeCleanup } from "@/utils/cleanup";
import { useEffect } from "react";

const LocalStorageCleanup = () => {
  useEffect(() => {
    initializeCleanup();
  }, []);

  return null; // This component doesn't render anything
};

export default LocalStorageCleanup;
