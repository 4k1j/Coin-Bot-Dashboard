import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRecoilState } from 'recoil';
import { sidebarOpen } from '@/store/common';
import { useCurrentUser } from '@/hooks/user';
import { styled } from '@mui/material/styles';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import {
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Avatar,
  Button,
  Tooltip,
  MenuItem,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { ICurrentUser } from '@/schema/user';

const pages = ['login', 'sign up'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

interface IAppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: prop => prop !== 'open',
})<IAppBarProps>(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${theme.sidebar.width}px)`,
    marginLeft: `${theme.sidebar.width}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

interface IUserIconProps {
  user: ICurrentUser;
}

function UserIcon({ user: { nickname = 'kwon', image } }: IUserIconProps) {
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const handleOpenUserMenu = (e: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(e.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <Box>
      <Tooltip title="Open settings">
        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
          <Avatar alt={nickname} src={image} sx={{ width: 36, height: 36 }} />
        </IconButton>
      </Tooltip>
      <Menu
        sx={{ mt: '45px' }}
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        keepMounted
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        {settings.map(setting => (
          <MenuItem key={setting}>
            <Typography textAlign="center">{setting}</Typography>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
}

function TabList() {
  return (
    <Box sx={{ display: 'flex' }}>
      {pages.map(page => (
        <Button key={page} sx={{ my: 1, color: 'white', display: 'block' }}>
          {page}
        </Button>
      ))}
    </Box>
  );
}

function Header() {
  const [open, setOpen] = useRecoilState<boolean>(sidebarOpen);

  const { data: user } = useCurrentUser();
  const loggedIn = !!user?.id;

  const handleSidebarOpen = () => {
    setOpen(true);
  };

  return (
    <AppBar position="fixed" open={open}>
      <Container maxWidth={false}>
        <Toolbar
          variant="dense"
          disableGutters
          sx={{ display: 'flex', justifyContent: 'space-between' }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <IconButton
              color="inherit"
              aria-label="open Sidebar"
              onClick={handleSidebarOpen}
              edge="start"
              sx={{ mr: 2, ...(open && { display: 'none' }) }}
            >
              <MenuIcon />
            </IconButton>
            <Link href={'/'} passHref>
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ mr: 2, display: 'flex', cursor: 'pointer' }}
              >
                <Image src="/favicon.ico" alt="logo" width={36} height={36} />
              </Typography>
            </Link>
          </Box>

          {loggedIn ? <UserIcon user={user} /> : <TabList />}
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
