// pages/PortfolioPage.tsx
import React, { useState, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { sortUsers, filterUsersByMinValue } from '../utils/portfolioHelpers.ts';
import { User } from '../interfaces/interfaces';
import { Typography } from '@mui/material';
import FilterControls from '../components/FilterControls.tsx';
import UserList from '../components/UserList.tsx';
import AddStock from '../components/AddStock.tsx';

const PortfolioPage: React.FC = () => {
  const users = useSelector((state: RootState) => state.portfolio.users);

  const [sortOrder, setSortOrder] = useState<string>('alphabetical');
  const [minValue, setMinValue] = useState<number>(0);

  // סינון משתמשים לפי ערך מינימלי
  const filteredUsers = useMemo(() => filterUsersByMinValue(users, minValue), [users, minValue]);

  // מיון משתמשים
  const sortedAndFilteredUsers = useMemo(() => sortUsers(filteredUsers, sortOrder), [
    filteredUsers,
    sortOrder,
  ]);

  return (
    <div>
      <Typography variant="h4">User Portfolio</Typography>
      <FilterControls
        sortOrder={sortOrder}
        minValue={minValue}
        onSortOrderChange={setSortOrder}
        onMinValueChange={setMinValue}
      />
      <UserList users={sortedAndFilteredUsers} />
      <AddStock />
    </div>
  );
};

export default PortfolioPage;
