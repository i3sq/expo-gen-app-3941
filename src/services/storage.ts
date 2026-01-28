import AsyncStorage from '@react-native-async-storage/async-storage';

/**
 * Storage Keys constants to ensure consistency and avoid typos.
 */
const STORAGE_KEYS = {
  COUNTER_VALUE: '@counter_app_value',
} as const;

/**
 * Persists the current counter value to local storage.
 * @param value - The numerical value to save.
 */
export const saveCounter = async (value: number): Promise<void> => {
  try {
    const stringValue = value.toString();
    await AsyncStorage.setItem(STORAGE_KEYS.COUNTER_VALUE, stringValue);
  } catch (error) {
    console.error('Error saving counter value to storage:', error);
    throw new Error('Failed to save counter data');
  }
};

/**
 * Retrieves the persisted counter value from local storage.
 * Returns null if no value is found.
 */
export const loadCounter = async (): Promise<number | null> => {
  try {
    const value = await AsyncStorage.getItem(STORAGE_KEYS.COUNTER_VALUE);
    if (value !== null) {
      const parsedValue = parseInt(value, 10);
      return isNaN(parsedValue) ? null : parsedValue;
    }
    return null;
  } catch (error) {
    console.error('Error loading counter value from storage:', error);
    return null;
  }
};

/**
 * Removes the counter value from local storage.
 * Useful for a hard reset functionality.
 */
export const clearCounter = async (): Promise<void> => {
  try {
    await AsyncStorage.removeItem(STORAGE_KEYS.COUNTER_VALUE);
  } catch (error) {
    console.error('Error clearing counter value from storage:', error);
    throw new Error('Failed to clear counter data');
  }
};

/**
 * Unified storage service object for easier imports in components or hooks.
 */
const StorageService = {
  saveCounter,
  loadCounter,
  clearCounter,
};

export default StorageService;