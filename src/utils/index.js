/**
 * Formats a string to to 2 decimal places and prepends
 * a currency symbol. (defaults to £)
 * @param  {String} value  Input string from user input.
 * @param  {String} symbol Currency symbol, defaults to £
 * @return {String}
 */
export const formatCurrency = (value, symbol = '£') =>
  `${symbol}${parseFloat(value).toFixed(2)}`;

/**
 * Capitalize a string.
 * @param  {String} string input
 * @return {String}        Capitalized output.
 */
export const capitalize = (string) =>
  string.charAt(0).toUpperCase() + string.slice(1);
