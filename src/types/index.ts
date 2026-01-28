export interface CounterState {
  count: number;
}

export interface CounterContextData {
  count: number;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
}

export type RootStackParamList = {
  Home: undefined;
  Settings: undefined;
};

export interface ThemeColors {
  primary: string;
  secondary: string;
  background: string;
  surface: string;
  text: string;
  textSecondary: string;
  error: string;
  success: string;
  border: string;
}

export interface Theme {
  colors: ThemeColors;
  spacing: {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
  };
  borderRadius: {
    sm: number;
    md: number;
    lg: number;
    round: number;
  };
}

export enum StorageKeys {
  COUNTER_VALUE = '@tiny_counter_app_count',
}

export interface ButtonProps {
  label: string;
  onPress: () => void;
  variant?: 'primary' | 'secondary' | 'danger' | 'outline';
  disabled?: boolean;
  style?: object;
}

export interface CounterDisplayProps {
  value: number;
  label?: string;
}