import React, { useState, useCallback } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

// Assuming a standard RootStackParamList defined in a types file or App.tsx
type RootStackParamList = {
  Home: undefined;
  Settings: { currentCount: number };
};

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

const HomeScreen: React.FC<Props> = ({ navigation }) => {
  const [count, setCount] = useState<number>(0);

  const increment = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  const decrement = useCallback(() => {
    setCount((prev) => prev - 1);
  }, []);

  const handleGoToSettings = () => {
    navigation.navigate('Settings', { currentCount: count });
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      
      <View style={styles.header}>
        <Text style={styles.title}>Counter App</Text>
      </View>

      <View style={styles.counterContainer}>
        <Text style={styles.countText}>{count}</Text>
        <Text style={styles.label}>Current Value</Text>
      </View>

      <View style={styles.controls}>
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

      <View style={styles.footer}>
        <TouchableOpacity 
          style={styles.settingsButton} 
          onPress={handleGoToSettings}
        >
          <Text style={styles.settingsButtonText}>Open Settings</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F7FA',
  },
  header: {
    paddingVertical: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#1A1C1E',
  },
  counterContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  countText: {
    fontSize: 120,
    fontWeight: '800',
    color: '#007AFF',
  },
  label: {
    fontSize: 18,
    color: '#6C757D',
    marginTop: -10,
  },
  controls: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    paddingBottom: 60,
  },
  button: {
    width: 80,
    height: 80,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  decrementButton: {
    backgroundColor: '#FF3B30',
  },
  incrementButton: {
    backgroundColor: '#34C759',
  },
  buttonText: {
    fontSize: 40,
    color: '#FFFFFF',
    fontWeight: '600',
  },
  footer: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  settingsButton: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E1E4E8',
  },
  settingsButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#495057',
  },
});

export default HomeScreen;