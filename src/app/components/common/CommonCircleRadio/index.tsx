import { Radio } from '@mui/material';
import CheckedRadio from 'app/components/icons/CheckedRadio';
import UncheckedRadio from 'app/components/icons/UncheckedRadio';
import CommonFormLabel from '../CommonFormLabel';
import { Wrapper } from './style';

interface Props {
  text?: any;
  value: string;
}

const CommonCircleRadio = (props: Props) => {
  const { text, value } = props;
  return (
    <Wrapper>
      <CommonFormLabel
        value={value}
        control={
          <Radio
            icon={<UncheckedRadio />}
            checkedIcon={<CheckedRadio />}
            disableRipple
          />
        }
        label={text}
      />
    </Wrapper>
  );
};

export default CommonCircleRadio;
