import styled from 'styled-components';
import { FONT_WEIGHT_STYLES } from 'styles/variables';

export const Wrapper = styled.div`
  label {
    margin-bottom: 0;
  }
  .MuiFormControlLabel-label {
    font-weight: ${FONT_WEIGHT_STYLES.BOLD};
    font-size: 14px;
  }
`;
