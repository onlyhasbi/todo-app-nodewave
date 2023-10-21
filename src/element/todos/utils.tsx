import { ResponseTodo, TodosQuery } from '@/types/todo';
import { Chip } from '@mui/material';

type FilterType = {
  filters?: string;
  searchFilters?: string;
  page?: number;
  rows?: number;
  orderKey?: string;
  orderRule?: string;
};

export const formatResponse = (data: ResponseTodo[]) => {
  return data?.map((todo: ResponseTodo) => ({
    name: todo?.user?.fullName || todo?.id,
    item: todo.item,
    isDone: todo.isDone ? (
      <Chip label="Success" color="success" size="small" />
    ) : (
      <Chip label="Pending" color="error" size="small" />
    ),
  }));
};

export const createParams = (query: TodosQuery) => {
  let params: FilterType = { orderKey: 'createdAt', orderRule: 'asc' };

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

  if (query.page) {
    params = {
      ...params,
      page: query.page,
    };
  }

  if (query.rows) {
    params = {
      ...params,
      rows: query.rows,
    };
  }

  return params;
};
