import React from 'react';
import {
  Stack,
  FormControl,
  Input,
  InputAdornment,
  Button,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useForm } from '@/hooks/useForm';
import { SearchPayload } from '@/types/todo';

type Props = {
  onSearch: (search: string) => void;
};

function Search({ onSearch }: Props) {
  const { payload, handleChange } = useForm<SearchPayload>({ todo: '' });
  const handleKeypress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onSearch(payload.todo);
    }
  };

  return (
    <Stack direction="row" spacing={2}>
      <FormControl variant="standard">
        <Input
          id="search"
          type="text"
          name="todo"
          value={payload.todo}
          onChange={handleChange}
          onKeyDown={handleKeypress}
          placeholder="Search"
          endAdornment={
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          }
        />
      </FormControl>
      <Button
        variant="contained"
        sx={{ textTransform: 'none', width: '30%' }}
        onClick={() => onSearch(payload.todo)}
      >
        Search
      </Button>
    </Stack>
  );
}

export default Search;
