// src/interfaces.ts

export interface Stock {
    symbol: string;
    quantity: number;
    pricePerUnit: number;
  }
  
  export interface Portfolio {
    stocks: Stock[];
  }
  
  export interface User {
    id: number;
    name: string;
    portfolio: Portfolio;
  }
  
  export interface RootState {
    portfolio: PortfolioState;
  }
  
  export interface PortfolioState {
    users: User[];
    minValue: number;
  }
  