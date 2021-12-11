import React from 'react';
import Header from '@/components/common/header';
import Container from '@mui/material/Container';
import { styled } from '@mui/system';

interface IProps {
  children: React.ReactNode;
}

const Main = styled('main')(({ theme }) => ({ marginTop: theme.header.height }));

function Layout({ children }: IProps) {
  return (
    <Container>
      <Header />
      <Main>{children}</Main>
    </Container>
  );
}

export default Layout;
