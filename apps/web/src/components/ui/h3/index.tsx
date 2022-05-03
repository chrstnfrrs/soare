import styled from '@emotion/styled';

import selectColor from '../../../selectors/theme-selectors/color-selector';

type H3Props = {
  color?: string;
};

const H3 = styled.h3<H3Props>`
  color: ${selectColor};
  font-size: 2rem;
  font-weight: 600;
`;

export default H3;
