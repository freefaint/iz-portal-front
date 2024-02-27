import { useState, MouseEvent, PropsWithChildren } from 'react';
import { Link } from 'react-router-dom';

import {
  AccountTree,
  BarChart,
  Functions,
  Group,
  Help,
  Home,
  Info,
  InfoOutlined,
  LibraryBooks,
  RocketLaunch,
  StackedLineChart,
  TipsAndUpdates,
} from '@mui/icons-material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Collapse from '@mui/material/Collapse';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import MuiDrawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { styled, useTheme, Theme, CSSObject } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';

import AvatarSrc from '../assets/img/avatar.jpg';
import LogoSrc from '../assets/img/logo.png';

const drawerWidth = 240;

const settings = ['Профиль', 'Выход'];

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  ...(open && {
    ...openedMixin(theme),
    '& .MuiDrawer-paper': openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    '& .MuiDrawer-paper': closedMixin(theme),
  }),
}));

export default function MiniDrawer({ children }: PropsWithChildren) {
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />

      <AppBar position="fixed" color="default" open={open}>
        <Toolbar>
          <Collapse in={!open} orientation="horizontal">
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{
                marginRight: 2,
                // ...(open && { display: 'none' }),
              }}
            >
              <MenuIcon />
            </IconButton>
          </Collapse>

          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              // display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            <img style={{ height: '3rem' }} alt="" src={LogoSrc} />
          </Typography>

          {/* <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MoreVertIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button key={page} onClick={handleCloseNavMenu} sx={{ my: 2, display: 'block', margin: '-0.25rem 0' }}>
                {page}
              </Button>
            ))}
          </Box> */}

          <Box sx={{ flexGrow: 1, display: 'flex' }}></Box>

          <Box sx={{ flexGrow: 0, display: 'flex', gap: '1rem' }}>
            <Tooltip title="ЦУП">
              <Link target="_blank" to="http://cup/">
                <IconButton onClick={handleCloseNavMenu}>
                  <RocketLaunch />
                </IconButton>
              </Link>
            </Tooltip>

            <Tooltip title="Project">
              <Link target="_blank" to="https://project.infosec.ru/PWA">
                <IconButton onClick={handleCloseNavMenu}>
                  <AccountTree />
                </IconButton>
              </Link>
            </Tooltip>

            <Tooltip title="Reports">
              <Link target="_blank" to="https://reports.infosec.ru/">
                <IconButton onClick={handleCloseNavMenu}>
                  <BarChart />
                </IconButton>
              </Link>
            </Tooltip>

            <Tooltip title="Wiki">
              <Link target="_blank" to="https://wiki.infosec.ru/">
                <IconButton onClick={handleCloseNavMenu}>
                  <Functions style={{ rotate: '-90deg' }} />
                </IconButton>
              </Link>
            </Tooltip>

            <Tooltip title="EXT Sharepoint">
              <Link target="_blank" to="https://documents.infosec.ru/">
                <IconButton onClick={handleCloseNavMenu}>
                  <LibraryBooks />
                </IconButton>
              </Link>
            </Tooltip>

            <Tooltip title="CRM">
              <Link target="_blank" to="http://srv-dcrm2011/Infosec/main.aspx">
                <IconButton onClick={handleCloseNavMenu}>
                  <StackedLineChart />
                </IconButton>
              </Link>
            </Tooltip>

            <Tooltip title="Интерес клиента">
              <Link
                target="_blank"
                to="http://srv-dcrm2011/Infosec/main.aspx?etc=10074&extraqs=%3fetc%3d10074%26pagemode%3diframe%26preloadcache%3d1377000867412&pagetype=entityrecord"
              >
                <IconButton onClick={handleCloseNavMenu}>
                  <TipsAndUpdates />
                </IconButton>
              </Link>
            </Tooltip>

            <Tooltip title="Info">
              <Link target="_blank" to="http://info/">
                <IconButton onClick={handleCloseNavMenu}>
                  <Info />
                </IconButton>
              </Link>
            </Tooltip>

            <Tooltip title="Help">
              <Link target="_blank" to="http://help/">
                <IconButton onClick={handleCloseNavMenu}>
                  <Help />
                </IconButton>
              </Link>
            </Tooltip>

            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src={AvatarSrc} />
              </IconButton>
            </Tooltip>

            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>

        <Divider />

        <List>
          <ListItem disablePadding sx={{ display: 'block' }}>
            <NeutralLink to="/">
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
                  <Home />
                </ListItemIcon>

                <ListItemText primary={'Главная'} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </NeutralLink>

            <NeutralLink to="//employee">
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
                  <Group />
                </ListItemIcon>

                <ListItemText primary={'Сотрудники'} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </NeutralLink>
          </ListItem>
        </List>

        <Divider />

        <List>
          <ListItem disablePadding sx={{ display: 'block' }}>
            <NeutralLink to="/about">
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
                  <InfoOutlined />
                </ListItemIcon>

                <ListItemText primary={'О компании'} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </NeutralLink>
          </ListItem>
        </List>
      </Drawer>

      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />

        {children}
      </Box>
    </Box>
  );
}

const NeutralLink = styled(Link)`
  color: inherit;
  text-decoration: none;
`;
