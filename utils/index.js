export const formatCurrency = (value, symbol = '£') =>
  `${symbol}${value.toFixed(2)}`;
