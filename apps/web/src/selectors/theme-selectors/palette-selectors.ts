import { Theme } from '@emotion/react';

type SelectPalette = (props: {
  theme: Theme;
  color?: string;
  contrastText?: string;
  border?: string;
}) => string;

const selectPaletteMain: SelectPalette = (props) => {
  if (!props.color) {
    return props.theme.colors.palette.primary.main;
  }

  return props.theme.colors.palette[props.color].main ?? props.color;
};

const selectPaletteContrast: SelectPalette = (props) => {
  if (!props.color && !props.contrastText) {
    return props.theme.colors.palette.primary.contrastText;
  }

  return (
    props.theme.colors.palette[props.color]?.contrastText ?? props.contrastText
  );
};

const selectPaletteBorder: SelectPalette = (props) => {
  if (!props.border && !props.color) {
    return props.theme.colors.palette.primary.border || 'none';
  }

  if (props.theme.colors.palette[props.color]?.border) {
    return props.theme.colors.palette[props.color].border;
  }

  if (props.border) {
    return props.border;
  }

  return 'none';
};

export { selectPaletteMain, selectPaletteContrast, selectPaletteBorder };
