import { Container } from '@mui/material';
import { grey } from '@mui/material/colors';

const Navless = ({ children }) => {
  return (
    <Container
      data-testid='navless-layout'
      disableGutters
      sx={{
        display: 'flex',
        height: '100vh',
        maxWidth: '100vw !important',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: grey[100],
      }}
    >
      {children}
    </Container>
  );
};

export default Navless;
