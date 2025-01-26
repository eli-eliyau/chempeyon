// components/FilterControls.tsx
import React, { useCallback } from 'react';
import { FormControl, InputLabel, Select, MenuItem, TextField, SelectChangeEvent } from '@mui/material';

interface FilterControlsProps {
  sortOrder: string;
  minValue: number;
  onSortOrderChange: (sortOrder: string) => void;
  onMinValueChange: (minValue: number) => void;
}

const FilterControls: React.FC<FilterControlsProps> = ({
  sortOrder,
  minValue,
  onSortOrderChange,
  onMinValueChange,
}) => {
  const handleSortOrderChange = useCallback(
    (event: SelectChangeEvent<string>) => {
      onSortOrderChange(event.target.value);
    },
    [onSortOrderChange]
  );

  const handleMinValueChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      onMinValueChange(Number(event.target.value));
    },
    [onMinValueChange]
  );

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginTop: '16px' }}>
      <FormControl variant="outlined" sx={{ minWidth: '200px' }}>
        <InputLabel>Sort By</InputLabel>
        <Select value={sortOrder} onChange={handleSortOrderChange} label="Sort By">
          <MenuItem value="alphabetical">Name (A-Z)</MenuItem>
          <MenuItem value="totalShares">Total Shares</MenuItem>
          <MenuItem value="totalValue">Total Portfolio Value</MenuItem>
        </Select>
      </FormControl>
      <TextField
        label="Minimum Portfolio Value"
        type="number"
        value={minValue}
        onChange={handleMinValueChange}
        variant="outlined"
      />
    </div>
  );
};

export default FilterControls;
