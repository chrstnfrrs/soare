import styled from '@emotion/styled';
import {
  selectPaletteBorder,
  selectPaletteContrast,
  selectPaletteMain,
} from '../../../selectors/theme-selectors/palette-selectors';

const StyledButton = styled.button`
  cursor: pointer;
  max-width: 12rem;
  color: ${selectPaletteContrast};
  background: ${selectPaletteMain};
  padding: 1rem 4rem;
  font-weight: 700;
  text-transform: uppercase;
  border: ${selectPaletteBorder};
  border-radius: 0.125rem;
  letter-spacing: 0.1rem;
  filter: drop-shadow(0 0.25rem 0.25rem rgba(0, 0, 0, 0.125))
    drop-shadow(0.125rem 0 0.375rem rgba(0, 0, 0, 0.0875));
  &:hover {
    filter: drop-shadow(0 0.25rem 0.25rem rgba(0, 0, 0, 0.175))
      drop-shadow(0.125rem 0 0.375rem rgba(0, 0, 0, 0.125));
  }
`;

const Button = (props) => (
  <StyledButton
    as={props.href ? 'a' : undefined}
    type='button'
    tabIndex={0}
    {...props}
  />
);

export default Button;
