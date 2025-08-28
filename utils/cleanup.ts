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
    ];

    keysToCheck.forEach((key) => {
      try {
        const value = localStorage.getItem(key);
        if (value) {
          // Check if it's a JSON object with theme-related properties
          try {
            const parsed = JSON.parse(value);
            if (parsed && typeof parsed === "object") {
              if (
                parsed.theme ||
                parsed.username ||
                parsed.logo ||
                parsed.version !== undefined
              ) {
                console.warn(
                  `Removing corrupted theme data from localStorage key: ${key}`
                );
                localStorage.removeItem(key);
              }
            }
          } catch {
            // Not JSON, check if it contains theme-related strings
            if (
              value.includes('"theme"') ||
              value.includes('"username"') ||
              value.includes('"logo"')
            ) {
              console.warn(
                `Removing corrupted theme string from localStorage key: ${key}`
              );
              localStorage.removeItem(key);
            }
          }
        }
      } catch (error) {
        console.warn(`Error checking localStorage key ${key}:`, error);
      }
    });
  } catch (error) {
    console.warn("Error during localStorage cleanup:", error);
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
  }
};
