import React from 'react';
import Layout from '@/element/layout';
import {
  Card,
  Typography,
  Stack,
  CardContent,
  Grid,
  Button,
} from '@mui/material';
import AddTodo from '@/element/todo/Add';
import ListTodo from '@/element/todo/List';
import { ResponseTodo, Todo, TodoPayload } from '@/types/todo';
import { url } from '@/utils/config';
import axios, { del, get, post, put } from '@/services/axios';

function Add() {
  const [todos, setTodos] = React.useState<Todo[]>([]);
  const [deletedTodos, setDeletedTodos] = React.useState<Todo[]>([]);

  React.useEffect(() => {
    get({
      url: url.todos,
      params: {
        orderKey: 'createdAt',
        orderRule: 'asc',
      },
    })
      .then(({ data }) => {
        const formatData = data?.content?.entries?.map(
          (todo: ResponseTodo) => ({
            id: todo.id,
            item: todo.item,
            isDone: todo.isDone,
          })
        );
        setTodos(formatData);
      })
      .catch((e) => console.log(e));
  }, []);

  const handleAddTodo = ({ todo }: TodoPayload) => {
    if (todo.trim()) {
      post({ url: url.todos, data: { item: todo } })
        .then(({ data }) => {
          const {
            content: { id, item, isDone },
          } = data;
          const newTodos = [...todos, { id, item, isDone }];
          setTodos(newTodos);
        })
        .catch((e) => console.log(e));
    }
  };

  const handleIsDone = (todo: Todo) => {
    const newTodos = todos.slice();
    const index = newTodos.findIndex((item) => item.id === todo.id);
    newTodos[index].isDone = !newTodos[index].isDone;
    setTodos(newTodos);
    put({
      url: `${url.todos}/${todo.id}/mark`,
      data: { action: todo.isDone ? 'DONE' : 'UNDONE' },
    }).catch((e) => console.log(e));
  };

  const handleSelectedDelete = (todos: Todo[]) => setDeletedTodos(todos);

  const handleDelete = () => {
    if (!deletedTodos.length) return;
    const newTodos = todos
      .slice()
      .filter(
        (todo) => !deletedTodos.some((deleted) => todo.id === deleted.id)
      );
    setTodos(newTodos);
    axios.all(
      deletedTodos.map((todo) => del({ url: `${url.todos}/${todo.id}` }))
    );
  };

  return (
    <Grid container justifyContent="center">
      <Grid item>
        <Stack spacing={3} sx={{ width: 400, marginTop: 5 }}>
          <Typography
            variant="h4"
            component="h2"
            sx={{ fontWeight: 600, textAlign: 'center' }}
          >
            To Do
          </Typography>
          <Card>
            <CardContent>
              <AddTodo onSubmit={handleAddTodo} />
              <ListTodo
                todos={todos}
                onDone={handleIsDone}
                onDelete={handleSelectedDelete}
              />
              <Button
                variant="contained"
                color="error"
                sx={{ textTransform: 'none' }}
                onClick={handleDelete}
              >
                Deleted Selected
              </Button>
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
