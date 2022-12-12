import Container from '@mui/material/Container';
import { BodyWrap } from './style';

interface Props {
  children?: any;
  width?: number;
  className?: string;
}

const CustomBody = (props: Props) => {
  const { width, children, className = '' } = props;
  return (
    <BodyWrap width={width} className={`custom_body ${className}`}>
      <Container>{children}</Container>
    </BodyWrap>
  );
};

export default CustomBody;
