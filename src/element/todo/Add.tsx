import React from 'react';
import { Stack, TextField, Button } from '@mui/material';
import { useForm } from '@/hooks/useForm';
import { TodoPayload } from '@/types/todo';

type Props = {
  onSubmit: (todo: TodoPayload) => void;
};

const defaultValues = { todo: '' };

function Add({ onSubmit }: Props) {
  const { payload, setPayload, handleChange } =
    useForm<TodoPayload>(defaultValues);

  return (
    <Stack direction="row" alignItems="end" spacing={3}>
      <TextField
        type="text"
        name="todo"
        value={payload.todo}
        onChange={handleChange}
        label="Add new task"
        variant="standard"
        sx={{ width: '70%' }}
      />
      <Button
        variant="contained"
        sx={{ width: '30%', textTransform: 'none' }}
        onClick={() => {
          onSubmit(payload);
          setPayload(defaultValues);
        }}
      >
        Add Todo
      </Button>
    </Stack>
  );
}

export default Add;
