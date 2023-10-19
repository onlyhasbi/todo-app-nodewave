import React from 'react';
import {Stack, FormControl, Input, InputAdornment, Button} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

function Search() {
    return <Stack direction='row' spacing={2}>
        <FormControl variant="standard" >
            <Input
                id="search"
                type='text'
                placeholder="Search"
                endAdornment={
                    <InputAdornment position="start">
                        <SearchIcon/>
                    </InputAdornment>
                }
            />
        </FormControl>
        <Button variant='contained' sx={{textTransform:'none',width:'30%'}}>Search</Button>
    </Stack>
}

export default Search;