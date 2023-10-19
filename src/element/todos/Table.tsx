import React from 'react';
import Tables from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Pagination from "@/element/todos/Pagination";

type Props = {
    data?: any[],
    columns?: any[]
}

function Table({data, columns}: Props) {
    return (
        <>
            <TableContainer>
                <Tables sx={{minWidth: 650}} aria-label="simple table">
                    <TableHead sx={{background: '#F9F9F9'}}>
                        <TableRow>
                            {columns?.map((column, index) => <TableCell key={index}>{column.label}</TableCell>)}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data?.map((row, rowIndex) => (
                            <TableRow
                                key={`${row.name}-${rowIndex}`}
                                sx={{'&:last-child td, &:last-child th': {border: 0}}}
                            >
                                {columns?.map((column, columnIndex) => (
                                    <TableCell component="th" scope="row" key={`${column}-${rowIndex}-${columnIndex}`}>
                                        {row[column.name]}
                                    </TableCell>
                                ))}
                            </TableRow>
                        ))}

                    </TableBody>
                </Tables>
            </TableContainer>
            <Pagination />
        </>
    );
}

export default Table;

