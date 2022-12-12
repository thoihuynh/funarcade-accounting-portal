import { debounce } from '@mui/material';
import useAnimateNumber from 'app/hooks/useAnimateNumber';
import { useCallback, useState } from 'react';
import { useEffect } from 'react';
import { animatedNumberOptions } from 'utils/constants';
import { formatAmount } from 'utils/utilFunction';

interface Props {
  value: number;
}

const AnimatedNumber = (props: Props) => {
  const { value } = props;
  const [debounceValue, setDebounceValue] = useState(0);
  const [number] = useAnimateNumber(debounceValue, animatedNumberOptions);

  useEffect(() => {
    if (value >= 0) {
      debounceNumber(value);
    }
  }, [value]);

  const debounceNumber = useCallback(
    debounce((val: number) => setDebounceValue(val), 100),
    [],
  );

  return <>{formatAmount(number)}</>;
};

export default AnimatedNumber;
