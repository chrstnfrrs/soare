import styled from '@emotion/styled';

import selectBackground from '../../../selectors/theme-selectors/background-selector';

type CardProps = {
  background?: string;
};

const Card = styled.div<CardProps>`
  background: ${selectBackground};
  display: flex;
  flex: 1;
  flex-direction: column;
  border-radius: 0.5rem;
  @media (min-width: 660px) {
    filter: drop-shadow(0 0.25rem 0.25rem rgba(0, 0, 0, 0.175))
      drop-shadow(0.125rem 0 0.375rem rgba(0, 0, 0, 0.125));
  }
`;

export default Card;
