import { AppBar, Toolbar } from '@mui/material';

import AuthPrompt from '../auth/auth-prompt';

const ANav = () => (
  <AppBar color='transparent' position='relative'>
    <Toolbar component='nav' sx={{ justifyContent: 'flex-end' }}>
      <AuthPrompt />
    </Toolbar>
  </AppBar>
);

export default ANav;
