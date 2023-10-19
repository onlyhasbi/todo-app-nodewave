import React from 'react';
import {Stack, TextField, Button} from "@mui/material";
import {useForm} from "@/hooks/useForm";
import {TodoPayload} from "@/types/todo";

type Props = {
    onSubmit: (todo: TodoPayload) => void;
}

function Add({onSubmit}: Props) {
    const {payload, handleChange} = useForm<TodoPayload>({todo: ''});

    return (
        <Stack direction="row" alignItems='end' spacing={3}>
            <TextField type='text' name="todo" value={payload.todo} onChange={handleChange} label="Add new task"
                       variant='standard' size='small'
                       sx={{width: '70%'}}/>
            <Button variant='contained' size='small' sx={{width: '30%', textTransform: 'none'}}
                    onClick={() => onSubmit(payload)}>Add
                Todo</Button>
        </Stack>
    );
}

export default Add;