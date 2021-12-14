import React from 'react';
import Header from '@/components/common/header';
import Sidebar from '@/components/common/sidebar';
import Box from '@mui/material/Box';
import { sidebarOpen } from '@/store/common';
// import { styled } from '@mui/system';
import { styled, useTheme } from '@mui/material/styles';
import { useRecoilValue } from 'recoil';

interface IProps {
  children: React.ReactNode;
}

const Main = styled('main', { shouldForwardProp: prop => prop !== 'open' })<{
  open?: boolean;
}>(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${theme.sidebar.width}px`,
  marginTop: theme.header.height,
  ...(open && {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}));

function Layout({ children }: IProps) {
  const open = useRecoilValue<boolean>(sidebarOpen);

  return (
    <Box sx={{ display: 'flex' }}>
      <Header />
      <Sidebar />
      <Main open={open}>{children}</Main>
    </Box>
  );
}

export default Layout;
