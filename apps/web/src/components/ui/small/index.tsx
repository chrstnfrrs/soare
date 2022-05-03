import styled from "@emotion/styled";
import selectColor from "../../../selectors/theme-selectors/color-selector";

const SmallText = styled.p`
  color: ${selectColor};
  font-size: 0.875rem;
  margin: 0;
`;

export default SmallText
