import styled from '@emotion/styled';
import Layout from '@/components/common/layout';

const H1 = styled.h1`
  color: red;
  margin: 0;
`;

const Container = styled.div`
  background-color: black;
  height: 100vh;
  width: 100vw;
`;

export default function Home() {
  return (
    <Layout>
      <Container>
        <H1>Hello World!</H1>
      </Container>
    </Layout>
  );
}
