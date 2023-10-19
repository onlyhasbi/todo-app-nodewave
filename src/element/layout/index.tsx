import React from 'react';
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import {useTheme} from "@mui/material/styles";
import AppBar from "./AppBar";
import Drawer, {DrawerHeader} from "./Sidebar";
import Box from "@mui/material/Box";
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Badge from '@mui/material/Badge';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';


type Props = {
    children: React.ReactNode
}

function Layout({children}: Props) {
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <Box sx={{display: 'flex'}}>
            <AppBar position="fixed" open={open} style={{color: '#3f3f3f', background: '#ffffff'}}>
                <Toolbar>
                    <IconButton
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={{
                            marginRight: 5,
                            ...(open && {display: 'none'}),
                        }}
                    >
                        <MenuIcon/>
                    </IconButton>
                    <Stack direction="row" justifyContent='end' spacing={2} sx={{width: '100%'}}>
                        <Stack direction="row" alignItems='center' spacing={2} sx={{cursor: 'pointer'}}>
                            <Typography variant="body1" component="span">Admin</Typography>
                            <Badge color="success" badgeContent=" " variant='dot' overlap="circular"
                                   anchorOrigin={{vertical: 'bottom', horizontal: 'right'}}>
                                <Avatar alt="Remy Sharp" src="./assets/avatar.png"/>
                            </Badge>
                        </Stack>
                    </Stack>
                </Toolbar>
            </AppBar>
            <Drawer variant="permanent" open={open}>
                <DrawerHeader>
                    <Typography variant="h6" component='h2'>Nodewave</Typography>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'rtl' ? <ChevronRightIcon/> : <ChevronLeftIcon/>}
                    </IconButton>
                </DrawerHeader>
                <Divider/>
                <List>
                    <ListItem sx={{
                        display: 'block',
                    }}>
                        <ListItemButton
                            sx={{
                                minHeight: 48,
                                justifyContent: open ? 'initial' : 'center',
                                px: 2.5,
                            }}
                        >
                            <ListItemIcon
                                sx={{
                                    minWidth: 0,
                                    mr: open ? 3 : 'auto',
                                    justifyContent: 'center',
                                }}
                            >
                                <HomeOutlinedIcon/>
                            </ListItemIcon>
                            <ListItemText primary='To Do' sx={{opacity: open ? 1 : 0}}/>
                        </ListItemButton>
                    </ListItem>
                </List>
            </Drawer>

            <Box component="main" sx={{flexGrow: 1, p: 3}}>
                <DrawerHeader/>
                {children}
            </Box>
        </Box>
    );
}

export default Layout;