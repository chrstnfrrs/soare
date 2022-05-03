import styled from "@emotion/styled";

import selectColor from "../../../selectors/theme-selectors/color-selector";

type H5Props = {
    color?: string
}

const H5 = styled.h5<H5Props>`
  color: ${selectColor};
  font-size: 1.25rem;
  font-weight: 500;
  padding-bottom: 0.5rem;
`;

export default H5
