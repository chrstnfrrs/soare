import '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    colors: {
      palette: {
        primary: {
          main: string;
          contrastText: string;
          border?: string;
        };
      };
      text: {
        primary: string;
      };
      background: {
        primary: string;
        secondary: string;
      };
    };
  }
}
