import React from 'react';
import Header from '@/components/common/header';

interface IProps {
  children: React.ReactNode;
}

function Layout({ children }: IProps) {
  return (
    <div>
      <Header />
      <main>{children}</main>
    </div>
  );
}

export default Layout;
