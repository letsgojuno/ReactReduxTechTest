import {v4} from 'node-uuid';

export function addStock(stock) {
  return {
    type: 'ADD_STOCK',
    stock: {
      ...stock,
      id: v4(),
    }
  }
}
