/**
 * Formats a numeric value into a string with thousands separators (commas).
 * Example: 1000 -> "1,000"
 * 
 * @param value - The numeric value to format
 * @returns A formatted string
 */
export const formatNumberWithCommas = (value: number): string => {
  return new Intl.NumberFormat('en-US').format(value);
};

/**
 * Pads a number with leading zeros to reach a specific length.
 * Example: padNumber(5, 3) -> "005"
 * 
 * @param value - The number to pad
 * @param length - The target length of the resulting string (default is 2)
 * @returns A padded string representation of the number
 */
export const padNumber = (value: number, length: number = 2): string => {
  return value.toString().padStart(length, '0');
};

/**
 * Abbreviates large numbers for UI display where space is limited.
 * Example: 1500 -> "1.5k", 1000000 -> "1M"
 * 
 * @param value - The number to abbreviate
 * @returns An abbreviated string representation
 */
export const formatCompactNumber = (value: number): string => {
  if (Math.abs(value) >= 1000000) {
    return (value / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';
  }
  if (Math.abs(value) >= 1000) {
    return (value / 1000).toFixed(1).replace(/\.0$/, '') + 'k';
  }
  return value.toString();
};

/**
 * Formats a number as a localized currency string.
 * Default is USD.
 * 
 * @param value - The numeric amount
 * @param currencyCode - The ISO currency code (default: 'USD')
 * @returns A formatted currency string
 */
export const formatCurrency = (value: number, currencyCode: string = 'USD'): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currencyCode,
  }).format(value);
};

/**
 * Returns the ordinal suffix for a given number.
 * Example: 1 -> "1st", 2 -> "2nd", 3 -> "3rd"
 * 
 * @param value - The number to process
 * @returns The number string with its ordinal suffix
 */
export const formatOrdinal = (value: number): string => {
  const s = ['th', 'st', 'nd', 'rd'];
  const v = value % 100;
  return value + (s[(v - 20) % 10] || s[v] || s[0]);
};

/**
 * Simple percentage formatter.
 * Example: 0.85 -> "85%"
 * 
 * @param value - The decimal value
 * @param decimals - Number of decimal places to show
 * @returns A formatted percentage string
 */
export const formatPercentage = (value: number, decimals: number = 0): string => {
  return `${(value * 100).toFixed(decimals)}%`;
};