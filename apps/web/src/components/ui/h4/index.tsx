import styled from '@emotion/styled';

import selectColor from '../../../selectors/theme-selectors/color-selector';

type H4Props = {
  color?: string;
};

const H4 = styled.h4<H4Props>`
  color: ${selectColor};
  font-size: 1.5rem;
  font-weight: 500;
`;

export default H4;
