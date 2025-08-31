/**
 * Safe DOM utilities to prevent JSON data from being used as CSS classes
 */

/**
 * Safely add a class to an element's classList
 */
export const safeAddClass = (element: Element, className: string): void => {
  try {
    // Check if the className is actually JSON data
    if (className && typeof className === "string") {
      // Check if it looks like JSON
      if (className.startsWith("{") && className.includes('"theme"')) {
        console.warn("Attempting to add JSON data as CSS class:", className);
        return;
      }

      // Check for the specific problematic JSON structure
      if (
        className.includes('"state"') &&
        className.includes('"theme"') &&
        className.includes('"username"') &&
        className.includes('"logo"')
      ) {
        console.warn("Attempting to add corrupted theme JSON as CSS class:", className);
        return;
      }

      // Check if it contains HTML space characters (which are invalid in tokens)
      if (className.includes(" ")) {
        console.warn(
          "Attempting to add class with HTML space characters:",
          className
        );
        return;
      }

      // Check if it contains specific problematic strings
      if (
        className.includes('Team Sabbir Nasir') ||
        className.includes('FA7E70') ||
        className.includes('res.cloudinary.com')
      ) {
        console.warn("Attempting to add theme data as CSS class:", className);
        return;
      }

      // Check if it's a valid CSS class name
      if (/^[a-zA-Z0-9_-]+$/.test(className)) {
        element.classList.add(className);
      } else {
        console.warn("Invalid CSS class name:", className);
      }
    }
  } catch (error) {
    console.warn("Error adding class to element:", error);
  }
};

/**
 * Safely remove a class from an element's classList
 */
export const safeRemoveClass = (element: Element, className: string): void => {
  try {
    if (className && typeof className === "string") {
      element.classList.remove(className);
    }
  } catch (error) {
    console.warn("Error removing class from element:", error);
  }
};

/**
 * Safely toggle a class on an element's classList
 */
export const safeToggleClass = (
  element: Element,
  className: string,
  force?: boolean
): void => {
  try {
    if (className && typeof className === "string") {
      // Check if it looks like JSON
      if (className.startsWith("{") && className.includes('"theme"')) {
        console.warn("Attempting to toggle JSON data as CSS class:", className);
        return;
      }

      // Check for the specific problematic JSON structure
      if (
        className.includes('"state"') &&
        className.includes('"theme"') &&
        className.includes('"username"') &&
        className.includes('"logo"')
      ) {
        console.warn("Attempting to toggle corrupted theme JSON as CSS class:", className);
        return;
      }

      element.classList.toggle(className, force);
    }
  } catch (error) {
    console.warn("Error toggling class on element:", error);
  }
};

/**
 * Safely set className on an element
 */
export const safeSetClassName = (element: Element, className: string): void => {
  try {
    if (className && typeof className === "string") {
      // Check if it looks like JSON
      if (className.startsWith("{") && className.includes('"theme"')) {
        console.warn("Attempting to set JSON data as className:", className);
        return;
      }

      // Check for the specific problematic JSON structure
      if (
        className.includes('"state"') &&
        className.includes('"theme"') &&
        className.includes('"username"') &&
        className.includes('"logo"')
      ) {
        console.warn("Attempting to set corrupted theme JSON as className:", className);
        return;
      }

      element.className = className;
    }
  } catch (error) {
    console.warn("Error setting className on element:", error);
  }
};
