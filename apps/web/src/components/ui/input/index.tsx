import styled from '@emotion/styled';
import selectColor from '../../../selectors/theme-selectors/color-selector';

const Input = styled.input`
  width: 100%;
  color: ${selectColor};
  font-size: 0.875rem;
  padding: 0.75rem 0.5rem;
  border: 1px ${selectColor} solid;
  border-radius: 0.125rem;
`;

export default Input;
