import styled from '@emotion/styled';

const Row = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
`;

const StyledDivider = styled.div`
  width: 100%;
  height: 1px !important;
  background: #101010;
`;

const Divider = () => (
  <Row>
    <StyledDivider />
  </Row>
);

export default Divider;
