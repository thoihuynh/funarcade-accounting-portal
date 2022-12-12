import styled from 'styled-components';

interface CssProps {
  $borderColor: string;
  $space: number;
}

export const Wrapper = styled.div<CssProps>`
  overflow: hidden;
  text-align: center;
  margin: ${props => props.$space}px 0;
  font-weight: var(--font-weight-medium);
  :after {
    background-color: ${props => props.$borderColor};
    content: '';
    display: inline-block;
    height: 2px;
    position: relative;
    vertical-align: middle;
    width: 100%;
  }

  :after {
    left: 1em;
    margin-right: -6rem;
  }
`;
