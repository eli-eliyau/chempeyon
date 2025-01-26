import { Portfolio, User } from '../interfaces/interfaces.ts';

// חישוב הערך הכולל של המניות
export const calculatePortfolioValue = (portfolio: Portfolio): number => {
  return portfolio.stocks.reduce(
    (total, stock) => total + stock.quantity * stock.pricePerUnit,
    0
  );
};

// חישוב מספר המניות
export const calculateTotalShares = (portfolio: Portfolio): number => {
  return portfolio.stocks.reduce((total, stock) => total + stock.quantity, 0);
};

// פונקציית מיון משתמשים
export const sortUsers = (users: User[], sortOrder: string): User[] => {
  switch (sortOrder) {
    case 'alphabetical':
      return [...users].sort((a, b) => a.name.localeCompare(b.name));
    case 'totalShares':
      return [...users].sort(
        (a, b) => calculateTotalShares(b.portfolio) - calculateTotalShares(a.portfolio)
      );
    case 'totalValue':
      return [...users].sort(
        (a, b) => calculatePortfolioValue(b.portfolio) - calculatePortfolioValue(a.portfolio)
      );
    default:
      return users;
  }
};



// סינון משתמשים לפי ערך פורטפוליו מינימלי
export const filterUsersByMinValue = (users: User[], minValue: number): User[] => {
    return users.filter(user => calculatePortfolioValue(user.portfolio) >= minValue);
  };
