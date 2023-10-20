import React from 'react';
import { MenuItem, FormControl, Select, Box } from '@mui/material';
import type { SelectChangeEvent } from '@mui/material';

type Props = {
  onFilter: (filter: string) => void;
};

function Filter({ onFilter: handleFilter }: Props) {
  return (
    <FormControl
      variant="standard"
      placeholder="Filter by Status"
      sx={{ width: '40%' }}
    >
      <Select
        id="filter-select"
        displayEmpty
        defaultValue=""
        onChange={(e) => handleFilter(e.target.value as string)}
      >
        <MenuItem value="">None</MenuItem>
        <MenuItem value="success">Success</MenuItem>
        <MenuItem value="pending">Pending</MenuItem>
      </Select>
    </FormControl>
  );
}

export default Filter;
