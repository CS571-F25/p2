import React from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';

function FilterDropdown({ label, value, onChange, options }) {
  return (
    <FormControl sx={{ minWidth: 200 }}>
      <InputLabel>{label}</InputLabel>
      <Select
        value={value}
        label={label}
        onChange={(e) => onChange(e.target.value)}
        sx={{
          bgcolor: 'white',
        }}
      >
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default FilterDropdown;
