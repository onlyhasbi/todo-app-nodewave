import React from 'react';
import Layout from '@/element/layout';
import { Card, Typography, Stack, CardContent, Chip } from '@mui/material';
import Table from '@/element/todos/Table';
import Search from '@/element/todos/Search';
import Filter from '@/element/todos/Filter';
import { get } from '@/services/axios';
import { url } from '@/utils/config';
import { ResponseTodo, Todo } from '@/types/todo';
import { getUser } from '@/utils/storage';

const columns = [
  { label: 'Name', name: 'name' },
  { label: 'Todo', name: 'item' },
  { label: 'Status', name: 'isDone' },
];

export default function Home() {
  const [todos, setTodos] = React.useState<Todo[]>([]);

  React.useEffect(() => {
    const user = getUser();
    get({ url: url.todos })
      .then(({ data }) => {
        const formatData = data?.content?.entries?.map(
          (todo: ResponseTodo) => ({
            name: user?.fullName,
            item: todo.item,
            isDone: todo.isDone ? (
              <Chip label="Success" color="success" size="small" />
            ) : (
              <Chip label="Pending" color="error" size="small" />
            ),
          })
        );
        setTodos(formatData);
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <Stack spacing={3}>
      <Typography variant="h4" component="h2" sx={{ fontWeight: 600 }}>
        To Do
      </Typography>
      <Card>
        <CardContent>
          <Stack spacing={2}>
            <Stack
              direction="row"
              alignItems="center"
              spacing={4}
              sx={{ width: '50%' }}
            >
              <Search />
              <Filter />
            </Stack>
            <Table data={todos} columns={columns} />
          </Stack>
        </CardContent>
      </Card>
    </Stack>
  );
}

Home.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>;
};
