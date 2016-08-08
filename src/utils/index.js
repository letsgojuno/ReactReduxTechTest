export const formatCurrency = (value, symbol = '£') =>
  `${symbol}${parseFloat(value).toFixed(2)}`;
