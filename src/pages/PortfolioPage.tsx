import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { setMinValue } from '../redux/portfolioSlice.ts';
import { Button, Typography, TextField } from '@mui/material';
import AddUser from '../components/AddUser.tsx';  // ייבוא של קומפוננטת ההוספה

const PortfolioPage: React.FC = () => {
  const dispatch = useDispatch();
  const users = useSelector((state: RootState) => state.portfolio.users);
  const minValue = useSelector((state: RootState) => state.portfolio.minValue);

  const [inputMinValue, setInputMinValue] = useState<number>(minValue);

  const filteredUsers = users.filter(
    (user) => user.portfolio.stocks.reduce(
      (total, stock) => total + stock.quantity * stock.pricePerUnit,
      0
    ) >= inputMinValue
  );

  const handleMinValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(event.target.value);
    setInputMinValue(value);  // עדכון ה-state המקומי
    dispatch(setMinValue(value));  // עדכון ה-minValue ב-Redux Store
  };

  return (
    <div>
      <Typography variant="h4">User Portfolio</Typography>

      <TextField
        label="Minimum Portfolio Value"
        type="number"
        value={inputMinValue}
        onChange={handleMinValueChange}
        variant="outlined"
        margin="normal"
      />

      <AddUser />  {/* הוספת כפתור הוספת יוזר */}

      <div>
        {filteredUsers.length > 0 ? (
          filteredUsers.map((user) => (
            <div key={user.id}>
              <h3>{user.name}</h3>
              <ul>
                {user.portfolio.stocks.map((stock, index) => (
                  <li key={index}>
                    {stock.symbol} - {stock.quantity} shares @ ${stock.pricePerUnit}
                  </li>
                ))}
              </ul>
            </div>
          ))
        ) : (
          <Typography>No users meet the minimum value criteria.</Typography>
        )}
      </div>
    </div>
  );
};

export default PortfolioPage;
