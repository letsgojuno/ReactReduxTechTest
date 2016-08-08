export const formatCurrency = (value, symbol = '£') =>
  `${symbol}${parseFloat(value).toFixed(2)}`;

export const capitalize = (string) =>
  string.charAt(0).toUpperCase() + string.slice(1);
