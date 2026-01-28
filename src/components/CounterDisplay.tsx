import React from 'react';
import { View, Text, StyleSheet, ViewStyle, TextStyle } from 'react-native';

/**
 * Props for the CounterDisplay component.
 */
interface CounterDisplayProps {
  /** The current numeric value to display */
  count: number;
  /** Optional custom style for the container */
  containerStyle?: ViewStyle;
}

/**
 * A reusable presentation component that displays the current counter value
 * with professional styling.
 */
const CounterDisplay: React.FC<CounterDisplayProps> = ({ count, containerStyle }) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <Text style={styles.label}>Current Count</Text>
      <View style={styles.countBadge}>
        <Text style={styles.countText}>{count}</Text>
      </View>
    </View>
  );
};

interface Styles {
  container: ViewStyle;
  label: TextStyle;
  countBadge: ViewStyle;
  countText: TextStyle;
}

const styles = StyleSheet.create<Styles>({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
    backgroundColor: '#ffffff',
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 5,
    width: '100%',
    maxWidth: 300,
    alignSelf: 'center',
  },
  label: {
    fontSize: 14,
    fontWeight: '700',
    color: '#64748b',
    textTransform: 'uppercase',
    letterSpacing: 1.5,
    marginBottom: 16,
  },
  countBadge: {
    backgroundColor: '#f1f5f9',
    paddingHorizontal: 32,
    paddingVertical: 12,
    borderRadius: 16,
    minWidth: 120,
    alignItems: 'center',
  },
  countText: {
    fontSize: 56,
    fontWeight: '800',
    color: '#0f172a',
    fontVariant: ['tabular-nums'],
  },
});

export default CounterDisplay;