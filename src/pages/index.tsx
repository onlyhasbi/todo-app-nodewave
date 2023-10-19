import React from 'react'
import Layout from "@/element/layout";
import {Card, Typography, Stack, Button, CardContent, Chip} from "@mui/material";
import Table from "@/element/todo/Table";
import Search from "@/element/todo/Search";
import Filter from "@/element/todo/Filter";

const columns = [
    {label: "Name", name: 'name'},
    {label: "Todo", name: 'todo'},
    {label: "Status", name: 'status'}
];

const data = [
    {name: 'Abdullah', todo: 'Bismillah', status: <Chip label="Success" color="success" size='small'/>},
    {name: 'Abdullah', todo: 'Alhamdulillah', status: <Chip label="Pending" color="error" size='small'/>},
    {name: 'Abdullah', todo: 'Allahu Akbar', status: <Chip label="Success" color="success" size='small'/>}
];

export default function Home() {
    return (
        <Stack spacing={3}>
            <Typography variant='h4' component='h2' sx={{fontWeight: 600}}>To Do</Typography>
            <Card>
                <CardContent>
                    <Stack spacing={2}>
                        <Stack direction='row' alignItems='center' spacing={4} sx={{width:'50%'}}>
                            <Search/>
                            <Filter/>
                        </Stack>
                        <Table data={data} columns={columns}/>
                    </Stack>
                </CardContent>
            </Card>
        </Stack>
    )
}

Home.getLayout = function getLayout(page: React.ReactElement) {
    return <Layout>{page}</Layout>;
};

