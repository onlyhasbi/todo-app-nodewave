import React from 'react';
import {MenuItem, FormControl, Select, Box} from '@mui/material'

function Filter() {
    return (
        <FormControl variant="standard" size='small' placeholder='Filter by Status' sx={{width: '40%'}}>
            <Select
                displayEmpty
                id="filter-select"
                value=''
                label="Age"
                renderValue={(selected) => {
                    if (!selected) {
                        return <Box sx={{color:'grey',fontSize:'.97rem'}}>Placeholder</Box>;
                    }
                    return selected;
                }}
            >
                <MenuItem disabled value="">Placeholder</MenuItem>
                <MenuItem value='success'>Success</MenuItem>
                <MenuItem value='pending'>Pending</MenuItem>
            </Select>
        </FormControl>
    );
}

export default Filter;