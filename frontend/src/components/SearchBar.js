import React from 'react';
import { TextField } from '@mui/material';

function SearchBar({ label, value, onChange, placeholder }) {
  return (
    <TextField
      label={label}
      variant="outlined"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      sx={{
        flexGrow: 1,
        minWidth: 200,
        '& .MuiOutlinedInput-root': {
          bgcolor: 'white',
        },
      }}
      placeholder={placeholder}
    />
  );
}

export default SearchBar;
