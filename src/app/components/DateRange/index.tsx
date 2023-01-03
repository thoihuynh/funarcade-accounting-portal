import { useState } from 'react';
import { Wrapper } from './style';
import moment from 'moment';

interface IProps {
  clickTypeDate: (value: string) => void;
}

const DateRange = (props: IProps) => {
  const { clickTypeDate } = props;
  const [typeDate, setTypeDate] = useState('current');

  const handleOnClickTypeDate = (type: string) => {
    setTypeDate(type);
    clickTypeDate(type);
  };

  return (
    <Wrapper>
      <button
        className={`date-btn ${typeDate === 'pre' ? 'active' : ''}`}
        onClick={() => handleOnClickTypeDate('pre')}
      >
        {moment().subtract(1, 'months').startOf('month').format('MMMM YYYY')}
      </button>
      <button
        className={`date-btn ${typeDate === 'current' ? 'active' : ''}`}
        onClick={() => handleOnClickTypeDate('current')}
      >
        {moment().format('MMMM YYYY')}
      </button>
    </Wrapper>
  );
};

export default DateRange;
