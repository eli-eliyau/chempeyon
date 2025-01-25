import { Portfolio } from '../interfaces.ts';

// פונקציה לחישוב שווי הפורטפוליו
export const calculatePortfolioValue = (portfolio: Portfolio): number => {
  return portfolio.stocks.reduce(
    (total, stock) => total + stock.quantity * stock.pricePerUnit,
    0
  );
};
