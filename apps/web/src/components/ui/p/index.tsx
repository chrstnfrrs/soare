import styled from '@emotion/styled';
import selectColor from '../../../selectors/theme-selectors/color-selector';

const P = styled.p`
  color: ${selectColor};
  font-size: 1rem;
  margin: 0;
`;

export default P;
