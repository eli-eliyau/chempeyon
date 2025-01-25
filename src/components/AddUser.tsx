import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { addUserStock } from '../redux/portfolioSlice.ts';
import { Button, Typography, TextField, MenuItem, Select, InputLabel, FormControl } from '@mui/material';

// מניות זמינות להוספה
const availableStocks = [
  { symbol: 'AAPL', pricePerUnit: 145 },
  { symbol: 'TSLA', pricePerUnit: 650 },
  { symbol: 'MSFT', pricePerUnit: 290 },
  { symbol: 'GOOGL', pricePerUnit: 2800 },
];

const AddUser: React.FC = () => {
  const dispatch = useDispatch();
  const users = useSelector((state: RootState) => state.portfolio.users);
  const [showAddStockForm, setShowAddStockForm] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState<number>(users[0]?.id || 1); // ברירת מחדל המשתמש הראשון
  const [selectedStock, setSelectedStock] = useState<string>('');
  const [quantity, setQuantity] = useState<number>(0);

  // פונקציה להוספת מניה
  const handleAddStock = () => {
    if (selectedStock && quantity > 0) {
      const stock = availableStocks.find((stock) => stock.symbol === selectedStock);
      if (stock) {
        dispatch(addUserStock({ userId: selectedUserId, symbol: stock.symbol, quantity, pricePerUnit: stock.pricePerUnit }));
        setShowAddStockForm(false); // סגירת טופס ההוספה לאחר הוספה
      }
    }
  };

  return (
    <div>
      <Typography variant="h4">Add a Stock to Portfolio</Typography>
      <Button onClick={() => setShowAddStockForm(!showAddStockForm)}>
        {showAddStockForm ? 'Cancel' : 'Add Stock'}
      </Button>

      {showAddStockForm && (
        <div>
          {/* טופס בחירת המשתמש */}
          <FormControl fullWidth margin="normal">
            <InputLabel>User</InputLabel>
            <Select
              value={selectedUserId}
              onChange={(e) => setSelectedUserId(Number(e.target.value))}
              label="User"
            >
              {users.map((user) => (
                <MenuItem key={user.id} value={user.id}>
                  {user.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          {/* טופס בחירת מניה */}
          <FormControl fullWidth margin="normal">
            <InputLabel>Stock</InputLabel>
            <Select
              value={selectedStock}
              onChange={(e) => setSelectedStock(e.target.value)}
              label="Stock"
            >
              {availableStocks.map((stock) => (
                <MenuItem key={stock.symbol} value={stock.symbol}>
                  {stock.symbol} - ${stock.pricePerUnit}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          {/* שדה קלט להזנת כמות */}
          <TextField
            label="Quantity"
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            fullWidth
            margin="normal"
          />

          <Button onClick={handleAddStock} variant="contained" color="primary">
            Add Stock
          </Button>
        </div>
      )}
    </div>
  );
};

export default AddUser;
