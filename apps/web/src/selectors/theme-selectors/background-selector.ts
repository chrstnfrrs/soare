import { Theme } from '@emotion/react';

type SelectBackground = (props: {
  theme: Theme;
  background?: string;
}) => string;

const selectBackground: SelectBackground = (props) => {
  if (!props.background) {
    return props.theme.colors.background.primary;
  }

  return props.theme.colors.background[props.background] ?? props.background;
};

export default selectBackground;
