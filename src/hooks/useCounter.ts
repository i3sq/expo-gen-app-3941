import { useContext } from 'react';
import { CounterContext, CounterContextType } from '../context/CounterContext';

/**
 * Custom hook to access the CounterContext.
 * Provides access to the current count value and functions to manipulate it:
 * increment, decrement, and reset.
 * 
 * @throws Error if used outside of a CounterProvider.
 * @returns {CounterContextType} The counter state and actions.
 */
export const useCounter = (): CounterContextType => {
  const context = useContext(CounterContext);

  if (context === undefined) {
    throw new Error('useCounter must be used within a CounterProvider');
  }

  return context;
};

export default useCounter;