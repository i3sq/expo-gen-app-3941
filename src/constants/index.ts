export const STORAGE_KEYS = {
  COUNTER_VALUE: '@counter_app_value',
} as const;

export const COUNTER_CONFIG = {
  INITIAL_VALUE: 0,
  MIN_VALUE: -9999,
  MAX_VALUE: 9999,
  INCREMENT_STEP: 1,
  DECREMENT_STEP: 1,
} as const;

export const ROUTES = {
  HOME: 'HomeScreen',
  SETTINGS: 'SettingsScreen',
} as const;

export const UI_CONSTANTS = {
  HIT_SLOP: { top: 10, bottom: 10, left: 10, right: 10 },
  ACTIVE_OPACITY: 0.7,
  BORDER_RADIUS: {
    SMALL: 4,
    MEDIUM: 8,
    LARGE: 12,
    ROUND: 999,
  },
  SPACING: {
    XS: 4,
    SM: 8,
    MD: 16,
    LG: 24,
    XL: 32,
    XXL: 48,
  },
} as const;

export const APP_METADATA = {
  NAME: 'Tiny Counter',
  VERSION: '1.0.0',
} as const;

export type StorageKey = typeof STORAGE_KEYS[keyof typeof STORAGE_KEYS];
export type RouteName = typeof ROUTES[keyof typeof ROUTES];