import styled from 'styled-components';

const StyledA = styled.a`
  color: #e4f515;
`;

interface Props {
  href: string;
  children: any;
  openNewTab?: boolean;
}

export default function CommonA({ href, children, openNewTab }: Props) {
  return (
    <StyledA
      href={href}
      rel="noopener, noreferrer"
      target={openNewTab ? '_blank' : ''}
    >
      {children}
    </StyledA>
  );
}
