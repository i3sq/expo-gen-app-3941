import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { CompositeScreenProps, NavigatorScreenParams } from '@react-navigation/native';

/**
 * Define the parameter list for the root stack navigator.
 * We use 'undefined' for screens that do not require any parameters.
 */
export type RootStackParamList = {
  Home: undefined;
  Settings: undefined;
};

/**
 * Generic type for all screen props in the Root Stack.
 * This is useful when defining the component props for screens.
 * 
 * Usage:
 * const HomeScreen = ({ navigation, route }: Props<'Home'>) => { ... }
 */
export type RootStackScreenProps<T extends keyof RootStackParamList> = NativeStackScreenProps<
  RootStackParamList,
  T
>;

/**
 * Specific types for individual screens to allow easier imports
 * and strict typing in complex component hierarchies.
 */
export type HomeScreenProps = RootStackScreenProps<'Home'>;
export type SettingsScreenProps = RootStackScreenProps<'Settings'>;

/**
 * Global declaration for useNavigation hook type safety.
 * This allows 'useNavigation<NavigationProp>()' to be used throughout the app 
 * without manually passing the RootStackParamList every time.
 */
declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}