import styled from '@emotion/styled';

import Nav from '../components/ui/nav';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 4rem);
  maxwidth: 100vw !important;
  padding: 2rem;
  background-color: ${(props) => props.theme.colors.background.primary};
`;

const DefaultLayout = ({ children }) => {
  return (
    <>
      <Nav />
      <Container>{children}</Container>
    </>
  );
};

export default DefaultLayout;
