import { TextField } from '@mui/material';
import { useState } from 'react';

const FilterColumn = ({ id }: { id: string }) => {
  const [value, setValue] = useState('');
  return (
    <TextField
      name={id}
      value={value}
      autoComplete="off"
      size="small"
      sx={{ input: { p: '0.2rem 0.4rem !important' } }}
      onChange={(e) => {
        setValue(e.target.value);
      }}
      placeholder="..."
    />
  );
};

export default FilterColumn;
