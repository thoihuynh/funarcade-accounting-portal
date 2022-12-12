import { CircularProgress } from '@mui/material';
import { Wrapper } from './style';

const LoadingIndicator = () => (
  <Wrapper>
    <CircularProgress />
  </Wrapper>
);

export default LoadingIndicator;
