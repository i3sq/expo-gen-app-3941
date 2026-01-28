export const palette = {
  white: '#FFFFFF',
  black: '#000000',
  gray50: '#F9FAFB',
  gray100: '#F3F4F6',
  gray200: '#E5E7EB',
  gray300: '#D1D5DB',
  gray400: '#9CA3AF',
  gray500: '#6B7280',
  gray600: '#4B5563',
  gray700: '#374151',
  gray800: '#1F2937',
  gray900: '#111827',
  blue500: '#3B82F6',
  blue600: '#2563EB',
  red500: '#EF4444',
  red600: '#DC2626',
  green500: '#10B981',
  green600: '#059669',
};

export const colors = {
  background: {
    primary: palette.white,
    secondary: palette.gray50,
    surface: palette.gray100,
  },
  text: {
    primary: palette.gray900,
    secondary: palette.gray600,
    muted: palette.gray400,
    inverse: palette.white,
  },
  primary: {
    main: palette.blue500,
    dark: palette.blue600,
    contrast: palette.white,
  },
  success: {
    main: palette.green500,
    dark: palette.green600,
    contrast: palette.white,
  },
  danger: {
    main: palette.red500,
    dark: palette.red600,
    contrast: palette.white,
  },
  border: {
    light: palette.gray200,
    main: palette.gray300,
  },
  counter: {
    increment: palette.green500,
    decrement: palette.red500,
    reset: palette.gray500,
  },
} as const;

export type Colors = typeof colors;
export type Palette = typeof palette;