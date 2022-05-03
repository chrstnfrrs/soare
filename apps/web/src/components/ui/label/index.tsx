import styled from '@emotion/styled';
import selectColor from '../../../selectors/theme-selectors/color-selector';

const Label = styled.label`
  color: ${selectColor};
  font-size: 0.75rem;
  padding-bottom: 0.25rem;
`;

export default Label;
