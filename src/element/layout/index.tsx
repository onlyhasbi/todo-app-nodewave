import React from 'react';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { useTheme } from '@mui/material/styles';
import AppBar from './AppBar';
import Drawer, { DrawerHeader } from './Sidebar';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Logout from '@mui/icons-material/Logout';
import Badge from '@mui/material/Badge';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import NotesIcon from '@mui/icons-material/Notes';
import { blue, blueGrey, grey } from '@mui/material/colors';
import { useRouter } from 'next/router';
import { getUser, isAuthenticated, logout } from '@/utils/storage';
import { Menu, MenuItem, Tooltip } from '@mui/material';
import { Profile } from '@/types/auth';
import Browser from '@/utils/browser';

type Props = {
  children: React.ReactNode;
};

const menus = [
  { icon: <HomeOutlinedIcon />, label: 'Todos', path: '/' },
  { icon: <NotesIcon />, label: 'Todo', path: '/add' },
];

function Layout({ children }: Props) {
  const theme = useTheme();
  const router = useRouter();
  const [open, setOpen] = React.useState(false);
  const [user, setUser] = React.useState<Profile|null>(null);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const openAccount = Boolean(anchorEl);

  const handleClickAccount = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseAccount = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    handleCloseAccount();
    logout();
    router.push('/signin');
  };

  const authenticated = isAuthenticated();

  React.useEffect(() => {
    const userProfile = getUser();
    if (userProfile) setUser(userProfile);
  }, []);

  React.useEffect(() => {
    if (!authenticated) {
      router.push('/signin');
    }
  }, [authenticated, router.push]);

  if (!authenticated) return null;

  return (
    <Browser>
      <Box sx={{ display: 'flex' }}>
        <AppBar
          position="fixed"
          open={open}
          style={{ color: '#3f3f3f', background: '#ffffff' }}
        >
          <Toolbar>
            <IconButton
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{
                marginRight: 5,
                ...(open && { display: 'none' }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <Stack
              direction="row"
              justifyContent="end"
              spacing={2}
              sx={{ width: '100%' }}
            >
              <Stack
                direction="row"
                alignItems="center"
                sx={{ cursor: 'pointer' }}
              >
                <Typography variant="body1" component="span">
                  {user?.fullName}
                </Typography>
                <Badge
                  color="success"
                  badgeContent=" "
                  variant="dot"
                  overlap="circular"
                  anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                >
                  <Tooltip title="Account settings">
                    <IconButton
                      onClick={handleClickAccount}
                      size="small"
                      sx={{ ml: 2 }}
                      aria-controls={openAccount ? 'account-menu' : undefined}
                      aria-haspopup="true"
                      aria-expanded={openAccount ? 'true' : undefined}
                    >
                      <Avatar alt="Remy Sharp" src="./assets/avatar.png" />
                    </IconButton>
                  </Tooltip>
                </Badge>
              </Stack>

              <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={openAccount}
                onClose={handleCloseAccount}
                onClick={handleCloseAccount}
                slotProps={{
                  paper: {
                    elevation: 0,
                    sx: {
                      overflow: 'visible',
                      filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                      mt: 1.5,
                      '& .MuiAvatar-root': {
                        width: 32,
                        height: 32,
                        ml: -0.5,
                        mr: 1,
                      },
                      '&:before': {
                        content: '""',
                        display: 'block',
                        position: 'absolute',
                        top: 0,
                        right: 14,
                        width: 10,
                        height: 10,
                        bgcolor: 'background.paper',
                        transform: 'translateY(-50%) rotate(45deg)',
                        zIndex: 0,
                      },
                    },
                  },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
              >
                <MenuItem onClick={handleLogout}>
                  <ListItemIcon>
                    <Logout fontSize="small" />
                  </ListItemIcon>
                  Logout
                </MenuItem>
              </Menu>
            </Stack>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open}>
          <DrawerHeader>
            <Typography variant="h6" component="h2">
              Nodewave
            </Typography>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === 'rtl' ? (
                <ChevronRightIcon />
              ) : (
                <ChevronLeftIcon />
              )}
            </IconButton>
          </DrawerHeader>
          <Divider />
          <List>
            <ListItem
              sx={{
                display: 'block',
              }}
            >
              {menus.map((menu) => (
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? 'initial' : 'center',
                    px: 2.5,
                  }}
                  onClick={() => router.push(menu.path)}
                  key={menu.path}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : 'auto',
                      justifyContent: 'center',
                      color:
                        router.pathname === menu.path
                          ? blue[600]
                          : blueGrey[400],
                    }}
                  >
                    {menu.icon}
                  </ListItemIcon>
                  <ListItemText
                    primary={menu.label}
                    sx={{ opacity: open ? 1 : 0 }}
                  />
                </ListItemButton>
              ))}
            </ListItem>
          </List>
        </Drawer>

        <Box
          component="main"
          sx={{ flexGrow: 1, p: 3, background: grey[100], minHeight: '100vh' }}
        >
          <DrawerHeader />
          {children}
        </Box>
      </Box>
      ¿
    </Browser>
  );
}

export default Layout;
