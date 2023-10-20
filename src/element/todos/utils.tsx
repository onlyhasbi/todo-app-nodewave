import { ResponseTodo, TodosQuery } from '@/types/todo';
import { getUser } from '@/utils/storage';
import { Chip } from '@mui/material';

export const formatResponse = (data: ResponseTodo[]) => {
  const user = getUser();

  return data?.map((todo: ResponseTodo) => ({
    name: user?.fullName,
    item: todo.item,
    isDone: todo.isDone ? (
      <Chip label="Success" color="success" size="small" />
    ) : (
      <Chip label="Pending" color="error" size="small" />
    ),
  }));
};

export const createParams = (query: TodosQuery) => {
  let params = {};
  if (query.search) {
    params = {
      ...params,
      searchFilters: `{"item":"${query.search}"}`,
    };
  }
  if (query.filter) {
    params = {
      ...params,
      filters: `{"isDone":${query.filter === 'success' ? true : false}}`,
    };
  }
  return params;
};
