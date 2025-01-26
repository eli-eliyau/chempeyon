// components/UserList.tsx
import React from 'react';
import { Typography } from '@mui/material';
import { User } from '../interfaces/interfaces.ts';
import { calculatePortfolioValue } from '../utils/portfolioHelpers.ts';

interface UserListProps {
  users: User[];
}

const UserList: React.FC<UserListProps> = ({ users }) => {
  return (
    <div style={{ marginTop: '16px' }}>
      {users.length > 0 ? (
        users.map((user) => (
          <div key={user.id} style={{ marginBottom: '16px' }}>
            <Typography variant="h6">{user.name}</Typography>
            <ul>
              {user.portfolio.stocks.map((stock, index) => (
                <li key={index}>
                  {stock.symbol} - {stock.quantity} shares @ ${stock.pricePerUnit}
                </li>
              ))}
            </ul>
            <Typography variant="subtitle1">
              Total Value: ${calculatePortfolioValue(user.portfolio).toLocaleString()}
            </Typography>
          </div>
        ))
      ) : (
        <Typography>No users meet the criteria.</Typography>
      )}
    </div>
  );
};

export default UserList;
