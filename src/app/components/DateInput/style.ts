import styled from 'styled-components';
import CommonField from '../common/CommonField';

export const Wrapper = styled(CommonField)`
  width: 220px;

  input {
    &::-webkit-calendar-picker-indicator {
      cursor: pointer;
      filter: invert(1);
    }
  }
`;
