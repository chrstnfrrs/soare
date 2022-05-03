import styled from '@emotion/styled';

import selectColor from '../../../selectors/theme-selectors/color-selector';

type H1Props = {
  color?: string;
};

const H1 = styled.h1<H1Props>`
  color: ${selectColor};
  font-size: 3rem;
  font-weight: 400;
  padding-bottom: 1rem;
`;

export default H1;
