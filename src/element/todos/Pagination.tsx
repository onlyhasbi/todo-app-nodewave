import React from 'react';
import TablePagination from '@mui/material/TablePagination';
function Pagination() {
    return (
        <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={10}
            rowsPerPage={5}
            page={0}
            onPageChange={()=>{}}
            onRowsPerPageChange={()=>{}}
        />
    );
}

export default Pagination;