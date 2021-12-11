import Head from 'next/head';
import styled from 'styled-components';
import Layout from '@/components/common/layout';

const H1 = styled.h1`
  color: red;
`;

const Container = styled.div`
  background-color: black;
  height: 100vh;
  width: 100vw;
`;

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Coin Bot</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <H1>Hello World!</H1>
      </Container>
    </Layout>
  );
}
