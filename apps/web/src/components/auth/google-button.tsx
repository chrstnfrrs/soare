import { Button } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Image from 'next/image';

const GoogleButton = ({ children, ...props }) => {
  const theme = useTheme();

  return (
    <Button
      data-testid='register-button'
      variant='contained'
      sx={{
        background: '#fff !important',
        color: `${theme.palette.text.primary} !important`,
        justifyContent: 'flex-start',
        width: '100%',
        padding: 0,
        gap: 2,
      }}
      {...props}
    >
      <Image
        src='/btn_google_light_normal_ios.svg'
        layout='fixed'
        height={40}
        width={40}
      />
      {children}
    </Button>
  );
};

export { GoogleButton };
