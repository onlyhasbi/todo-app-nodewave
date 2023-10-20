import React from 'react';
import Layout from '@/element/layout';
import Filter from '@/element/todos/Filter';
import Search from '@/element/todos/Search';
import Table from '@/element/todos/Table';
import useFetch from '@/hooks/useFetch';
import { formatResponse, createParams } from '@/element/todos/utils';
import { ResponseTodo, TodosQuery } from '@/types/todo';
import { url } from '@/utils/config';
import { Card, CardContent, Stack, Typography } from '@mui/material';

const columns = [
  { label: 'Name', name: 'name' },
  { label: 'Todo', name: 'item' },
  { label: 'Status', name: 'isDone' },
];

export default function Home() {
  const [todosQuery, setTodosQuery] = React.useState<TodosQuery>(
    {} as TodosQuery
  );

  const { data } = useFetch<ResponseTodo>(
    url.todos,
    {
      params: createParams(todosQuery),
    },
    [todosQuery]
  );

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
              <Search
                onSearch={(search) =>
                  setTodosQuery((prev) => ({ ...prev, search }))
                }
              />
              <Filter
                onFilter={(filter) =>
                  setTodosQuery((prev) => ({ ...prev, filter }))
                }
              />
            </Stack>
            <Table data={formatResponse(data)} columns={columns} />
          </Stack>
        </CardContent>
      </Card>
    </Stack>
  );
}

Home.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>;
};
