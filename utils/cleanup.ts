/**
 * Cleanup utility to remove corrupted theme data from localStorage
 */

export const cleanupLocalStorage = (): void => {
  try {
    // Check for and remove any corrupted theme data
    const keysToCheck = [
      "theme",
      "next-themes",
      "next-themes-prefs",
      "sliderIndexValue",
      // Add more keys that might contain theme data
      "next-themes-prefs",
      "next-themes-prefs-json",
      "theme-prefs",
      "theme-config",
    ];

    let corruptedDataFound = false;

    keysToCheck.forEach((key) => {
      try {
        const value = localStorage.getItem(key);
        if (value) {
          // Check if it's a JSON object with theme-related properties
          try {
            const parsed = JSON.parse(value);
            if (parsed && typeof parsed === "object") {
              // Check for various theme-related properties
              if (
                parsed.theme ||
                parsed.username ||
                parsed.logo ||
                parsed.version !== undefined ||
                parsed.state?.theme ||
                parsed.state?.username ||
                parsed.state?.logo
              ) {
                console.warn(
                  `Removing corrupted theme data from localStorage key: ${key}`
                );
                localStorage.removeItem(key);
                corruptedDataFound = true;
              }
            }
          } catch {
            // Not JSON, check if it contains theme-related strings
            if (
              value.includes('"theme"') ||
              value.includes('"username"') ||
              value.includes('"logo"') ||
              value.includes('"state"') ||
              value.includes('"version"') ||
              value.includes('Team Sabbir Nasir') ||
              value.includes('FA7E70')
            ) {
              console.warn(
                `Removing corrupted theme string from localStorage key: ${key}`
              );
              localStorage.removeItem(key);
              corruptedDataFound = true;
            }
          }
        }
      } catch (error) {
        console.warn(`Error checking localStorage key ${key}:`, error);
      }
    });

    // Also check all localStorage keys for any that might contain theme data
    try {
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key) {
          const value = localStorage.getItem(key);
          if (value) {
            // Check if the value contains the problematic JSON structure
            if (
              value.includes('"state"') &&
              value.includes('"theme"') &&
              value.includes('"username"') &&
              value.includes('"logo"')
            ) {
              console.warn(
                `Removing corrupted theme data from localStorage key: ${key}`
              );
              localStorage.removeItem(key);
              corruptedDataFound = true;
            }
          }
        }
      }
    } catch (error) {
      console.warn("Error checking all localStorage keys:", error);
    }

    // If corrupted data was found, consider clearing all localStorage as a last resort
    if (corruptedDataFound) {
      console.warn("Corrupted theme data detected. Consider clearing all localStorage if issues persist.");
      // Uncomment the line below if you want to clear all localStorage when corrupted data is found
      // localStorage.clear();
    }
  } catch (error) {
    console.warn("Error during localStorage cleanup:", error);
  }
};

/**
 * Nuclear option: Clear all localStorage if corrupted data is detected
 */
export const nuclearCleanup = (): void => {
  try {
    console.warn("Performing nuclear cleanup - clearing all localStorage");
    localStorage.clear();
  } catch (error) {
    console.warn("Error during nuclear cleanup:", error);
  }
};

/**
 * Initialize cleanup on page load
 */
export const initializeCleanup = (): void => {
  if (typeof window !== "undefined") {
    // Run cleanup immediately
    cleanupLocalStorage();

    // Also run cleanup when the page becomes visible (in case of tab switching)
    document.addEventListener("visibilitychange", () => {
      if (!document.hidden) {
        cleanupLocalStorage();
      }
    });

    // Run cleanup periodically to catch any new corrupted data
    setInterval(cleanupLocalStorage, 5000); // Check every 5 seconds
  }
};
