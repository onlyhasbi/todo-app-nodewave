import React from 'react';
import Layout from "@/element/layout";
import {Card, Typography, Stack, CardContent, Grid, Button} from "@mui/material";
import AddTodo from '@/element/todo/Add'
import ListTodo from '@/element/todo/List'
import {Todo, TodoPayload} from "@/types/todo";

function Add() {
    const [todos,setTodos] = React.useState<Todo[]>([
        {id:'1',item:'Memasak',isDone:false},
        {id:'2',item:'Memancing',isDone:true},
        {id:'3',item:'Mencuci',isDone:false}
    ])
    const [deletedTodos,setDeletedTodos] = React.useState<Todo[]>([])
    const handleAddTodo = (todo: TodoPayload) => {
        console.log(todo)
    }

    const handleIsDone= (todo:Todo) => {
        const newTodos = todos.slice();
        const index = newTodos.findIndex(item=>item.id===todo.id);
        newTodos[index].isDone=!newTodos[index].isDone;
        setTodos(newTodos)
    }

    const handleSelectedDelete = (todos:Todo[]) => setDeletedTodos(todos)

    const handleDelete = () => {
        console.log(deletedTodos)
    }

    return (
        <Grid container justifyContent='center'>
            <Grid item>
                <Stack spacing={3} sx={{width: 400, marginTop: 5}}>
                    <Typography variant='h4' component='h2' sx={{fontWeight: 600, textAlign: 'center'}}>To
                        Do</Typography>
                    <Card>
                        <CardContent>
                            <AddTodo onSubmit={handleAddTodo}/>
                            <ListTodo todos={todos} onDone={handleIsDone} onDelete={handleSelectedDelete}/>
                            <Button variant='contained' size='small' color='error' onClick={handleDelete}>Deleted Selected</Button>
                        </CardContent>
                    </Card>
                </Stack>
            </Grid>
        </Grid>
    );
}

Add.getLayout = function getLayout(page: React.ReactElement) {
    return <Layout>{page}</Layout>;
};

export default Add;