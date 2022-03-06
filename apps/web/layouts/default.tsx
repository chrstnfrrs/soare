import { Container } from '@mui/material';

import Nav from '../components/ui/nav';

const DefaultLayout = ({ children }) => {
  return (
    <>
      <Nav />
      <Container
        disableGutters
        sx={{
          display: 'flex',
          flexDirection: 'column',
          height: 'calc(100vh - 4rem)',
          p: 4,
        }}
      >
        {children}
      </Container>
    </>
  );
};

export default DefaultLayout;
