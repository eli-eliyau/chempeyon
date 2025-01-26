import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Stock {
  symbol: string;
  quantity: number;
  pricePerUnit: number;
}

interface Portfolio {
  stocks: Stock[];
}

interface User {
  id: number;
  name: string;
  portfolio: Portfolio;
}

interface PortfolioState {
  users: User[];
  minValue: number;
}

const initialState: PortfolioState = {
  users: [
    {
      id: 1,
      name: 'Jane Smith',
      portfolio: {
        stocks: [
          { symbol: 'AAPL', quantity: 10, pricePerUnit: 145 },
          { symbol: 'TSLA', quantity: 5, pricePerUnit: 650 },
        ],
      },
    },
    {
      id: 2,
      name: 'John Doe',
      portfolio: {
        stocks: [
          { symbol: 'MSFT', quantity: 8, pricePerUnit: 290 },
          { symbol: 'GOOGL', quantity: 12, pricePerUnit: 2800 },
        ],
      },
    },

  ],
  minValue: 1000,
};

const portfolioSlice = createSlice({
  name: 'portfolio',
  initialState,
  reducers: {
    setMinValue: (state, action: PayloadAction<number>) => {
      state.minValue = action.payload;
    },
    addUserStock: (
      state,
      action: PayloadAction<{ userId: number; symbol: string; quantity: number; pricePerUnit: number }>
    ) => {
      const { userId, symbol, quantity, pricePerUnit } = action.payload;
      const user = state.users.find((user) => user.id === userId);
      if (user) {
        const existingStock = user.portfolio.stocks.find((stock) => stock.symbol === symbol);
        if (existingStock) {
          existingStock.quantity += quantity; // אם המניה קיימת, מעדכנים את הכמות
        } else {
          user.portfolio.stocks.push({ symbol, quantity, pricePerUnit }); // אם המניה לא קיימת, מוסיפים מניה חדשה
        }
      }
    },
  },
});

export const { setMinValue, addUserStock } = portfolioSlice.actions;

export default portfolioSlice.reducer;
