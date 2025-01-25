import { configureStore } from '@reduxjs/toolkit';
import portfolioReducer from './portfolioSlice.ts';

// הגדרת ה-Store
const store = configureStore({
  reducer: {
    portfolio: portfolioReducer, // מחברים את ה-reducer של הפורטפוליו
  },
});

// טיפוסים של ה-State וה-Dispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
