import React from 'react';
import Tables from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

type Props = {
  data?: any[];
  columns?: any[];
  totalPage: number;
  onPaginate: (page: number) => void;
};

function Table({
  data,
  columns,
  totalPage,
  onPaginate: handlePaginate,
}: Props) {
  const handleChange = (e: React.ChangeEvent<unknown>, page: number) => {
    handlePaginate(page);
  };

  return (
    <>
      <TableContainer>
        <Tables sx={{ minWidth: 650 }}>
          <TableHead sx={{ background: '#F9F9F9' }}>
            <TableRow>
              {columns?.map((column, index) => (
                <TableCell key={index}>{column.label}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {data?.map((row, rowIndex) => (
              <TableRow key={`${row.name}-${rowIndex}`}>
                {columns?.map((column, columnIndex) => (
                  <TableCell
                    component="th"
                    scope="row"
                    key={`${column}-${rowIndex}-${columnIndex}`}
                  >
                    {row[column.name]}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Tables>
      </TableContainer>
      <Stack alignItems="end" sx={{ width: '100%' }}>
        <Pagination
          count={totalPage}
          onChange={handleChange}
          color="primary"
          shape="rounded"
        />
      </Stack>
    </>
  );
}

export default Table;
