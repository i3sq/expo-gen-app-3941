import React, { createContext, useContext, useState, ReactNode } from 'react';

/**
 * Type definition for the Counter Context state and actions.
 */
interface CounterContextType {
  count: number;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
}

/**
 * Props for the CounterProvider component.
 */
interface CounterProviderProps {
  children: ReactNode;
}

/**
 * Create the context with an initial undefined value.
 */
const CounterContext = createContext<CounterContextType | undefined>(undefined);

/**
 * CounterProvider component that wraps the application and provides the counter state.
 */
export const CounterProvider: React.FC<CounterProviderProps> = ({ children }) => {
  const [count, setCount] = useState<number>(0);

  /**
   * Increments the counter by 1.
   */
  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  /**
   * Decrements the counter by 1.
   */
  const decrement = () => {
    setCount((prevCount) => prevCount - 1);
  };

  /**
   * Resets the counter to 0.
   */
  const reset = () => {
    setCount(0);
  };

  const value: CounterContextType = {
    count,
    increment,
    decrement,
    reset,
  };

  return (
    <CounterContext.Provider value={value}>
      {children}
    </CounterContext.Provider>
  );
};

/**
 * Custom hook to use the CounterContext.
 * Throws an error if used outside of a CounterProvider.
 */
export const useCounter = (): CounterContextType => {
  const context = useContext(CounterContext);
  
  if (context === undefined) {
    throw new Error('useCounter must be used within a CounterProvider');
  }
  
  return context;
};

export default CounterContext;