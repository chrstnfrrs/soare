import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  height: 100vh;
  maxwidth: 100vw !important;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.background.primary};
  @media (min-width: 660px) {
    background-color: ${(props) => props.theme.colors.background.secondary};
  }
`;

const Navless = ({ children }) => (
  <Container data-testid='navless-layout'>{children}</Container>
);

export default Navless;
