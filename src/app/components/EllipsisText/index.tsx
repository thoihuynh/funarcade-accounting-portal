import Tooltip from '@mui/material/Tooltip';
import { Props, TextWrap } from './style';

const EllipsisText = (props: Props) => (
  <TextWrap className={props.className || ''} lineNumber={props.lineNumber}>
    <Tooltip title={props.text} placement="top" arrow>
      <span>{props.text}</span>
    </Tooltip>
  </TextWrap>
);

export default EllipsisText;
