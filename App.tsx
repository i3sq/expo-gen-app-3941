import React, { createContext, useContext, useState, ReactNode } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackScreenProps } from '@react-navigation/native-stack';
import { ExpoStatusBar } from 'expo-status-bar';

/**
 * Types and Navigation Definitions
 */
type RootStackParamList = {
  Main: undefined;
  Settings: undefined;
};

type CounterContextType = {
  count: number;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
};

type MainScreenProps = NativeStackScreenProps<RootStackParamList, 'Main'>;
type SettingsScreenProps = NativeStackScreenProps<RootStackParamList, 'Settings'>;

/**
 * Context Provider for State Management
 */
const CounterContext = createContext<CounterContextType | undefined>(undefined);

const CounterProvider = ({ children }: { children: ReactNode }) => {
  const [count, setCount] = useState<number>(0);

  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => prev - 1);
  const reset = () => setCount(0);

  return (
    <CounterContext.Provider value={{ count, increment, decrement, reset }}>
      {children}
    </CounterContext.Provider>
  );
};

/**
 * Custom hook for consuming Counter state
 */
const useCounter = () => {
  const context = useContext(CounterContext);
  if (!context) {
    throw new Error('useCounter must be used within a CounterProvider');
  }
  return context;
};

/**
 * Main Screen Component
 */
const MainScreen = ({ navigation }: MainScreenProps) => {
  const { count, increment, decrement } = useCounter();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.label}>Current Count</Text>
        <Text style={styles.counterText}>{count}</Text>
        
        <View style={styles.buttonRow}>
          <TouchableOpacity 
            style={[styles.button, styles.decrementButton]} 
            onPress={decrement}
            activeOpacity={0.7}
          >
            <Text style={styles.buttonText}>-</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={[styles.button, styles.incrementButton]} 
            onPress={increment}
            activeOpacity={0.7}
          >
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity 
          style={styles.settingsNavButton}
          onPress={() => navigation.navigate('Settings')}
        >
          <Text style={styles.settingsNavButtonText}>Go to Settings</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

/**
 * Settings Screen Component
 */
const SettingsScreen = ({ navigation }: SettingsScreenProps) => {
  const { reset } = useCounter();

  const handleReset = () => {
    reset();
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Settings</Text>
        <Text style={styles.description}>
          Use the button below to reset the counter back to zero.
        </Text>
        
        <TouchableOpacity 
          style={styles.resetButton} 
          onPress={handleReset}
          activeOpacity={0.7}
        >
          <Text style={styles.resetButtonText}>Reset Counter</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.backButton} 
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.backButtonText}>Cancel</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const Stack = createNativeStackNavigator<RootStackParamList>();

/**
 * Main App Entry Point
 */
export default function App() {
  return (
    <CounterProvider>
      <NavigationContainer>
        <StatusBar barStyle="dark-content" />
        <Stack.Navigator 
          initialRouteName="Main"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Main" component={MainScreen} />
          <Stack.Screen name="Settings" component={SettingsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </CounterProvider>
  );
}

/**
 * Styles
 */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F7FA',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  label: {
    fontSize: 18,
    color: '#64748B',
    marginBottom: 8,
    fontWeight: '600',
  },
  counterText: {
    fontSize: 84,
    fontWeight: '800',
    color: '#1E293B',
    marginBottom: 40,
  },
  buttonRow: {
    flexDirection: 'row',
    gap: 20,
    marginBottom: 40,
  },
  button: {
    width: 80,
    height: 80,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  incrementButton: {
    backgroundColor: '#3B82F6',
  },
  decrementButton: {
    backgroundColor: '#EF4444',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 32,
    fontWeight: 'bold',
  },
  settingsNavButton: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    backgroundColor: '#E2E8F0',
  },
  settingsNavButtonText: {
    color: '#475569',
    fontSize: 16,
    fontWeight: '600',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1E293B',
    marginBottom: 16,
  },
  description: {
    fontSize: 16,
    color: '#64748B',
    textAlign: 'center',
    marginBottom: 32,
    lineHeight: 24,
  },
  resetButton: {
    width: '100%',
    backgroundColor: '#1E293B',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 16,
  },
  resetButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '700',
  },
  backButton: {
    paddingVertical: 12,
  },
  backButtonText: {
    color: '#94A3B8',
    fontSize: 16,
    fontWeight: '500',
  },
});
