import React from 'react';
import ReactDOM from 'react-dom/client';  // שינוי חשוב בייבוא
import { Provider } from 'react-redux';
import App from './App.tsx';
import store from './redux/store.ts';

// חיבור ה-Redux Store עם היישום
const root = ReactDOM.createRoot(document.getElementById('root')!);  // יצירת root עם createRoot
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
