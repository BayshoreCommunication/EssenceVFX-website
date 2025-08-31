/**
 * Safe localStorage utility functions
 * Prevents JSON data from being accidentally used as CSS classes
 */

export const safeLocalStorage = {
  getItem: (key: string): string | null => {
    try {
      const value = localStorage.getItem(key);
      if (value === null) return null;

      // Check if the value is valid JSON and contains theme-related data
      try {
        const parsed = JSON.parse(value);
        if (
          parsed &&
          typeof parsed === "object" &&
          (parsed.theme || parsed.username || parsed.logo || parsed.state?.theme)
        ) {
          // This is theme data, don't return it as a string
          console.warn(`Theme data found in localStorage for key: ${key}`);
          return null;
        }
      } catch {
        // Not JSON, check if it contains theme-related strings
        if (
          value.includes('"theme"') ||
          value.includes('"username"') ||
          value.includes('"logo"') ||
          value.includes('"state"') ||
          value.includes('Team Sabbir Nasir') ||
          value.includes('FA7E70')
        ) {
          console.warn(`Corrupted theme string found in localStorage for key: ${key}`);
          return null;
        }
      }

      return value;
    } catch (error) {
      console.warn(`Error reading from localStorage for key ${key}:`, error);
      return null;
    }
  },

  setItem: (key: string, value: string): void => {
    try {
      // Validate that we're not accidentally storing JSON as a simple string
      if (value.startsWith("{") && value.includes('"theme"')) {
        console.warn(
          `Attempting to store theme JSON data as string for key: ${key}`
        );
        return;
      }

      // Check for the specific problematic JSON structure
      if (
        value.includes('"state"') &&
        value.includes('"theme"') &&
        value.includes('"username"') &&
        value.includes('"logo"')
      ) {
        console.warn(
          `Attempting to store corrupted theme JSON data for key: ${key}`
        );
        return;
      }

      localStorage.setItem(key, value);
    } catch (error) {
      console.warn(`Error writing to localStorage for key ${key}:`, error);
    }
  },

  removeItem: (key: string): void => {
    try {
      localStorage.removeItem(key);
    } catch (error) {
      console.warn(`Error removing from localStorage for key ${key}:`, error);
    }
  },

  clear: (): void => {
    try {
      localStorage.clear();
    } catch (error) {
      console.warn("Error clearing localStorage:", error);
    }
  },
};

/**
 * Safe number parsing from localStorage
 */
export const getNumberFromStorage = (
  key: string,
  defaultValue: number = 0
): number => {
  const value = safeLocalStorage.getItem(key);
  if (value === null) return defaultValue;

  const parsed = parseInt(value, 10);
  return isNaN(parsed) ? defaultValue : parsed;
};

/**
 * Safe string storage to localStorage
 */
export const setNumberToStorage = (key: string, value: number): void => {
  safeLocalStorage.setItem(key, value.toString());
};
